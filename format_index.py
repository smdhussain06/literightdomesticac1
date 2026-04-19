import re

file_path = '/home/smdhussain/Desktop/Everything/litelabs/literightdomesticac1/index.html'
with open(file_path, 'r') as f:
    content = f.read()

# Make sure we don't double append
def replacer(match):
    header_html = match.group(1)
    
    # Extract info from header
    unit_tag_match = re.search(r'<span class="unit-tag[^>]*>(.*?)</span>', header_html)
    title_match = re.search(r'<h1>🎬\s*(.*?)</h1>', header_html)
    duration_match = re.search(r'>Duration:\s*(.*?)\s*·', header_html)
    if not duration_match:
        duration_match = re.search(r'>Duration:\s*(.*?)<', header_html)
    
    tag = unit_tag_match.group(1).split('·')[1].strip() if unit_tag_match and '·' in unit_tag_match.group(1) else "VIDEO"
    title = title_match.group(1).strip() if title_match else "Video Title"
    duration = duration_match.group(1).strip() if duration_match else ""
    
    video_wrapper = f'''
  <div class="video-wrapper">
    <div class="video-container">
      <div class="video-placeholder">
        <div class="play-icon">▶</div>
        <div class="video-info">
          <h3><span>{tag}</span> {title}</h3>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  </div>'''
    
    # We replace it with unit-header + video-wrapper.
    return header_html + video_wrapper

pattern = r'(<div class="section" id="s\d{2}">\s*<div class="unit-header">.*?</div>)'

# Only substitute if <div class="video-wrapper"> is not present in the HTML tags
if '<div class="video-wrapper">' not in content:
    content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
with open(file_path, 'w') as f:
    f.write(content)

print("Done inserting video frames.")
