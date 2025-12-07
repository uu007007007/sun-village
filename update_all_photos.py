#!/usr/bin/env python3
import json
import re

# Load the scanned media files
with open('all_media.json', 'r', encoding='utf-8') as f:
    media_map = json.load(f)

# Read current meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const meetingsData = \[(.*)\];', content, re.DOTALL)
array_content = '[' + match.group(1) + ']'
meetings = json.loads(array_content)

# Update each meeting with correct photos
updated = 0
for meeting in meetings:
    date = meeting.get('date', '')

    # Check if we have media for this date
    if date in media_map:
        old_count = len(meeting.get('photos', []))
        new_count = len(media_map[date])

        meeting['photos'] = media_map[date]

        if new_count != old_count:
            print(f"{date:15} {old_count:2} -> {new_count:2} files")
            updated += 1

# Convert back
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ Updated {updated} meetings with correct photo counts!")
