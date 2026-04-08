Project Integration
병원 및 사용자 관리를 위한 NestJS 기반 백엔드 API 서버

프로젝트 개요
이 프로젝트는 병원 정보 및 사용자 관리 시스템을 위한 RESTful API 서버입니다. JWT 기반 인증을 사용하며, TypeORM을 통해 MySQL 데이터베이스와 연동됩니다.

기술 스택
Framework: NestJS 10.x
Database: MySQL
ORM: TypeORM 10.x
Authentication: JWT + Passport (Local Strategy)
Language: TypeScript
Package Manager: npm
주요 기능
1. 인증 (Auth Module)
로그인 및 JWT 토큰 발급
Passport Local Strategy 기반 인증
프로필 이미지 처리
2. 사용자 관리 (User Module)
개별 사용자 정보 조회
사용자 리스트 조회 (검색 기능 포함)
JWT 인증 필요
설치 및 실행
1. 사전 요구사항
# Node.js 버전 확인
node -v

# npm 버전 확인
npm -v
2. NestJS CLI 설치
npm i -g @nestjs/cli
3. 의존성 설치
npm install
4. 환경 설정
프로젝트 루트에 config 디렉토리를 생성하고 필요한 설정 파일을 추가하세요:

데이터베이스 연결 설정 (TypeORM)
서버 포트 설정
JWT 시크릿 키 설정
5. 개발 서버 실행
# 개발 모드 (watch mode)
npm run start:dev

# 일반 모드
npm start

# 디버그 모드
npm run start:debug
6. 프로덕션 빌드
# 빌드
npm run build

# 프로덕션 실행
npm run start:prod
개발 도구
# 코드 포맷팅
npm run format

# 린팅
npm run lint

# 테스트
npm run test

# 테스트 커버리지
npm run test:cov

# E2E 테스트
npm run test:e2e
CORS 설정
필요에 따라 src/main.ts에서 CORS 설정을 수정할 수 있습니다.

보안 고려사항
JWT 토큰을 사용한 인증
Passport Guard를 통한 라우트 보호
민감한 정보는 환경 변수로 관리 권장
라이선스
UNLICENSED
