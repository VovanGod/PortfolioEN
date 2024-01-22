import mobileNav from './modules/mobile-nav.js';
mobileNav();

window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}


function reveal() {
    let flag = false;
    if (flag == false) {
        var reveals = document.querySelectorAll(".card1");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("card1-show");
            }
        }
        var reveals = document.querySelectorAll(".card2");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("card2-show");
            }
        }
        var reveals = document.querySelectorAll(".card3");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("card3-show");
            }
        }
        flag = true;
    }
}

window.addEventListener("scroll", reveal);
reveal();

function opacity() {
    var reveals = document.querySelectorAll(".about-stat");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("about-stat-show");
        }
    }
}

window.addEventListener("scroll", opacity);
opacity();

function opacity2() {
    var reveals = document.querySelectorAll(".about-me");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("about-me-show");
        }
    }
}

window.addEventListener("scroll", opacity2);
opacity2();

function opacity3() {
    var reveals = document.querySelectorAll(".card-b");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("card-b-show");
        }
    }
    var reveals = document.querySelectorAll(".card-a");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("card-a-show");
        }
    }
    var reveals = document.querySelectorAll(".card-c");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("card-c-show");
        }
    }
}

window.addEventListener("scroll", opacity3);
opacity3();

function opacity4() {
    var reveals = document.querySelectorAll(".form");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("form--open");
        }
    }
}

window.addEventListener("scroll", opacity4);
opacity4();

function qr() {
    let flag = false;
    if (flag == false) {
        var reveals = document.querySelectorAll(".qr");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("qr-show");
            }
        }
        var reveals = document.querySelectorAll(".qr2");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("qr2-show");
            }
        }
        flag = true;
    }
}

window.addEventListener("scroll", qr);
qr();

VANTA.TOPOLOGY({
    el: "#basic",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x59b600,
    backgroundColor: 0x0
});

import './modules/form.js';