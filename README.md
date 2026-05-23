# 🚀 배포 가이드 (5분 컷)

## 준비물
- ✅ 이 zip 파일 (압축 풀어두기)
- ✅ Anthropic API 키 (sk-ant-api03-... 로 시작)

---

## 1️⃣ Vercel 가입 (1분)

1. **vercel.com** 접속
2. **Sign Up** 클릭
3. **Continue with GitHub** (또는 Google) - 빠른 가입

---

## 2️⃣ 프로젝트 업로드 (1분)

1. Vercel 대시보드 좌측 상단 **Add New** → **Project** 클릭
2. **"Import Third-Party Git Repository"** 아래쪽에 작은 글씨로
   **"Continue with a different method"** 또는 **"Deploy without Git"** 보임 → 클릭
3. 안 보이면: **"Browse Templates"** 옆 **"Deploy"** 버튼 / 또는 그냥 새 탭에서 **vercel.com/new** 들어가서 아래쪽 **"Upload"** 옵션 선택

**[Vercel은 가끔 UI가 바뀝니다. "폴더 업로드" 또는 "파일 드래그" 옵션 보이면 그거 사용]**

가장 확실한 방법:
- vercel.com/new 접속
- 화면에 **"Drop your project folder here"** 또는 비슷한 영역이 나옴
- **압축 푼 폴더 전체**를 끌어다 놓기

---

## 3️⃣ API 키 입력 (1분) ⭐ 가장 중요

업로드 후 **"Configure Project"** 화면에서:

1. **Environment Variables** 섹션 열기 (펼치기 버튼)
2. 다음 입력:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: `sk-ant-api03-...` (받아둔 키 그대로 붙여넣기)
3. **Add** 버튼 클릭
4. 그 다음 **Deploy** 버튼 클릭

---

## 4️⃣ 완료! (2분 대기)

- 배포가 끝나면 축하 화면 나옴
- **Visit** 또는 사이트 미리보기 클릭 → 사이트 열림
- 주소 형태: `https://[프로젝트명].vercel.app`

이 주소를 북마크하면 끝.

---

## ❓ 만약 GitHub 방식이 더 쉽다면

GitHub 가입 후:
1. github.com에서 **New repository** 만들기 (이름 아무거나)
2. 압축 푼 파일들을 그냥 드래그해서 업로드 → Commit
3. Vercel에서 **Import Git Repository** → 방금 만든 저장소 선택
4. 위 3️⃣ 단계대로 API 키 입력 → Deploy

---

## 🛠 나중에 도메인 연결하고 싶으면

1. Vercel 프로젝트 → **Settings** → **Domains**
2. **Add** 클릭 → `check.stonekim.kr` 같은 거 입력
3. Vercel이 알려주는 DNS 레코드(CNAME) 복사
4. Cafe24 도메인 관리 들어가서 DNS 설정 → 그 레코드 추가
5. 5~30분 후 자동 연결됨

---

## 💰 비용

- **Vercel**: 무료 (개인 사용 한정 — 충분)
- **Anthropic API**: 사용량만큼 (분석 1회 = 약 50~100원)

---

## 🆘 문제 생기면

스크린샷 찍어서 Claude한테 보여주면 됩니다. 끝!
