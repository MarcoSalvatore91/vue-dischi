(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03c2":function(t,e,n){"use strict";n("1178")},"05c0":function(t,e,n){"use strict";n("fdbf3")},1178:function(t,e,n){},"1b11":function(t,e,n){"use strict";n("7b28")},"213c":function(t,e,n){t.exports=n.p+"img/unnamed.cb65e80c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("Main")],1)},a=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"head"},[r("img",{attrs:{src:n("213c"),alt:"Logo"}})])])}],c={name:"Header",props:{}},u=c,l=(n("05c0"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"7fddf442",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",[t.isLoading?n("Loaders"):n("div",{staticClass:"container row"},t._l(t.songs,(function(t){return n("div",{key:t.response,staticClass:"card-song text-center"},[n("Card",{attrs:{poster:t.poster,author:t.author,title:t.title,year:t.year}})],1)})),0)],1)])},b=[],v=n("bc3a"),h=n.n(v),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.poster,alt:t.author}}),n("h4",[t._v(t._s(t.title))]),n("div",{staticClass:"grey"},[t._v(t._s(t.author))]),n("div",{staticClass:"grey"},[t._v(t._s(t.year))])])},_=[],m={name:"Card",props:["poster","author","title","year"]},y=m,O=(n("03c2"),Object(l["a"])(y,g,_,!1,null,"b46963c4",null)),x=O.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center"},[n("p",{staticClass:"fw-bold fs-5"},[t._v("Caricamento In Corso..."),n("br"),t._v("Attendi per ascoltare i tuoi pezzi preferiti")])])])}],C={},$=C,E=(n("cbfb"),Object(l["a"])($,j,w,!1,null,"3da0b272",null)),L=E.exports,M={name:"Main",components:{Card:x,Loaders:L},data:function(){return{isLoading:!1,songs:[]}},methods:{getSong:function(){var t=this;this.isLoading=!0,h.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.songs=e.data.response,t.isLoading=!1}))}},mounted:function(){this.getSong()}},P=M,S=(n("1b11"),Object(l["a"])(P,d,b,!1,null,"4b0a5ad8",null)),k=S.exports,H={name:"App",components:{Header:p,Main:k}},T=H,z=Object(l["a"])(T,o,a,!1,null,"6ae91b66",null),A=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"7b28":function(t,e,n){},cbfb:function(t,e,n){"use strict";n("f0f0")},f0f0:function(t,e,n){},fdbf3:function(t,e,n){}});
//# sourceMappingURL=app.30434ede.js.map