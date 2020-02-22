(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-shape"] = factory();
	else
		root["vue-shape"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "13f6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e08":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "13f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("0e08")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /Users/kuan/Desktop/kuan/luzhongk/node_modules/@halobear/vue-shape/lib/vue-shape.umd.min.js
var vue_shape_umd_min = __webpack_require__("b7e0");
var vue_shape_umd_min_default = /*#__PURE__*/__webpack_require__.n(vue_shape_umd_min);

// CONCATENATED MODULE: ./index.js

/* harmony default export */ var index = (vue_shape_umd_min_default.a);
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "b7e0":
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e():undefined})("undefined"!==typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="13f6")}({"0626":function(t,e,n){var r=n("6ae0"),o=n("165e"),i=n("c754")(!1),a=n("6924")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,f=[];for(n in c)n!=a&&r(c,n)&&f.push(n);while(e.length>u)r(c,n=e[u++])&&(~i(f,n)||f.push(n));return f}},"0e08":function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},"13f6":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("0e08"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",[t._t("default")],2):n("div",t._g({staticClass:"shape-container",style:t.style},t.$listeners),[n("div",{staticClass:"shape-inner",class:{draggable:t.draggable},on:{mousedown:function(e){return t.bindEvent(e,"s")}}},[t._t("default")],2),t._l(t.actions,function(e){return n("div",{key:e,class:e,on:{mousedown:function(n){return t.bindEvent(n,e)}}})})],2)},i=[],a=(n("c7b8"),n("3845"),n("36d7"),{props:{w:{type:Number,default:100},h:{type:Number,default:1e3},x:{type:Number,default:0},y:{type:Number,default:0},disabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1}},data:function(){return{width:this.w,height:this.h,left:this.x,top:this.y,actions:["t","r","b","l","tr","tl","br","bl"]}},computed:{style:function(){var t=this.width,e=this.height,n=this.left,r=this.top;return{width:"".concat(t,"px"),height:"".concat(e,"px"),left:"".concat(n,"px"),top:"".concat(r,"px")}}},watch:{x:function(t){this.left=t},y:function(t){this.top=t},w:function(t){this.width=t},h:function(t){this.height=t}},methods:{bindEvent:function(t,e){var n=this;if(!this.disabled){var r=this.width,o=this.height,i=this.left,a=this.top,c=t.clientX,u=t.clientY;"undefined"!==typeof document&&(document.onmousemove=function(t){if("s"===e){if(n.draggable)return;n.top=a+t.clientY-u,n.left=i+(t.clientX-c)}else e.includes("t")&&(n.height=Math.max(o+u-t.clientY,0),n.top=a+t.clientY-u),e.includes("b")&&(n.height=o+t.clientY-u),e.includes("r")&&(n.width=r+t.clientX-c),e.includes("l")&&(n.width=r+c-t.clientX,n.left=i+(t.clientX-c))},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,n.$emit("change",{x:n.left,y:n.top,w:n.width,h:n.height})})}}},mounted:function(){},beforeDestroy:function(){}}),c=a;n("5979");function u(t,e,n,r,o,i,a,c){var u,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,e){return u.call(e),s(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:f}}var f=u(c,o,i,!1,null,"4d381f18",null),s=f.exports;s.install=function(t){t.component("vue-shape",s)};var d=s;e["default"]=d},"165e":function(t,e,n){var r=n("4ad8"),o=n("c6a9");t.exports=function(t){return r(o(t))}},1844:function(t,e,n){var r=n("6ce6")("wks"),o=n("5826"),i=n("db95").Symbol,a="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};c.store=r},"1ba8":function(t,e,n){t.exports=n("6ce6")("native-function-to-string",Function.toString)},2350:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"===typeof btoa){var i=r(o),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"36d7":function(t,e,n){"use strict";var r=n("db95"),o=n("6ae0"),i=n("6e35"),a=n("8292"),c=n("4400"),u=n("4e4b"),f=n("3e94").f,s=n("592a").f,d=n("58db").f,p=n("59ca").trim,l="Number",h=r[l],v=h,b=h.prototype,g=i(n("4cc3")(b))==l,y="trim"in String.prototype,x=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,u=e.slice(2),f=0,s=u.length;f<s;f++)if(a=u.charCodeAt(f),a<48||a>o)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?u(function(){b.valueOf.call(n)}):i(n)!=l)?a(new v(x(e)),n,h):x(e)};for(var m,w=n("c137")?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;w.length>_;_++)o(v,m=w[_])&&!o(h,m)&&d(h,m,s(v,m));h.prototype=b,b.constructor=h,n("46ac")(r,l,h)}},3845:function(t,e,n){"use strict";var r=n("4ef3"),o=n("5cf8"),i="includes";r(r.P+r.F*n("d217")(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3e94":function(t,e,n){var r=n("0626"),o=n("c69b").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},4400:function(t,e,n){var r=n("534f");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"46ac":function(t,e,n){var r=n("db95"),o=n("62a9"),i=n("6ae0"),a=n("5826")("src"),c=n("1ba8"),u="toString",f=(""+c).split(u);n("fb53").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,a)||o(n,a,t[e]?""+t[e]:f.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,u,function(){return"function"==typeof this&&this[a]||c.call(this)})},"499e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],c=i[1],u=i[2],f=i[3],s={id:t+":"+o,css:c,media:u,sourceMap:f};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,f=!1,s=function(){},d=null,p="data-vue-ssr-id",l="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){f=n,d=o||{};var a=r(t,e);return v(a),function(e){for(var n=[],o=0;o<a.length;o++){var c=a[o],u=i[c.id];u.refs--,n.push(u)}e?(a=r(t,e),v(a)):a=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete i[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(f)return s;r.parentNode.removeChild(r)}if(l){var o=u++;r=c||(c=b()),e=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=b(),e=m.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function m(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),d.ssrId&&t.setAttribute(p,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4ad8":function(t,e,n){var r=n("6e35");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"4cc3":function(t,e,n){var r=n("a570"),o=n("8916"),i=n("c69b"),a=n("6924")("IE_PROTO"),c=function(){},u="prototype",f=function(){var t,e=n("e906")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("5e2a").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),f=t.F;while(r--)delete f[u][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=f(),void 0===e?n:o(n,e)}},"4e4b":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"4ef3":function(t,e,n){var r=n("db95"),o=n("fb53"),i=n("62a9"),a=n("46ac"),c=n("acba"),u="prototype",f=function(t,e,n){var s,d,p,l,h=t&f.F,v=t&f.G,b=t&f.S,g=t&f.P,y=t&f.B,x=v?r:b?r[e]||(r[e]={}):(r[e]||{})[u],m=v?o:o[e]||(o[e]={}),w=m[u]||(m[u]={});for(s in v&&(n=e),n)d=!h&&x&&void 0!==x[s],p=(d?x:n)[s],l=y&&d?c(p,r):g&&"function"==typeof p?c(Function.call,p):p,x&&a(x,s,p,t&f.U),m[s]!=p&&i(m,s,l),g&&w[s]!=p&&(w[s]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"534f":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"55b7":function(t,e,n){var r=n("64cd");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("014b64be",r,!0,{sourceMap:!1,shadowMode:!1})},"56f8":function(t,e,n){var r=n("534f"),o=n("6e35"),i=n("1844")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},5826:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"58db":function(t,e,n){var r=n("a570"),o=n("8257"),i=n("4400"),a=Object.defineProperty;e.f=n("c137")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"592a":function(t,e,n){var r=n("ded7"),o=n("c0d9"),i=n("165e"),a=n("4400"),c=n("6ae0"),u=n("8257"),f=Object.getOwnPropertyDescriptor;e.f=n("c137")?f:function(t,e){if(t=i(t),e=a(e,!0),u)try{return f(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},5979:function(t,e,n){"use strict";var r=n("55b7"),o=n.n(r);o.a},"59ca":function(t,e,n){var r=n("4ef3"),o=n("c6a9"),i=n("4e4b"),a=n("de55"),c="["+a+"]",u="​",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),d=function(t,e,n){var o={},c=i(function(){return!!a[t]()||u[t]()!=u}),f=o[t]=c?e(p):a[t];n&&(o[n]=f),r(r.P+r.F*c,"String",o)},p=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(s,"")),t};t.exports=d},"5cf8":function(t,e,n){var r=n("56f8"),o=n("c6a9");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},"5e2a":function(t,e,n){var r=n("db95").document;t.exports=r&&r.documentElement},"62a9":function(t,e,n){var r=n("58db"),o=n("c0d9");t.exports=n("c137")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"64cd":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".shape-container[data-v-4d381f18]{position:absolute;background-color:rgba(0,0,0,.3);width:150px;height:150px;top:100px;left:100px;border:1px solid #2a86ff}.shape-inner[data-v-4d381f18]{position:absolute;left:0;top:0;width:100%;height:100%}.shape-inner.draggable[data-v-4d381f18]{cursor:-webkit-grab;cursor:grab}.shape-inner.draggable[data-v-4d381f18]:active{cursor:-webkit-grabbing;cursor:grabbing}.b[data-v-4d381f18],.l[data-v-4d381f18],.r[data-v-4d381f18],.t[data-v-4d381f18]{position:absolute;background-color:#fff;z-index:1000}.b[data-v-4d381f18],.t[data-v-4d381f18]{width:16px;height:6px;border:1px solid rgba(112,112,119,.3);border-radius:3.5px;left:0;right:0;margin:auto;cursor:ns-resize}.t[data-v-4d381f18]{top:-4px}.b[data-v-4d381f18]{bottom:-4px}.l[data-v-4d381f18],.r[data-v-4d381f18]{cursor:ew-resize;top:0;bottom:0;margin:auto;height:16px;width:6px;border:1px solid rgba(112,112,119,.3);border-radius:3.5px}.l[data-v-4d381f18]{left:-4px}.r[data-v-4d381f18]{right:-4px}.bl[data-v-4d381f18],.br[data-v-4d381f18],.tl[data-v-4d381f18],.tr[data-v-4d381f18]{z-index:530;position:absolute;width:10px;height:10px;border-radius:3px;background-color:#fff;border:1px solid rgba(112,112,119,.3);border-radius:50%;z-index:1000}.tl[data-v-4d381f18]{left:-5px;cursor:nwse-resize}.tl[data-v-4d381f18],.tr[data-v-4d381f18]{top:-5px}.tr[data-v-4d381f18]{right:-5px}.bl[data-v-4d381f18],.tr[data-v-4d381f18]{cursor:nesw-resize}.bl[data-v-4d381f18]{left:-5px}.bl[data-v-4d381f18],.br[data-v-4d381f18]{bottom:-5px}.br[data-v-4d381f18]{right:-5px;cursor:nwse-resize}",""])},"68aa":function(t,e,n){var r=n("7c49"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},6924:function(t,e,n){var r=n("6ce6")("keys"),o=n("5826");t.exports=function(t){return r[t]||(r[t]=o(t))}},"6ae0":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6ce6":function(t,e,n){var r=n("fb53"),o=n("db95"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("f881")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"6d32":function(t,e,n){var r=n("534f"),o=n("a570"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("acba")(Function.call,n("592a").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"6e35":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"70c8":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7c49":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},8257:function(t,e,n){t.exports=!n("c137")&&!n("4e4b")(function(){return 7!=Object.defineProperty(n("e906")("div"),"a",{get:function(){return 7}}).a})},8292:function(t,e,n){var r=n("534f"),o=n("6d32").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"853b":function(t,e,n){var r=n("1844")("unscopables"),o=Array.prototype;void 0==o[r]&&n("62a9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},8916:function(t,e,n){var r=n("58db"),o=n("a570"),i=n("9b7a");t.exports=n("c137")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},"9b7a":function(t,e,n){var r=n("0626"),o=n("c69b");t.exports=Object.keys||function(t){return r(t,o)}},a570:function(t,e,n){var r=n("534f");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},aaab:function(t,e,n){var r=n("7c49"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},acba:function(t,e,n){var r=n("70c8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},c0d9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},c137:function(t,e,n){t.exports=!n("4e4b")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},c69b:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},c6a9:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c754:function(t,e,n){var r=n("165e"),o=n("68aa"),i=n("aaab");t.exports=function(t){return function(e,n,a){var c,u=r(e),f=o(u.length),s=i(a,f);if(t&&n!=n){while(f>s)if(c=u[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}}},c7b8:function(t,e,n){"use strict";var r=n("4ef3"),o=n("c754")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("853b")("includes")},d217:function(t,e,n){var r=n("1844")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},db95:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},de55:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ded7:function(t,e){e.f={}.propertyIsEnumerable},e906:function(t,e,n){var r=n("534f"),o=n("db95").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},f881:function(t,e){t.exports=!1},fb53:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)}})});

/***/ })

/******/ });
});