(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"t/Zn":function(e,a,n){"use strict";n.r(a);var t=n("5rAF"),l=n("WLS8"),r=n("kebl"),o=n("/ZiB"),i=n("D9vu"),c=n("mXGw"),s=n.n(c);a.default=function(e){var a,n;return s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex"}},e.imageUpload&&s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{translations:e.translations,imageUpload:e.imageUpload,imageUploaded:function(a){return e.onChange({src:a.url})}}),s.a.createElement(o.a,{variant:"body1",style:{marginLeft:"20px",marginRight:"20px"}},e.translations.or)),s.a.createElement(r.a,{placeholder:e.translations.srcPlaceholder,label:e.imageUpload?e.translations.haveUrl:e.translations.imageUrl,name:"src",value:e.data.src,onChange:function(a){return e.onChange({src:a.target.value})}})),s.a.createElement(r.a,{placeholder:e.translations.hrefPlaceholder,label:e.translations.hrefLabel,name:"href",style:{width:"512px"},value:null!==(a=e.data.href)&&void 0!==a?a:"",onChange:function(a){return e.onChange({href:a.target.value})}}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(l.a,{control:s.a.createElement(t.a,{value:null!==(n=e.data.openInNewWindow)&&void 0!==n&&n,onChange:function(a){return e.onChange({openInNewWindow:a.target.checked})}}),label:e.translations.openNewWindow}))}}}]);