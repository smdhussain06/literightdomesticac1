import fitz  # PyMuPDF
import json
import os
import shutil
import random
try:
    from base64_assets import LOGO_B64, PROVIDER_B64
except ImportError:
    LOGO_B64 = ""
    PROVIDER_B64 = ""

# --- Configuration ---
SOURCE_DIR = "/home/smdhussain/Desktop/Everything/litelabs/DOMESTIKA"
TARGET_BASE_DIR = "/home/smdhussain/Desktop/Everything/litelabs/literightdomesticac1/c1/resources"

REPLACEMENTS = {
    "Ana Flores": "Litelab Designer",
    "Mónica Vega": "Litelab Lead Instructor",
    "Monica Vega": "Litelab Lead Instructor",
    "Domestika": "Litelab Academy",
    "Assignment": "Course Module",
    "assignment": "module",
    "freelancer": "design professional",
    "Freelancer": "Design Professional"
}

# Pool of premium architectural and instructor images
INSTRUCTOR_PORTRAITS = [
    "/home/smdhussain/Desktop/Everything/litelabs/course_provider.png",
    "/home/smdhussain/Desktop/Everything/litelabs/instructor_portrait_1.png",
    "/home/smdhussain/Desktop/Everything/litelabs/instructor_portrait_2.png"
]

FALLBACK_ASSETS = [
    "/home/smdhussain/Desktop/Everything/litelabs/architectural_lighting_concept_1.png",
    "/home/smdhussain/Desktop/Everything/litelabs/architectural_lighting_concept_2.png",
    "/home/smdhussain/Desktop/Everything/litelabs/architectural_lighting_concept_3.png"
]

# --- Master CSS (Exact templete.pdf UI) ---
MASTER_CSS = f"""
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&family=Chakra+Petch:wght@300;500;700&display=swap');

:root {{
    --text-color: #111111;
    --muted: #888888;
    --accent: #000000;
    --divider: #eeeeee;
}}

* {{ margin: 0; padding: 0; box-sizing: border-box; }}

body {{
    background-color: #ffffff;
    color: var(--text-color);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}}

.slide {{
    width: 100vw;
    height: 56.25vw;
    max-height: 100vh;
    max-width: 177.78vh;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 8vh 10vh;
    position: relative;
    page-break-after: always;
    display: flex;
    flex-direction: column;
}}

.slide-header {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2vh;
}}

.academy-info {{
    font-family: 'Chakra Petch', sans-serif;
    line-height: 1.2;
}}

.series-name {{
    font-size: 1.8vh;
    font-weight: 700;
    letter-spacing: 0.3vh;
}}

.unit-code {{
    font-size: 1.4vh;
    color: var(--muted);
    letter-spacing: 0.2vh;
}}

.logo-container img {{
    height: 3vh;
    filter: brightness(0);
}}

.header-divider {{
    border: none;
    border-top: 1px solid var(--divider);
    margin-bottom: 5vh;
}}

.slide-main {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10vh;
    flex: 1;
    align-items: center;
}}

.slide-text h2 {{
    font-size: 5vh;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 3vh;
    letter-spacing: -0.1vh;
}}

.slide-text p {{
    font-size: 2.2vh;
    color: #444444;
    line-height: 1.6;
    font-weight: 300;
}}

.slide-image {{
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background: #fdfdfd;
}}

.slide-image img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
}}

.slide-footer {{
    position: absolute;
    bottom: 5vh;
    left: 10vh;
    right: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--divider);
    padding-top: 2vh;
}}

.footer-legal {{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.2vh;
    color: var(--muted);
    letter-spacing: 0.1vh;
}}

.slide-number {{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.4vh;
    font-weight: 700;
}}

@media print {{
    @page {{ size: 16in 9in; margin: 0 !important; }}
    .slide {{ width: 16in !important; height: 9in !important; padding: 80px 100px !important; }}
}}
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Litelab | {unit_title}</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    {slides_html}
</body>
</html>"""

