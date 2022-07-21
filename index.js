 // Бургер и меню 
  
  $(function() {
      $('.burger').click(function(){
          $('.burger span').toggleClass('active');
       });
  });
  
  $('.burger').click(function(){
    $('#menu').toggleClass('active');
  });
  
  // Секция Portfolio 
  
  const portfolioBtn = document.querySelector('.button2');
  const portfolioBtns = document.querySelector('.button-block');
  const portfolioImage = document.querySelectorAll('.portfolio-image');
  
  function changeImage(event) {
    let btnSeason = event.target.dataset.season;
    if(event.target.classList.contains('button2')) {
      
      portfolioImage.forEach((img, index) => 
      img.src  = `img/${btnSeason}/${index + 1}.jpg`);
    } 
  }
  portfolioBtns.addEventListener('click', changeImage);
  
  // Подсветка кнопки Portfolio
  
  const activeBtn = document.querySelectorAll('.button2');
  
  const hideElement = (element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  }
  const showElement = (element) => {
    if (!element.classList.contains('active')) {
        element.classList.add('active');
    }
  }
  const changeClassActive = (event) => {
    let element = event.target;
  
    activeBtn.forEach(button2 => hideElement(button2));
    showElement(element);
  }
  activeBtn.forEach(button2 => {
    button2.addEventListener('click', (event) => {
      changeClassActive(event)
      })
    })
  
  // Смена на другую тему
  
  const themeIcon = document.querySelector('.change-theme-icon');
  const arrayTheme = ['body','.promo','.logo-icon','.header','.contacts', '.contacts-section','.footer','.ru','.en','textarea','.rss','.git-link','.icon-itm'];
  
  const changeTheme = () => {
    arrayTheme.forEach((element) => {
      document.querySelector(element).classList.toggle('light-theme')
      document.querySelectorAll('.nav-link').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.section-title').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.skills-item').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.button1').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.button2').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.price-cards').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('.icon-itm').forEach(element => element.classList.toggle('light-theme'))
      document.querySelectorAll('input').forEach(element => element.classList.toggle('light-theme'))
      themeIcon.classList.toggle('change');
    })
    }
  themeIcon.addEventListener('click', changeTheme);

  const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

  // Смена языка и переключение его активного класса

const ruLang = document.querySelector('.ru');
const enLang = document.querySelector('.en');
const lang = document.querySelectorAll('[data-i18]');

const getTranslate = (ru) => {
  lang.forEach ((el) => {
    el.textContent = i18Obj['ru'][el.dataset.i18]
    enLang.classList.remove('active');
    ruLang.classList.add('active');
  });
}
ruLang.addEventListener('click', getTranslate);

const getTranslate2 = (en) => {
  lang.forEach((el) => {
    el.textContent = i18Obj['en'][el.dataset.i18]
    enLang.classList.add('active');
    ruLang.classList.remove('active');
  });
}
enLang.addEventListener('click', getTranslate2);