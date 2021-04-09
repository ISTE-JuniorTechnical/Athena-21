var innerwidth = window.innerWidth;
var expectedwidth = 768;
console.log(innerwidth);
console.log(expectedwidth)



if(innerwidth <= expectedwidth){

    for(let i = 0; i < 4; i++){
        let mainrow = document.getElementsByClassName('mainrow')[i];
        let subrow = document.getElementsByClassName('subrow1')[i];
        mainrow.classList.add('swiper-container');
        subrow.classList.add('swiper-wrapper');
    }

    for (let j = 0; j < 12; j++){

        innerrow = document.getElementsByClassName('innerrow')[j];
        innerrow.classList.add('swiper-slide');
        
    }
}