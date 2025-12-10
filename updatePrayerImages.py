#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os

# Read current prayers.json
with open('public/data/prayers.json', 'r', encoding='utf-8') as f:
    prayers = json.load(f)

# Update image paths
for prayer in prayers:
    if prayer.get('image'):
        # Extract date from prayer.date (e.g., "01.14 기도제목")
        date_parts = prayer['date'].split()[0].split('.')
        if len(date_parts) == 2:
            date_prefix = "_".join([d.zfill(2) for d in date_parts]) + "_기도"

            # Get original filename
            original_filename = os.path.basename(prayer['image'])

            # Construct new path
            new_path = f"/assets/기도제목/{date_prefix}제목_{original_filename}"

            # Check if file exists
            file_path = f"public{new_path}"
            if os.path.exists(file_path):
                prayer['image'] = new_path
                print(f"Updated: {prayer['date']} -> {new_path}")
            else:
                print(f"Warning: File not found for {prayer['date']}: {file_path}")
                prayer['image'] = None

# Save updated prayers.json
with open('public/data/prayers.json', 'w', encoding='utf-8') as f:
    json.dump(prayers, f, ensure_ascii=False, indent=2)

print("\nPrayer images updated successfully!")
