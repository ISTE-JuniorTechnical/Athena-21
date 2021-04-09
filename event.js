if(window.innerWidth <= 768 + 'px'){
    for(let i = 0; i < 4; i++){
        let mainrow = document.getElementsByClassName('mainrow')[i];
        let subrow = document.getElementsByClassName('subrow1')[i];
        let innerrow = document.getElementsByClassName('innerrow')[i];
        mainrow.classList.add('swiper-container');
        subrow.classList.add('swiper-wrapper');
        innerrow.classList.add('swiper-slide');
    }
}