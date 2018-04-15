# 목차

1	노드 시작하기	10

1.1	핵심 개념 이해하기	10

1.1.1	서버	11

1.1.2	자바스크립트 런타임	12

1.1.3	이벤트 기반	13

1.1.4	논 블로킹 I/O	17

1.1.5	싱글 스레드	20

1.2	서버로서의 노드	23

1.3	서버 외의 노드	26

1.4	개발 환경 설정하기	26

1.4.1	노드 설치하기	27

1.4.2	VS Code 설치하기	42

1.5	함께 보면 좋은 자료	49

2	실습 전 준비사항	50

2.1	ES2015+	50

2.1.1	const, let	50

2.1.2	템플릿 문자열	51

2.1.3	객체 리터럴	52

2.1.4	화살표 함수	53

2.1.5	비구조화 할당	55

2.1.6	프로미스(Promise)	56

2.1.7	async/await	59

2.2	프론트엔드 자바스크립트	61

2.2.1	AJAX	61

2.2.2	FormData	62

2.2.3	encodeURLComponent, decodeURLComponent	64

2.2.4	data attribute와 dataset	65

2.3	실습 시 유의사항	66

2.3.1	브라우저	66

2.3.2	예제 코드	66

2.3.3	코딩 스타일	66

2.4	함께 보면 좋은 자료	67

3	노드 기능 알아보기	68

3.1	REPL 사용하기	68

3.2	JS 파일 실행하기	69

3.3	모듈로 만들기	70

3.4	노드 내장 객체 알아보기	74

3.4.1	global	75

3.4.2	console	76

3.4.3	타이머	78

3.4.4	__filename, __dirname	81

3.4.5	module, exports	81

3.4.6	process	83

3.5	노드 내장 모듈 사용하기	87

3.5.1	os	87

3.5.2	path	89

3.5.3	url	93

3.5.4	querystring	97

3.5.5	crypto	98

3.5.6	util	103

3.6	파일 시스템 접근하기	104

3.6.1	동기 메서드와 비동기 메서드	106

3.6.2	버퍼와 스트림 이해하기	110

3.6.3	기타 fs 메서드 알아보기	116

3.7	이벤트 이해하기	120

3.8	예외 처리하기	122

3.9	함께 보면 좋은 자료	126

4	http 모듈로 웹 서버 만들기	127

4.1	요청과 응답 이해하기	127

4.2	쿠키와 세션 이해하기	133

4.3	REST API와 라우팅	144

4.4	https와 http2	153

4.5	cluster	156

4.6	함께 보면 좋은 자료	159

5	패키지 매니저	159

5.1	npm 알아보기	160

5.2	package.json으로 패키지 관리하기	161

5.3	패키지 버전 이해하기	169

5.4	기타 npm 명령어	171

5.5	패키지 배포하기	173

5.6	함께 보면 좋은 자료	176

6	익스프레스 웹 서버 만들기	177

6.1	빠른 설치를 위한 Express-generator	177

6.2	익스프레스 구조 이해하기	181

6.3	미들웨어	185

6.3.1	커스텀 미들웨어 만들기	187

6.3.2	serve-favicon	191

6.3.3	morgan	192

6.3.4	body-parser	192

6.3.5	cookie-parser	193

6.3.6	static	194

6.3.7	express-session	195

6.3.8	connect-flash	197

6.4	Router 객체로 라우팅 분리하기	199

6.5	템플릿 엔진 사용하기	204

6.5.1	Pug(Jade)	204

6.5.2	EJS	214

6.5.3	에러 처리 미들웨어	220

6.6	함께 보면 좋은 자료	221

7	MySQL	222

7.1	데이터베이스란?	222

7.2	MySQL 설치하기	223

7.2.1	윈도	223

7.2.2	맥	231

7.2.3	리눅스(우분투)	232

7.3	워크벤치 설치하기	233

7.3.1	윈도	234

7.3.2	맥	234

7.3.3	리눅스(우분투)	237

7.3.4	커넥션 생성하기	237

7.4	데이터베이스 및 테이블 생성하기	240

7.4.1	데이터베이스 생성하기	240

7.4.2	테이블 생성하기	242

7.5	CRUD 작업하기	254

7.5.1	Create(생성)	255

7.5.2	Read(조회)	262

7.5.3	Update(수정)	267

7.5.4	Delete(삭제)	269

7.6	시퀄라이즈 사용하기	272

7.6.1	MySQL 연결하기	276

7.6.2	모델 정의하기	276

7.6.3	관계 정의하기	280

7.6.4	쿼리 알아보기	285

