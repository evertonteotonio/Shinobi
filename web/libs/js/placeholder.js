(function($){!function(t,e){"object"==typeof module&&module.exports?module.exports=e(t):t.placeholder=e(t)}("undefined"!=typeof window?window:this,function(){function t(t){c&&u||(c=document.createElement("canvas"),u=c.getContext("2d"));var e=parseInt(t.a[0]),n=parseInt(t.a[1]);c.width=e,c.height=n,u.clearRect(0,0,e,n),u.fillStyle=t.c,u.fillRect(0,0,e,n),u.fillStyle=t.d,u.font=t.e+" normal "+t.f+" "+(t.g||100)+"px "+t.h;var r=1;if(""===t.g){var o=.7*e,l=.7*n,i=u.measureText(t.b).width,a=100;r=Math.min(o/i,l/a)}return u.translate(e/2,n/2),u.scale(r,r),u.textAlign="center",u.textBaseline="middle",u.fillText(t.b,0,0),c}function e(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}function n(t){t=t||{};var n=t.size||"128x128",r=t.text||n,o=t.bgcolor||e(),l=t.color||e(),i=t.fstyle||"normal",a=t.fweight||"bold",c=t.fsize||"",u=t.ffamily||"consolas",f={};return n=n.split("x"),2!==n.length&&(n=[128,128]),f.a=n,f.b=r,f.c=o,f.d=l,f.e=i,f.f=a,f.g=c,f.h=u,t=null,f}function r(e){return e=n(e),t(e)}function o(t){return r(t).toDataURL()}function l(t,e,n){return t.getAttribute(e)||n}function i(t){var e,n={},r=t.split("&");for(var o in r){e=r[o].split("=");try{n[e[0]]=decodeURIComponent(e[1])}catch(l){n[e[0]]=e[1]}}return n}function a(t){for(var e,n,r=document.querySelectorAll("img.placeholder"),a=0;a<r.length;a++)e=r[a],!t&&l(e,f,"")||(n=i(l(e,"options","")),e.setAttribute("src",o(n)),e.setAttribute(f,"1"))}var c,u,f="placeholder-rendered";return a(),{getData:o,getCanvas:r,render:a}});})(jQuery)
placeholder.plcimg=function(k,o){o={size:'200x200',bgcolor:'#0d78bd',color:'#fff',text:'CC',fsize:'40',ffamily:'Segoe UI'};if(typeof k==='string'){o.text=k;};if(typeof k==='object'){$.each(k,function(n,v){o[n]=v;})};return o;};
