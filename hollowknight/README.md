### 할로우나이트 사이트 만들어보기

![Hollow Knight - Chrome 2024-06-19 13-28-33 (1)](https://github.com/GEUMAIN/GEUMAIN.github.io/assets/128437656/d110fd0c-cf67-432f-821d-4f0beced551c)

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.1, maximum-scale=1.0"/>

    <title>Hollow Knight</title>
    <link rel="stylesheet" href="css/style.css?abc">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
</head>
<body style="overflow-x: hidden">
    <button class="moveTopBtn"><img src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-12.png" alt=""></button>
    <div id="content_page" style="width: 100%;">
        <header class="header">
            <nav id="nav">
                <ul class="main-menu">
                    <li class="icon"><img src="https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a/32/256x256.png" alt="아이콘"></li>
                    <li class="menu"><a href="#">GAME INFO</a>
                        <ul class="submenu">
                            <li><a href="https://store.steampowered.com/app/367520/Hollow_Knight/">STEAM</a></li>
                            <li><a href="https://store.nintendo.co.kr/70010000065700">NINTENDO</a></li>
                            <li><a href="https://steamcommunity.com/app/367520/reviews/?browsefilter=toprated&snr=1_5_100010_">REVIEW</a></li>
                            <li><a href="https://www.nexusmods.com/hollowknight">MOD</a></li>
                            <li><a href="#">OTHER</a></li>
                        </ul>
                    </li>
                    <li class="menu"><a href="#">BOSS INFO</a>
                        <ul class="submenu">
                            <li><a href="#">SPIRIT</a></li>
                            <li><a href="#">DREAM</a></li>
                            <li><a href="#">MAIN</a></li>
                            <li><a href="#">SUB</a></li>
                            <li><a href="#">MOD</a></li>
                            <li><a href="#">OTHER</a></li>
                        </ul>
                    </li>
                    <li class="menu"><a href="#">ITEM INFO</a>
                        <ul class="submenu">
                            <li><a href="#">SPIRIT</a></li>
                            <li><a href="#">SPIKE</a></li>
                            <li><a href="#">MOVE</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">EXPENDABLES</a></li>
                            <li><a href="#">CHARM</a></li>
                        </ul></li>
                    <li class="menu"><a href="#">MAP INFO</a></li>
                    <li class="menu"><a href="#">DEV INFO</a></li>
                    <li class="menu"><a href="#">ABOUT</a></li>
                    <li class="menu"><a href="#">LOGIN</a></li>
                    <li class="company_icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Team_cherry_Logo_Red.png/944px-Team_cherry_Logo_Red.png" alt="회사 아이콘"></li>
                </ul>
            </nav>
        </header>
        <article id ="sliedr">
            <div class="imgs">
                <img src="https://images.gog-statics.com/0f8f8798c4512cc9aa1881a1f8672bc9598c7afb523e0e6120223d3dc697ddfe.jpg" alt="슬라이더 사진">
            </div>
        </article>
        <section id="section">
            <div class="content1">
                <h1>트레일러</h1>
                <p>할로우나이트의 모험 속으로 빠져보세요! <br>
                    역병으로 뒤덮인 지하세계를 구하는 영웅이 될 수 있는 기회</p>
                <iframe width="560" height="300" src="https://www.youtube.com/embed/UAO2urG23S4?si=AQxjs6QqE7H90oib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
        <article id ="sliedr2">
            <div class="imgs2">
                <img src="https://assets.xboxservices.com/assets/c3/ba/c3badfea-655f-4ddb-a037-704e5cf27930.jpg?n=488123_GLP-Page-Hero-1084_1920x1080.jpg" alt="슬라이더 사진">
            </div>
        </article>
        <section id="section2">
            <div class="content2">
                <h1>후속작</h1>
                <p>할로우나이트의 후속작 <span>SILKSONG</span>에 대해<br>
                    트레일러를 보며 기다릴 수 있는 기회</p>
                    <iframe width="560" height="300" src="https://www.youtube.com/embed/yQxwbZsL14Y?si=Nq4UtDKaMewU1box" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
        <article id ="sliedr3">
            <div class="imgs3">
                <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/07/Hollow-Knight.jpg" alt="슬라이더 사진">
            </div>
        </article>
        <section id="section3">
            <div class="content3">
                <h1>DLC</h1>
                <p>할로우나이트의 추가 콘텐츠에 대해<br>
                    먼 곳에서 온 수상한 극단, 그림 극단에 맞서보세요!</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k3oRaATsfQI?si=VEqNtFCfkrM1q_gD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
        <article id ="sliedr4">
            <div class="imgs4">
                <img src="https://gamerstyle.com.mx/wp-content/uploads/2018/08/Hollow-Knight.jpg" alt="슬라이더 사진">
            </div>
        </article>
        <section id="section4">
            <div class="content4">
                <h1>만신전</h1>
                <p>할로우나이트의 DLC 신들에게 도전하여<br>
                    자신의 한계를 뚫고 나아가보세요! </p>
                    <iframe width="560" height="300" src="https://www.youtube.com/embed/yGeqR3P_q8E?si=zvp55I5QcmYi2ksV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
        <footer id="footer">
            <nav>
                <a href="https://ash-abrosaurus-64b.notion.site/ed8ab7e76a9e479a81a30543f066b514?v=afd76890985b480b8e48bbdadac2f3db&pvs=4">NOTION</a>
                <a href="https://github.com/GEUMAIN">GITHUB</a>
            </nav>
            <p>
                <span>해당 사이트는 비공식 정보 사이트입니다.</span><br>
                <span>작성자 : 정인서</span><br>
                <span>EMAIL : 2023261@sungil-i.kr</span><br>
                <span>copyright © JIS9825, All Right Reserved.</span>
            </p>
        </footer>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/script.js"></script>

</body>
</html>
```

---

### CSS

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap');

* {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 100%;
    font-weight: bold;
}

a {
    text-decoration: none;
    color : white;
}
ul li {
    list-style: none;
}

#content_page {
    position: relative;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    min-width: 10%;
    background-color: black;
    
}

#header {
    position: absolute;
    display: flex;
    width: 100%;
}

#nav {
    position: fixed;
    display: flex;
    background-color: black;
    z-index: 2;
    width: 100%;
    
}

#nav .menu,.icon,.company_icon{
    width: 100px;
    float : left;
    height: 100px;
    line-height: 100px;
    padding: 0 80px 10px 0;
    transition: all 400ms;
}

.icon {
    line-height: 150px;
}

.company_icon {
    line-height: 200px;
}

.submenu {
    width: 180%;
	background-color: rgb(19, 18, 18);
	z-index: 1;
    overflow: hidden;
    display: block;
    
}
.main-menu > .menu:hover {
    text-shadow:0px 0px 20px white;
}

.submenu > li {
    list-style: none;
    width: 100%;
    transition: all 400ms;
}

.submenu > li > a{
    font-size: 14px;
    color: linear-gradient(to bottom, rgb(0, 0, 0) 50%,rgb(255, 255, 255) 55%);
}
.submenu > li:hover{
    background-color: rgb(235, 235, 235);
}
.submenu > li:hover > a{
    color: black;
}

#nav>ul>li>ul {
    height: 0;

    translate: all 600ms;
}

#nav ul img{
    width: 30%;
    line-height: 10%;
    padding: 0.1% 0;
}

#nav ul .icon {
    width: 12%;
    padding: 0 0.3%;
}

#nav ul .company_icon {
    width: 20%;
    padding: 0 0.3%;
}
#slider {
    clear: both;
    display: flex;
}

#slider2 {
    clear: both;
    display: flex;
    position: relative;
}

#slider3 {
    clear: both;
    display: flex;
}
#sliedr .imgs{
    width: 100%;
    height: 40%;
    
}

#sliedr2 .imgs2{
    width: 100%;
    height: 5%;
}

#sliedr3 .imgs3{
    width: 100%;
    height: 5%;
}

#sliedr4 .imgs4{
    width: 100%;
    height: 5%;
}

#sliedr .imgs > img{
    width: 100%;
    height: 40%;

}

#sliedr2 .imgs2 > img{
    width: 100%;
    height: 600px;
}

#sliedr3 .imgs3 > img{
    width: 100%;
    height: 600px;
}

#sliedr4 .imgs4 > img{
    width: 100%;
    height: 600px;
    
}

#section {
    width: 100%;
    display: flex;
    height: 400px;
    background-color: black;
}
#section2 {
    width: 100%;
    display: flex;
    height: 400px;
    background-image: linear-gradient(to right, black, #ce1338);
    box-shadow: inset 5px 5px 10px 5px rgb(13, 13, 13);
}

#section3 {
    width: 100%;
    display: flex;
    height: 400px;
    background-image: linear-gradient(to left, black 55%, #700d21 80%);
    box-shadow: inset 5px 5px 10px 5px rgb(13, 13, 13);
}

#section4 {
    width: 100%;
    display: flex;
    height: 400px;
    background-image: linear-gradient(to right, rgb(242, 233, 223), #d79f6a, black 55%);
    box-shadow: inset 5px 5px 10px 5px rgb(47, 45, 45);
}

#section .content {
    height: 400px;
}

#section .content1 h1 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 35px;
    position: absolute;
    left: 62%;
    top: 22%;
    padding: 10px;
}

#section2 .content2 h1 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 40px;
    position: absolute;
    right: 64%;
    top: 45%;
    padding: 10px;
}

#section3 .content3 h1 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 35px;
    position: absolute;
    left: 66%;
    top: 69%;
    padding: 10px;
}

#section4 .content4 h1 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 40px;
    position: absolute;
    right: 64%;
    top: 92%;
    padding: 10px;
}

#section .content1 p {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 25px;
    position: absolute;
    left: 50%;
    top: 25%;
}

#section2 .content2 p {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 25px;
    position: absolute;
    right: 56%;
    top: 48%;
}

#section3 .content3 p {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 25px;
    position: absolute;
    left: 54%;
    top: 72%;
}

#section4 .content4 p {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 25px;
    position: absolute;
    right: 56%;
    top: 95%;
}

#section2 .content2 p span {
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 30px;
    font-weight: bold;
}

#section4 .content4 iframe {
    position: absolute;
    padding: 50px 10px;
    right: 10%;
}

#section3 .content3 iframe {
    position: absolute;
    padding: 40px 10px;
    left: 10%;
}

#section2 .content2 iframe {
    position: absolute;
    padding: 50px 10px;
    right: 10%;
}

#section .content1 iframe {
    position: absolute;
    padding: 50px 10px;
    left: 10%;
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
    transition: .2s;
    width: 100px;
}

.moveTopBtn:hover {
    cursor: pointer;
}

#footer{
    position: absolute;
    width: 100%;
    background-color : black;
    color : white; 
    height: 200px;
    font-weight: bold;
    border-top: 1px solid #c4c4c4;
    padding-top: 15px;
    font-size: 20px;
}

#footer p {
    margin-top: 20px;
    margin-bottom: 0;
    text-align: left;
}

#footer nav a{
    display: inline-block;
    margin: 0 20px 10px 20px;
    font-size: 25px;
    position: relative;
    left : -43%;
}

```

---

### JavaScript

```jsx
const $topBtn = document.querySelector(".moveTopBtn").addEventListener('click',upscroll);

function upscroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

$(function () {
    $(".main-menu >  li").mouseenter(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".main-menu >  li").mouseleave(function () {
        $(this).find(".submenu").stop().slideUp();
    });
});
window.onload = function () {
    let navList = document.querySelectorAll(".main-menu > li");

    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseover", function () {
            this.querySelector(".submenu").style.height = "600px";
        });
    });
    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseout", function () {
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}

$(function(){
    $(window).scroll(function(){
        let scrollvalue = $(window).scrollTop();
        if(scrollvalue >= 900 && scrollvalue <= 1400){
            $("#sliedr2").stop().animate({
                opacity: "1"
            }, 1000);
        }else{
            $("#sliedr2").stop().animate({
                opacity: "0"
            }, 1000);
        }
        
        if(scrollvalue >= 1600 && scrollvalue <= 2400){
            $("#sliedr3").stop().animate({
                left : "50%",
                opacity: "1"
            }, 1000);
        }else{
            $("#sliedr3").stop().animate({
                opacity: "0"
            }, 1000);
        }  

        if(scrollvalue >= 2600 && scrollvalue <= 3500){
            $("#sliedr4").stop().animate({
                opacity: "1"
            }, 1000);
        }else{
            $("#sliedr4").stop().animate({
                opacity: "0"
            }, 1000);
        } 
        
    })
})
```

### 사이트 링크

[Hollow Knight](https://geumain.github.io/hollowknight/index.html)
