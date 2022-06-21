// resize
window.onresize = function () {
  location.reload();
};

// 로딩
window.addEventListener("load", function () {
  setTimeout(() => {
    loadings();
    setTimeout(() => {
      document.querySelector(".progress__wrap").style.display = "none";
    }, 3000);
  }, 2000);
});

function loadings() {
  gsap.to(".progress", {
    opacity: 0,
    duration: 1.2,
  });

  gsap.to("span.letter.left", {
    y: 100,
    duration: 4,
    delay: 1,
  });

  gsap.to("span.letter.right", {
    y: -100,
    duration: 4,
    delay: 1,
  });

  gsap.to(".progress__wrap", {
    opacity: 0,
    duration: 1.3,
    delay: 2.3,
  });
}

// 시계
var lastHr, lastMin;
function leTime() {
  this.fullDate = new Date();
  this.secs = this.fullDate.getSeconds();
  this.mins = this.fullDate.getMinutes();
  this.hrs = this.fullDate.getHours() % 12;
  return this;
}
function leClock() {
  var sec = document.getElementById("seconds"),
    min = document.getElementById("minutes"),
    hr = document.getElementById("hours");
  if (leTime().secs == 0) {
    TweenMax.to(sec, 0.35, {
      rotation: 360,
      ease: Elastic.easeOut.config(1, 0.4),
      clearProps: "all",
    });
  } else {
    TweenMax.to(sec, 0.35, {
      rotation: leTime().secs * 6,
      ease: Elastic.easeOut.config(1, 0.4),
    });
  }
  if (leTime().mins !== lastMin) {
    if (leTime().mins == 0) {
      TweenMax.to(min, 0.35, {
        rotation: 360,
        ease: Elastic.easeOut.config(1, 0.4),
        clearProps: "all",
      });
    } else {
      TweenMax.to(min, 0.35, {
        rotation: leTime().mins * 6,
        ease: Elastic.easeOut.config(1, 0.4),
      });
    }
  }
  if (leTime().hrs !== lastHr) {
    if (leTime().hrs == 0) {
      TweenMax.to(hr, 0.35, {
        rotation: 360,
        ease: Elastic.easeOut.config(1, 0.4),
        clearProps: "all",
      });
    } else {
      TweenMax.to(hr, 0.35, {
        rotation: leTime().hrs * 30,
        ease: Elastic.easeOut.config(1, 0.4),
      });
    }
  }
  lastHr = leTime().hrs;
  lastMin = leTime().mins;
  setTimeout("leClock()", 1000);
}
window.onload = leClock();
