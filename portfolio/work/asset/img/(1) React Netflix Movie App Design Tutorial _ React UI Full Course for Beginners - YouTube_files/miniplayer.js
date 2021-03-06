(function(g){var window=this;'use strict';var u3=function(a){g.V.call(this,{F:"div",L:"ytp-miniplayer-ui"});this.initialized=!1;this.player=a;this.N(a,"minimized",this.ah);this.N(a,"onStateChange",this.FJ)},v3=function(a){g.GI.call(this,a);
this.j=new u3(this.player);this.j.hide();g.qI(this.player,this.j.element,4);a.lf()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(u3,g.V);g.h=u3.prototype;
g.h.eH=function(){this.tooltip=new g.UM(this.player,this);g.J(this,this.tooltip);g.qI(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.BJ(this.player);g.J(this,this.zc);this.Hh=new g.V({F:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Hh);this.Hh.ra(this.element);this.N(this.Hh.element,"click",this.CC);var a=new g.V({F:"button",Aa:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"\ub2eb\uae30"},R:[g.jG()]});g.J(this,a);a.ra(this.Hh.element);this.N(a.element,"click",
this.Nj);a=new g.AZ(this.player,this);g.J(this,a);a.ra(this.Hh.element);this.Zq=new g.V({F:"div",L:"ytp-miniplayer-controls"});g.J(this,this.Zq);this.Zq.ra(this.Hh.element);this.N(this.Zq.element,"click",this.CC);var b=new g.V({F:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.ra(this.Zq.element);a=new g.V({F:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.ra(this.Zq.element);var c=new g.V({F:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.ra(this.Zq.element);this.EQ=
new g.qL(this.player,this,!1);g.J(this,this.EQ);this.EQ.ra(b.element);b=new g.oL(this.player,this);g.J(this,b);b.ra(a.element);this.nextButton=new g.qL(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.ra(c.element);this.Kh=new g.GM(this.player,this);g.J(this,this.Kh);this.Kh.ra(this.Hh.element);this.progressBar=new g.CL(this.player,this);g.J(this,this.progressBar);g.qI(this.player,this.progressBar.element,4);this.sC=new g.V({F:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.sC);g.qI(this.player,
this.sC.element,4);a=new g.V({F:"button",Aa:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"\ub2eb\uae30"},R:[g.jG()]});g.J(this,a);a.ra(this.sC.element);this.N(a.element,"click",this.Nj);a=new g.V({F:"button",Aa:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"\ub2eb\uae30"},R:[g.pG()]});g.J(this,a);a.ra(this.sC.element);this.N(a.element,"click",this.g_);this.N(this.player,"presentingplayerstatechange",this.Uc);this.N(this.player,"appresize",this.ub);this.N(this.player,
"fullscreentoggled",this.ub);this.ub()};
g.h.show=function(){this.me=new g.mn(this.Yr,null,this);this.me.start();this.initialized||(this.eH(),this.initialized=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.progressBar.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.me&&(this.me.dispose(),this.me=void 0);g.V.prototype.hide.call(this);this.player.lf()||(this.initialized&&this.progressBar.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.me&&(this.me.dispose(),this.me=void 0);g.V.prototype.Y.call(this)};
g.h.Nj=function(){this.player.stopVideo();this.player.Ia("onCloseMiniplayer")};
g.h.g_=function(){this.player.playVideo()};
g.h.CC=function(a){if(a.target===this.Hh.element||a.target===this.Zq.element)this.player.S().K("kevlar_miniplayer_play_pause_on_scrim")?g.lF(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.Ia("onExpandMiniplayer")};
g.h.ah=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.lf())};
g.h.Ld=function(){this.progressBar.Rb();this.Kh.Rb()};
g.h.Yr=function(){this.Ld();this.me&&this.me.start()};
g.h.Uc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.h.ub=function(){g.SL(this.progressBar,0,this.player.Wa().getPlayerSize().width,!1);g.FL(this.progressBar)};
g.h.FJ=function(a){this.player.lf()&&(0===a?this.hide():this.show())};
g.h.Zb=function(){return this.tooltip};
g.h.Ff=function(){return!1};
g.h.eg=function(){return!1};
g.h.vy=function(){return!1};
g.h.Ej=function(){return!1};
g.h.zz=function(){};
g.h.Xo=function(){};
g.h.vu=function(){};
g.h.vp=function(){return null};
g.h.Ux=function(){return null};
g.h.Dj=function(){return new g.yk(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.xs=function(a,b,c,d,e){var f=0,k=d=0,l=g.Sk(a);if(b){c=g.un(b,"ytp-prev-button")||g.un(b,"ytp-next-button");var m=g.un(b,"ytp-play-button"),n=g.un(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Qk(b,this.element),k=b.x,f=b.y-12):n&&(k=g.un(b,"ytp-miniplayer-button-top-left"),f=g.Qk(b,this.element),b=g.Sk(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.Wa().getPlayerSize().width;e=f+(e||0);l=g.Ff(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Hm=function(){};
g.h.Wl=function(){return!1};
g.h.Az=function(){};g.w(v3,g.GI);v3.prototype.create=function(){};
v3.prototype.hj=function(){return!1};
v3.prototype.load=function(){this.player.hideControls();this.j.show()};
v3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.FI("miniplayer",v3);})(_yt_player);
