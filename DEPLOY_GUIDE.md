# Vercel 배포 가이드 (초보자용)

## 📋 준비사항
- GitHub 계정 (https://github.com)
- Git 설치 (https://git-scm.com/download/win)

## 🚀 배포 단계

### 1단계: Git 초기화 및 GitHub에 업로드

터미널(또는 PowerShell)을 열고 프로젝트 폴더로 이동한 후:

```bash
# 1. Git 초기화
git init

# 2. 모든 파일 추가
git add .

# 3. 첫 커밋
git commit -m "Initial commit: Atelier Fashion website"

# 4. GitHub 저장소 연결 (YOUR_USERNAME을 본인 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/my-awesome-shoppingmall.git

# 5. GitHub에 업로드
git branch -M main
git push -u origin main
```

**주의**: `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요!

### 2단계: Vercel에 배포

1. **Vercel 접속**
   - https://vercel.com 접속
   - "Sign Up" 클릭
   - "Continue with GitHub" 선택하여 GitHub 계정으로 로그인

2. **프로젝트 추가**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - "Import Git Repository"에서 방금 만든 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Framework Preset: **Next.js** (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `.next` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

4. **배포 시작**
   - "Deploy" 버튼 클릭
   - 1-2분 정도 기다리면 배포 완료!

5. **배포 완료**
   - 배포가 완료되면 자동으로 URL이 생성됩니다
   - 예: `https://my-awesome-shoppingmall.vercel.app`
   - 이 URL을 누구에게나 공유할 수 있습니다!

## 🔄 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
# 1. 변경사항 추가
git add .

# 2. 커밋
git commit -m "Update: 설명을 여기에 작성"

# 3. GitHub에 푸시
git push

# 4. Vercel이 자동으로 재배포합니다!
```

## 💡 팁

- Vercel은 GitHub에 푸시할 때마다 자동으로 재배포합니다
- 무료 플랜으로도 충분히 사용 가능합니다
- 커스텀 도메인도 무료로 연결 가능합니다

## ❓ 문제 해결

### Git이 인식되지 않는 경우
- Git 설치 후 터미널을 완전히 종료하고 다시 열어보세요
- 또는 컴퓨터를 재시작하세요

### GitHub 업로드 시 인증 오류
- GitHub에서 Personal Access Token을 생성해야 할 수 있습니다
- Settings → Developer settings → Personal access tokens → Generate new token

### 빌드 오류가 발생하는 경우
- Vercel 대시보드에서 "Logs" 탭을 확인하세요
- 로컬에서 `npm run build`가 성공하는지 확인하세요

