var objectFitImages=function(){"use strict";var t="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var e=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;var i="object-fit"in document.documentElement.style;var r=document.documentElement.getAttribute;var n=document.documentElement.setAttribute;var c=false;function o(t){var i=getComputedStyle(t).fontFamily;var r;var n={};while((r=e.exec(i))!==null){n[r[1]]=r[2]}return n}function a(e,i){var n=o(e);if(!n["object-fit"]||n["object-fit"]==="fill"&&!e[t]){return}var c=i||e.currentSrc||e.src;if(e.srcset){e.srcset=""}if(e[t]){e[t].s=c;if(i){e[t].a=i}}else{e[t]={s:c,a:i||r.call(e,"src")};e.src=t;s(e)}e.style.backgroundImage='url("'+c+'")';e.style.backgroundPosition=n["object-position"]||"center";e.style.backgroundRepeat="no-repeat";if(/scale-down/.test(n["object-fit"])){if(!e[t].i){e[t].i=new Image;e[t].i.src=c}(function a(){if(e[t].i.naturalWidth){if(e[t].i.naturalWidth>e.width||e[t].i.naturalHeight>e.height){e.style.backgroundSize="contain"}else{e.style.backgroundSize="auto"}return}setTimeout(a,100)})()}else{e.style.backgroundSize=n["object-fit"].replace("none","auto").replace("fill","100% 100%")}}function s(e){var i={get:function(){return e[t].s},set:function(i){delete e[t].i;a(e,i);return i}};Object.defineProperty(e,"src",i);Object.defineProperty(e,"currentSrc",{get:i.get})}function u(t,e){window.addEventListener("resize",A.bind(null,t,e))}function l(t){if(t.target.tagName==="IMG"){a(t.target)}}function f(){if(!i){HTMLImageElement.prototype.getAttribute=function(e){if(this[t]&&e==="src"){return this[t].a}return r.call(this,e)};HTMLImageElement.prototype.setAttribute=function(e,i){if(this[t]&&e==="src"){this.src=String(i)}else{n.call(this,e,i)}}}}function A(t,e){var r=!c&&!t;e=e||{};t=t||"img";if(i&&!e.skipTest){return false}if(typeof t==="string"){t=document.querySelectorAll("img")}else if(!t.length){t=[t]}for(var n=0;n<t.length;n++){a(t[n])}if(r){document.body.addEventListener("load",l,true);c=true;t="img"}if(e.watchMQ){delete e.watchMQ;u(t,e)}}A.supportsObjectFit=i;f();return A}();
