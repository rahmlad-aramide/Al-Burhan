'use strict;'

aboutLink.addEventListener('click', function(){
    subNav.classList.toggle('open-sub-links')
    if(!subNav.classList.contains('open-sub-links')){
        subNav.classList.add('open-sub-links')
    }

});

closeNav.addEventListener('click', function(){
    if(subNav.classList.contains('open-sub-links')){
        subNav.classList.remove('open-sub-links')
    }
});