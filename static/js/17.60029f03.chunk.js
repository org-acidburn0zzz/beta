/*! For license information please see 17.60029f03.chunk.js.LICENSE.txt */
(this["webpackJsonp@react-page/examples"]=this["webpackJsonp@react-page/examples"]||[]).push([[17,49],{1082:function(e,t,r){"use strict";var a=r(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(165)).default)(n.default.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"ColorLens");t.default=o},1083:function(e,t,r){"use strict";var a=r(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(165)).default)(n.default.createElement("path",{d:"M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"}),"Gradient");t.default=o},1330:function(e,t,r){"use strict";var a=r(4),n=r(44),o=r(2),i=r(0),l=(r(9),r(5)),c=r(8),s=r(163),u=r(14),d=i.forwardRef((function(e,t){var r=e.classes,n=e.className,c=e.disabled,d=void 0!==c&&c,f=e.disableFocusRipple,p=void 0!==f&&f,v=e.fullWidth,b=e.icon,m=e.indicator,h=e.label,y=e.onChange,g=e.onClick,x=e.onFocus,O=e.selected,w=e.selectionFollowsFocus,j=e.textColor,C=void 0===j?"inherit":j,S=e.value,E=e.wrapped,k=void 0!==E&&E,L=Object(a.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return i.createElement(s.a,Object(o.a)({focusRipple:!p,className:Object(l.a)(r.root,r["textColor".concat(Object(u.a)(C))],n,d&&r.disabled,O&&r.selected,h&&b&&r.labelIcon,v&&r.fullWidth,k&&r.wrapped),ref:t,role:"tab","aria-selected":O,disabled:d,onClick:function(e){y&&y(e,S),g&&g(e)},onFocus:function(e){w&&!O&&y&&y(e,S),x&&x(e)},tabIndex:O?0:-1},L),i.createElement("span",{className:r.wrapper},b,h),m)}));t.a=Object(c.a)((function(e){var t;return{root:Object(o.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(n.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(n.a)(t,"overflow","hidden"),Object(n.a)(t,"whiteSpace","normal"),Object(n.a)(t,"textAlign","center"),Object(n.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(d)},1352:function(e,t,r){"use strict";var a,n=r(2),o=r(4),i=r(44),l=r(0),c=(r(85),r(9),r(5)),s=r(72),u=r(74);function d(){if(a)return a;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),a="reverse",e.scrollLeft>0?a="default":(e.scrollLeft=1,0===e.scrollLeft&&(a="negative")),document.body.removeChild(e),a}function f(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(d()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function p(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var v={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function b(e){var t=e.onChange,r=Object(o.a)(e,["onChange"]),a=l.useRef(),i=l.useRef(null),c=function(){a.current=i.current.offsetHeight-i.current.clientHeight};return l.useEffect((function(){var e=Object(s.a)((function(){var e=a.current;c(),e!==a.current&&t(a.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),l.useEffect((function(){c(),t(a.current)}),[t]),l.createElement("div",Object(n.a)({style:v,ref:i},r))}var m=r(8),h=r(14),y=l.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.color,s=e.orientation,u=Object(o.a)(e,["classes","className","color","orientation"]);return l.createElement("span",Object(n.a)({className:Object(c.a)(r.root,r["color".concat(Object(h.a)(i))],a,"vertical"===s&&r.vertical),ref:t},u))})),g=Object(m.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(y),x=r(103),O=Object(x.a)(l.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),w=Object(x.a)(l.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),j=r(163),C=l.createElement(O,{fontSize:"small"}),S=l.createElement(w,{fontSize:"small"}),E=l.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.direction,s=e.orientation,u=e.disabled,d=Object(o.a)(e,["classes","className","direction","orientation","disabled"]);return l.createElement(j.a,Object(n.a)({component:"div",className:Object(c.a)(r.root,a,u&&r.disabled,"vertical"===s&&r.vertical),ref:t,role:null,tabIndex:null},d),"left"===i?C:S)})),k=Object(m.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(E),L=r(34),$=r(48),R=l.forwardRef((function(e,t){var r=e["aria-label"],a=e["aria-labelledby"],v=e.action,m=e.centered,h=void 0!==m&&m,y=e.children,x=e.classes,O=e.className,w=e.component,j=void 0===w?"div":w,C=e.indicatorColor,S=void 0===C?"secondary":C,E=e.onChange,R=e.orientation,A=void 0===R?"horizontal":R,M=e.ScrollButtonComponent,N=void 0===M?k:M,z=e.scrollButtons,T=void 0===z?"auto":z,P=e.selectionFollowsFocus,_=e.TabIndicatorProps,F=void 0===_?{}:_,B=e.TabScrollButtonProps,D=e.textColor,I=void 0===D?"inherit":D,V=e.value,W=e.variant,H=void 0===W?"standard":W,K=Object(o.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),q=Object($.a)(),U="scrollable"===H,X="rtl"===q.direction,Y="vertical"===A,J=Y?"scrollTop":"scrollLeft",G=Y?"top":"left",Q=Y?"bottom":"right",Z=Y?"clientHeight":"clientWidth",ee=Y?"height":"width";var te=l.useState(!1),re=te[0],ae=te[1],ne=l.useState({}),oe=ne[0],ie=ne[1],le=l.useState({start:!1,end:!1}),ce=le[0],se=le[1],ue=l.useState({overflow:"hidden",marginBottom:null}),de=ue[0],fe=ue[1],pe=new Map,ve=l.useRef(null),be=l.useRef(null),me=function(){var e,t,r=ve.current;if(r){var a=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:f(r,q.direction),scrollWidth:r.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}if(r&&!1!==V){var n=be.current.children;if(n.length>0){var o=n[pe.get(V)];0,t=o?o.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},he=Object(L.a)((function(){var e,t=me(),r=t.tabsMeta,a=t.tabMeta,n=0;if(a&&r)if(Y)n=a.top-r.top+r.scrollTop;else{var o=X?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;n=a.left-r.left+o}var l=(e={},Object(i.a)(e,G,n),Object(i.a)(e,ee,a?a[ee]:0),e);if(isNaN(oe[G])||isNaN(oe[ee]))ie(l);else{var c=Math.abs(oe[G]-l[G]),s=Math.abs(oe[ee]-l[ee]);(c>=1||s>=1)&&ie(l)}})),ye=function(e){!function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=a.ease,i=void 0===o?p:o,l=a.duration,c=void 0===l?300:l,s=null,u=t[e],d=!1,f=function(){d=!0},v=function a(o){if(d)n(new Error("Animation cancelled"));else{null===s&&(s=o);var l=Math.min(1,(o-s)/c);t[e]=i(l)*(r-u)+u,l>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(a)}};u===r?n(new Error("Element already at target position")):requestAnimationFrame(v)}(J,ve.current,e)},ge=function(e){var t=ve.current[J];Y?t+=e:(t+=e*(X?-1:1),t*=X&&"reverse"===d()?-1:1),ye(t)},xe=function(){ge(-ve.current[Z])},Oe=function(){ge(ve.current[Z])},we=l.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),je=Object(L.a)((function(){var e=me(),t=e.tabsMeta,r=e.tabMeta;if(r&&t)if(r[G]<t[G]){var a=t[J]+(r[G]-t[G]);ye(a)}else if(r[Q]>t[Q]){var n=t[J]+(r[Q]-t[Q]);ye(n)}})),Ce=Object(L.a)((function(){if(U&&"off"!==T){var e,t,r=ve.current,a=r.scrollTop,n=r.scrollHeight,o=r.clientHeight,i=r.scrollWidth,l=r.clientWidth;if(Y)e=a>1,t=a<n-o-1;else{var c=f(ve.current,q.direction);e=X?c<i-l-1:c>1,t=X?c>1:c<i-l-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));l.useEffect((function(){var e=Object(s.a)((function(){he(),Ce()})),t=Object(u.a)(ve.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[he,Ce]);var Se=l.useCallback(Object(s.a)((function(){Ce()})));l.useEffect((function(){return function(){Se.clear()}}),[Se]),l.useEffect((function(){ae(!0)}),[]),l.useEffect((function(){he(),Ce()})),l.useEffect((function(){je()}),[je,oe]),l.useImperativeHandle(v,(function(){return{updateIndicator:he,updateScrollButtons:Ce}}),[he,Ce]);var Ee=l.createElement(g,Object(n.a)({className:x.indicator,orientation:A,color:S},F,{style:Object(n.a)({},oe,F.style)})),ke=0,Le=l.Children.map(y,(function(e){if(!l.isValidElement(e))return null;var t=void 0===e.props.value?ke:e.props.value;pe.set(t,ke);var r=t===V;return ke+=1,l.cloneElement(e,{fullWidth:"fullWidth"===H,indicator:r&&!re&&Ee,selected:r,selectionFollowsFocus:P,onChange:E,textColor:I,value:t})})),$e=function(){var e={};e.scrollbarSizeListener=U?l.createElement(b,{className:x.scrollable,onChange:we}):null;var t=ce.start||ce.end,r=U&&("auto"===T&&t||"desktop"===T||"on"===T);return e.scrollButtonStart=r?l.createElement(N,Object(n.a)({orientation:A,direction:X?"right":"left",onClick:xe,disabled:!ce.start,className:Object(c.a)(x.scrollButtons,"on"!==T&&x.scrollButtonsDesktop)},B)):null,e.scrollButtonEnd=r?l.createElement(N,Object(n.a)({orientation:A,direction:X?"left":"right",onClick:Oe,disabled:!ce.end,className:Object(c.a)(x.scrollButtons,"on"!==T&&x.scrollButtonsDesktop)},B)):null,e}();return l.createElement(j,Object(n.a)({className:Object(c.a)(x.root,O,Y&&x.vertical),ref:t},K),$e.scrollButtonStart,$e.scrollbarSizeListener,l.createElement("div",{className:Object(c.a)(x.scroller,U?x.scrollable:x.fixed),style:de,ref:ve,onScroll:Se},l.createElement("div",{"aria-label":r,"aria-labelledby":a,className:Object(c.a)(x.flexContainer,Y&&x.flexContainerVertical,h&&!U&&x.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var r=null,a="vertical"!==A?"ArrowLeft":"ArrowUp",n="vertical"!==A?"ArrowRight":"ArrowDown";switch("vertical"!==A&&"rtl"===q.direction&&(a="ArrowRight",n="ArrowLeft"),e.key){case a:r=t.previousElementSibling||be.current.lastChild;break;case n:r=t.nextElementSibling||be.current.firstChild;break;case"Home":r=be.current.firstChild;break;case"End":r=be.current.lastChild}null!==r&&(r.focus(),e.preventDefault())}},ref:be,role:"tablist"},Le),re&&Ee),$e.scrollButtonEnd)}));t.a=Object(m.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(i.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(R)},1362:function(e,t,r){"use strict";var a=r(52),n=r(38),o=r(4),i=r(2),l=r(0),c=(r(9),r(5)),s=r(8),u=r(48),d=r(19),f=r(113),p=r(24),v=r(34),b=r(15),m=r(14),h=r(70);var y=Object(s.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(i.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,r=e.classes,a=e.className,n=e.open,o=e.value,i=e.valueLabelDisplay;return"off"===i?t:l.cloneElement(t,{className:Object(c.a)(t.props.className,(n||"on"===i)&&r.open,r.thumb)},l.createElement("span",{className:Object(c.a)(r.offset,a)},l.createElement("span",{className:r.circle},l.createElement("span",{className:r.label},o))))}));function g(e,t){return e-t}function x(e,t,r){return Math.min(Math.max(t,e),r)}function O(e,t){return e.reduce((function(e,r,a){var n=Math.abs(t-r);return null===e||n<e.distance||n===e.distance?{distance:n,index:a}:e}),null).index}function w(e,t){if(void 0!==t.current&&e.changedTouches){for(var r=0;r<e.changedTouches.length;r+=1){var a=e.changedTouches[r];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function j(e,t,r){return 100*(e-t)/(r-t)}function C(e,t,r){var a=Math.round((e-r)/t)*t+r;return Number(a.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}var a=e.toString().split(".")[1];return a?a.length:0}(t)))}function S(e){var t=e.values,r=e.source,a=e.newValue,n=e.index;if(t[n]===a)return r;var o=t.slice();return o[n]=a,o}function E(e){var t=e.sliderRef,r=e.activeIndex,a=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===r||t.current.querySelector('[role="slider"][data-index="'.concat(r,'"]')).focus(),a&&a(r)}var k={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},L=function(e){return e},$=l.forwardRef((function(e,t){var r=e["aria-label"],s=e["aria-labelledby"],d=e["aria-valuetext"],$=e.classes,R=e.className,A=e.color,M=void 0===A?"primary":A,N=e.component,z=void 0===N?"span":N,T=e.defaultValue,P=e.disabled,_=void 0!==P&&P,F=e.getAriaLabel,B=e.getAriaValueText,D=e.marks,I=void 0!==D&&D,V=e.max,W=void 0===V?100:V,H=e.min,K=void 0===H?0:H,q=e.name,U=e.onChange,X=e.onChangeCommitted,Y=e.onMouseDown,J=e.orientation,G=void 0===J?"horizontal":J,Q=e.scale,Z=void 0===Q?L:Q,ee=e.step,te=void 0===ee?1:ee,re=e.ThumbComponent,ae=void 0===re?"span":re,ne=e.track,oe=void 0===ne?"normal":ne,ie=e.value,le=e.ValueLabelComponent,ce=void 0===le?y:le,se=e.valueLabelDisplay,ue=void 0===se?"off":se,de=e.valueLabelFormat,fe=void 0===de?L:de,pe=Object(o.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),ve=Object(u.a)(),be=l.useRef(),me=l.useState(-1),he=me[0],ye=me[1],ge=l.useState(-1),xe=ge[0],Oe=ge[1],we=Object(h.a)({controlled:ie,default:T,name:"Slider"}),je=Object(n.a)(we,2),Ce=je[0],Se=je[1],Ee=Array.isArray(Ce),ke=Ee?Ce.slice().sort(g):[Ce];ke=ke.map((function(e){return x(e,K,W)}));var Le=!0===I&&null!==te?Object(a.a)(Array(Math.floor((W-K)/te)+1)).map((function(e,t){return{value:K+te*t}})):I||[],$e=Object(f.a)(),Re=$e.isFocusVisible,Ae=$e.onBlurVisible,Me=$e.ref,Ne=l.useState(-1),ze=Ne[0],Te=Ne[1],Pe=l.useRef(),_e=Object(b.a)(Me,Pe),Fe=Object(b.a)(t,_e),Be=Object(v.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Re(e)&&Te(t),Oe(t)})),De=Object(v.a)((function(){-1!==ze&&(Te(-1),Ae()),Oe(-1)})),Ie=Object(v.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Oe(t)})),Ve=Object(v.a)((function(){Oe(-1)})),We="rtl"===ve.direction,He=Object(v.a)((function(e){var t,r=Number(e.currentTarget.getAttribute("data-index")),a=ke[r],n=(W-K)/10,o=Le.map((function(e){return e.value})),i=o.indexOf(a),l=We?"ArrowLeft":"ArrowRight",c=We?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=K;break;case"End":t=W;break;case"PageUp":te&&(t=a+n);break;case"PageDown":te&&(t=a-n);break;case l:case"ArrowUp":t=te?a+te:o[i+1]||o[o.length-1];break;case c:case"ArrowDown":t=te?a-te:o[i-1]||o[0];break;default:return}if(e.preventDefault(),te&&(t=C(t,te,K)),t=x(t,K,W),Ee){var s=t;t=S({values:ke,source:Ce,newValue:t,index:r}).sort(g),E({sliderRef:Pe,activeIndex:t.indexOf(s)})}Se(t),Te(r),U&&U(e,t),X&&X(e,t)})),Ke=l.useRef(),qe=G;We&&"vertical"!==G&&(qe+="-reverse");var Ue=function(e){var t,r,a=e.finger,n=e.move,o=void 0!==n&&n,i=e.values,l=e.source,c=Pe.current.getBoundingClientRect(),s=c.width,u=c.height,d=c.bottom,f=c.left;if(t=0===qe.indexOf("vertical")?(d-a.y)/u:(a.x-f)/s,-1!==qe.indexOf("-reverse")&&(t=1-t),r=function(e,t,r){return(r-t)*e+t}(t,K,W),te)r=C(r,te,K);else{var p=Le.map((function(e){return e.value}));r=p[O(p,r)]}r=x(r,K,W);var v=0;if(Ee){var b=r;v=(r=S({values:i,source:l,newValue:r,index:v=o?Ke.current:O(i,r)}).sort(g)).indexOf(b),Ke.current=v}return{newValue:r,activeIndex:v}},Xe=Object(v.a)((function(e){var t=w(e,be);if(t){var r=Ue({finger:t,move:!0,values:ke,source:Ce}),a=r.newValue,n=r.activeIndex;E({sliderRef:Pe,activeIndex:n,setActive:ye}),Se(a),U&&U(e,a)}})),Ye=Object(v.a)((function(e){var t=w(e,be);if(t){var r=Ue({finger:t,values:ke,source:Ce}).newValue;ye(-1),"touchend"===e.type&&Oe(-1),X&&X(e,r),be.current=void 0;var a=Object(p.a)(Pe.current);a.removeEventListener("mousemove",Xe),a.removeEventListener("mouseup",Ye),a.removeEventListener("touchmove",Xe),a.removeEventListener("touchend",Ye)}})),Je=Object(v.a)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(be.current=t.identifier);var r=w(e,be),a=Ue({finger:r,values:ke,source:Ce}),n=a.newValue,o=a.activeIndex;E({sliderRef:Pe,activeIndex:o,setActive:ye}),Se(n),U&&U(e,n);var i=Object(p.a)(Pe.current);i.addEventListener("touchmove",Xe),i.addEventListener("touchend",Ye)}));l.useEffect((function(){var e=Pe.current;e.addEventListener("touchstart",Je);var t=Object(p.a)(e);return function(){e.removeEventListener("touchstart",Je),t.removeEventListener("mousemove",Xe),t.removeEventListener("mouseup",Ye),t.removeEventListener("touchmove",Xe),t.removeEventListener("touchend",Ye)}}),[Ye,Xe,Je]);var Ge=Object(v.a)((function(e){Y&&Y(e),e.preventDefault();var t=w(e,be),r=Ue({finger:t,values:ke,source:Ce}),a=r.newValue,n=r.activeIndex;E({sliderRef:Pe,activeIndex:n,setActive:ye}),Se(a),U&&U(e,a);var o=Object(p.a)(Pe.current);o.addEventListener("mousemove",Xe),o.addEventListener("mouseup",Ye)})),Qe=j(Ee?ke[0]:K,K,W),Ze=j(ke[ke.length-1],K,W)-Qe,et=Object(i.a)({},k[qe].offset(Qe),k[qe].leap(Ze));return l.createElement(z,Object(i.a)({ref:Fe,className:Object(c.a)($.root,$["color".concat(Object(m.a)(M))],R,_&&$.disabled,Le.length>0&&Le.some((function(e){return e.label}))&&$.marked,!1===oe&&$.trackFalse,"vertical"===G&&$.vertical,"inverted"===oe&&$.trackInverted),onMouseDown:Ge},pe),l.createElement("span",{className:$.rail}),l.createElement("span",{className:$.track,style:et}),l.createElement("input",{value:ke.join(","),name:q,type:"hidden"}),Le.map((function(e,t){var r,a=j(e.value,K,W),n=k[qe].offset(a);return r=!1===oe?-1!==ke.indexOf(e.value):"normal"===oe&&(Ee?e.value>=ke[0]&&e.value<=ke[ke.length-1]:e.value<=ke[0])||"inverted"===oe&&(Ee?e.value<=ke[0]||e.value>=ke[ke.length-1]:e.value>=ke[0]),l.createElement(l.Fragment,{key:e.value},l.createElement("span",{style:n,"data-index":t,className:Object(c.a)($.mark,r&&$.markActive)}),null!=e.label?l.createElement("span",{"aria-hidden":!0,"data-index":t,style:n,className:Object(c.a)($.markLabel,r&&$.markLabelActive)},e.label):null)})),ke.map((function(e,t){var a=j(e,K,W),n=k[qe].offset(a);return l.createElement(ce,{key:t,valueLabelFormat:fe,valueLabelDisplay:ue,className:$.valueLabel,value:"function"===typeof fe?fe(Z(e),t):fe,index:t,open:xe===t||he===t||"on"===ue,disabled:_},l.createElement(ae,{className:Object(c.a)($.thumb,$["thumbColor".concat(Object(m.a)(M))],he===t&&$.active,_&&$.disabled,ze===t&&$.focusVisible),tabIndex:_?null:0,role:"slider",style:n,"data-index":t,"aria-label":F?F(t):r,"aria-labelledby":s,"aria-orientation":G,"aria-valuemax":Z(W),"aria-valuemin":Z(K),"aria-valuenow":Z(e),"aria-valuetext":B?B(Z(e),t):d,onKeyDown:He,onFocus:Be,onBlur:De,onMouseOver:Ie,onMouseLeave:Ve}))})))}));t.a=Object(s.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(d.d)(e.palette.primary.main,.62):Object(d.a)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(d.b)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(d.b)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(d.b)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(d.b)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(i.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})($)},280:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},294:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},295:function(e,t,r){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",(function(){return a}))},297:function(e,t,r){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return a}))},298:function(e,t,r){"use strict";e.exports=r(301)},299:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(294),i=r(280),l=r(297),c=r(295),s=r(300),u=r.n(s);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var f=n.a.createContext();var p=function(e){return e};function v(e){var t=e.resolve,r=void 0===t?p:t,a=e.render,s=e.onLoad;function u(e,t){void 0===t&&(t={});var u=function(e){return"function"===typeof e?{requireAsync:e}:e}(e),p={};function v(e){return t.cacheKey?t.cacheKey(e):u.resolve?u.resolve(e):null}var b,m=function(e){function n(r){var a;return(a=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},a.promise=null,d(!r.__chunkExtractor||u.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(u.requireAsync(r).catch((function(){})),a.loadSync(),r.__chunkExtractor.addChunk(u.chunkName(r))),Object(l.a)(a)):(u.isReady&&u.isReady(r)&&a.loadSync(),a)}Object(c.a)(n,e),n.getDerivedStateFromProps=function(e,t){var r=v(e);return Object(i.a)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var f=n.prototype;return f.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},f.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},f.componentWillUnmount=function(){this.mounted=!1},f.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},f.triggerOnLoad=function(){var e=this;s&&setTimeout((function(){s(e.state.result,e.props)}))},f.loadSync=function(){if(this.state.loading)try{var e=u.requireSync(this.props),t=r(e,{Loadable:y});this.state.result=t,this.state.loading=!1}catch(a){this.state.error=a}},f.getCacheKey=function(){return v(this.props)||JSON.stringify(this.props)},f.getCache=function(){return p[this.getCacheKey()]},f.setCache=function(e){p[this.getCacheKey()]=e},f.loadAsync=function(){var e=this;if(!this.promise){var a=this.props,n=(a.__chunkExtractor,a.forwardedRef,Object(o.a)(a,["__chunkExtractor","forwardedRef"]));this.promise=u.requireAsync(n).then((function(a){var n=r(a,{Loadable:y});t.suspense&&e.setCache(n),e.safeSetState({result:r(a,{Loadable:y}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},f.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,l=(e.__chunkExtractor,Object(o.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,s=c.error,u=c.loading,d=c.result;if(t.suspense){var f=this.getCache();if(!f)throw this.loadAsync();return a({loading:!1,fallback:null,result:f,options:t,props:Object(i.a)({},l,{ref:r})})}if(s)throw s;var p=n||t.fallback||null;return u?p:a({loading:u,fallback:p,result:d,options:t,props:Object(i.a)({},l,{ref:r})})},n}(n.a.Component),h=(b=m,function(e){return n.a.createElement(f.Consumer,null,(function(t){return n.a.createElement(b,Object.assign({__chunkExtractor:t},e))}))}),y=n.a.forwardRef((function(e,t){return n.a.createElement(h,Object.assign({forwardedRef:t},e))}));return y.preload=function(e){u.requireAsync(e)},y.load=function(e){return u.requireAsync(e)},y}return{loadable:u,lazy:function(e,t){return u(e,Object(i.a)({},t,{suspense:!0}))}}}var b=v({resolve:function(e,t){var r=t.Loadable,a=e.__esModule?e.default:e.default||e;return u()(r,a,{preload:!0}),a},render:function(e){var t=e.result,r=e.props;return n.a.createElement(t,r)}}),m=b.loadable,h=b.lazy,y=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"===typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,a=e.props;return!r&&a.children?a.children(t):null}}),g=y.loadable,x=y.lazy;var O=m;O.lib=g,h.lib=x;t.a=O},300:function(e,t,r){"use strict";var a=r(298),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function c(e){return a.isMemo(e)?i:l[e.$$typeof]||n}l[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var s=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,r,a){if("string"!==typeof r){if(v){var n=p(r);n&&n!==v&&e(t,n,a)}var i=u(r);d&&(i=i.concat(d(r)));for(var l=c(t),b=c(r),m=0;m<i.length;++m){var h=i[m];if(!o[h]&&(!a||!a[h])&&(!b||!b[h])&&(!l||!l[h])){var y=f(r,h);try{s(t,h,y)}catch(g){}}}return t}return t}},301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&Symbol.for,n=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.concurrent_mode"):60111,p=a?Symbol.for("react.forward_ref"):60112,v=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,y=a?Symbol.for("react.fundamental"):60117,g=a?Symbol.for("react.responder"):60118,x=a?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case f:case i:case c:case l:case v:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case h:case m:case o:return t}}}function w(e){return O(e)===f}t.typeOf=O,t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=l,t.Suspense=v,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===c||e===l||e===v||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===g||e.$$typeof===x)},t.isAsyncMode=function(e){return w(e)||O(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return O(e)===u},t.isContextProvider=function(e){return O(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===h},t.isMemo=function(e){return O(e)===m},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===l},t.isSuspense=function(e){return O(e)===v}},444:function(e,t,r){"use strict";var a=r(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(165)).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},697:function(e,t,r){"use strict";var a=r(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(165)).default)(n.default.createElement("path",{d:"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"}),"Landscape");t.default=o}}]);
//# sourceMappingURL=17.60029f03.chunk.js.map