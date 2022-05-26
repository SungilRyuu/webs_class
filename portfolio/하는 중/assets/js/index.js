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

// 키드 방향 키  막기
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.key || e.keyCode ) > -1) {
        e.preventDefault();
    }
}, false);