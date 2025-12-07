#!/usr/bin/env python3
import json
import re

print("🏷️  모임 제목 생성 중...\n")

# Load meetingsData.js
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const meetingsData = (\[.*\]);', content, re.DOTALL)
meetings = json.loads(match.group(1))

# Generate titles based on meeting content
def generate_title(meeting):
    """Generate a concise title based on meeting content"""
    content = meeting.get('content', [])
    rich_content = meeting.get('richContent', [])

    # Extract key topics from content
    topics = []

    if rich_content:
        for item in rich_content[:3]:  # Look at first 3 items
            if item.get('type') == 'heading':
                return item.get('content', '')[:40]  # Use heading as title
            elif item.get('type') in ['paragraph', 'blockquote']:
                text = item.get('content', '')
                # Extract key phrases
                if '말씀' in text or '성경' in text:
                    topics.append('말씀')
                if '기도' in text or '중보' in text:
                    topics.append('기도')
                if '찬양' in text or '예배' in text:
                    topics.append('찬양')
                if '나눔' in text or '간증' in text:
                    topics.append('나눔')
                if '식사' in text or '밥' in text:
                    topics.append('식사')
                if '봉사' in text or '섬김' in text:
                    topics.append('봉사')

    if content:
        for item in content[:3]:
            if '말씀' in item or '성경' in item or '묵상' in item:
                topics.append('말씀묵상')
            if '기도' in item:
                topics.append('기도')
            if '찬양' in item:
                topics.append('찬양')
            if '나눔' in item:
                topics.append('나눔')
            if '식사' in item:
                topics.append('식사')
            if '생일' in item:
                topics.append('생일축하')
            if '봉사' in item:
                topics.append('봉사')

    # Remove duplicates while preserving order
    unique_topics = list(dict.fromkeys(topics))

    if unique_topics:
        if len(unique_topics) == 1:
            return unique_topics[0]
        elif len(unique_topics) == 2:
            return f"{unique_topics[0]} & {unique_topics[1]}"
        else:
            return f"{unique_topics[0]}, {unique_topics[1]} 외"

    # Default titles based on date patterns
    date = meeting.get('date', '')
    if '15~17' in date or '여름' in date:
        return '여름 수련회'
    elif meeting.get('attendees') and len(meeting.get('attendees', [])) > 0:
        return '교제와 나눔'
    else:
        return '마을 모임'

# Add titles to all meetings
for meeting in meetings:
    meeting['title'] = generate_title(meeting)
    print(f"{meeting['date']:12} → {meeting['title']}")

# Convert back to JavaScript format
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ {len(meetings)}개 모임에 제목이 추가되었습니다!")
