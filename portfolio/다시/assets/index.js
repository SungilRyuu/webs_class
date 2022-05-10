// 괄호로 감싼 다음, 괄호를 쓰면 즉시실행함수 ()() -> (() => {})()

(() => {

    let yOffset = 0; //window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; //이전 스크롤들의 합
    let currentScene = 0; // 현재 활성화된 스크롤 섹션
    let enterNewScene = false; // 새로운 scene이 시작된 순간 true가 됨

    // 1. 스크롤 높이 정보를 미리 스크립트로 잡아 준다
    const sceneInfo = [
        {
            // 0
            type: 'video',
            heightNum: 4, //브라우저 높이의 3배로 셋팅(heightNum)
            scrollHeight: 0,
            objs : {
                container: document.querySelector('#intro .intro1'), //인트로1 높이 정함
                messageA: document.querySelector('.intro1__a'), //프론트엔드 개발자<br> 포트폴리오
                messageB: document.querySelector('.intro1__b'), //포트폴리오에<br>모든 걸 쏟아붓다
                messageC: document.querySelector('.intro1__c'), //배운 모든 것이<br>이 포트폴리오 안에
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: []
            },
            values : {
                videoImageCount: 100,
                imageSequence: [1, 100],
                canvas_opacity : [1, 1, {start: 0.9, end:1 }],
                messageB_opacity_in: [0, 1, {start: 0.15, end: 0.30}],
                messageB_opacity_out: [1, 0, {start: 0.4, end: 0.5}],
                messageB_translateY_in: [20, 0, {start: 0.15, end: 0.35}],
                messageB_translateY_out: [0, -20, {start: 0.35, end: 0.5}],
                messageC_opacity_in: [0, 1, {start: 0.5, end: 0.60}],
                messageC_opacity_out: [1, 0, {start: 0.7, end: 0.8}],
                messageC_translateY_in: [20, 0, {start: 0.5, end: 0.65}],
                messageC_translateY_out: [0, -20, {start: 0.65, end: 0.8}],
            },
        },
        {
            // 1
            type: 'letter',
            heightNum: 3, //브라우저 높이의 3배로 셋팅(heightNum)
            scrollHeight: 0,
            objs : {
                container: document.querySelector('#intro .intro2'), //인트로1 높이 정함
                canvas: document.querySelector('#video-canvas-1'),
                context: document.querySelector('#video-canvas-1').getContext('2d'),
                videoImages: []
            },
            values : {
                videoImageCount: 237,
                imageSequence: [1, 237],
            },
        },
    ];

    // 영상을 '스크롤 화' 하기
    function setCanvasImages(){
        let imgElem;
        for(let i = 1; i <= sceneInfo[0].values.videoImageCount; i++){
            imgElem = new Image();
            imgElem.src = `assets/videos/night/img${i}.jpg`;
            sceneInfo[0].objs.videoImages.push(imgElem);
        }

        let imgElem1;
        for(let i = 1; i <= sceneInfo[1].values.videoImageCount; i++){
            imgElem1 = new Image();
            imgElem1.src = `assets/videos/night2/img${i}.jpg`;
            sceneInfo[1].objs.videoImages.push(imgElem1);
        }
    }
    setCanvasImages();

    function setLayout(){
        // setLayout: 각 스크롤 섹션의 높이 세팅
        for(let i = 0 ; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`; 
            // 원하는 크기 만큼 * n을 해서 스크롤 높이를 늘려주고, 그 값을 다시 저장함
        }
        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for(let i = 0 ; i < sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

        const heightRatio = window.innerHeight / 1080;
        sceneInfo[0].objs.canvas.style.transform = `translate3D(-50%, -50%, 0) scale(${heightRatio})`;
        sceneInfo[1].objs.canvas.style.transform = `translate3D(-50%, -50%, 0) scale(${heightRatio})`;
    }

    // 계산하기
    function calcValues(values, currentYOffset){
        let rv;
        const scrollHeight = sceneInfo[currentScene].scrollHeight; // scrollHeight: 현재 아티클의 스크롤 길이
        const scrollRatio = currentYOffset / scrollHeight; // 스크롤 비율(비율로 계산하는게 가장 편함)

        if(values.length === 3){
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd){
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if(currentYOffset < partScrollStart) {
                rv = values[0];
            } else if( currentYOffset > partScrollEnd){
                rv = values[1];
            }
        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return rv;
    }

    // 글씨들에 애니메이션 삽입
    function playAnimation(){
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        switch(currentScene){
            case 0:
                let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
                objs.context.drawImage(objs.videoImages[sequence], 0, 0);
                objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYOffset);

                if(scrollRatio <= 0.34){
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in,currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out,currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                }

                if(scrollRatio <= 0.65){
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in,currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out,currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                }
                break;
            case 1:
                let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
                objs.context.drawImage(objs.videoImages[sequence2], 0, 0);
                break;
        }
    }

    function scrollLoop(){
        enterNewScene = false;
        prevScrollHeight = 0;
        for(let i = 0 ; i < currentScene ; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if(yOffset <= prevScrollHeight){
            enterNewScene = true;
            if(currentScene === 0) return;
            currentScene--; 
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        console.log("yOffset : " + yOffset);
        console.log("prevScrollHeight : " + prevScrollHeight);

        if(enterNewScene) return;
        playAnimation();
    }

    window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })

    window.addEventListener("load", () => {
        setLayout();
        sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
        // sceneInfo[1].objs.context.drawImage(sceneInfo[1].objs.videoImages[0], 0, 0);
    });

    window.addEventListener("resize", setLayout);

    setLayout();



})();