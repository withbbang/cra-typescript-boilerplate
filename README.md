# Create React App Boilerplate for Typescript

### 프로젝트 목적

1. CRA Typescript 최소 세팅을 위함

---

### 제공하는 기능

- redux toolkit을 이용하여 상태관리
- REACT_APP_MODE 환경변수 기반으로 build 작업 변화
- scripts내에 build 모드에 따라 babel을 이용하여 console 제거 유무 판단
- eslintrc.json 설정 기반으로 안티 패턴을 자동 검출하는 도구 -> 개발자의 옳바른 코딩 습관을 갖도록 돕는 툴
- global.d.ts를 이용하여 typescript에서 지원하지 않는 타입 설정 가능

---

### 프로젝트 구조

```
Service Diagrams
├─ 📁config
│  ├─ 📁jest
│  │  ├─ 📄babelTransform.js
│  │  ├─ 📄cssTransform.js
│  │  └─ 📄fileTransform.js
│  ├─ 📁components
│  │  └─ 📁persistentCache
│  │     └─ 📁persistentCache
│  │        └─ 📄createEnvironmentHash.js
│  ├─ 📄env.js
│  ├─ 📄getHttpsConfig.js
│  ├─ 📄modules.js
│  ├─ 📄paths.js
│  ├─ 📄webpack.config.js
│  └─ 📄webpackDevServer.config.js
├─ 📁public
│  ├─ 📄index.css
│  ├─ 📄index.html
│  ├─ 📄logo.svg
│  ├─ 📄manifest.json
│  └─ 📄robots.txt
├─ 📁scripts
│  ├─ 📄build.js
│  ├─ 📄start.js
│  └─ 📄test.js
├─ 📁src
│  ├─ 📁components
│  ├─ 📁middlewares
│  ├─ 📁modules
│  ├─ 📁screens
│  ├─ 📁scss
│  ├─ 📄App.tsx
│  ├─ 📄global.d.ts
│  └─ 📄index.tsx
├─ 📄.eslintrc.json
├─ 📄.gitignore
├─ 📄.gitmessage.txt
├─ 📄.prettierrc
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
├─ 📄Todo.txt
└─ 📄tsconfig.json
```

---

### 파일 설명

- 📁config: CRA의 기초 구성 파일을 담고 있는 폴더 (scss 설정을 위함)
- 📁scripts: CRA의 동작 명령어를 담고 있는 폴더
- 📄global.d.ts: 타입스크립트가 지원하지 않는 타입을 추가하는 프로젝트 한정 글로벌 파일
- 📄.eslintrc.json: eslint 설정 파일
- 📄.gitmessage.txt: git commit template 파일
- 📄.prettierrc: 프리티어 설정 파일
- 📄Todo.txt: 현재 프로젝트의 Todo List
