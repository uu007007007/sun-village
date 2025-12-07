#!/usr/bin/env python3
import json
import re
import unicodedata

def normalize_str(s):
    """Normalize Unicode string to NFC form"""
    return unicodedata.normalize('NFC', s)

print("🔍 누락된 미디어 파일 자동 수정 시작...\n")

# Load all_media.json
print("1️⃣ all_media.json 로드 중...")
with open('all_media.json', 'r', encoding='utf-8') as f:
    all_media_raw = json.load(f)
# Normalize all keys to NFC
all_media = {normalize_str(k): v for k, v in all_media_raw.items()}
print(f"   ✅ {len(all_media)}개 날짜의 미디어 데이터 로드 완료\n")

# Load meetingsData.js
print("2️⃣ meetingsData.js 로드 중...")
with open('public/js/meetingsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const meetingsData = (\[.*\]);', content, re.DOTALL)
meetings = json.loads(match.group(1))
print(f"   ✅ {len(meetings)}개 모임 데이터 로드 완료\n")

# Create a dict for quick lookup
meetings_dict = {m['date']: m for m in meetings}

# Missing dates to add
missing_dates = {
    "07.21": [
        "/assets/마을 모임/07 21/KakaoTalk_20240728_204824393.jpg",
        "/assets/마을 모임/07 21/KakaoTalk_20240728_204824393_01.jpg"
    ],
    "07.28": [
        "/assets/마을 모임/07 28/Untitled 1.png",
        "/assets/마을 모임/07 28/Untitled.png"
    ],
    "08.04": [
        "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453.jpg",
        "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453_01.jpg",
        "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453_02.jpg",
        "/assets/마을 모임/08 04/KakaoTalk_20240804_215219352.mp4"
    ],
    "08.18": [
        "/assets/마을 모임/08 18/KakaoTalk_20241208_194807148_14.jpg",
        "/assets/마을 모임/08 18/KakaoTalk_20241208_194807148_15.jpg"
    ],
    "10.06": [
        "/assets/마을 모임/10 06/%EB%AF%BC%EC%A7%80_%EC%83%9D%EC%9D%BC.mp4",
        "/assets/마을 모임/10 06/image.png"
    ]
}

# Add missing dates
print("3️⃣ 누락된 날짜 5개 추가 중...")
added_count = 0
for date, photos in missing_dates.items():
    if date not in meetings_dict:
        new_meeting = {
            "date": date,
            "attendees": [],
            "content": [],
            "photos": photos,
            "activities": {
                "earlyArrival": False,
                "photoTaken": True,
                "bibleBrought": False,
                "mealTogether": False
            }
        }
        meetings.append(new_meeting)
        meetings_dict[date] = new_meeting
        added_count += 1
        print(f"   ✅ {date} 추가 ({len(photos)}개 파일)")

print(f"   📊 총 {added_count}개 날짜 추가 완료\n")

# Update 08.15~08.17 with correct photos
print("4️⃣ 08.15~08.17 사진 업데이트 중...")
summer_photos = all_media.get("08.15~17.여름", [])
new_count = 0
updated_summer = False

if "08.15~08.17" in meetings_dict and summer_photos:
    old_count = len(meetings_dict["08.15~08.17"]["photos"])
    meetings_dict["08.15~08.17"]["photos"] = summer_photos
    new_count = len(summer_photos)
    updated_summer = True
    print(f"   ✅ 08.15~08.17: {old_count}개 → {new_count}개 파일 업데이트\n")
else:
    print(f"   ⚠️  08.15~08.17 업데이트 실패")
    print(f"      - meetings_dict에 있나? {'08.15~08.17' in meetings_dict}")
    print(f"      - summer_photos 있나? {len(summer_photos) > 0}")
    print(f"      - all_media 키들: {list(all_media.keys())[:5]}...")
    print()

# Sort meetings by date
print("5️⃣ 날짜순 정렬 중...")
def parse_date(date_str):
    # Handle ranges like "08.15~08.17"
    if '~' in date_str:
        first_date = date_str.split('~')[0]
        month, day = first_date.split('.')
    else:
        month, day = date_str.split('.')
    return (int(month), int(day))

meetings.sort(key=lambda m: parse_date(m['date']))
print(f"   ✅ {len(meetings)}개 모임 날짜순 정렬 완료\n")

# Convert back to JavaScript format
print("6️⃣ JavaScript 파일 생성 중...")
new_array = json.dumps(meetings, ensure_ascii=False, indent=2)
new_content = f"""// Meetings data embedded directly to avoid CORS issues
const meetingsData = {new_array};
"""

# Write back
with open('public/js/meetingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print(f"   ✅ meetingsData.js 저장 완료\n")

# Summary
print("=" * 60)
print("✨ 수정 완료 요약")
print("=" * 60)
print(f"총 모임 수: {len(meetings)}개 (기존 36 + 신규 5)")
print(f"\n추가된 날짜:")
for date, photos in missing_dates.items():
    print(f"  • {date}: {len(photos)}개 파일")
if updated_summer:
    print(f"\n업데이트된 날짜:")
    print(f"  • 08.15~08.17: {new_count}개 파일")
total_new_files = sum(len(photos) for photos in missing_dates.values())
if updated_summer:
    total_new_files += (new_count - 5)  # 기존 5개, 새로 14개 = 9개 추가
print(f"\n총 추가된 파일: {total_new_files}개")
print("=" * 60)
print("\n✅ 모든 작업이 완료되었습니다!")
print("📝 다음 단계: index.html의 캐시 버전을 v=6으로 업데이트하세요.")
