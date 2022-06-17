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
    let sec6WrapWidth = document.querySelector("#project").offsetWidth;
    let horizontal6 = sec6WrapWidth - window.innerWidth;
    gsap.to("#horizon #project", {
        scrollTrigger: {
            scroller: pageContents,
            scrub: true,
            trigger: "#horizon",
            pin: true,
            start: "top top",
            // markers: true,
            end: sec6WrapWidth
        },
        x: -horizontal6,
        ease: "none"
    });
    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();
});


