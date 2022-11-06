'use strict;'
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close');
const openNav = document.querySelector('.open');


openNav.addEventListener('click', function(){
    mobileNav.classList.toggle('open-mobile')
});

closeNav.addEventListener('click', function(){
    mobileNav.classList.toggle('open-mobile')
});