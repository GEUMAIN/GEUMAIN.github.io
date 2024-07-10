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

