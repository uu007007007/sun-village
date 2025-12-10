#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import urllib.parse
import json

assets_dir = "public/assets/기도제목"

# Rename URL-encoded files
for filename in os.listdir(assets_dir):
    if '%' in filename:
        old_path = os.path.join(assets_dir, filename)
        new_filename = urllib.parse.unquote(filename)
        new_path = os.path.join(assets_dir, new_filename)

        print(f"Renaming: {filename} -> {new_filename}")
        os.rename(old_path, new_path)

# Update prayers.json
with open('public/data/prayers.json', 'r', encoding='utf-8') as f:
    prayers = json.load(f)

for prayer in prayers:
    if prayer.get('image'):
        # Decode the image path
        old_image = prayer['image']
        # Split path and decode filename
        parts = old_image.split('/')
        parts[-1] = urllib.parse.unquote(parts[-1])
        new_image = '/'.join(parts)

        if old_image != new_image:
            prayer['image'] = new_image
            print(f"Updated path: {old_image} -> {new_image}")

# Save updated prayers.json
with open('public/data/prayers.json', 'w', encoding='utf-8') as f:
    json.dump(prayers, f, ensure_ascii=False, indent=2)

print("\nAll files and paths updated successfully!")
