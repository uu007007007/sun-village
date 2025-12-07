#!/usr/bin/env python3
import os
import re
from html.parser import HTMLParser
import json

class NotionHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_body = False
        self.current_tag = None
        self.current_id = None
        self.content = []
        self.current_text = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if 'class' in attrs_dict and 'page-body' in attrs_dict.get('class', ''):
            self.in_body = True

        if self.in_body and tag in ['h1', 'h2', 'h3', 'p', 'blockquote']:
            self.current_tag = tag
            self.current_id = attrs_dict.get('id', '')
            self.current_text = []

    def handle_endtag(self, tag):
        if self.in_body and tag in ['h1', 'h2', 'h3', 'p', 'blockquote'] and self.current_tag:
            text = ''.join(self.current_text).strip()
            if text and len(text) > 3:  # Skip very short texts
                item_type = 'heading' if tag in ['h1', 'h2', 'h3'] else tag
                self.content.append({
                    'type': item_type,
                    'content': text
                })
            self.current_tag = None
            self.current_text = []

    def handle_data(self, data):
        if self.current_tag:
            self.current_text.append(data)

# Meetings that already have richContent
skip_dates = ['01 07', '01 14', '01 21', '02 04', '02 18', '03 03', '03 31', '04 07']

meetings_dir = '/Users/uu007007007/project/test_ws/개인 페이지 & 공유된 페이지/태양 마을☀️/마을 모임'

results = {}

for filename in os.listdir(meetings_dir):
    if not filename.endswith('.html'):
        continue

    # Extract date from filename
    match = re.match(r'(\d+ \d+)', filename)
    if not match:
        continue

    date_str = match.group(1)
    if date_str in skip_dates:
        continue

    filepath = os.path.join(meetings_dir, filename)

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        parser = NotionHTMLParser()
        parser.feed(html_content)

        if parser.content:
            # Format date as MM.DD
            parts = date_str.split()
            formatted_date = f"{parts[0].zfill(2)}.{parts[1].zfill(2)}"
            results[formatted_date] = parser.content[:15]  # Limit to first 15 items

    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Print results as JSON
print(json.dumps(results, ensure_ascii=False, indent=2))
