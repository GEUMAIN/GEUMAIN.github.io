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