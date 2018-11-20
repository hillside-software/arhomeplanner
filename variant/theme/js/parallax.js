function mr_parallax(){"use strict";function a(a){for(var b=0;b<a.length;b++)if("undefined"!=typeof document.body.style[a[b]])return a[b];return null}function b(){var a=0;return a=j()?jQuery(".viu").find("nav:first").outerHeight(!0):jQuery(document).find("nav:first").outerHeight(!0)}function c(a,b,c,d){var e=a-1;return e/=d,a/=d,e--,a--,c*(a*a*a*a*a+1)+b-(c*(e*e*e*e*e+1)+b)}function d(){if(D){for(var a=k.length,b=f();a--;)e(k[a],b);D=!1}q&&(B+=-t*c(s,0,y,A),(B>z||-z>B)&&(C.scrollBy(0,B),B=0),s++,s>A&&(s=0,q=!1,r=!0,t=0,u=0,v=0,B=0)),l(d)}function e(a,b){var c,d=j();d?
// Do this for Variant
b+o>a.elemTop&&b<a.elemBottom&&(a.isFirstSection?(c="translate3d(0, "+b/2+"px, 0)",a.imageHolder.style[n]=c):(c="translate3d(0, "+(b-a.elemTop-p)/2+"px, 0)",a.imageHolder.style[n]=c)):b+o>a.elemTop&&b<a.elemBottom&&(a.isFirstSection?(c="translate3d(0, "+b/2+"px, 0)",a.imageHolder.style[n]=c):(c="translate3d(0, "+(b+o-a.elemTop)/2+"px, 0)",a.imageHolder.style[n]=c))}function f(){return C!=window?C.scrollTop:0===document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop}function g(){D=!0}function h(a){a.preventDefault&&a.preventDefault(),t=a.notRealWheel?-a.deltaY/4:1==a.deltaMode?-a.deltaY/3:100===Math.abs(a.deltaY)?-a.deltaY/120:-a.deltaY/40,t=-w>t?-w:t,t=t>w?w:t,q=!0,s=x}function i(a){var b={};return a&&"[object Function]"===b.toString.call(a)}function j(){return"undefined"==typeof window.mr_variant?!1:!0}var k,l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,m=["transform","msTransform","webkitTransform","mozTransform","oTransform"],n=a(m),o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),p=0,q=!1,r=!0,s=0,t=0,u=0,v=0,w=2,x=4,y=300,z=1,A=30,B=0,C=window,D=(j(),!1),E=this;jQuery(document).ready(function(){E.documentReady()}),jQuery(window).load(function(){E.windowLoad()}),this.getScrollingState=function(){return s>0?!0:!1},this.documentReady=function(a){return o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)?jQuery(".parallax").removeClass("parallax"):l&&(E.profileParallaxElements(),E.setupParallax()),i(a)?void a():void 0},this.windowLoad=function(){o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),p=b(),window.mr_parallax.profileParallaxElements()},this.setupParallax=function(){j()&&(C=jQuery(".viu").get(0),"undefined"!=typeof C&&(C.scrollBy=function(a,b){this.scrollTop+=b,this.scrollLeft+=a})),"undefined"!=typeof C&&(C.addEventListener("scroll",g,!1),window.addWheelListener(C,h,!1),window.addEventListener("resize",function(){o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),p=b(),E.profileParallaxElements()},!1),d())},this.profileParallaxElements=function(){k=[],p=b();var a=j(),c=".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder";a&&(c=".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder"),jQuery(c).each(function(b){var c=jQuery(this).closest(".parallax"),d=a?c.position().top:c.offset().top;k.push({section:c.get(0),outerHeight:c.outerHeight(),elemTop:d,elemBottom:d+c.outerHeight(),isFirstSection:c.is(":nth-of-type(1)")?!0:!1,imageHolder:jQuery(this).get(0)}),a?a&&(c.is(":nth-of-type(1)")?E.mr_setTranslate3DTransform(jQuery(this).get(0),0===f()?0:f()/2):E.mr_setTranslate3DTransform(jQuery(this).get(0),(f()-d-p)/2)):c.is(":nth-of-type(1)")?E.mr_setTranslate3DTransform(jQuery(this).get(0),0===f()?0:f()/2):E.mr_setTranslate3DTransform(jQuery(this).get(0),(f()+o-d)/2)})},this.mr_setTranslate3DTransform=function(a,b){a.style[n]="translate3d(0, "+b+"px, 0)"}}window.mr_parallax=new mr_parallax,
// creates a global "addWheelListener" method
function(a,b){function c(b,c,g,h){b[d](f+c,"wheel"==e?g:function(b){!b&&(b=a.event);
// create a normalized event object
var c={
// keep a ref to the original event object
originalEvent:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1}};
// it's time to fire the callback
// calculate deltaY (and deltaX) according to the event
// Webkit also support wheelDeltaX
return"mousewheel"==e?(c.deltaY=-1/40*b.wheelDelta,b.wheelDeltaX&&(c.deltaX=-1/40*b.wheelDeltaX)):c.deltaY=b.detail/3,g(c)},h||!1)}var d,e,f="";
//var onwheel;
// detect event model
a.addEventListener?d="addEventListener":(d="attachEvent",f="on"),e="onwheel"in b.createElement("div")?"wheel":"undefined"!=typeof b.onmousewheel?"mousewheel":"DOMMouseScroll",a.addWheelListener=function(a,b,d){c(a,e,b,d),"DOMMouseScroll"==e&&c(a,"MozMousePixelScroll",b,d)}}(window,document);