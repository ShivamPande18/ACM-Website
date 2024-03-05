let intro = document.querySelector(".intro");
let logo = document.querySelector(".logoHeader");
let logoSpan = document.querySelectorAll(".logo");

const cursorDot = document.querySelector("[data-cursorDot]");
const cursorOutline = document.querySelector("[data-cursorOutline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });

});


window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        logoSpan[1].classList.add("active");
    }, 1000);

    setTimeout(() => {
        logoSpan[0].classList.add("active");
        logoSpan[2].classList.add("active");
    }, 2000);


    setTimeout(() => {
        logoSpan[0].classList.remove("active");
        logoSpan[2].classList.remove("active");
        logoSpan[0].classList.add("fade");
        logoSpan[2].classList.add("fade");
    }, 3000);

    setTimeout(() => {
        logoSpan[1].classList.remove("active");
        logoSpan[1].classList.add("fade");
    }, 4000)

    setTimeout(() => {
        intro.style.top = "200vh";
    }, 5000)
})