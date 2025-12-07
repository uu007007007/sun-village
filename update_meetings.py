#!/usr/bin/env python3
import json
import re

# Load extracted content
with open('extracted_content.json', 'r', encoding='utf-8') as f:
    rich_content_map = json.load(f)

# Read the current meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to add richContent to a meeting entry
def add_rich_content(match):
    # Extract the date from the meeting entry
    date_match = re.search(r'"date":\s*"([^"]+)"', match.group(0))
    if not date_match:
        return match.group(0)

    date = date_match.group(1)

    # Check if this date has richContent to add
    if date not in rich_content_map:
        return match.group(0)

    # Check if already has richContent
    if '"richContent":' in match.group(0) and '"richContent": []' not in match.group(0):
        return match.group(0)  # Already has content

    # Format the richContent
    rich_items = rich_content_map[date]
    rich_json = json.dumps(rich_items, ensure_ascii=False, indent=6)

    # Replace empty richContent array with the new content
    result = re.sub(
        r'"richContent":\s*\[\s*\]',
        f'"richContent": {rich_json}',
        match.group(0)
    )

    return result

# Update all meeting entries
updated_content = re.sub(
    r'\{[^{}]*?"date":[^{}]*?\n\s*\}(?=\s*[,\]])',
    add_rich_content,
    content,
    flags=re.DOTALL
)

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated meetings data with rich content!")
