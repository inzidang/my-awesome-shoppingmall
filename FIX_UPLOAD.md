# GitHub 업로드 문제 해결 가이드

## 🔴 발생한 문제
브라우저에서 `127.0.0.1:50747` 연결 오류 발생
- Git Credential Manager의 로컬 서버 연결 실패
- 인증 프로세스가 완료되지 않음

## ✅ 해결 방법: Personal Access Token 사용

### 1단계: GitHub에서 토큰 생성

1. **토큰 생성 페이지 접속**
   - https://github.com/settings/tokens 접속
   - 또는 GitHub → 우측 상단 프로필 → Settings → 좌측 메뉴 하단 "Developer settings" → "Personal access tokens" → "Tokens (classic)"

2. **새 토큰 생성**
   - "Generate new token" → "Generate new token (classic)" 클릭
   - 또는 직접 링크: https://github.com/settings/tokens/new

3. **토큰 설정**
   - **Note**: `Vercel Deploy` (또는 원하는 이름)
   - **Expiration**: 원하는 기간 선택 (예: 90 days 또는 No expiration)
   - **Select scopes**: 
     - ✅ `repo` 체크 (전체 체크됨)
     - 이렇게 하면 하위 항목들이 자동으로 체크됩니다:
       - repo:status
       - repo_deployment
       - public_repo
       - repo:invite
       - security_events

4. **토큰 생성**
   - 페이지 하단 "Generate token" 클릭
   - **중요**: 생성된 토큰을 즉시 복사하세요! (한 번만 보여줍니다)
   - 예: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2단계: PowerShell에서 업로드

```powershell
# 프로젝트 폴더로 이동
cd D:\cursorstudy\009\my-awesome-shoppingmall

# PATH 새로고침
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# GitHub에 업로드
git push -u origin main
```

**인증 정보 입력:**
- **Username**: `inzidang` 입력
- **Password**: **생성한 Personal Access Token** 입력 (비밀번호가 아님!)

### 3단계: 확인

업로드가 성공하면:
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
To https://github.com/inzidang/my-awesome-shoppingmall.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## 🔄 대안: GitHub CLI 사용

Personal Access Token이 번거롭다면 GitHub CLI 사용:

```powershell
# GitHub CLI 설치
winget install --id GitHub.cli

# 인증 (브라우저가 열리면 로그인)
gh auth login

# 업로드
cd D:\cursorstudy\009\my-awesome-shoppingmall
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
git push -u origin main
```

## 💡 팁

- Personal Access Token은 안전하게 보관하세요
- 토큰이 만료되면 새로 생성해야 합니다
- 업로드 후에는 `git push`만 하면 됩니다 (한 번만 인증)

