import re

file_path = '/home/smdhussain/Desktop/Everything/litelabs/literightdomesticac1/index.html'
with open(file_path, 'r') as f:
    content = f.read()

pattern = r'(<div class="section" id="s\d{2}">\s*<div class="unit-header">.*?</div>)'
matches = re.findall(pattern, content, flags=re.DOTALL)
print(f"Number of matches: {len(matches)}")
