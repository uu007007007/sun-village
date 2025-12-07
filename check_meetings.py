#!/usr/bin/env python3
import re
import json

# Read the meetingsData.js file
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array content
match = re.search(r'const meetingsData = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find meetingsData array")
    exit(1)

array_content = '[' + match.group(1) + ']'

# Parse as JSON
try:
    meetings = json.loads(array_content)
except json.JSONDecodeError as e:
    print(f"JSON parse error: {e}")
    exit(1)

# Check each meeting
print(f"Total meetings: {len(meetings)}\n")

issues = []
for meeting in meetings:
    date = meeting.get('date', 'Unknown')
    photos = meeting.get('photos', [])
    rich = meeting.get('richContent', [])

    has_photos = len(photos) > 0
    has_rich = len(rich) > 0

    status = []
    if not has_photos and not has_rich:
        status.append("❌ NO CONTENT")
        issues.append(date)
    elif not has_photos:
        status.append("⚠️  No photos")
    elif not has_rich:
        status.append("⚠️  No rich content")
    else:
        status.append("✅ Complete")

    print(f"{date:12} Photos: {len(photos):2}  Rich: {len(rich):2}  {' '.join(status)}")

if issues:
    print(f"\n\n{len(issues)} meetings with NO content or photos:")
    print(", ".join(issues))
else:
    print("\n\n✅ All meetings have at least some content or photos!")
