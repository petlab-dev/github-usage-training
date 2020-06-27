# GitHub Usage Training

> 앞으로 진행할 프로젝트를 위해 협업에 필요한 GitHub 사용방법에 대해서 전달하기 위해 작성한 규칙 및 튜토

## PR, Issue, 문서관리 규칙

- PR, Issue 
  - PR과 Issue에 Label을 붙이자. 
    - Label 예시 : `BE, FE, WIP, review, enhancement, fair, refactor, review, database, deploy, API, JSON`
  - 필요한 경우 PR과 Issue에 `[`{BE, FE, TEAM}`]` 클래스를 붙이자.
  - PR에 linked Issue를 꼭 붙이자.
- PR이나 Commit 메시지에 아래와 같은 단어와 이슈번호가 들어가면 해당 PR이 merge 될 경우 Issue가 자동으로 닫힘
  - close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved
  - ex) `resolves #2`

## **브랜치 규칙**

- fork 뜨지 않고 해당 리포지토리 내에서 작업
- `master`: 최종 브랜치 - 웬만해선 건드리지 않음 | pipeline
- `dev`: default 브랜치 
  - `FE/dev`: React 개발 브랜치 
    - `FE/feature/issue-xxx`: React 기능 추가 브랜치
    - `FE/fix/issue-xxx`: React 기능 수정 브랜치
  - `BE/dev`: 백엔드 개발 브랜치 
    - `BE/feature/issue-xxx`: BE 기능 추가 브랜치
    - `BE/fix/issue-xxx`: BE 기능 수정 브랜치
  - `deploy`: 배포 브랜치
  - 모든 머지는 PR을 기반으로 한다.

## Commit message 형식

```bash
[#36] feat: something something...

- description....
```

```bash
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)
```

---

## 따라해보기

> Issue 생성

- https://github.com/petlab-dev/github-usage-training/issues
- New Issue 버튼 클릭
- 규칙에 따라 Issue 작성
  - 예시 : https://github.com/petlab-dev/github-usage-training/issues/1
  - 제목 예시 
    - [FE] Create button component
  - 내용 예시
    - Feature
      - 와이어 프레임 스펙에 맞춰 Storybook에 해당 기능을 하는 컴포넌트를 구현한다.
- self assign 클릭
- Label 작성 

---

> Repository clone

```bash
// 리포지토리를 클론받음
git clone https://github.com/petlab-dev/github-usage-training.git

// 해당 폴더로 들어감
cd github-usage-training
```

---

> Branch 조작 및 브랜치명 작성

- 작업에 맞춰 브랜치규칙에 따라 내가 생성한 이슈 번호를 기입하여 브랜치 생성

```bash
# git checkout -b <새로 생성하려는 branch 이름>
git checkout -b FE/feature/issue-1
```

---

> Commit message 작성

- 어떠한 작업을 하고 Commit message 형식에 맞춰 작성

```bash
# git commit -m <commit message>
git commit -m "[#1] feat: create button component"
```

---

> 원본(Origin) 리포지토리의 해당 branch에 Push

```bash
# git push origin <branch name>
git push origin FE/feature/issue-1
```

---

> PR 방법

- Compare & pull request 버튼 클릭
- PR 규칙에 따라 PR 작성
  - master 브랜치에
  - 조건에 따라 Label 작성
  - 문서 작성 후 Create pull request 버튼 클릭

- PR 후에도 해당 브랜치에 Push하면 merge되기 전까지 PR에 적용
  - PR 먼저 보내고 작업하는 것도 가능 이 겨우 WIP(Work in progress) label을 붙임
    - 코드리뷰를 바탕으로 수정한 사항 해당 브랜치에 Push하면 그 PR에 커밋이 쌓임
  - 나머지 사람들이 해당 PR에 대한 코드리뷰 진행
  - 만족할만한 상태가 되었을 때 merge
- https://github.com/petlab-dev/github-usage-training/pull/2#pullrequestreview-438682264

