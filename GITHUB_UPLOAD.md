# GitHub 업로드 가이드

## ✅ 현재 상태
- Git 저장소 초기화 완료
- 파일 커밋 완료

## 📝 다음 단계: GitHub에 업로드

### 1단계: GitHub 저장소 만들기

1. **GitHub 접속**
   - https://github.com 접속
   - 로그인 (계정이 없으면 회원가입)

2. **새 저장소 생성**
   - 우측 상단 "+" 버튼 클릭
   - "New repository" 선택

3. **저장소 설정**
   - Repository name: `my-awesome-shoppingmall` (또는 원하는 이름)
   - Description: `Atelier Fashion - 패션 브랜드 랜딩 페이지` (선택사항)
   - Public 선택 (무료로 공개)
   - **"Initialize this repository with a README" 체크 해제** (이미 파일이 있으므로)
   - "Create repository" 클릭

4. **저장소 URL 복사**
   - 생성된 페이지에서 URL 복사
   - 예: `https://github.com/inzidang/my-awesome-shoppingmall.git`

### 2단계: GitHub에 업로드

PowerShell에서 다음 명령어를 실행하세요:

```powershell
# 프로젝트 폴더로 이동
cd D:\cursorstudy\009\my-awesome-shoppingmall

# PATH 새로고침 (필요시)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# GitHub 저장소 연결 (아래 URL을 본인 저장소 URL로 변경!)
git remote add origin https://github.com/inzidang/my-awesome-shoppingmall.git

# 브랜치 이름을 main으로 변경
git branch -M main

# GitHub에 업로드
git push -u origin main
```

**중요**: `inzidang`을 본인의 GitHub 사용자명으로 변경하세요!

### 3단계: 인증

첫 업로드 시 GitHub 인증이 필요할 수 있습니다:

**방법 1: Personal Access Token 사용 (권장)**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. Note: `Vercel Deploy` 입력
4. Expiration: 원하는 기간 선택
5. Scopes: `repo` 체크
6. "Generate token" 클릭
7. 생성된 토큰 복사 (한 번만 보여줌!)
8. 비밀번호 입력 시 토큰을 사용

**방법 2: GitHub CLI 사용**
```powershell
winget install --id GitHub.cli
gh auth login
```

### 4단계: 확인

GitHub 웹사이트에서 저장소 페이지를 새로고침하면 파일들이 업로드된 것을 확인할 수 있습니다!

## 🚀 다음: Vercel 배포

GitHub 업로드가 완료되면 Vercel 배포를 진행하세요:
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. 방금 만든 저장소 선택
5. "Deploy" 클릭

자세한 내용은 `DEPLOY_GUIDE.md` 파일을 참고하세요.

