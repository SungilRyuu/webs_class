var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var ww = window.innerWidth;
var wh = window.innerHeight;

var hearts = [];
function init(){
  requestAnimationFrame(render);
  
  canvas.width = ww;
  canvas.height = wh;
  
  for(var i=0;i<150;i++){
    hearts.push(new Heart());
  }
}

function Heart(){
  this.x = Math.random()*ww;
  this.y = Math.random()*wh;
  this.opacity = (Math.random()*0.5)+0.5;
  this.vel = {
    x:(Math.random()-0.5)*4,
    y:(Math.random()-0.5)*4
  };
  this.targetScale = (Math.random()*0.15)+0.02;
  this.scale = this.targetScale * Math.random();
}
Heart.prototype.update = function(){
  this.x += this.vel.x;
  this.y += this.vel.y;
  
  this.scale += (this.targetScale -this.scale)*0.01;
  if(this.x - this.width > ww || this.x+this.width < 0){
    this.scale = 0;
    this.x = Math.random()*ww;
  }
  if(this.y - this.height > wh || this.y+this.height < 0){
    this.scale = 0;
    this.y = Math.random()*wh;
  }
  this.width  =473.8*this.scale;
  this.height  =408.6*this.scale;
}
Heart.prototype.draw = function(){
  ctx.globalAlpha = this.opacity;
  ctx.drawImage(heartImage, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
}

function render(){
  ctx.clearRect(0,0,ww, wh);
  // ctx.globalAlpha = 1;
  // ctx.fillStyle = "rgba(255,255,255,0.3)";
  // ctx.fillRect(0,0,ww, wh);
  for(var i=0;i<150;i++){
    hearts[i].update();
    hearts[i].draw();
  }
  requestAnimationFrame(render);
}

var heartImage = new Image();
heartImage.onload = init;
heartImage.src = "../assets/img/harry.png";

window.addEventListener("resize", function(){
  ww =  window.innerWidth;
  wh =  window.innerHeight;
})