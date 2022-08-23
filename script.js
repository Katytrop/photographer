'use sctict';
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


});