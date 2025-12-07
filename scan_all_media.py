#!/usr/bin/env python3
import os
import json

base_path = '/Users/uu007007007/project/test_ws/개인 페이지 & 공유된 페이지/태양 마을☀️/마을 모임'

# Scan all directories
media_map = {}

for item in os.listdir(base_path):
    item_path = os.path.join(base_path, item)

    # Skip HTML files, only process directories
    if not os.path.isdir(item_path):
        continue

    # Extract date from directory name
    # Format examples: "01 14", "08 15~08 17 여름 수련회"
    parts = item.split()
    if len(parts) >= 2:
        # Handle date ranges like "08 15~08 17"
        if '~' in parts[1]:
            date_str = f"{parts[0].zfill(2)}.{parts[1].split('~')[0].zfill(2)}~{parts[2].zfill(2)}.{parts[3].zfill(2)}"
        else:
            month = parts[0].zfill(2)
            day = parts[1].zfill(2)
            date_str = f"{month}.{day}"
    else:
        continue

    # Scan for media files
    media_files = []
    try:
        for file in os.listdir(item_path):
            # Check if it's an image or video
            lower_file = file.lower()
            if any(lower_file.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.avi']):
                # Build the asset path
                asset_path = f"/assets/마을 모임/{item}/{file}"
                media_files.append(asset_path)
    except Exception as e:
        print(f"Error scanning {item}: {e}")
        continue

    if media_files:
        media_map[date_str] = sorted(media_files)
        print(f"{date_str:15} -> {len(media_files)} files")

# Save to JSON
with open('all_media.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(media_map, ensure_ascii=False, indent=2))

print(f"\n✅ Found media for {len(media_map)} meetings")
print(f"Total files: {sum(len(files) for files in media_map.values())}")
