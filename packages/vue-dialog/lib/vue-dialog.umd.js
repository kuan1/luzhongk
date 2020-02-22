(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-dialog"] = factory();
	else
		root["vue-dialog"] = factory();
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

// EXTERNAL MODULE: /Users/kuan/Desktop/kuan/luzhongk/node_modules/@halobear/vue-dialog/lib/vue-dialog.umd.min.js
var vue_dialog_umd_min = __webpack_require__("49bf");
var vue_dialog_umd_min_default = /*#__PURE__*/__webpack_require__.n(vue_dialog_umd_min);

// CONCATENATED MODULE: ./index.js

/* harmony default export */ var index = (vue_dialog_umd_min_default.a);
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "49bf":
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})("undefined"!==typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="13f6")}({"0e08":function(e,t){(function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(r){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(e in n)if(n[e].src==t||"interactive"==n[e].readyState)return n[e];return null}}})})(document)},"13f6":function(e,t,n){"use strict";var r;(n.r(t),"undefined"!==typeof window)&&(n("0e08"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.visible?n("div",{staticClass:"my-dialog-container",class:[e.direction],on:{click:e.close}},[n("div",{staticClass:"my-dialog-inner",on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2),n("div")]):e._e()])},o=[],i={model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,default:!1},direction:{type:String,default:"center"}},methods:{close:function(){this.$emit("close",!1)}}},s=i;n("702d");function d(e,t,n,r,a,o,i,s){var d,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):a&&(d=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,d):[d]}return{exports:e,options:l}}var l=d(s,a,o,!1,null,"7946d30e",null),c=l.exports;c.install=function(e){e.component("vue-dialog",c)};var f=c;t["default"]=f},2350:function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"===typeof btoa){var o=r(a),i=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"===typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"===typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},"499e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],d=o[2],l=o[3],c={id:e+":"+a,css:s,media:d,sourceMap:l};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}n.r(t),n.d(t,"default",function(){return m});var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,l=!1,c=function(){},f=null,u="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,a){l=n,f=a||{};var i=r(e,t);return v(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a],d=o[s.id];d.refs--,n.push(d)}t?(i=r(e,t),v(i)):i=[];for(a=0;a<n.length;a++){d=n[a];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete o[d.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(b(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(b(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function y(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+u+'~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var a=d++;r=s||(s=y()),t=h.bind(null,r,a,!1),n=h.bind(null,r,a,!0)}else r=y(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function h(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function w(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(u,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"702d":function(e,t,n){"use strict";var r=n("f5d9"),a=n.n(r);a.a},"9ca6":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".my-dialog-container[data-v-7946d30e]{width:100%;height:100%;background:rgba(0,0,0,.7);position:fixed;top:0;left:0;z-index:2000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.my-dialog-container .my-dialog-inner[data-v-7946d30e]{position:relative}.my-dialog-container.center[data-v-7946d30e]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.my-dialog-container.center .my-dialog-inner[data-v-7946d30e]{-webkit-animation:fadeZoomIn-data-v-7946d30e .5s cubic-bezier(.8,0,0,1.5);animation:fadeZoomIn-data-v-7946d30e .5s cubic-bezier(.8,0,0,1.5)}.my-dialog-container.top[data-v-7946d30e]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.my-dialog-container.top .my-dialog-inner[data-v-7946d30e]{-webkit-animation:slideInDown-data-v-7946d30e .3s linear;animation:slideInDown-data-v-7946d30e .3s linear}.my-dialog-container.bottom[data-v-7946d30e]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.my-dialog-container.bottom .my-dialog-inner[data-v-7946d30e]{-webkit-animation:slideInUp-data-v-7946d30e .3s linear;animation:slideInUp-data-v-7946d30e .3s linear}.fade-enter-active[data-v-7946d30e],.fade-leave-active[data-v-7946d30e]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-7946d30e],.fade-leave-to[data-v-7946d30e]{opacity:0}@-webkit-keyframes fadeZoomIn-data-v-7946d30e{0%{opacity:0;-webkit-transform:scale(.1);transform:scale(.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeZoomIn-data-v-7946d30e{0%{opacity:0;-webkit-transform:scale(.1);transform:scale(.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes slideInUp-data-v-7946d30e{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideInUp-data-v-7946d30e{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideInDown-data-v-7946d30e{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideInDown-data-v-7946d30e{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}",""])},f5d9:function(e,t,n){var r=n("9ca6");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("4ad73d02",r,!0,{sourceMap:!1,shadowMode:!1})}})});

/***/ })

/******/ });
});