# Template-Exact UI Structure
SLIDE_TEMPLATE = f"""
    <section class="slide">
        <div class="slide-header">
            <div class="academy-info">
                <span class="series-name">LITELAB ACADEMY</span><br>
                <span class="unit-code">MODULE // {{unit_code}}</span>
            </div>
            <div class="logo-container">
                <img src="{LOGO_B64}" alt="Litelab">
            </div>
        </div>
        <hr class="header-divider">
        <div class="slide-main">
            <div class="slide-text">
                <h2>{{heading}}</h2>
                <p>{{text}}</p>
            </div>
            <div class="slide-image">
                <img src="assets/{{image}}" alt="Instructional Visual">
            </div>
        </div>
        <div class="slide-footer">
            <div class="footer-legal">LITELAB — ARCHITECTURAL LIGHTING SOLUTIONS</div>
            <div class="slide-number">{{num}} / {{total}}</div>
        </div>
    </section>"""

def clean_text(text):
    for old, new in REPLACEMENTS.items():
        text = text.replace(old, new)
    return text.strip()

def process_unit(unit_path, unit_code):
    print(f"Processing {unit_code}...")
    pdf_file = None
    for f in os.listdir(unit_path):
        if f.endswith("_EN.pdf"):
            pdf_file = os.path.join(unit_path, f)
            break
    if not pdf_file: return

    out_dir = os.path.join(TARGET_BASE_DIR, unit_code)
    os.makedirs(out_dir, exist_ok=True)
    assets_out = os.path.join(out_dir, "assets")
    os.makedirs(assets_out, exist_ok=True)

    doc = fitz.open(pdf_file)
    slides_data = []
    for i in range(len(doc)):
        page = doc.load_page(i)
        text = clean_text(page.get_text())
        
        # Human/Monica Detection: If image contains humans or is a portrait
        is_human_slide = "Mónica" in text or "Monica" in text or "Ana" in text or "Profile" in text
        
        image_list = page.get_images(full=True)
        valid_images = []
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            if base_image["width"] < 400 or base_image["height"] < 400: continue
            
            img_name = f"p{i+1}_{img_index}.{base_image['ext']}"
            
            # If Monica or Human detected, replace with Respectful Instructor Portrait
            if is_human_slide or (base_image["width"] < 1000 and base_image["height"] > base_image["width"]):
                shutil.copy(random.choice(INSTRUCTOR_PORTRAITS), os.path.join(assets_out, img_name))
            else:
                with open(os.path.join(assets_out, img_name), "wb") as f:
                    f.write(base_image["image"])
            
            valid_images.append(img_name)
        
        slides_data.append({"text": text, "images": valid_images})

    slides_html = ""
    total = len(slides_data)
    for i, slide in enumerate(slides_data):
        num = i + 1
        text_content = clean_text(slide['text']).replace('\n', '<br>')
        img = slide["images"][0] if slide["images"] else f"fallback_{i}.jpg"
        
        if not slide["images"]:
            shutil.copy(random.choice(FALLBACK_ASSETS), os.path.join(assets_out, img))
            
        lines = [l for l in text_content.split("<br>") if len(l) > 3]
        heading = lines[0][:40] if lines else unit_code
        slides_html += SLIDE_TEMPLATE.format(unit_code=unit_code, heading=heading, text=text_content, num=num, total=total, image=img)

    with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(HTML_TEMPLATE.format(unit_title=unit_code, slides_html=slides_html))

def main():
    os.makedirs(TARGET_BASE_DIR, exist_ok=True)
    with open(os.path.join(TARGET_BASE_DIR, "style.css"), "w") as f:
        f.write(MASTER_CSS)
    for d in os.listdir(SOURCE_DIR):
        unit_path = os.path.join(SOURCE_DIR, d)
        if os.path.isdir(unit_path) and not d.startswith(".") and d != "presentation":
            unit_code = d.split("_")[0] if "_" in d else d
            process_unit(unit_path, unit_code)

if __name__ == "__main__":
    main()
