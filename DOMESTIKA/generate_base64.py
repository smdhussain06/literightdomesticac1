import base64
import os

def get_base64(path):
    if not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()

logo_path = "/home/smdhussain/Desktop/Everything/litelabs/literightdomesticac1/c1/resources/common_assets/logo.png"
provider_path = "/home/smdhussain/Desktop/Everything/litelabs/course_provider.png"

with open("base64_assets.py", "w") as f:
    f.write(f'LOGO_B64 = "data:image/png;base64,{get_base64(logo_path)}"\n')
    f.write(f'PROVIDER_B64 = "data:image/png;base64,{get_base64(provider_path)}"\n')
