'use sctict';
import i18Obj from './translate.js';

window.addEventListener('DOMContentLoaded', () => {
    // btn up
    const btnUp = document.querySelector('.pageup');
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
        btnUp.classList.add('pageup_show');
        }
        if (scrolled < coords) {
        btnUp.classList.remove('pageup_show');
        }
    }
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
    window.addEventListener ('scroll', trackScroll);
    btnUp.addEventListener ('click', backToTop);

    // tabs portfolio
    const tabs = document.querySelectorAll('.btn_portfolio'),
          images = document.querySelectorAll('.portfolio__images img'),
          parentTabs = document.querySelector('.portfolio__btns');

    function changeImage(event) {
        let season = event.target.getAttribute('data-season');
        if(event.target.classList.contains('btn_portfolio')) {
            images.forEach((img, i) => 
                img.src  = `img/${season}/${i + 1}.jpg`
            );
        }
        tabs.forEach(item => {
            item.classList.remove('active');
            if(season === item.dataset.season) {
                item.classList.add('active');
            }
        });
    }
    parentTabs.addEventListener('click', changeImage);

    // video
    const video = document.querySelector('.video__wrapper video'),
          constols = document.querySelector('.video__controls'),
          controlVol = document.querySelector('.video__volume input'),
          controlScreen = document.querySelector('.video__fullscreen'),
          progressfill = document.querySelector('.video__progressfill'),
          iconPlay = document.querySelector('.video__play');
    
    function playVideo() {
        if(video.paused) {
            video.play();
            iconPlay.style.display = 'none';
            constols.classList.add('active');
    }}
    iconPlay.addEventListener('click', playVideo);

    function stopVideo() {
        if(video.play) {
            video.pause();
            iconPlay.style.display = 'block';
            constols.classList.remove('active');
    }}
    video.addEventListener('click', stopVideo);

    function updateVol(){
        let volume = this.value;
        video.volume = volume;
    }
    controlVol.addEventListener('change', updateVol);

    function goFullScreen(){
        if(video.webkitSupportsFullscreen) {
           video.webkitEnterFullScreen(); 
        }
    }
    controlScreen.addEventListener('click', goFullScreen);

    function moveLineProgress (event) {
        const {duration, currentTime} = event.srcElement;
        const progressLine = (currentTime / duration) * 100;
        progressfill.style.width = `${progressLine}%`;
    }
    video.addEventListener('timeupdate',moveLineProgress);

    // translate
    const ruLang = document.querySelector('.ru');
    const enLang = document.querySelector('.en');
    const langElements = document.querySelectorAll('[data-i18]');

    const getTranslate = (ru) => {
    langElements.forEach (item => {
        item.textContent = i18Obj['ru'][item.dataset.i18];
        enLang.classList.remove('active_lang');
        ruLang.classList.add('active_lang');
    });
    };
    ruLang.addEventListener('click', getTranslate);

    const getTranslate2 = (en) => {
    langElements.forEach(item => {
        item.textContent = i18Obj['en'][item.dataset.i18];
        enLang.classList.add('active_lang');
        ruLang.classList.remove('active_lang');
    });
    };
    enLang.addEventListener('click', getTranslate2);

    


});