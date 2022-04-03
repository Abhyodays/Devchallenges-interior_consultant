const primaryNav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".nav-toggle");
const navIcon = document.querySelector(".fa-solid");
navtoggle.addEventListener('click',function(){
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible','true');
        navtoggle.setAttribute('aria-expanded','true');
        navIcon.classList.add('fa-xmark');
    }
    else{
        primaryNav.setAttribute('data-visible',false);
        navtoggle.setAttribute('aria-expanded','true');
        navIcon.classList.remove('fa-xmark');
    }
})