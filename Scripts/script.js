'use strict;'
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close');
const openNav = document.querySelector('.open');
const anchors = document.querySelectorAll('.anchor-tag');
const subNav = document.querySelector('.sub-links')
const aboutLink = document.querySelector('.about-link');


openNav.addEventListener('click', function(){
    mobileNav.classList.toggle('open-mobile')
});

closeNav.addEventListener('click', function(){
    mobileNav.classList.toggle('open-mobile')
});

anchors.forEach(el=> el.addEventListener('click', function(){
    console.log('anchor clicked')
    if(mobileNav.classList.contains('open-mobile')){
        mobileNav.classList.remove('open-mobile')
    }
    if(subNav.classList.contains('open-sub-links')){
        subNav.classList.remove('open-sub-links')
    }
}))