/*=====================typing animation======================= */

var typed = new Typed(".typing", {
    strings: ["", "Desenvolvedor Full Stack", "Web Designer", "Web Developer", "Front end Developer", "Back end Developer", "QA Software Engineer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/*============================================ */


/*Progessive */

$(function (){

    $('.counter').counterUp({
        dealy:10, time:1500,
    })

})

new WOW().init()
