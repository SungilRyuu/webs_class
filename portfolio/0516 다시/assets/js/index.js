var s = skrollr.init();

function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
    document.querySelector(".scrollTop").innerText = Math.round(scrollTop);    

    requestAnimationFrame(scroll);
}
scroll();