### 그림 모음 갤러리 형식 사이트 만들어보기

![Gallery](https://github.com/GEUMAIN/GEUMAIN.github.io/assets/128437656/8e29e58c-d6cc-447a-8452-2f405e9555eb)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    <link rel="icon" href="images/로고.png"/>

</head>
<body style="overflow-x: hidden">
    <button class="moveTopBtn"><img src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-12.png" alt=""></button>
    <div id="wrap">
        <header id="header">
            <h1 class="logo">
                <img src="images/로고.png" alt="로고">
                <p>GM</p>
            </h1>
            <nav class="nav">
                <ul id="menu">
                    <li><a href="https://ash-abrosaurus-64b.notion.site/ed8ab7e76a9e479a81a30543f066b514?v=afd76890985b480b8e48bbdadac2f3db&pvs=4">포트폴리오</a>
                    </li>

                    <li><a href="#">게임 영상</a>
                    </li>

                    <li>
                        <a href="#">2022년</a>
                        <ul class="submenu">
                            <li><a href="#">상반기</a></li>
                            <li><a href="#">하반기</a></li>
                        </ul>
                    </li>

                    <li><a href="#">2023년</a>
                        <ul class="submenu">
                            <li><a href="#">상반기</a></li>
                            <li><a href="#">하반기</a></li>
                        </ul>
                    </li>

                    <li><a href="#">2024년</a>
                        <ul class="submenu">
                            <li><a href="#">상반기</a></li>
                            <li><a href="#">하반기</a></li>
                        </ul>
                    </li>

                    <li><a href="https://github.com/GEUMAIN">GITHUB</a>
                    </li>

                    <li><a href="#">제작자</a>
                    </li>
                </ul>
            </nav>
        </header>

        <article id="slider">
            <div class="sliderWrap">
            	<div class="slider s1">
                	<img src="images/Lethal Company Information.gif" alt="이미지 설명">
                	<span><a href="https://geumain.github.io/lethalcompany/index.html">리썰컴퍼니 사이트</a></span>
            	</div>
            	<div class="slider s2">
                	<img src="images/Hollow Knight.gif" alt="이미지 설명">
                	<span><a href="https://geumain.github.io/hollowknight/index.html">할로우나이트 사이트</a></span>
            	</div>
            	<div class="slider s3">
                	<img src="images/Gallery.gif" alt="이미지 설명">
                	<span><a href="#">갤러리 사이트</a></span>
            	</div>
        	</div>
        </article>

        <main id="info">
            <section class="content">
                <h1>소개</h1>
                <p>그림 갤러리 및 영상, 포트폴리오 사이트를 정리한 사이트입니다.</p>
            </section>
        </main>

        <main id="contents">
            <section class="content1">
                <div class="art">
                    <img src="images/2022년 그림2.png" alt="">
                    <p><span>Art Gallery</span></p>
                    <p>2022</p>
                </div>
            </section>
            <section class="content2">
                <div class="art">
                    <img src="images/2023년 그림.gif" alt="">
                    <p><span>Art Gallery</span></p>
                    <p>2023</p>
                </div>
            </section>
            <section class="content3">
                <div class="art">
                    <img src="images/2024년 그림.png" alt="">
                    <p><span>Art Gallery</span></p>
                    <p>2024</p>
                </div>
            </section>

        </main>
        <main id="info">
            <section class="content">
                <h1>사이트</h1>
                <p>2024년 직접 만들어본 사이트들을 정리해보았습니다.</p>
            </section>
        </main>
        <article class="site1">
            <div class="site_imgs">
                <img src="images/할로우나이트 사이트2.png" alt="">
            </div>
            <div class="site_box1">
                <h1>HOLLOWKNIGHT</h1>
                <p>할로우 나이트 사이트에 대해 알아볼 수 있어요!
                    <br> <br>
                    지하 세계에 대한 정보를 얻어가실 수 있습니다!
                </p>
                <a href="https://geumain.github.io/hollowknight/index.html">알아보러 가기 →</a>
            </div>
        </article>

        <article class="site2">
            <div class="site_imgs2">
                <img src="images/리썰컴퍼니 사이트.png" alt="">
            </div>
            <div class="site_box2">
                <h1>>LETHALCOMPANY</h1>
                <p>---------------------------</p>
                <p>리썰 컴퍼니 사이트에 대해 알아볼 수 있어요!
                    <br> <br>
                    회사를 위해 위성에 가기 전 유용한 팁들을 찾아보세요! 
                </p>
                <a href="https://geumain.github.io/lethalcompany/index.html">알아보러 가기 →</a>
            </div>

        </article>

        <article id="intro">
            <div class="imgs">
                <img src="images/슬레이트.png" alt="">
            </div>
            <div class="contents">
                <h1>게임 영상들이 궁금하다면?</h1>
                <p>게임 영상을 둘러보며 재미를 느끼기</p>
                <a href="#">게임 영상 →</a>
            </div>
        </article>
        <article id="intro1">
            <div class="imgs">
                <img src="images/노션.png" alt="">
            </div>
            <div class="contents">
                <h1>포트폴리오가 궁금하다면?</h1>
                <p>NOTION에 들어가 포트폴리오 보기</p>
                <a href="https://ash-abrosaurus-64b.notion.site/ed8ab7e76a9e479a81a30543f066b514?v=afd76890985b480b8e48bbdadac2f3db&pvs=4">포트폴리오 →</a>
            </div>
        </article>
        <article id="intro2">
            <div class="imgs">
                <img src="images/깃허브.png" alt="">
            </div>
            <div class="contents">
                <h1>오픈소스 깃허브가 궁금하다면?</h1>
                <p>깃허브 자료 보러가기</p>
                <a href="https://github.com/GEUMAIN">GITHUB →</a>
            </div>
        </article>
        <main id="info">
            <section class="content">
                <h1>완성작</h1>
                <p>2023 ~ 2024년 직접 만든 게임 중 완성한 작품</p>
            </section>
        </main>

        <article id="game">
            <div class="game_img">
                <img src="images/쯔꾸르 사진.png" alt="">
            </div>
            <div class="game_txt">
                <h1>허망지설</h1>
                <p>쯔구르 RPG MAKER MV 툴로 만든 스토리 형식 게임입니다.
                처음 만든 작품이기에 부족한 점이 많지만 많은 노력을 했습니다.</p>
                <a href="https://www.postype.com/@geumain/post/16717093">알아보러 가기 →</a>
            </div>
        </article>

        <article id="game2">
            <div class="game_img2">
                <img src="images/개인프로젝트.png" alt="">
            </div>
            <div class="game_txt2">
                <h1>개인 프로젝트</h1>
                <p>Unity C#언어로 만든 클리커 게임 문제 맞히기 게임입니다. <br>
                처음으로 완성한 게임인 만큼 미숙한 점이 많지만 
                <br>재밌게 즐겨주신다면 감사하겠습니다.</p>
                <a href="https://drive.google.com/file/d/1HbfVwZSEdtDSho-JdIerUl1VW3OD3NuC/view">알아보러 가기 →</a>
            </div>
        </article>

        <footer id="footer">
            <nav>
                <a href="https://ash-abrosaurus-64b.notion.site/ed8ab7e76a9e479a81a30543f066b514?v=afd76890985b480b8e48bbdadac2f3db&pvs=4">NOTION</a>
                <a href="https://github.com/GEUMAIN">GITHUB</a>

                <div class="btns">
                    <button class="Insbtn"><img src="images/인스타 아이콘.png" alt=""></button>
                    <button class="Facbtn"><img src="images/페이스북.png" alt=""></button>
                    <button class="Youbtn"><img src="images/유튜브 아이콘.png" alt=""></button>
                </div>
            </nav>
            <p>
                <span>갤러리 사이트 I 제작자 : 정인서 I 호스팅 제공자 : GITHUB</span><br>
                <span>목적 : 포트폴리오 & 2024년 중간 정산</span><br>
                <span>EMAIL : 2023261@sungil-i.kr I copyright © JIS9825, All Right Reserved.</span><br>
            </p>
        </footer>
    </div>

    <script src="JS/script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</body>
</html>
```

---

### CSS

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

@font-face {
    font-family: 'PFStardust';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/PFStardust.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Orbit-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/Orbit-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    font-family: "Nanum Gothic", sans-serif;
}

ul, li {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

#wrap {
    width: 1920px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;
    padding: 0 10px;
}

#header .logo {
    width: 10%;
    height: 80px;
    background-color: #ffffff;
    margin-left: -20px;

}

#header .logo img {
    width: 30%;
    height: 30px;
    position: relative;
    padding: 10px;
    left: 5%;
    top : 15%;
}

#header .logo p {
    text-align: center;
    position: relative;
    left: 15%;
    top: -45%;
}

#header .nav {
    width: 90%;
    height: 80px;
    background-color: #ffffff;
    z-index: 2;
    font-size: 17px;
}

#slider {
    width: 100%;
    height: 900px;
    background-color: #c9c9c9;
}

#contents {
    width: 100%;
    display: flex;
    box-shadow: 0px 15px 5px -1px rgb(186, 186, 186);
}

#info .content {
    width: 100%;
    height: 200px;
}

#info .content h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 50px;
}

#info .content p {
    text-align: center;
    padding: 10px 0;
    font-size: 30px;
}

#contents .content1 {
    width: 33.3333%;
    height: 600px;
    background-color: #eae6e6;
}

#contents .content2 {
    width: 33.3333%;
    height: 600px;
    background-color: #eae6e6;
}

#contents .content3 {
    width: 33.3333%;
    height: 600px;
    background-color: #eae6e6;
}

#contents .art {
    background-color: rgb(51, 51, 51);
    margin: 50px 90px;
    width: 70%;
    height: 500px;
    border-radius: 3%;
    border: 2px solid white;
    overflow: hidden;
}

#contents .art p{
    font-size: 30px;
    text-align: center;
    color: #fff;
    text-shadow: 2px 1px rgb(0, 0, 0);
}

#contents .art p span{
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 2px 1px rgb(0, 0, 0);
}

#contents .art img{
    position: relative;
    width: 100%;
    height: 400px;
}

#contents .art:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

#intro {
    width: 100%;
    display: flex;
    background-color: #363434;
}

#intro .imgs {
    width: 10%;
    height: 200px;
    position: relative;
    left: 30%;
}

#intro .imgs img{
    width: 100%;
    height: 200px;
}

#intro .contents {
    width: 90%;
    height: 200px;
    position: relative;
    left: 40%;
}

#intro h1 {
    color: #fff;
    font-size: 40px;
    padding: 20px 0 20px 0;
    position: relative;
    left: 7%;
}

#intro p {
    color: #9c9c9c;
    font-size: 20px;
    padding: 0 0 50px 0;
    position: relative;
    left: 15%;
}

#intro a {
    color: #fff;
    font-size: 20px;
    position: relative;
    left: 27%;
}

#intro1 {
    width: 100%;
    display: flex;
    background-color: #2a1797;
}

#intro1 .imgs {
    width: 10%;
    height: 200px;
    position: relative;
    right: -70%;
}

#intro1 .imgs img{
    width: 100%;
    height: 200px;
}

#intro1 .contents {
    width: 90%;
    height: 200px;
    position: relative;
    right: -9%;
}

#intro1 h1 {
    color: #fff;
    font-size: 40px;
    padding: 20px 0 20px 0;
    position: relative;
    left: 7%;
}

#intro1 p {
    color: #9c9c9c;
    font-size: 20px;
    padding: 0 0 50px 0;
    position: relative;
    left: 7%;
}

#intro1 a {
    color: #fff;
    font-size: 20px;
    position: relative;
    left: 7%;
}

#intro2 {
    width: 100%;
    display: flex;
    background-color: #421d42;
    box-shadow: 0px 15px 5px -1px rgb(186, 186, 186);

}

#intro2 .imgs {
    width: 10%;
    height: 200px;
    position: relative;
    left: 30%;
}

#intro2 .imgs img{
    width: 100%;
    height: 200px;
}

#intro2 .contents {
    width: 90%;
    height: 200px;
    position: relative;
    left: 40%;
}

#intro2 h1 {
    color: #fff;
    font-size: 40px;
    padding: 20px 0 20px 0;
    position: relative;
    left: 5%;
}

#intro2 p {
    color: #9c9c9c;
    font-size: 20px;
    padding: 0 0 50px 0;
    position: relative;
    left: 25%;
}

#intro2 a {
    color: #fff;
    font-size: 20px;
    position: relative;
    left: 30%;
}

.site1 {
    width: 100%;
    height: 550px;
    overflow: hidden;
    background-color: black;
}

.site_imgs {
    width: 60%;
    height: 550px;
    overflow: hidden;
}

.site1 .site_imgs img {
    position: relative;
    left: -50%;
    top: -30%;
}

.site1 .site_box1 {
    width: 40%;
    height: 550px;
}

.site1 .site_box1 h1{
    text-align: center;
    color: white;
    position: relative;
    top: -90%;
    left: 150%;
    font-size: 45px;
    font-family: 'Roboto Slab', sans-serif;
    text-shadow:0px 0px 20px white;
}

.site1 .site_box1 p {
    text-align: center;
    color: white;
    position: relative;
    top : -70%;
    left: 150%;
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
}

.site1 .site_box1 a {
    text-align: center;
    color: white;
    position: relative;
    top : -50%;
    left: 193%;
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
}

.site2 {
    width: 100%;
    height: 550px;
    background-color: black;
    overflow: hidden;
}

.site_imgs2 {
    width: 60%;
    height: 550px;
}
.site2 .site_imgs2 img {
    height: 600px;
    width: 110%;
    position: relative;
    left: 55%;
    top: -10%;
}

.site2 .site_box2 {
    width: 40%;
    height: 550px;
    position: relative;
    left: -63%;
}

.site2 .site_box2 h1{
    text-align: center;
    color: rgb(29, 184, 52);
    position: relative;
    top: -90%;
    right: -150%;
    font-size: 45px;
    font-family: 'Orbit-Regular';
}

.site2 .site_box2 p {
    text-align: center;
    color: rgb(29, 184, 52);
    position: relative;
    top : -70%;
    right: -150%;
    font-size: 20px;
    font-family: 'Orbit-Regular';
}

.site2 .site_box2 a {
    text-align: center;
    color: rgb(29, 184, 52);
    position: relative;
    top : -50%;
    right: -188%;
    font-size: 25px;
    font-family: 'Orbit-Regular';
}

#game {
    background-color: #000000;
    height: 500px;
    border: 5px solid white;
}

#game .game_img {
    width: 80%;
    background-color: #000000;
    height: 500px;

}

#game .game_img img {
    width: 40%;
    height: 370px;
    padding: 40px;
    position: relative;
    top: 5%;
    left: 15%;
    border: 2px solid white;
}

#game .game_txt {
    background-color: black;
    width: 30%;
    height: 500px;
    position: relative;
    left: 50%;
    top: -100%;
}
#game .game_txt h1 {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 45px;
    position: relative;
    left: 10%;
    top: 3%;
    font-family: 'PFStardust';
    padding: 10px;
}

#game .game_txt p {
    text-align: center;
    color: white;
    position: relative;
    top: 7%;
    left: 10%;
    font-size: 22px;
    font-family: 'PFStardust';
}

#game .game_txt a {
    text-align: center;
    color: white;
    position: relative;
    top: 15%;
    left: 45%;
    font-size: 25px;
    font-family: 'PFStardust';
}

#game2 {
    background-color: #ffffff;
    height: 500px;
    border: 5px outset rgb(0, 0, 0);
}

#game2 .game_img2 {
    width: 40%;
    background-color: #ffffff;
    height: 500px;

}

#game2 .game_img2 img {
    width: 100%;
    height: 370px;
    padding: 40px;
    position: relative;
    border: 3px outset black;
    top: 5%;
    left: 120%;
}

#game2 .game_txt2 {
    background-color: black;
    width: 40%;
    height: 500px;
    position: relative;
    left: 0%;
    top: -100%;
}
#game2 .game_txt2 h1 {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 45px;
    position: relative;
    left: 0%;
    top: 10%;
    padding: 10px;
}

#game2 .game_txt2 p {
    text-align: center;
    color: white;
    position: relative;
    top: 30%;
    left: 0%;
    font-size: 24px;
    font-weight: bold;
    letter-spacing : 2px;
}

#game2 .game_txt2 a {
    text-align: center;
    color: white;
    position: relative;
    top: 50%;
    left: 40%;
    font-size: 25px;
    font-weight: bold;
}

#footer {
    width: 100%;
    display: flex;
    background-color : rgb(27, 27, 27);
    color : white; 
    height: 200px;
    border-top: 1px solid #c4c4c4;
    padding-top: 15px;
    font-size: 20px;
}

#footer p {
    margin-top: 80px;
    margin-bottom: 0;
    position: relative;
    left: -45%;
    font-size: 16px;
}

#footer nav a{
    margin: 0 20px 10px 20px;
    font-size: 25px;
    position: relative;
    top: 10%;
    left: 38%;
    color: white;
}

#footer nav .btns .Insbtn {
    background-color: rgba(0,0,0,0);
    border: none;
    width: 10%;
    height: 100px;
}

#footer nav .btns .Insbtn img{
    background-color: rgba(0,0,0,0);
    border: none;
    width: 40%;
}

.Insbtn:hover {
    cursor: pointer;
}

#footer nav .btns .Facbtn {
    background-color: rgba(0,0,0,0);
    border: none;
    width: 10%;
    height: 100px;
}

#footer nav .btns .Facbtn img{
    background-color: rgba(0,0,0,0);
    border: none;
    width: 40%;
}

.Facbtn:hover {
    cursor: pointer;
}

#footer nav .btns .Youbtn {
    background-color: rgba(0,0,0,0);
    border: none;
    width: 10%;
    height: 100px;
}

#footer nav .btns .Youbtn img{
    background-color: rgba(0,0,0,0);
    border: none;
    width: 40%;
}

.Youbtn:hover {
    cursor: pointer;
}

#footer nav .btns {
    position: relative;
    left: 70%;
    top: -20%;
}

.moveTopBtn {
    background-color: rgba(0,0,0,0);
    position: fixed;
    border: none;
    width: 100px;
    height: 50px;
    z-index: 3;
    top : 85%;
    left : 90%;
}

.moveTopBtn img {
    width: 100px;
}

.moveTopBtn:hover {
    cursor: pointer;
}

.nav>ul {
    display: flex;
    justify-content: center;
}

.nav>ul>li {
    position: relative;
}

.nav>ul>li>a {
    display: inline-block;
    padding: 28px 40px;
    background-color: #ffffff;
}

.nav>ul>li>a:hover {
    font-weight: bold;
}

.nav>ul>li>ul {
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    text-align: center;
    display: none;
}

.nav>ul>li>ul>li>a {
    display: inline-block;
    padding: 20px;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
}

.nav>ul>li>ul>li>a:hover {
    font-weight: bold;
}

.nav>ul>li>ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 600ms;
}

.sliderWrap {
    position: relative;
    height: 100%;
}

.sliderWrap .slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.sliderWrap .slider img {
    width: 100%;
    height: 900px;
    position: relative;
    left: 0%;
    opacity: 0.7;
}

.sliderWrap .slider span a{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px 70px;
    font-size: 19px;
}
```

---

### JavaScript

```jsx
window.onload = function() {
    let currentIndex = 0; 
        	const slider = document.querySelectorAll(".slider");
        	slider.forEach(el => el.style.opacity = "0");
        	slider[0].style.opacity = 1;

        	setInterval(() => {
            	let nextIndex = (currentIndex + 1) % slider.length;

            	slider[currentIndex].style.opacity = "0";
            	slider[nextIndex].style.opacity = "0.7";
            	slider.forEach(el => el.style.transition = "all 1s");

            	currentIndex = nextIndex;

    }, 6000);

    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseover", function () {
            this.querySelector(".submenu").style.height = "200px";
        });
    });
    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseout", function () {
            this.querySelector(".submenu").style.height = "0px";
        });
    });

}

const $topBtn = document.querySelector(".moveTopBtn").addEventListener('click',upscroll);

function upscroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const $InstarBtn = document.querySelector(".Insbtn").addEventListener('click',Instargram);

function Instargram()  {
    window.open('https://www.instagram.com/junginseo0501/?next=%2F');
}

const $FaceBtn = document.querySelector(".Facbtn").addEventListener('click',Facebook);

function Facebook()  {
    window.open('https://www.facebook.com/profile.php?id=100013994297212');
}

const $YoutBtn = document.querySelector(".Youbtn").addEventListener('click',Youtube)

function Youtube()  {
    window.open('https://www.youtube.com/@user-zc4lf3mw6z');
}

```
