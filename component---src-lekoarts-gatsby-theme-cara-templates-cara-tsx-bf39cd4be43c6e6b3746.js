"use strict";(self.webpackChunkcara=self.webpackChunkcara||[]).push([[166],{9832:function(e,t,n){n.r(t),n.d(t,{Head:function(){return le},default:function(){return ce}});var r=n(7294),o=n(6318),i=n(1882),a=n(8733),c=n(7870),l=n(9684),s=n(9260),u=n(7905),f=n(9813),p=n(1151);function d(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e,t,n,r,o){for(var i=[],a=5;a<arguments.length;a++)i[a-5]=arguments[a];return d(this,void 0,void 0,(function(){var a,c,l,s,u,f;return h(this,(function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),a=m(i),c=a.next(),p.label=1;case 1:if(c.done)return[3,11];switch(typeof(l=c.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,x(e,t,l,n,r,o)];case 3:return p.sent(),[3,10];case 4:return[4,w(l)];case 5:return p.sent(),[3,10];case 6:return[4,l.apply(void 0,v([e,t,n,r,o],g(i),!1))];case 7:return p.sent(),[3,10];case 8:return[4,l];case 9:p.sent(),p.label=10;case 10:return c=a.next(),[3,1];case 11:return[3,14];case 12:return s=p.sent(),u={error:s},[3,14];case 13:try{c&&!c.done&&(f=a.return)&&f.call(a)}finally{if(u)throw u.error}return[7];case 14:return[2]}}))}))}function x(e,t,n,r,o,i){return d(this,void 0,void 0,(function(){var a,c;return h(this,(function(l){switch(l.label){case 0:return a=e.textContent||"",c=function(e,t){var n=g(t).slice(0);return v(v([],g(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(a,n),[4,y(e,v(v([],g(E(a,t,c)),!1),g(Z(n,t,c)),!1),r,o,i)];case 1:return l.sent(),[2]}}))}))}function w(e){return d(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function y(e,t,n,r,o){return d(this,void 0,void 0,(function(){var i,a,c,l,s,u,f,p,d,v,b,x,y;return h(this,(function(Z){switch(Z.label){case 0:if(i=t,o){for(a=0,c=1;c<t.length;c++)if(l=g([t[c-1],t[c]],2),s=l[0],(u=l[1]).length>s.length||""===u){a=c;break}i=t.slice(a,t.length)}Z.label=1;case 1:Z.trys.push([1,6,7,8]),f=m(function(e){var t,n,r,o,i,a,c;return h(this,(function(l){switch(l.label){case 0:t=function(e){return h(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},l.label=1;case 1:l.trys.push([1,6,7,8]),n=m(e),r=n.next(),l.label=2;case 2:return r.done?[3,5]:(o=r.value,[5,t(o)]);case 3:l.sent(),l.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return i=l.sent(),a={error:i},[3,8];case 7:try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}return[7];case 8:return[2]}}))}(i)),p=f.next(),Z.label=2;case 2:return p.done?[3,5]:(d=p.value,v="WRITING"===d.opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),d.op(e),[4,w(v)]);case 3:Z.sent(),Z.label=4;case 4:return p=f.next(),[3,2];case 5:return[3,8];case 6:return b=Z.sent(),x={error:b},[3,8];case 7:try{p&&!p.done&&(y=f.return)&&y.call(f)}finally{if(x)throw x.error}return[7];case 8:return[2]}}))}))}function Z(e,t,n){var r,o;return void 0===n&&(n=0),h(this,(function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}}))}function E(e,t,n){var r,o;return void 0===n&&(n=0),h(this,(function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var S=(0,r.memo)((0,r.forwardRef)((function(e,t){var n=e.sequence,o=e.repeat,i=e.className,a=e.speed,c=void 0===a?40:a,l=e.deletionSpeed,s=e.omitDeletionAnimation,u=void 0!==s&&s,f=e.preRenderFirstString,p=void 0!==f&&f,d=e.wrapper,h=void 0===d?"span":d,m=e.splitter,x=void 0===m?function(e){return v([],g(e),!1)}:m,w=e.cursor,y=void 0===w||w,Z=e.style,E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),S=E["aria-label"],k=E["aria-hidden"],_=E.role;l||(l=c);var z=new Array(2).fill(40);[c,l].forEach((function(e,t){switch(typeof e){case"number":z[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(z[t]=r)}}));var C,R,I,j,A,O,M=z[0],B=z[1],N=function(e,t){void 0===t&&(t=null);var n=(0,r.useRef)(t);return(0,r.useEffect)((function(){e&&("function"==typeof e?e(n.current):e.current=n.current)}),[e]),n}(t),L="index-module_type__E-SaG";C=i?"".concat(y?L+" ":"").concat(i):y?L:"",R=(0,r.useRef)((function(){var e,t=n;o===1/0?e=b:"number"==typeof o&&(t=Array(1+o).fill(n).flat());var r=e?v(v([],g(t),!1),[e],!1):v([],g(t),!1);return b.apply(void 0,v([N.current,x,M,B,u],g(r),!1)),function(){N.current}})),I=(0,r.useRef)(),j=(0,r.useRef)(!1),A=(0,r.useRef)(!1),O=g((0,r.useState)(0),2)[1],j.current&&(A.current=!0),(0,r.useEffect)((function(){return j.current||(I.current=R.current(),j.current=!0),O((function(e){return e+1})),function(){A.current&&I.current&&I.current()}}),[]);var P=h,T=p?n.find((function(e){return"string"==typeof e}))||"":null;return r.createElement(P,{"aria-hidden":k,"aria-label":S,role:_,style:Z,className:C,children:S?r.createElement("span",{"aria-hidden":"true",ref:N,children:T}):T,ref:S?void 0:N})})),(function(e,t){return!0})),k=n(2396);var _=e=>{let{fontSize:t,speed:n,textSequence:o,repeat:i,cursor:a,preRenderFirstString:c,randColor:l}=e;const{0:s,1:u}=(0,r.useState)("white"),f=(0,k.B7)().theme.colors.terminal_text,{0:p,1:d}=(0,r.useState)(t),h=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=h.current;if(e){const n=new ResizeObserver((e=>{for(let n of e){const{width:e}=n.contentRect;d(e<400?""+(t-1):t)}}));return n.observe(e),()=>n.disconnect()}}),[t]);const m=[];return o.forEach(((e,t)=>{"string"==typeof e&&l?m.push((()=>u("#"+Math.floor(16777215*Math.random()).toString(16))),e):m.push(e),"string"!=typeof o[t+1]&&m.push(n)})),r.createElement("div",{ref:h,style:{maxWidth:"100%",overflowWrap:"break-word"}},r.createElement("div",{style:{fontSize:p,color:l?s:f,display:"inline-block"}},r.createElement(S,{preRenderFirstString:c,cursor:a,sequence:m,wrapper:"span",repeat:i})))},z=n(6197);var C=e=>{let{link:t,title:n,children:r,bg:o,size:i}=e;const[c]=(0,z.If)(),l="dark"===c,{width:s,height:u}=(e=>"object"==typeof e?{width:e.width||"60%",height:e.height||"auto"}:{width:e||"60%",height:e||"auto"})(i),f={width:s,height:u,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",position:"relative",textDecoration:"none",borderRadius:"10px",overflow:"hidden",background:o||(l?"#1c1c1c":"white"),cursor:t?"pointer":"default","&:hover":t?{transform:"translateY(-5px)"}:{},margin:"auto",marginTop:"50px"};return(0,a.tZ)("div",{sx:f,onClick:t?()=>window.open(t,"_blank"):void 0,role:t?"button":void 0,"aria-pressed":t?"false":void 0},(0,a.tZ)("div",{sx:{display:"flex",alignItems:"center",justifyContent:"flex-start",background:l?"#2c2c2c":"#e2e2e2",borderBottom:"1px solid "+(l?"#333":"#ccc"),padding:"8px 12px",position:"relative",height:"32px","::before":{content:'""',position:"absolute",top:"50%",left:"12px",width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#ff5f56",boxShadow:"16px 0 0 #ffbd2e, 32px 0 0 #27c93f",transform:"translateY(-50%)"}}},(0,a.tZ)("span",{sx:{ml:"60px",fontSize:2,fontWeight:"bold",color:l?"white":"black"}},n)),(0,a.tZ)("div",{sx:{wordWrap:"break-word",padding:"20px",fontSize:[1,2],color:l?"white":"black",lineHeight:1.25}},r))};function R(e){return r.createElement(C,{title:"whoami",bg:"terminal_background",size:"100%"},r.createElement(_,{preRenderFirstString:!0,fontSize:"1.5em",speed:30,cursor:!1,textSequence:["\nHello, I am\n"]}),r.createElement("br"),r.createElement(_,{fontSize:"2em",speed:20,cursor:!1,textSequence:["Antonio Squillace",2e3,"Tosqui"],repeat:0}),r.createElement("br"),r.createElement("br"),r.createElement(_,{preRenderFirstString:!1,randColor:!0,fontSize:"3em",speed:45,repeat:1/0,textSequence:[500,"Experienced",500,"Skilled",500,"Innovative",500,"Analytical",500,"Proficient",500,"Versatile",500,"Creative",500,"Ethical",500,"Committed",500,"Team-oriented",500,"Technical",500,"Detail-oriented",500,"Adaptive",500,"Security-focused",500,"Continuously learning",500,"Diligent",500,"Strategic",500,"Dynamic",500,"Efficient",500,"Resourceful",500,"Motivated",500,"Collaborative",500,"Insightful",500,"Proactive",500,"Results-driven"]}))}var I=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,p.ah)(),e.components);return t?r.createElement(t,e,r.createElement(R,e)):R()};const j=(e=>{let t,n,r=e.length;for(;0!==r;)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e})([].concat(["python","javascript","java","spring","trendmicro","splunk","msdos","typescript","android","c","packer","apple","linux","angular","terraform","windows","docker","powershell","ansible"]));var A=e=>{let{offset:t,factor:n=1}=e,r=0;const o=()=>(r>=j.length&&(r=0),j[r++]);return(0,a.tZ)("div",null,(0,a.tZ)(c.Z,{speed:.2,offset:t,factor:n},(0,a.tZ)(f.yQ,null,(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}),(0,a.tZ)(u.Z,{icon:o(),size:"100px",left:"5%",top:"10%"}))),(0,a.tZ)(c.Z,{speed:.2,offset:t,factor:n},(0,a.tZ)(f.w6,null,(0,a.tZ)(u.Z,{icon:"bash",size:"45%",left:"5%",top:"-4"}))),(0,a.tZ)(s.Z,{sx:{variant:"texts.bigger"},speed:.4,offset:t,factor:n},(0,a.tZ)(l.Z,null,(0,a.tZ)(I,null))))};function O(e){const t=Object.assign({h2:"h2",p:"p"},(0,p.ah)(),e.components),{ProjectCard:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ProjectCard",!0),r.createElement(r.Fragment,null,r.createElement(t.h2,null,"Projects"),"\n",r.createElement(n,{title:"Resume",link:"/CV.pdf",bg:"linear-gradient(#D4145A 0%, #FBB03B 100%)"}),"\n",r.createElement(n,{title:"Nothing else to share",link:"https://github.com/tosquisec",bg:"linear-gradient(#D4145A 0%, #FBB03B 100%)"},r.createElement(t.p,null,"Available SOON")))}var M=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,p.ah)(),e.components);return t?r.createElement(t,e,r.createElement(O,e)):O(e)};var B=e=>{let{offset:t,factor:n=2}=e;return(0,a.tZ)("div",null,(0,a.tZ)(c.Z,{bg:"linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",sx:{clipPath:"polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"},speed:-.2,offset:1.1,factor:n}),(0,a.tZ)(s.Z,{speed:.4,offset:t+.2,factor:n},(0,a.tZ)(l.Z,null,(0,a.tZ)("div",{sx:{display:"grid",gridGap:[4,4,4,5],h2:{gridColumn:"-1/1",color:"white !important"}}},(0,a.tZ)(M,null)))),(0,a.tZ)(c.Z,{speed:.1,offset:t,factor:n},(0,a.tZ)(f.w6,null,(0,a.tZ)(u.Z,{icon:"box",width:6,color:"icon_brightest",left:"85%",top:"75%"}),(0,a.tZ)(u.Z,{icon:"upDown",width:8,color:"icon_teal",left:"70%",top:"20%"}),(0,a.tZ)(u.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_orange",left:"25%",top:"5%"}),(0,a.tZ)(u.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_brightest",left:"17%",top:"60%"})),(0,a.tZ)(f.sr,null,(0,a.tZ)(u.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_green",left:"20%",top:"90%"}),(0,a.tZ)(u.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"30%"}),(0,a.tZ)(u.Z,{icon:"circle",width:16,color:"icon_yellow",left:"70%",top:"90%"}),(0,a.tZ)(u.Z,{icon:"triangle",hiddenMobile:!0,width:16,stroke:!0,color:"icon_teal",left:"18%",top:"75%"}),(0,a.tZ)(u.Z,{icon:"circle",width:6,color:"icon_brightest",left:"75%",top:"10%"}),(0,a.tZ)(u.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_green",left:"45%",top:"10%"})),(0,a.tZ)(u.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"4%",top:"20%"}),(0,a.tZ)(u.Z,{icon:"circle",width:12,color:"icon_pink",left:"80%",top:"60%"}),(0,a.tZ)(u.Z,{icon:"box",width:6,color:"icon_orange",left:"10%",top:"10%"}),(0,a.tZ)(u.Z,{icon:"box",width:12,color:"icon_yellow",left:"29%",top:"26%"}),(0,a.tZ)(u.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_red",left:"75%",top:"30%"}),(0,a.tZ)(u.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_yellow",left:"80%",top:"70%"})))},N=n(5260),L=n(917),P=n(3431);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var F=["__themeKey","__css","variant","css","sx","as"],Q=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],V=function(e){return Q.includes(e)},G=(0,r.forwardRef)((function(e,t){var n=(0,N.u)(),r=e,o=r.__themeKey,i=void 0===o?"variants":o,a=r.__css,c=r.variant,l=r.css,s=r.sx,u=r.as,f=void 0===u?"div":u,p=q(r,F),d=(0,P.iv)(a)(n),h=(0,P.U2)(n,i+"."+c)||(0,P.U2)(n,c),m=h&&(0,P.iv)(h)(n),g=(0,P.iv)(s)(n),v=(0,P.iv)(function(e){for(var t,n={},r=$(Q);!(t=r()).done;){var o=t.value;n[o]=e[o]}return n}(p))(n),b=[{boxSizing:"border-box",margin:0,minWidth:0},d,m,g,v,l];return Q.forEach((function(e){delete p[e]})),(0,L.tZ)(f,T({ref:t,css:b},p))})),W=r.forwardRef((function(e,t){return r.createElement(G,T({ref:t},e,{sx:T({display:"flex"},e.sx)}))})),H=function(e){return function(t){var n={};for(var r in t)e(r||"")&&(n[r]=t[r]);return n}},Y=/^m[trblxy]?$/;H((function(e){return Y.test(e)})),H((function(e){return!Y.test(e)}));var U=["size"],K=r.forwardRef((function(e,t){var n=e.size,o=void 0===n?24:n,i=T({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"currentcolor"},q(e,U));return r.createElement(G,T({ref:t,as:"svg"},i))}));K.displayName="SVG";H(V),H((function(e){return!V(e)}));var X=()=>{const[e,t]=(0,z.If)(),{theme:n}=(0,k.B7)();return(0,a.tZ)(G,{as:"footer",variant:"footer"},(0,a.tZ)(W,{sx:{justifyContent:"center",alignItems:"center",color:"text",fontWeight:"semibold",a:{color:"text"}}},"Copyright © ",(new Date).getFullYear(),". All rights reserved."))};function J(e){const t=Object.assign({h2:"h2"},(0,p.ah)(),e.components);return r.createElement(t.h2,null,"Get in touch")}var ee=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,p.ah)(),e.components);return t?r.createElement(t,e,r.createElement(J,e)):J(e)};var te=()=>r.createElement("div",{className:"container p-2"},r.createElement("a",{href:"https://twitter.com/t05qu17",className:"mx-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:40,fill:"heading",className:"bi bi-twitter",viewBox:"0 0 16 16"},r.createElement("path",{d:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"}))),r.createElement("a",{href:"https://t.me/t05qu17",className:"mx-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:40,fill:"#0088cc",className:"bi bi-telegram",viewBox:"0 0 16 16"},r.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}))),r.createElement("a",{href:"https://github.com/tosquisec",className:"mx-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:40,fill:"gray",className:"bi bi-github",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"}))),r.createElement("a",{href:"https://www.linkedin.com/in/tosqui/",className:"mx-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:40,fill:"#0e76a8",className:"bi bi-linkedin",viewBox:"0 0 16 16"},r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"}))));var ne=e=>{let{offset:t,factor:n=1}=e;return(0,a.tZ)("div",null,(0,a.tZ)(c.Z,{fill:"divider",speed:.2,offset:t,factor:n},(0,a.tZ)("div",{sx:{position:"absolute",bottom:0,width:"full",transform:"matrix(1, 0, 0, -1, 0, 0)"}},(0,a.tZ)("div",{sx:{position:"relative",height:"full",svg:{width:"100%",height:"40vh"},path:{animation:(0,f.Ry)("20s")}}},(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"textcolor",id:"contact-wave",viewBox:"0 0 800 338.05",preserveAspectRatio:"none"},(0,a.tZ)("path",null,(0,a.tZ)("animate",{attributeName:"d",values:"M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",repeatCount:"indefinite",dur:"30s"})))))),(0,a.tZ)(s.Z,{speed:1,offset:t,factor:n},(0,a.tZ)(l.Z,null,(0,a.tZ)(ee,null),(0,a.tZ)(te,null)),(0,a.tZ)(X,null)))},re=n(2267);const oe={position:"relative",width:"24px",height:"24px",borderRadius:"50%",transition:"all 0.45s ease","&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",transition:"transform 0.45s ease",borderRadius:"50%"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",transition:"all 0.35s ease",boxShadow:e=>`0 -23px 0 ${e.colors.toggleIcon}, 0 23px 0 ${e.colors.toggleIcon}, 23px 0 0 ${e.colors.toggleIcon}, -23px 0 0 ${e.colors.toggleIcon}, 15px 15px 0 ${e.colors.toggleIcon}, -15px 15px 0 ${e.colors.toggleIcon}, 15px -15px 0 ${e.colors.toggleIcon}, -15px -15px 0 ${e.colors.toggleIcon}`}},ie={opacity:.65,position:"absolute",borderRadius:"4px",width:"40px",top:"4%",right:"2%",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}};var ae=()=>{const[e,t]=(0,z.If)(),n="dark"===e,{theme:r}=(0,k.B7)();return(0,a.tZ)("button",{onClick:()=>{const e=n?"light":"dark";t(e),document.documentElement.classList.value=`theme-ui-${e}`},type:"button","aria-label":n?"Activate Light Mode":"Activate Dark Mode",sx:ie},(0,a.tZ)("div",{sx:{...oe,border:n?`4px solid ${r.colors.toggleIcon}`:"none",backgroundColor:n?"toggleIcon":"transparent",transform:n?"scale(0.55)":"scale(1)",overflow:n?"visible":"hidden",boxShadow:n?"none":`inset 8px -8px 0px 0px ${r.colors.toggleIcon}`,"&:before":{...oe["&:before"],border:n?`2px solid ${r.colors.toggleIcon}`:"none",transform:n?"translate(14px, -14px)":"translate(0, 0)",opacity:n?0:1},"&:after":{...oe["&:after"],transform:n?"scale(1)":"scale(0)"}}}))};var ce=()=>r.createElement(i.Z,null,r.createElement(o.V,{pages:3},r.createElement(A,{offset:0,factor:1}),r.createElement(B,{offset:1,factor:1}),r.createElement(ne,{offset:2,factor:1})),r.createElement(ae,null));const le=()=>r.createElement(re.Z,null)}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-cara-templates-cara-tsx-bf39cd4be43c6e6b3746.js.map