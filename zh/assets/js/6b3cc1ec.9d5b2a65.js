"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9612],{76769:function(e,n,t){t.r(n);var i=t(67294),o=t(2212),r=t(69365);n.default=function(){var e,n,t=(0,i.useState)("undefined"!=typeof window&&window.innerWidth),a=t[0],s=t[1],d=(0,i.useState)("undefined"!=typeof window&&window.innerWidth),c=(d[0],d[1]),u=(0,i.useRef)(null);return(0,i.useEffect)((function(){var t,i,d,w,f,l;window.addEventListener("resize",m,!1);var h,p=!1,v=!1;function m(t){c(window.innerHeight),s(window.innerWidth),d.setSize(n,e)}a>800?(e=500,n=a/2):(e=500,n=a);var g=new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&p?p&&!v?b():console.log("Loading"):h&&(cancelAnimationFrame(h),v=!1)}))}),{root:null,threshold:.01});function b(){h=requestAnimationFrame(b),f.rotation.x+=.005,f.rotation.y+=.005,l.update(),d.render(i,t),v=!0}return function(a,s){var c=u.current;d=new o.CP7({canvas:c}),t=new o.cPb(75,a/s,.1,100),(l=new r.z(t,d.domElement)).enableZoom=!1;var h=window.innerWidth>768?5:4.5,v=new o.cJO(h,8);t.position.z=2,t.position.x=3,l.update(),i=new o.xsS,d.setSize(n,e),i.background=new o.Ilk(0),w=new o.RSm({wireframe:!1,flatShading:!0}),f=new o.Kj0(v,w),i.add(f),f.position.set(3,0,-9.5),l.target.copy(f.position),l.update(),d.setPixelRatio(window.devicePixelRatio),m(),p=!0}(n,e),g.observe(u.current),function(){d.dispose(),g.disconnect()}}),[]),i.createElement("canvas",{ref:u,width:n,height:e,className:"ossCanvas"})}}}]);