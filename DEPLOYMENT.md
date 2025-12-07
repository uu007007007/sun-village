# 배포 가이드

## 1. GitHub 저장소 생성 및 연결

### GitHub에서 새 저장소 생성
1. https://github.com/new 방문
2. Repository name: `sun-village` (또는 원하는 이름)
3. Public/Private 선택
4. **"Add a README file", ".gitignore", "license" 옵션은 선택하지 않기** (이미 로컬에 있음)
5. "Create repository" 클릭

### 로컬 저장소와 GitHub 연결
생성된 저장소 페이지에서 표시되는 명령어를 실행:

```bash
# GitHub 저장소 URL로 리모트 추가 (아래 URL을 본인의 것으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/sun-village.git

# main 브랜치로 푸시
git push -u origin main
```

## 2. Vercel 배포

### 방법 1: Vercel 웹사이트에서 배포 (추천)

1. https://vercel.com 방문 및 GitHub로 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 `sun-village` 선택
4. 프로젝트 설정:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (비워두기 - 정적 파일만 배포)
   - **Output Directory**: `public`
5. "Deploy" 클릭

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 디렉토리에서 실행
vercel

# 프로덕션 배포
vercel --prod
```

## 3. 자동 배포 설정 확인

Vercel은 GitHub와 연동되어 있어 자동으로 다음과 같이 작동합니다:

- `main` 브랜치에 push → 프로덕션 자동 배포
- Pull Request 생성 → 미리보기 배포 자동 생성
- 모든 커밋마다 자동 빌드 및 테스트

## 4. 업데이트 방법

코드를 수정하고 배포하려면:

```bash
# 변경사항 커밋
git add .
git commit -m "설명"

# GitHub에 푸시 (자동으로 Vercel에 배포됨)
git push
```

## 5. 배포 확인

- Vercel 대시보드: https://vercel.com/dashboard
- 배포된 사이트: `https://your-project.vercel.app`

## 문제 해결

### 배포 실패 시
1. Vercel 대시보드에서 로그 확인
2. `public` 디렉토리에 `index.html`이 있는지 확인
3. Build Command가 비어있는지 확인 (정적 사이트)

### 도메인 연결
Vercel 대시보드 → Settings → Domains에서 커스텀 도메인 추가 가능
