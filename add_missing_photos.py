#!/usr/bin/env python3
import json
import os

# Read the current meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse it
import re
match = re.search(r'const meetingsData = \[(.*)\];', content, re.DOTALL)
array_content = '[' + match.group(1) + ']'
meetings = json.loads(array_content)

# Photos to add
photos_to_add = {
    "01.28": ["/assets/마을 모임/01 28/Untitled.png"]
}

# Update meetings
updated = 0
for meeting in meetings:
    date = meeting.get('date', '')
    if date in photos_to_add:
        # Add missing photos
        existing_photos = meeting.get('photos', [])
        new_photos = photos_to_add[date]
        for photo in new_photos:
            if photo not in existing_photos:
                existing_photos.append(photo)
                updated += 1
        meeting['photos'] = existing_photos
        print(f"Added {len(new_photos)} photos to {date}")

# Convert back
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ Added {updated} photos!")
