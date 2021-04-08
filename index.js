var es1 = document.getElementById('esection1');
var es2 = document.getElementById('esection2');
var es3 = document.getElementById('esection3');
var screenwidth = -(window.innerWidth - 17) + 'px';

var esection1 = () =>{
    es1.style.animation = 'animEsection 2s forwards';
    if(es2.style.marginLeft != screenwidth){
        es2.style.animation = 'animEsection2 2s forwards';
    }
    if(es3.style.marginLeft != screenwidth){
        es3.style.animation = 'animEsection2 2s forwards';
    }
}

var esection2 = () =>{
    es2.style.animation = 'animEsection 2s forwards';
    if(es1.style.marginLeft != screenwidth){
        es1.style.animation = 'animEsection2 2s forwards';
    }
    if(es3.style.marginLeft != screenwidth){
        es3.style.animation = 'animEsection2 2s forwards';
    }

}


var esection3 = () =>{
    es3.style.animation = 'animEsection 2s forwards';
    if(es1.style.marginLeft != screenwidth){
        es1.style.animation = 'animEsection2 2s forwards';
    }
    if(es2.style.marginLeft != screenwidth){
        es2.style.animation = 'animEsection2 2s forwards';
    }
}

