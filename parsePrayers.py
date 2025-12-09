#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import json
import re
from html.parser import HTMLParser
from datetime import datetime
import urllib.parse

class PrayerHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.date = ""
        self.full_date = ""
        self.prayers = []
        self.image = None
        self.current_tag = None
        self.in_page_title = False
        self.in_time = False
        self.in_li = False
        self.in_sub_li = False
        self.current_person = None
        self.current_topics = []
        self.current_text = ""
        self.li_depth = 0
        self.in_figure_image = False

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)

        if tag == 'h1' and attrs_dict.get('class') == 'page-title':
            self.in_page_title = True
        elif tag == 'time':
            self.in_time = True
        elif tag == 'li':
            self.li_depth += 1
            if self.li_depth == 1:
                self.in_li = True
                if self.current_person and self.current_topics:
                    self.prayers.append({
                        "name": self.current_person,
                        "prayers": self.current_topics
                    })
                self.current_person = None
                self.current_topics = []
            elif self.li_depth == 2:
                self.in_sub_li = True
        elif tag == 'figure' and 'image' in attrs_dict.get('class', ''):
            self.in_figure_image = True
        elif tag == 'img' and self.in_figure_image:
            if 'src' in attrs_dict:
                self.image = urllib.parse.unquote(attrs_dict['src'])

    def handle_endtag(self, tag):
        if tag == 'h1' and self.in_page_title:
            self.in_page_title = False
            self.date = self.current_text.strip()
            self.current_text = ""
        elif tag == 'time' and self.in_time:
            self.in_time = False
            self.full_date = self.current_text.strip()
            self.current_text = ""
        elif tag == 'li':
            if self.li_depth == 1:
                self.in_li = False
                if self.current_person and self.current_topics:
                    self.prayers.append({
                        "name": self.current_person,
                        "prayers": self.current_topics
                    })
                    self.current_person = None
                    self.current_topics = []
            elif self.li_depth == 2:
                self.in_sub_li = False
                topic = self.current_text.strip()
                if topic:
                    self.current_topics.append(topic)
                self.current_text = ""
            self.li_depth -= 1
        elif tag == 'figure':
            self.in_figure_image = False

    def handle_data(self, data):
        if self.in_page_title or self.in_time:
            self.current_text += data
        elif self.in_li and not self.in_sub_li and self.li_depth == 1:
            # This is the person name at the top level
            stripped = data.strip()
            if stripped and not self.current_person:
                self.current_person = stripped
        elif self.in_sub_li and self.li_depth == 2:
            # This is a prayer topic
            self.current_text += data

def parse_prayer_html(html_path):
    """Parse a single prayer HTML file"""
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    parser = PrayerHTMLParser()
    parser.feed(html_content)

    # Add the last person if not added
    if parser.current_person and parser.current_topics:
        parser.prayers.append({
            "name": parser.current_person,
            "prayers": parser.current_topics
        })

    return {
        "date": parser.date,
        "fullDate": parser.full_date,
        "prayers": parser.prayers,
        "image": parser.image
    }

def main():
    # Path to prayer topics folder
    prayer_folder = "개인 페이지 & 공유된 페이지/태양 마을☀️/기도 제목"

    # Get all HTML files
    html_files = []
    for filename in os.listdir(prayer_folder):
        if filename.endswith('.html'):
            html_files.append(filename)

    # Sort files by date
    html_files.sort()

    # Parse all HTML files
    all_prayers = []
    for html_file in html_files:
        html_path = os.path.join(prayer_folder, html_file)
        print(f"Parsing {html_file}...")

        try:
            prayer_data = parse_prayer_html(html_path)
            all_prayers.append(prayer_data)
        except Exception as e:
            print(f"Error parsing {html_file}: {e}")

    # Save to JSON file
    output_path = "public/data/prayers.json"

    # Create data directory if it doesn't exist
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_prayers, f, ensure_ascii=False, indent=2)

    print(f"\nSuccessfully parsed {len(all_prayers)} prayer entries")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    main()
