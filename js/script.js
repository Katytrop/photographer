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

    // FORMA // 

    const forms = document.querySelectorAll('form');
    const modal = document.querySelector('.modal');
    const message = {
        loading: "icons/spinner.svg",
        success: "Спасибо, мы скоро с вами свяжемя!",
        failure: "Что то пошло не так..."
    };

    function openModal () {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // убираем скролл
    } 
    document.querySelector('.btn_contacts').addEventListener('click', openModal);

    function closeModal () {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    modal.addEventListener('click', (event) => { // нажатие на темную область
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) { //если нажимаем esc И если модалка открыта
            closeModal();
        }
    });

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img'); // создаем ответ пользователю
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;`; 
            form.insertAdjacentElement('afterend', statusMessage); // добавляем в конец формы

            const formData = new FormData(form); // всегда прописывать у формы name

            const object = {}; // переводим формдату в формат json
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                openModal();
                statusMessage.remove();
            }).catch(() => {
            }).finally(() => {
                form.reset(); // очистить инпуты после заполнения и отправки
            });
        });
    }

    // burger
    const burger = document.querySelector('.burger'),
          overlay = document.querySelector('.promo__overlay'),
          firstLine = document.querySelector('.first'),
          lastLine = document.querySelector('.last'),
          middleLine = document.querySelector('.middle'),
          menu = document.querySelector('.promo__nav');

    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        firstLine.classList.add('active');
        lastLine.classList.add('active');
        middleLine.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        firstLine.classList.remove('active');
        lastLine.classList.remove('active');
        middleLine.classList.remove('active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', openMenu);
    menu.addEventListener("click", function(e) {
        if((e.target) && (e.target.nodeName == "UL" || e.target.nodeName == "LI" ||  e.target.nodeName == "A" || e.target.classList.contains('promo__overlay'))) {
            closeMenu();
        }
    });

});

// scroll 
let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll)

    function animScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if(!animItem.classList.contains('anim-nohide')) { // убираем анимаию при возвращении назад
                    animItem.classList.remove('active');
                }
            }
            
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animScroll();
    }, 300)
    
}