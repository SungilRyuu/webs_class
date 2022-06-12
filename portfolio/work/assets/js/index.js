// // 로딩
function loadings(){
  setTimeout(() => {
    gsap.to("#loader-wrapper", {
      opacity: 0,
    })
    setTimeout(() => {
      document.querySelector("#loader-wrapper").classList.add("loaded");
    }, 100);
  }, 3000);
}

window.onload = loadings();

// 시계
    var lastHr,
    lastMin;
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
            clearProps: "all"
        });
    } else {
        TweenMax.to(sec, 0.35, {
            rotation: leTime().secs * 6,
            ease: Elastic.easeOut.config(1, 0.4)
        });
    }
    if (leTime().mins !== lastMin) {
        if (leTime().mins == 0) {
            TweenMax.to(min, 0.35, {
                rotation: 360,
                ease: Elastic.easeOut.config(1, 0.4),
                clearProps: "all"
            });
        } else {
            TweenMax.to(min, 0.35, {
                rotation: leTime().mins * 6,
                ease: Elastic.easeOut.config(1, 0.4)
            });
        }
    }
    if (leTime().hrs !== lastHr) {
        if (leTime().hrs == 0) {
            TweenMax.to(hr, 0.35, {
                rotation: 360,
                ease: Elastic.easeOut.config(1, 0.4),
                clearProps: "all"
            });
        } else {
            TweenMax.to(hr, 0.35, {
                rotation: leTime().hrs * 30,
                ease: Elastic.easeOut.config(1, 0.4)
            });
        }
    }
    lastHr = leTime().hrs;
    lastMin = leTime().mins;
    setTimeout("leClock()", 1000);
}
window.onload = leClock();

// 메일 보내기
const prevMail = document.querySelector(".sec10__body p");
const formMail = document.querySelector(".mail");
const closeMail = document.querySelector(".mail__header .close")

prevMail.addEventListener("click", () => {
  formMail.style.display = "block";
})
closeMail.addEventListener("click", () => {
  formMail.style.display = "none";
})

// 마우스
document.querySelector("#section10").addEventListener("mousemove", (e) => {
  let mousePageX = e.pageX;
  let windowWidth = window.outerWidth;
  let centerPage = windowWidth/2 - mousePageX;

  gsap.to(".games", {duration: 0.3, x: centerPage/10});
})



// 고래
    const canvas = document.getElementById("canvas");
    const whale = document.getElementById("whale");
    const eyeOpen = document.getElementById("eye_open");
    const eyeClosed = document.getElementById("eye_closed");
    const waves = document.querySelectorAll(".wave");
    const sea = document.querySelector(".wavy-line");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];
    const colors = [
      "#1B1184",
      "#5260AA",
      "#7888BF",
      "#9BB0D4",
      "#C1D6E8",
      "#E5F2F4"
    ];
    const gravity = 0.08;
    let isShowerOn = false;
    
    whale.addEventListener("click", (e) => {
      makeShower();
    });
    
    const initParticles = () => {
      for (var i = 0; i < 100; i++) {
        setTimeout(createParticle, 25 * i, i);
      }
    };
    
    // resize
    window.addEventListener("resize", resize);
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    
    const createParticle = () => {
      const x = width * 0.5 - 17;
      const y = height * 0.5 - 70;
      const vx = -1.5 + Math.random() * 3;
      const vy = Math.random() * -8;
      const size = 4 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const life = 7 + Math.random() * 9;
      const opacity = 0.5 + Math.random() * 0.5;
      const p = new Particle(x, y, vx, vy, size, color, opacity, life);
      particles.push(p);
    };
    
    function Particle(x, y, vx, vy, size, color, opacity, life) {
      this.update = function (i) {
        vy += gravity;
        x += vx;
        y += vy;
        life -= 0.2;
        if (particles[i].remove() === true) {
          particles.splice(i, 1);
        }
        this.draw();
      };
    
      this.remove = function () {
        return life <= 0;
      };
    
      this.draw = function () {
        ctx.beginPath();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      };
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update(i);
      }
      if (particles.length > 0) {
        requestAnimationFrame(animate);
      } else {
        isShowerOn = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        initParticles();
      }
    };
    
    const addClasses = () => {
      whale.classList.add("shake");
      eyeOpen.classList.add("is-hidden");
      sea.classList.add("animate-sea");
      waves.forEach((wave) => {
        wave.classList.add("animate-wave-forwards");
      });
    };
    
    const removeClasses = () => {
      whale.classList.remove("shake");
      eyeOpen.classList.remove("is-hidden");
      sea.classList.remove("animate-sea");
      waves.forEach((wave) => {
        wave.classList.remove("animate-wave-forwards");
      });
    };
    
    const makeShower = () => {
      if (!isShowerOn) {
        isShowerOn = true;
        animate();
        addClasses();
        setTimeout(removeClasses, 2000);
      }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
      initParticles();
    });

