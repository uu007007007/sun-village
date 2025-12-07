#!/usr/bin/env python3
import json
import re

# Read meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const meetingsData = \[(.*)\];', content, re.DOTALL)
array_content = '[' + match.group(1) + ']'
meetings = json.loads(array_content)

# Add summer retreat photos
for meeting in meetings:
    if meeting.get('date') == '08.15~08.17':
        meeting['photos'] = [
            "/assets/마을 모임/08 15~08 17 여름 수련회/KakaoTalk_20241208_194807148.jpg",
            "/assets/마을 모임/08 15~08 17 여름 수련회/KakaoTalk_20241208_194807148_01.jpg",
            "/assets/마을 모임/08 15~08 17 여름 수련회/KakaoTalk_20241208_194807148_02.jpg",
            "/assets/마을 모임/08 15~08 17 여름 수련회/KakaoTalk_20241208_194807148_03.jpg",
            "/assets/마을 모임/08 15~08 17 여름 수련회/KakaoTalk_20241208_194807148_04.jpg"
        ]
        print(f"Added 5 photos to summer retreat")

# Convert back
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Done!")
