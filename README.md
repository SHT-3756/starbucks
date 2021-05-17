# 스타벅스
스타벅스 랜딩 페이지입니다.  

[DEMO](https://sharp-davinci-4c22a3.netlify.app)
![SHT_starbucks_main](./images/Starbucks_main.PNG)

# 문자 인코딩(Character Encoding) 설정
문자가 인코딩 되는 방식 설정합니다.
```html
<meta charset="UTF-8" />
```
- `UTF-8`: 초성, 중성, 종성으로 구분하여 문자를 작성

# 뷰포트(Viewport) 렌더링 방식 설정
웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.  
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할수있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

# 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 보여지는 정보를 지정합니다. 

카카오톡-  

<img width="200" src="./images/open_graph.PNG" />  

<a href="https://ogp.me/" title="_blank">더 많은 오픈 그래프 속성 보기</a>  
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: 페이지의 유형
- `og:site_name`: 해당 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)  
  
# 트위터 카드(Twitter Cards)
웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 보여지는 정보를 지정합니다.

<a href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started" title="_blank">더많은 트위터 카드 보기</a>

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- `twitter:card`: 페이지(카드)의 유형
- `twitter:site`: 해당 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

# Favicon(파비콘, favicon)
웹페이지를 나타내는 아이콘, 웹페이의 로고를 설정합니다.
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다. `favicon.png` 파일을 사용하려면 다음과 같이 `<link />` 를 작성하세요.  
**루트경로안에 파비콘 이미지가 있어야 합니다!**
```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```
- `favicon.ico`: 64 x 64 or 32 x 32 or 16 x 16 (px)
- `favicon.png`: 500 x 500 (px)

<img width="15" src="./favicon.ico" alt="favicon.ico"><br />
<img width="200" src="./favicon.png" alt="favicon.png">

## .ico 파일 제작 
이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있습니다.

<a href="https://iconifier.net/">.ico 파일 만들러 가기</a>  

# Reset.css
각 브라우저의 기본 스타일을 초기화합니다.



