var t=Object.defineProperty,e=(e,n,i)=>((e,n,i)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i)(e,"symbol"!=typeof n?n+"":n,i);import{p as n,P as i,g as s}from"./phaser-K9UTG3GW.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class o extends n.Scene{constructor(){super("Boot")}preload(){this.load.pack("pack","assets/boot-asset-pack.json")}create(){this.scene.start("Preloader")}}class a extends i.Scene{constructor(){super("Game")}editorCreate(){this.add.image(512,384,"background").alpha=.5;const t=this.add.text(513,384,"",{});t.setOrigin(.5,.5),t.text="Make something fun!\nand share it with us:\nsupport@phaser.io",t.setStyle({align:"center",color:"#ffffff",fontFamily:"Arial Black",fontSize:"38px",stroke:"#000000",strokeThickness:8}),this.events.emit("scene-awake")}create(){this.editorCreate(),this.cameras.main.setBackgroundColor(65280),this.input.once("pointerdown",(()=>{this.scene.start("GameOver")}))}}class r extends i.Scene{constructor(){super("GameOver")}editorCreate(){const t=this.add.image(512,384,"background");t.alpha=.5,t.alphaTopLeft=.5,t.alphaTopRight=.5,t.alphaBottomLeft=.5,t.alphaBottomRight=.5;const e=this.add.text(512,384,"",{});e.setOrigin(.5,.5),e.text="Game Over",e.setStyle({align:"center",color:"#ffffff",fontFamily:"Arial Black",fontSize:"64px",stroke:"#000000",strokeThickness:8}),this.events.emit("scene-awake")}create(){this.editorCreate(),this.cameras.main.setBackgroundColor(16711680),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}class c extends Phaser.Scene{constructor(){super("MainMenu"),e(this,"menuOptions",[]),e(this,"selectedIndex",0)}editorCreate(){var t,e,n,i,s,o;this.add.image(512,383,"background"),this.add.image(494,353,"dino_main_menu");const a=this.add.text(267,40,"",{});a.text="Dinosaurs Secret",a.setStyle({fontFamily:"Pixelify Sans",fontSize:"60px",fontStyle:"bold"}),this.events.emit("scene-awake"),["Start Game","Settings","Exit"].forEach(((t,e)=>{const n=this.add.text(100,150+50*e,t,{fontSize:"32px",fontFamily:"Pixelify Sans",color:"#ffffff"}).setInteractive();n.on("pointerdown",(()=>this.selectOption(e))),this.menuOptions.push(n)})),this.updateMenu(),null==(e=null==(t=null==this?void 0:this.input)?void 0:t.keyboard)||e.on("keydown-UP",this.navigateUp,this),null==(i=null==(n=null==this?void 0:this.input)?void 0:n.keyboard)||i.on("keydown-DOWN",this.navigateDown,this),null==(o=null==(s=null==this?void 0:this.input)?void 0:s.keyboard)||o.on("keydown-ENTER",this.activateOption,this)}create(){this.input.once("pointerdown",(()=>{this.scene.start("Game")})),this.editorCreate()}updateMenu(){this.menuOptions.forEach(((t,e)=>{t.setStyle({color:e===this.selectedIndex?"#ffff00":"#ffffff"})}))}navigateUp(){this.selectedIndex=(this.selectedIndex-1+this.menuOptions.length)%this.menuOptions.length,this.updateMenu()}navigateDown(){this.selectedIndex=(this.selectedIndex+1)%this.menuOptions.length,this.updateMenu()}activateOption(){this.selectOption(this.selectedIndex)}selectOption(t){switch(this.menuOptions[t].text){case"Start Game":this.startGame();break;case"Settings":this.openSettings();break;case"Exit":this.exitGame()}}startGame(){console.log("Starting game...")}openSettings(){console.log("Opening settings...")}exitGame(){console.log("Exiting game...")}}var h,l={exports:{}};h=l,function(){function t(t,e,n){return t.call.apply(t.bind,arguments)}function e(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function n(i,s,o){return(n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:e).apply(null,arguments)}var i=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var o=!!window.FontFace;function a(t,e,n,i){if(e=t.c.createElement(e),n)for(var s in n)n.hasOwnProperty(s)&&("style"==s?e.style.cssText=n[s]:e.setAttribute(s,n[s]));return i&&e.appendChild(t.c.createTextNode(i)),e}function r(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),s=0;s<e.length;s+=1){for(var o=!1,a=0;a<i.length;a+=1)if(e[s]===i[a]){o=!0;break}o||i.push(e[s])}for(e=[],s=0;s<i.length;s+=1){for(o=!1,a=0;a<n.length;a+=1)if(i[s]===n[a]){o=!0;break}o||e.push(i[s])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(t,e){for(var n=t.className.split(/\s+/),i=0,s=n.length;i<s;i++)if(n[i]==e)return!0;return!1}function u(t,e,n){function i(){l&&s&&c&&(l(h),l=null)}e=a(t,"link",{rel:"stylesheet",href:e,media:"all"});var s=!1,c=!0,h=null,l=n||null;o?(e.onload=function(){s=!0,i()},e.onerror=function(){s=!0,h=Error("Stylesheet failed to load"),i()}):setTimeout((function(){s=!0,i()}),0),r(t,"head",e)}function d(t,e,n,i){var s=t.c.getElementsByTagName("head")[0];if(s){var o=a(t,"script",{src:e}),r=!1;return o.onload=o.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&s.removeChild(o))},s.appendChild(o),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),i||5e3),o}return null}function p(){this.a=0,this.c=null}function g(t){return t.a++,function(){t.a--,v(t)}}function m(t,e){t.c=e,v(t)}function v(t){0==t.a&&t.c&&(t.c(),t.c=null)}function w(t){this.a=t||"-"}function y(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function x(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function b(t){return t.a+t.f}function k(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function S(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function j(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new w("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function O(t){if(t.g){var e=f(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),l(t.f,n,i)}T(t,"inactive")}function T(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,b(n)):t.h[e]())}function _(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=a(this.c,"span",{"aria-hidden":"true"},this.f)}function E(t){r(t.c,"body",t.a)}function P(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(t.c)+";font-style:"+k(t)+";font-weight:"+t.f+"00;"}function N(t,e,n,i,s,o){this.g=t,this.j=e,this.a=i,this.c=n,this.f=s||3e3,this.h=o||void 0}function A(t,e,n,i,s,o,a){this.v=t,this.B=e,this.c=n,this.a=i,this.s=a||"BESbswy",this.f={},this.w=s||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=P(t=new y(this.a.c+",serif",b(this.a))),this.g.a.style.cssText=t,t=P(t=new y(this.a.c+",sans-serif",b(this.a))),this.h.a.style.cssText=t,t=P(t=new y("serif",b(this.a))),this.j.a.style.cssText=t,t=P(t=new y("sans-serif",b(this.a))),this.m.a.style.cssText=t,E(this.g),E(this.h),E(this.j),E(this.m)}w.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},N.prototype.start=function(){var t=this.c.o.document,e=this,n=i(),s=new Promise((function(s,o){!function a(){i()-n>=e.f?o():t.fonts.load(function(t){return k(t)+" "+t.f+"00 300px "+x(t.c)}(e.a),e.h).then((function(t){1<=t.length?s():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,n){o=setTimeout(n,e.f)}));Promise.race([a,s]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var B={D:"serif",C:"sans-serif"},F=null;function I(){if(null===F){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return F}function M(t,e,n){for(var i in B)if(B.hasOwnProperty(i)&&e===t.f[B[i]]&&n===t.f[B[i]])return!0;return!1}function G(t){var e,s=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(e=s===t.f.serif&&o===t.f["sans-serif"])||(e=I()&&M(t,s,o)),e?i()-t.A>=t.w?I()&&M(t,s,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?L(t,t.v):L(t,t.B):function(t){setTimeout(n((function(){G(this)}),t),50)}(t):L(t,t.v)}function L(t,e){setTimeout(n((function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),e(this.a)}),t),0)}function W(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),G(this)};var D=null;function U(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&l(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):O(t.a))}function z(t){this.j=t,this.a=new _,this.h=0,this.f=this.g=!0}function R(t,e,i,s,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=s||{};if(0===i.length&&a)O(e.a);else{e.f+=i.length,a&&(e.j=a);var c,h=[];for(c=0;c<i.length;c++){var f=i[c],u=r[f.c],d=e.a,p=f;if(d.g&&l(d.f,[d.a.c("wf",p.c,b(p).toString(),"loading")]),T(d,"fontloading",p),d=null,null===D)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=p?42<parseInt(p[1],10):!g}else D=!1;d=D?new N(n(e.g,e),n(e.h,e),e.c,f,e.s,u):new A(n(e.g,e),n(e.h,e),e.c,f,e.s,t,u),h.push(d)}for(c=0;c<h.length;c++)h[c].start()}}),0)}function $(t,e){this.c=t,this.a=e}function q(t,e){this.c=t,this.a=e}function H(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}W.prototype.g=function(t){var e=this.a;e.g&&l(e.f,[e.a.c("wf",t.c,b(t).toString(),"active")],[e.a.c("wf",t.c,b(t).toString(),"loading"),e.a.c("wf",t.c,b(t).toString(),"inactive")]),T(e,"fontactive",t),this.m=!0,U(this)},W.prototype.h=function(t){var e=this.a;if(e.g){var n=f(e.f,e.a.c("wf",t.c,b(t).toString(),"active")),i=[],s=[e.a.c("wf",t.c,b(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,b(t).toString(),"inactive")),l(e.f,i,s)}T(e,"fontinactive",t),U(this)},z.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],s=n.timeout;!function(t){t.g&&l(t.f,[t.a.c("wf","loading")]),T(t,"loading")}(e),i=function(t,e,n){var i,s=[];for(i in e)if(e.hasOwnProperty(i)){var o=t.c[i];o&&s.push(o(e[i],n))}return s}(t.a,n,t.c);var o=new W(t.c,e,s);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){R(t,o,e,n,i)}))}(this,new j(this.c,t),t)},$.prototype.load=function(t){function e(){if(o["__mti_fntLst"+i]){var n,s=o["__mti_fntLst"+i](),a=[];if(s)for(var r=0;r<s.length;r++){var c=s[r].fontfamily;null!=s[r].fontStyle&&null!=s[r].fontWeight?(n=s[r].fontStyle+s[r].fontWeight,a.push(new y(c,n))):a.push(new y(c))}t(a)}else setTimeout((function(){e()}),50)}var n=this,i=n.a.projectId,s=n.a.version;if(i){var o=n.c.o;d(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(s?"?v="+s:""),(function(s){s?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},e())})).id="__MonotypeAPIScript__"+i}else t([])},q.prototype.load=function(t){var e,n,i=this.a.urls||[],s=this.a.families||[],o=this.a.testStrings||{},a=new p;for(e=0,n=i.length;e<n;e++)u(this.c,i[e],g(a));var r=[];for(e=0,n=s.length;e<n;e++)if((i=s[e].split(":"))[1])for(var c=i[1].split(","),h=0;h<c.length;h+=1)r.push(new y(i[0],c[h]));else r.push(new y(i[0]));m(a,(function(){t(r,o)}))};var K="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},J={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Q={i:"i",italic:"i",n:"n",normal:"n"},Y=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Z(t,e){this.c=t,this.a=e}var tt={Arimo:!0,Cousine:!0,Tinos:!0};function et(t,e){this.c=t,this.a=e}function nt(t,e){this.c=t,this.f=e,this.a=[]}Z.prototype.load=function(t){var e=new p,n=this.c,i=new H(this.a.api,this.a.text),s=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var s=e[i].split(":");3==s.length&&t.f.push(s.pop());var o="";2==s.length&&""!=s[1]&&(o=":"),t.a.push(s.join(o))}}(i,s);var o=new V(s);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),s=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var a;if(a=[],r=i[1])for(var r,c=(r=r.split(",")).length,h=0;h<c;h++){var l;if((l=r[h]).match(/^[\w-]+$/))if(null==(f=Y.exec(l.toLowerCase())))l="";else{if(l=null==(l=f[2])||""==l?"n":Q[l],null==(f=f[1])||""==f)f="4";else var f=J[f]||(isNaN(f)?"4":f.substr(0,1));l=[l,f].join("")}else l="";l&&a.push(l)}0<a.length&&(o=a),3==i.length&&(a=[],0<(i=(i=i[2])?i.split(","):a).length&&(i=X[i[0]])&&(t.c[s]=i))}for(t.c[s]||(i=X[s])&&(t.c[s]=i),i=0;i<o.length;i+=1)t.a.push(new y(s,o[i]))}}(o),u(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),g(e)),m(e,(function(){t(o.a,o.c,tt)}))},et.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?d(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],s=0;s<e.length;s+=2)for(var o=e[s],a=e[s+1],r=0;r<a.length;r++)i.push(new y(o,a[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(i)}}),2e3):t([])},nt.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var s=0,o=n.fonts.length;s<o;++s){var a=n.fonts[s];i.a.push(new y(a.name,S("font-weight:"+a.weight+";font-style:"+a.style)))}t(i.a)},d(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var it=new z(window);it.a.c.custom=function(t,e){return new q(e,t)},it.a.c.fontdeck=function(t,e){return new nt(e,t)},it.a.c.monotype=function(t,e){return new $(e,t)},it.a.c.typekit=function(t,e){return new et(e,t)},it.a.c.google=function(t,e){return new Z(e,t)};var st={load:n(it.load,it)};h.exports?h.exports=st:(window.WebFont=st,window.WebFontConfig&&it.load(window.WebFontConfig))}();const f=s(l.exports);class u extends i.Loader.File{constructor(t,e,n="google"){super(t,{type:"webfont",key:e.toString()}),this.fontNames=Array.isArray(e)?e:[e],this.service=n}load(){const t={active:()=>{this.loader.nextFile(this,!0)}};if("google"!==this.service)throw new Error("Unsupported font service");t.google={families:this.fontNames},f.load(t)}}class d extends i.Scene{constructor(){super("Preloader"),e(this,"progressBar")}editorCreate(){this.add.image(512,384,"background");const t=this.add.rectangle(512,384,468,32);t.isFilled=!0,t.fillColor=14737632,t.isStroked=!0,this.progressBar=t,this.events.emit("scene-awake")}init(){this.editorCreate();const t=this.add.rectangle(this.progressBar.x-this.progressBar.width/2+4,this.progressBar.y,4,28,16777215);this.load.on("progress",(e=>{t.width=4+460*e}))}preload(){this.load.pack("preload","assets/preload-asset-pack.json"),this.load.addFile(new u(this.load,"Pixelify Sans:wght@400..700"))}create(){this.scene.start("MainMenu")}}const p={type:Phaser.AUTO,width:1024,height:768,parent:"game-container",backgroundColor:"#028af8",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[o,d,c,a,r]};new n.Game(p);