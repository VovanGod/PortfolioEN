!function(){var e={400:function(){const e=document.getElementById("form_btn");document.getElementById("form"),e.addEventListener("click",(function(){alert("Заявка отправлена! Спасибо)")}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}!function(){"use strict";const e=document.querySelectorAll(".nav-href"),t=document.querySelector(".mobile-nav-btn"),o=document.querySelector(".mobile-nav");function i(){document.body.classList.remove("no-scroll"),o.classList.toggle("mobile-nav-active"),t.classList.toggle("mobile-nav-btn-active")}e.forEach((function(e){e.addEventListener("click",(function(){o.classList.toggle("mobile-nav--open"),t.classList.toggle("mobile-nav-btn--open")})),o.onclick=i}));function l(){let e=!1;if(0==e){for(var t=document.querySelectorAll(".card1"),n=0;n<t.length;n++){var o=window.innerHeight;t[n].getBoundingClientRect().top<o-150&&t[n].classList.add("card1-show")}for(t=document.querySelectorAll(".card2"),n=0;n<t.length;n++)o=window.innerHeight,t[n].getBoundingClientRect().top<o-150&&t[n].classList.add("card2-show");for(t=document.querySelectorAll(".card3"),n=0;n<t.length;n++)o=window.innerHeight,t[n].getBoundingClientRect().top<o-150&&t[n].classList.add("card3-show");e=!0}}function c(){for(var e=document.querySelectorAll(".about-stat"),t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("about-stat-show")}}function r(){for(var e=document.querySelectorAll(".about-me"),t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("about-me-show")}}function d(){for(var e=document.querySelectorAll(".card-b"),t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("card-b-show")}for(e=document.querySelectorAll(".card-a"),t=0;t<e.length;t++)n=window.innerHeight,e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("card-a-show");for(e=document.querySelectorAll(".card-c"),t=0;t<e.length;t++)n=window.innerHeight,e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("card-c-show")}function s(){for(var e=document.querySelectorAll(".form"),t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<n-150&&e[t].classList.add("form--open")}}function a(){let e=!1;if(0==e){for(var t=document.querySelectorAll(".qr"),n=0;n<t.length;n++){var o=window.innerHeight;t[n].getBoundingClientRect().top<o-150&&t[n].classList.add("qr-show")}for(t=document.querySelectorAll(".qr2"),n=0;n<t.length;n++)o=window.innerHeight,t[n].getBoundingClientRect().top<o-150&&t[n].classList.add("qr2-show");e=!0}}n(400),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav");e.onclick=function(){t.classList.toggle("mobile-nav--open"),e.classList.toggle("mobile-nav-btn--open")}}(),window.onload=function(){document.getElementById("loading-mask").style.display="none"},window.addEventListener("scroll",l),l(),window.addEventListener("scroll",c),c(),window.addEventListener("scroll",r),r(),window.addEventListener("scroll",d),d(),window.addEventListener("scroll",s),s(),window.addEventListener("scroll",a),a(),VANTA.TOPOLOGY({el:"#basic",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:5879296,backgroundColor:0})}()}();