#!/usr/bin/env python3
import re
import json

# Load extracted content
with open('extracted_content.json', 'r', encoding='utf-8') as f:
    rich_content_map = json.load(f)

# Read the current meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the meetings array
match = re.search(r'const meetingsData = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find meetingsData array")
    exit(1)

array_content = '[' + match.group(1) + ']'
meetings = json.loads(array_content)

# Update each meeting with richContent
updated = 0
for meeting in meetings:
    date = meeting.get('date', '')

    # Check if this date has richContent to add
    if date in rich_content_map:
        # Only update if richContent is empty or missing
        if not meeting.get('richContent') or len(meeting.get('richContent', [])) == 0:
            meeting['richContent'] = rich_content_map[date]
            updated += 1
            print(f"Updated {date} with {len(rich_content_map[date])} items")

# Convert back to JavaScript format
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)

# Rebuild the file
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ Updated {updated} meetings with richContent!")
