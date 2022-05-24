var s = skrollr.init();

function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
    document.querySelector(".scrollTop").innerText = Math.round(scrollTop);    

    requestAnimationFrame(scroll);
}
scroll();

// 사이즈를 변경하면 재로드
window.onresize = () => {
    location.reload();
}

// intro 횡단보도
const loaders = document.querySelector(".loader");
window.onload = function(){
    setTimeout(() => {
        loaders.classList.remove('loader__active');
    }, 700);
};