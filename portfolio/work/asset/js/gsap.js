gsap.registerPlugin(ScrollTrigger);
const pageContents = document.getElementById("main");
const scroller = new LocomotiveScroll({
    el: pageContents,
    smooth: true
});
scroller.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(pageContents, {
    scrollTop(value) {
        return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContents.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
    let sec7WrapWidth = document.querySelector("#project").offsetWidth;
    console.log(`${sec7WrapWidth}일`)
    let horizontal6 = sec7WrapWidth - window.innerWidth;
    console.log(`${window.innerWidth}이`)
    console.log(`${horizontal6}삼`)
    gsap.to("#section7 #project", {
        scrollTrigger: {
            scroller: pageContents,
            scrub: true,
            trigger: "#section7",
            pin: true,
            start: "top top",
            markers: true,
            end: sec7WrapWidth
        },
        x: -horizontal6,
        ease: "none"
    });
    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();
});


