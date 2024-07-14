(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"body {\n  padding-bottom: 50px;\n}\n\n.task {\n  margin-top: 24px;\n  margin-bottom: 80px;\n}\n\n.task-header {\n  margin-bottom: 24px;\n}\n\n.task-header > .task-title,\n.task-header > .alert {\n  height: 40px;\n  line-height: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.task-text {\n  margin-bottom: 32px;\n  padding: 16px;\n  border: 1px solid #d7d9e1;\n  border-radius: 8px;\n}\n\n.task-text > p:last-child {\n  margin-bottom: 0;\n}\n\n.task-image-container {\n  position: relative;\n  margin-bottom: 32px;\n  text-align: center;\n}\n\n.task-answers {\n  margin-bottom: 48px;\n}\n\n.task-variant.form-check {\n  margin-bottom: 8px;\n  padding: 10px 16px 10px 40px;\n  border: 1px solid #d7d9e1;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.task-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem 0;\n  background-color: #ffffff;\n  border-top: 1px solid #D7D9E1;\n  z-index: 100;\n}\n\n.task-footer .page-link {\n  width: 40px;\n}\n\n.task-footer .page-link.active {\n  z-index: 3;\n  color: black;\n  background-color: white;\n  border-color: #2B8217;\n}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},402:e=>{!function(t){if("undefined"!=typeof window){var n=!0,o="",r=0,i="",a=null,c="",u=!1,s={resize:1,click:1},d=128,l=!0,f=1,m="bodyOffset",p=m,h=!0,g="",v={},b=32,y=null,w=!1,E=!1,T="[iFrameSizer]",O=T.length,x="",k={max:1,min:1,bodyScroll:1,documentElementScroll:1},S="child",I=window.parent,M="*",A=0,N=!1,C=null,L=16,j=1,P="scroll",z=P,R=window,F=function(){ie("onMessage function not defined")},D=function(){},q=function(){},B={height:function(){return ie("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return ie("Custom width calculation function not defined"),document.body.scrollWidth}},H={},U=!1;try{var W=Object.create({},{passive:{get:function(){U=!0}}});window.addEventListener("test",ee,W),window.removeEventListener("test",ee,W)}catch(e){}var J,V,Z,X,Y,K,Q,_={bodyOffset:function(){return document.body.offsetHeight+he("marginTop")+he("marginBottom")},offset:function(){return _.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return B.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,ve(_))},min:function(){return Math.min.apply(null,ve(_))},grow:function(){return _.max()},lowestElement:function(){return Math.max(_.bodyOffset()||_.documentElementOffset(),ge("bottom",ye()))},taggedElement:function(){return be("bottom","data-iframe-height")}},$={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return B.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max($.bodyScroll(),$.documentElementScroll())},max:function(){return Math.max.apply(null,ve($))},min:function(){return Math.min.apply(null,ve($))},rightMostElement:function(){return ge("right",ye())},taggedElement:function(){return be("right","data-iframe-width")}},G=(J=we,Y=null,K=0,Q=function(){K=Date.now(),Y=null,X=J.apply(V,Z),Y||(V=Z=null)},function(){var e=Date.now();K||(K=e);var t=L-(e-K);return V=this,Z=arguments,t<=0||t>L?(Y&&(clearTimeout(Y),Y=null),K=e,X=J.apply(V,Z),Y||(V=Z=null)):Y||(Y=setTimeout(Q,t)),X});te(window,"message",(function(s){var f,m={init:function(){var e,f,m;g=s.data,I=s.source,function(){function e(e){return"true"===e}var a=g.substr(O).split(":");x=a[0],r=t!==a[1]?Number(a[1]):r,u=t!==a[2]?e(a[2]):u,w=t!==a[3]?e(a[3]):w,b=t!==a[4]?Number(a[4]):b,n=t!==a[6]?e(a[6]):n,i=a[7],p=t!==a[8]?a[8]:p,o=a[9],c=a[10],A=t!==a[11]?Number(a[11]):A,v.enable=t!==a[12]&&e(a[12]),S=t!==a[13]?a[13]:S,z=t!==a[14]?a[14]:z,E=t!==a[15]?Boolean(a[15]):E}(),re("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;re("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ae,e),F="onMessage"in e?e.onMessage:F,D="onReady"in e?e.onReady:D,M="targetOrigin"in e?e.targetOrigin:M,p="heightCalculationMethod"in e?e.heightCalculationMethod:p,z="widthCalculationMethod"in e?e.widthCalculationMethod:z}function t(e,t){return"function"==typeof e&&(re("Setup custom "+t+"CalcMethod"),B[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),p=t(p,"height"),z=t(z,"width")),re("TargetOrigin for parent set to: "+M)}(),t===i&&(i=r+"px"),ce("margin",(f="margin",-1!==(m=i).indexOf("-")&&(ie("Negative CSS value ignored for "+f),m=""),m)),ce("background",o),ce("padding",c),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),le(),fe(),document.documentElement.style.height="",document.body.style.height="",re('HTML & body height set to "auto"'),re("Enable public methods"),R.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,me()):!1===e&&!0===n&&(n=!1,se("remove"),null!==a&&a.disconnect(),clearInterval(y)),ke(0,0,"autoResize",JSON.stringify(n)),n},close:function(){ke(0,0,"close")},getId:function(){return x},getPageInfo:function(e){"function"==typeof e?(q=e,ke(0,0,"pageInfo")):(q=function(){},ke(0,0,"pageInfoStop"))},moveToAnchor:function(e){v.findTarget(e)},reset:function(){xe("parentIFrame.reset")},scrollTo:function(e,t){ke(t,e,"scrollTo")},scrollToOffset:function(e,t){ke(t,e,"scrollToOffset")},sendMessage:function(e,t){ke(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){p=e,le()},setWidthCalculationMethod:function(e){z=e,fe()},setTargetOrigin:function(e){re("Set targetOrigin: "+e),M=e},size:function(e,t){Ee("size","parentIFrame.size("+(e||"")+(t?","+t:"")+")",e,t)}},function(){function e(e){ke(0,0,e.type,e.screenY+":"+e.screenX)}function t(t,n){re("Add event listener: "+n),te(window.document,t,e)}!0===E&&(t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave"))}(),me(),v=function(){function e(){return{x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}}function n(t){var n=t.getBoundingClientRect(),o=e();return{x:parseInt(n.left,10)+parseInt(o.x,10),y:parseInt(n.top,10)+parseInt(o.y,10)}}function o(e){function o(e){var t=n(e);re("Moving to in page link (#"+r+") at x: "+t.x+" y: "+t.y),ke(t.y,t.x,"scrollToOffset")}var r=e.split("#")[1]||e,i=decodeURIComponent(r),a=document.getElementById(i)||document.getElementsByName(i)[0];t!==a?o(a):(re("In page link (#"+r+") not found in iFrame, so sending to parent"),ke(0,0,"inPageLink","#"+r))}function r(){var e=window.location.hash,t=window.location.href;""!==e&&"#"!==e&&o(t)}function i(){function e(e){function t(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&te(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){te(window,"hashchange",r)}function c(){setTimeout(r,d)}function u(){Array.prototype.forEach&&document.querySelectorAll?(re("Setting up location.hash handlers"),i(),a(),c()):ie("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return v.enable?u():re("In page linking not enabled"),{findTarget:o}}(),Ee("init","Init message from host page"),D(),l=!1,setTimeout((function(){h=!1}),d)},reset:function(){h?re("Page reset ignored by init"):(re("Page size reset by host page"),Oe("resetPage"))},resize:function(){Ee("resizeParent","Parent window requested size check")},moveToAnchor:function(){v.findTarget(N())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=N();re("PageInfoFromParent called from parent: "+e),q(JSON.parse(e)),re(" --")},message:function(){var e=N();re("onMessage called from parent: "+e),F(JSON.parse(e)),re(" --")}};function k(){return s.data.split("]")[1].split(":")[0]}function N(){return s.data.substr(s.data.indexOf(":")+1)}function C(){return s.data.split(":")[2]in{true:1,false:1}}T===(""+s.data).substr(0,O)&&(!1===l?(f=k())in m?m[f]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||C()||ie("Unexpected message ("+s.data+")"):C()?m.init():re('Ignored message of type "'+k()+'". Received before initialization.'))})),te(window,"readystatechange",Se),Se()}function ee(){}function te(e,t,n,o){e.addEventListener(t,n,!!U&&(o||{}))}function ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe(e){return T+"["+x+"] "+e}function re(e){w&&"object"==typeof window.console&&console.log(oe(e))}function ie(e){"object"==typeof window.console&&console.warn(oe(e))}function ae(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],ie("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function ce(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,re("Body "+e+' set to "'+n+'"'))}function ue(e){var t={add:function(t){function n(){Ee(e.eventName,e.eventType)}H[t]=n,te(window,t,n,{passive:!0})},remove:function(e){var t,n,o=H[e];delete H[e],t=e,n=o,window.removeEventListener(t,n,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),re(ne(e.method)+" event listener: "+e.eventType)}function se(e){ue({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),ue({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),ue({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),ue({method:e,eventType:"Input",eventName:"input"}),ue({method:e,eventType:"Mouse Up",eventName:"mouseup"}),ue({method:e,eventType:"Mouse Down",eventName:"mousedown"}),ue({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),ue({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),ue({method:e,eventType:"Touch Start",eventName:"touchstart"}),ue({method:e,eventType:"Touch End",eventName:"touchend"}),ue({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),ue({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),ue({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),ue({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===S&&ue({method:e,eventType:"IFrame Resized",eventName:"resize"})}function de(e,t,n,o){return t!==e&&(e in n||(ie(e+" is not a valid option for "+o+"CalculationMethod."),e=t),re(o+' calculation method set to "'+e+'"')),e}function le(){p=de(p,m,_,"height")}function fe(){z=de(z,P,$,"width")}function me(){var e;!0===n?(se("add"),e=0>b,window.MutationObserver||window.WebKitMutationObserver?e?pe():a=function(){function e(e){function t(e){!1===e.complete&&(re("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",r,!1),a.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function t(e){re("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",r,!1),function(e){a.splice(a.indexOf(e),1)}(e)}function n(e,n,o){t(e.target),Ee(n,o+": "+e.target.src)}function o(e){n(e,"imageLoad","Image loaded")}function r(e){n(e,"imageLoadFailed","Image load failed")}function i(t){Ee("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var a=[],c=window.MutationObserver||window.WebKitMutationObserver,u=function(){var e=document.querySelector("body");return u=new c(i),re("Create body MutationObserver"),u.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),u}();return{disconnect:function(){"disconnect"in u&&(re("Disconnect body MutationObserver"),u.disconnect(),a.forEach(t))}}}():(re("MutationObserver not supported in this browser!"),pe())):re("Auto Resize disabled")}function pe(){0!==b&&(re("setInterval: "+b+"ms"),y=setInterval((function(){Ee("interval","setInterval: "+b)}),Math.abs(b)))}function he(e,t){var n=0;return t=t||document.body,n=null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0,parseInt(n,10)}function ge(e,t){for(var n=t.length,o=0,r=0,i=ne(e),a=Date.now(),c=0;c<n;c++)(o=t[c].getBoundingClientRect()[e]+he("margin"+i,t[c]))>r&&(r=o);return a=Date.now()-a,re("Parsed "+n+" HTML elements"),re("Element position calculated in "+a+"ms"),function(e){e>L/2&&re("Event throttle increased to "+(L=2*e)+"ms")}(a),r}function ve(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function be(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(ie("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),ge(e,n)}function ye(){return document.querySelectorAll("body *")}function we(e,n,o,r){var i,a;!function(){function e(e,t){return!(Math.abs(e-t)<=A)}return i=t!==o?o:_[p](),a=t!==r?r:$[z](),e(f,i)||u&&e(j,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(p in k||u&&z in k)?xe(n):e in{interval:1}||re("No change in size detected"):(Te(),ke(f=i,j=a,e))}function Ee(e,t,n,o){N&&e in s?re("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||re("Trigger event: "+t),"init"===e?we(e,t,n,o):G(e,t,n,o))}function Te(){N||(N=!0,re("Trigger event lock on")),clearTimeout(C),C=setTimeout((function(){N=!1,re("Trigger event lock off"),re("--")}),d)}function Oe(e){f=_[p](),j=$[z](),ke(f,j,e)}function xe(e){var t=p;p=m,re("Reset trigger event: "+e),Te(),Oe("reset"),p=t}function ke(e,n,o,r,i){var a;t===i?i=M:re("Message targetOrigin: "+i),re("Sending message to host page ("+(a=x+":"+e+":"+n+":"+o+(t!==r?":"+r:""))+")"),I.postMessage(T+a,i)}function Se(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],s=o.base?u[0]+o.base:u[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var f=n(l),m={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(t[f].references++,t[f].updater(m)):t.push({identifier:l,updater:r(m,o),references:1}),a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=o(e,r),s=0;s<i.length;s++){var d=n(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(402);var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),u=n.n(c),s=n(216),d=n.n(s),l=n(589),f=n.n(l),m=n(426),p={};p.styleTagTransform=f(),p.setAttributes=u(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var h=Object.freeze({Answered:"answered",Completed:"completed",Hinted:"hinted",Launched:"launched",Passed:"passed",Started:"started"});function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;window.parentIFrame?window.parentIFrame.sendMessage({verb:e,info:t}):console.debug("[XAM]",{verb:e,info:t})}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function y(e,t){return t.length>0&&t.every((function(t,n){return t===e.right[n]}))}var w=[{number:1,type:"radio",right:["2"]},{number:2,type:"text",right:["","","",""]},{number:3,type:"text",right:["корневой волосок","кожица корня","кора корня","центральный цилиндр","сосуды древесины","ситовидные трубки луба"]}];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={taskNumber:1};function x(){document.getElementById("task-check").addEventListener("click",(function(e){var t=O.taskNumber,n=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},w.find((function(t){return t.number===e})))}(t);n?(g(h.Hinted,{step:t}),function(e,t){var n=document.getElementById("task-".concat(e.number,"-correct")),o=document.getElementById("task-".concat(e.number,"-wrong"));[n,o].forEach((function(e){return e.classList.add("d-none")})),(t?n:o).classList.remove("d-none")}(n,function(e){var t=document.getElementById("task-".concat(e.number,"-answers"));if(!t)return!1;switch(e.type){case"radio":case"checkbox":return function(e,t){return y(e,v(t.querySelectorAll("input[type=radio]:checked")).map((function(e){return e.value})))}(e,t);case"text":return function(e,t){return y(e,v(t.querySelectorAll("input[type=text]")).map((function(e){return e.value})))}(e,t)}}(n))):console.warn("[Task]","Task#".concat(t," not found."))}))}function k(e){var t=e.closest("[data-task-number]");return t?Number(t.dataset.taskNumber):null}window.addEventListener("load",(function(){!function(e){if(window.parent!==window)var t=setInterval((function(){window.parentIFrame&&(clearInterval(t),e())}),100);else e()}((function(){document.querySelectorAll("#tasks-tabs button").forEach((function(e){e.addEventListener("hide.bs.tab",(function(e){var t=Number(e.target.dataset.taskNumber);g(h.Passed,{step:t})})),e.addEventListener("show.bs.tab",(function(e){var t;t=Number(e.target.dataset.taskNumber),O.taskNumber=t})),e.addEventListener("shown.bs.tab",(function(e){var t=Number(e.target.dataset.taskNumber);g(h.Launched,{step:t})}))})),document.querySelectorAll(".task-answers input[type=radio], .task-answers input[type=checkbox]").forEach((function(e){var t=k(e);e.addEventListener("change",(function(e){var n=e.target.value;g(h.Answered,{step:t,value:n})}))})),document.querySelectorAll(".task-answers input[type=text]").forEach((function(e){var t=k(e);e.addEventListener("focus",(function(e){e.target.dataset.oldValue=e.target.value})),e.addEventListener("blur",(function(e){var n=e.target.value;e.target.dataset.oldValue!==n&&g(h.Answered,{step:t,value:n})}))})),x(),document.getElementById("eom-complete").addEventListener("click",(function(e){g(h.Completed)})),g(h.Started),g(h.Launched,{step:1})}))}))})()})();