7.6.5	쿼리 수행하기	288

7.7	프로젝트 마무리하기	301

8	몽고디비	302

8.1	NoSQL vs SQL	302

8.2	몽고디비설치하기	304

8.2.1	윈도	304

8.2.2	맥	309

8.2.3	리눅스(우분투)	310

8.3	컴퍼스 설치하기	311

8.3.1	윈도	311

8.3.2	맥	313

8.3.3	리눅스(우분투)	315

8.3.4	커넥션 생성하기	315

8.4	데이터베이스 및 컬렉션 생성하기	317

8.5	CRUD 작업하기	323

8.5.1	Create(생성)	323

8.5.2	Read(조회)	328

8.5.3	Update(수정)	331

8.5.4	Delete(삭제)	334

8.6	몽구스 사용하기	337

8.6.1	몽고디비 연결하기	339

8.6.2	스키마 정의하기	340

8.6.3	쿼리 수행하기	342

8.7	프로젝트 마무리하기	352

9	익스프레스로 SNS 서비스 만들기	353

9.1	프로젝트 구조 갖추기	354

9.2	데이터베이스 세팅하기	367

9.3	Passport 모듈로 로그인 구현하기	373

9.3.1	로컬 로그인 구현하기	376

9.3.2	카카오 로그인 구현하기	381

9.4	Multer 모듈로 이미지 업로드 구현하기	388

9.5	프로젝트 마무리하기	392

9.5.1	스스로 해보기	396

9.5.2	핵심 정리	396

9.5.3	함께 보면 좋은 자료	396

10	웹 API 서버 만들기	397

10.1	API 서버 이해하기	397

10.2	프로젝트 구조 갖추기	398

10.3	JWT 토큰으로 인증하기	406

10.4	호출 서버 만들기	411

10.5	SNS API 서버 만들기	416

10.6	사용량 제한 구현하기	419

10.7	CORS 이해하기	424

10.8	프로젝트 마무리하기	430

10.8.1	스스로 해보기	430

10.8.2	핵심 정리	431

10.8.3	함께 보면 좋은 자료	431

11	웹소켓으로 실시간 데이터 전송하기	432

11.1	웹소켓 이해하기	433

11.2	ws 모듈로 웹소켓 사용하기	434

11.3	Socket.IO 사용하기	442

11.4	실시간 GIF 채팅방 만들기	445

11.5	프로젝트 마무리하기	466

11.5.1	스스로 해보기	468

11.5.2	핵심 정리	468

11.5.3	함께 보면 좋은 자료	468

12	실시간 경매 시스템 만들기	469

12.1	프로젝트 구조 갖추기	469

12.2	서버센트이벤트 사용하기	484

12.3	스케쥴링 구현하기	493

12.4	프로젝트 마무리하기	496

12.4.1	스스로 해보기	497

12.4.2	함께 보면 좋은 자료	498

12.4.3	핵심 정리	498

13	구글 API로 장소 검색 서비스 만들기	499

13.1	프로젝트 구조 갖추기	499

13.2	Google Places API 사용하기	504

13.3	Google Maps API 사용하기	515

13.4	위치 기반 검색 수행하기	518

13.5	프로젝트 마무리하기	527

13.5.1	스스로 해보기	529

13.5.2	핵심 정리	529

13.5.3	함께 보면 좋은 자료	529

14	CLI 프로그램 만들기	530

14.1	간단한 콘솔 명령어 만들기	530

14.2	Commander, Inquirer 사용하기	541

14.3	프로젝트 마무리하기	553

14.3.1	스스로 해보기	553

14.3.2	함께 보면 좋은 자료	553

15	AWS와 GCP로 배포하기	554

15.1	서비스 운영을 위한 패키지	554

15.1.1	morgan과 express-session	554

15.1.2	sequelize	555

15.1.3	cross-env	557

15.1.4	retire	558

15.1.5	pm2	560

15.1.6	winston	564

15.1.7	helmet, hpp	567

15.1.8	connect-redis	567

15.2	Git과 Github 사용하기	576

15.2.1	Git 설치하기	576

15.2.2	Github 사용하기	580

15.3	AWS 시작하기	588

15.4	AWS에 배포하기	596

15.5	GCP 시작하기	600

15.6	GCP에 배포하기	606

15.7	함께 보면 좋은 자료	609

16	서버리스 노드 개발	610

16.1	서버리스 이해하기	610

16.2	AWS S3 사용하기	611

16.3	AWS Lambda 사용하기	623

16.4	Google Cloud Storage 사용하기	630

16.5	Google Cloud Functions 사용하기	636