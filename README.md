# 태양 마을 ☀️ - Sun Village Website

현대적이고 세련된 디자인의 태양 마을 커뮤니티 웹사이트입니다.

## 🎨 디자인 특징

- **모던하고 세련된 색상 팔레트**: 딥 블루, 퍼플 그라데이션으로 고급스러운 느낌
- **부드러운 애니메이션**: 스크롤, 호버, 페이드인 효과
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **인터랙티브 요소**: 섹션별 스크롤 애니메이션, 카드 호버 효과
- **타이포그래피**: Google Fonts (Inter + Noto Sans KR) 사용

## 🚀 실행 방법

### 방법 1: Node.js 서버 사용 (권장)

1. Node.js가 설치되어 있지 않다면 먼저 설치:
   ```bash
   # Homebrew를 사용하여 설치
   brew install node
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 서버 실행:
   ```bash
   npm start
   ```

4. 브라우저에서 접속:
   ```
   http://localhost:3000
   ```

### 방법 2: 직접 HTML 파일 열기

```bash
open public/index.html
```

또는 브라우저에서 `public/index.html` 파일을 직접 열어도 됩니다.

## 📁 프로젝트 구조

```
.
├── server.js              # Express 서버
├── package.json           # 프로젝트 설정
├── public/                # 정적 파일
│   ├── index.html        # 메인 HTML
│   ├── css/
│   │   └── styles.css    # 메인 스타일시트
│   └── js/
│       └── main.js       # JavaScript 인터랙션
└── 개인 페이지 & 공유된 페이지/  # 노션 내보내기 파일
    └── 태양 마을☀️/
        ├── 태양_마을.mp4
        └── 태양마을_마을_발표_자료.pdf
```

## ✨ 주요 기능

- **히어로 섹션**: 인상적인 그라데이션 배경과 플로팅 애니메이션
- **마을 소개 영상**: 비디오 플레이어 및 PDF 다운로드
- **핵심 가치**: 위로, 성숙, 사랑, 재미를 시각적으로 표현
- **마을원 역할**: 각 구성원의 역할을 카드 형태로 정리
- **생일 캘린더**: 타임라인 형식으로 생일 표시
- **버킷 리스트**: 완료/미완료 상태를 체크박스로 표시
- **기도 제목**: 기도 모임 정보 및 주요 기도 제목
- **마을 챙기기**: 번호가 매겨진 가이드라인

## 🎯 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **Fonts**: Google Fonts (Inter, Noto Sans KR)
- **Design**: Modern Gradient Design, Glassmorphism

## 📱 반응형 지원

- 데스크톱 (1200px+)
- 태블릿 (768px - 1199px)
- 모바일 (~ 767px)

---

© 2024 Sun Village. 함께 성장하고, 사랑하며, 빛나는 공동체 🌟
