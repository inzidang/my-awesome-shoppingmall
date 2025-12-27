# GitHub 업로드 단계별 가이드

## 📍 현재 상태
✅ Git 저장소 초기화 완료  
✅ 파일 커밋 완료  
✅ GitHub 원격 저장소 연결 완료: `https://github.com/inzidang/my-awesome-shoppingmall.git`  
⏳ 업로드 대기 중 (인증 필요)

## 🚀 업로드 방법 (3가지 중 선택)

### 방법 1: Personal Access Token 사용 (가장 추천)

#### 1단계: GitHub에서 토큰 생성
1. https://github.com/settings/tokens 접속
2. "Generate new token" → "Generate new token (classic)" 클릭
3. 설정:
   - **Note**: `Vercel Deploy` (또는 원하는 이름)
   - **Expiration**: 원하는 기간 선택 (예: 90 days)
   - **Scopes**: `repo` 체크 (전체 체크)
4. "Generate token" 클릭
5. **생성된 토큰 복사** (한 번만 보여주므로 꼭 복사하세요!)

#### 2단계: PowerShell에서 업로드
```powershell
# 프로젝트 폴더로 이동
cd D:\cursorstudy\009\my-awesome-shoppingmall

# PATH 새로고침
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# GitHub에 업로드
git push -u origin main
```

**인증 정보 입력:**
- Username: `inzidang`
- Password: **생성한 Personal Access Token** (비밀번호가 아님!)

---

### 방법 2: GitHub CLI 사용 (간편함)

#### 1단계: GitHub CLI 설치 및 인증
```powershell
# GitHub CLI 설치
winget install --id GitHub.cli

# 인증 (브라우저가 열리면 로그인)
gh auth login

# GitHub에 업로드
cd D:\cursorstudy\009\my-awesome-shoppingmall
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
git push -u origin main
```

---

### 방법 3: Git Credential Manager 사용

Windows에 Git Credential Manager가 설치되어 있다면:

```powershell
cd D:\cursorstudy\009\my-awesome-shoppingmall
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# 업로드 시도 (자동으로 브라우저가 열림)
git push -u origin main
```

브라우저에서 GitHub 로그인하면 자동으로 인증됩니다.

---

## ✅ 업로드 확인

업로드가 완료되면:
1. https://github.com/inzidang/my-awesome-shoppingmall 접속
2. 파일들이 보이는지 확인
3. "Code" 버튼을 클릭하면 저장소 URL 확인 가능

## 🔄 다음 업데이트 방법

코드를 수정한 후 다시 업로드하려면:

```powershell
cd D:\cursorstudy\009\my-awesome-shoppingmall
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# 변경사항 추가
git add .

# 커밋
git commit -m "변경사항 설명"

# 업로드
git push
```

## 🎯 다음 단계: Vercel 배포

GitHub 업로드가 완료되면:
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. `my-awesome-shoppingmall` 저장소 선택
5. "Deploy" 클릭

자동으로 배포됩니다! 🚀

