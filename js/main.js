const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '검색어를 입력');
});
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
    
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY) {
        //badge 숨기기
        // gsap.to(요소, 지속시간, 옵션); 
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        }); 
    }else{
       //badge 보이기 
       gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
    }); 
    }
}, 300));
// -.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션); 
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4,  2.1,  2.7
        opacity: 1
    });
    
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
