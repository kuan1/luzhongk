(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-drawer"] = factory();
	else
		root["vue-drawer"] = factory();
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

/***/ "0102":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "08a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "08a1":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("cf25");
var enumBugKeys = __webpack_require__("4b1f");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

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

/***/ "0fc8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var shared = __webpack_require__("a0c8");
var has = __webpack_require__("66f4");
var uid = __webpack_require__("ba70");
var NATIVE_SYMBOL = __webpack_require__("c763");
var USE_SYMBOL_AS_UID = __webpack_require__("78b6");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


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

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"540ae564-vue-loader-template"}!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/VueDrawer.vue?vue&type=template&id=b0032bd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-drawer-outer"},[_c('header',{staticClass:"vue-drawer-header"},[_c('toggle-bar',{staticClass:"toggle-bar",on:{"click":_vm.toggle}}),_vm._t("title",[_c('span')]),_c('div',{staticClass:"drawer-nav-container"},[_c('nav',{staticClass:"drawer-nav"},[_c('NavMenu',{attrs:{"data":_vm.data,"active":_vm.active},on:{"click":_vm.menuClick}})],1),_c('div',{staticClass:"drawer-mask",on:{"click":_vm.hideNav,"touchStart":_vm.hideNav}})])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueDrawer.vue?vue&type=template&id=b0032bd8&

// CONCATENATED MODULE: ./src/utils/index.js
var utils_name = 'vue-drawer-collapse';
function toggleNav() {
  document.body.classList.toggle(utils_name);
}
function utils_showNav() {
  document.body.classList.add(utils_name);
}
function utils_hideNav() {
  document.body.classList.remove(utils_name);
}
// EXTERNAL MODULE: ./src/components/ToggleBar.vue
var ToggleBar = __webpack_require__("1cd6");

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"540ae564-vue-loader-template"}!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/NavMenu.vue?vue&type=template&id=bcea9580&
var NavMenuvue_type_template_id_bcea9580_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav-ul"},_vm._l((_vm.data),function(item){return _c('li',{key:item.name},[_c('div',{staticClass:"link-wrap",class:{
        'has-child': item.children && item.children.length, 
        active: _vm.activeName === item.name,
        open: _vm.childrenVisible(item)
      }},[_c('my-link',{staticClass:"my-link",attrs:{"name":item.name,"to":item.to,"href":item.href},on:{"click":function($event){return _vm.handleClick(item)}}},[(item.children && item.children.length)?_c('img',{staticClass:"link-arrow",attrs:{"src":__webpack_require__("97c6")}}):_vm._e()])],1),(item.children && item.children.length)?_c('transition-view',{attrs:{"visible":_vm.childrenVisible(item)},on:{"toggle":function($event){return _vm.toggleVisible(item)}}},[_c('nav-menu',{attrs:{"data":item.children,"active":_vm.activeName},on:{"click":_vm.childrenClick}})],1):_vm._e()],1)}),0)}
var NavMenuvue_type_template_id_bcea9580_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NavMenu.vue?vue&type=template&id=bcea9580&

// EXTERNAL MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("3a5f");

// EXTERNAL MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("85bf");

// EXTERNAL MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("99cd");

// EXTERNAL MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("21ef");

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"540ae564-vue-loader-template"}!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/MyLink.vue?vue&type=template&id=5faf4319&
var MyLinkvue_type_template_id_5faf4319_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.href)?_c('a',{attrs:{"href":_vm.href},on:{"click":_vm.handleClick}},[_vm._v(" "+_vm._s(_vm.name)+" "),_vm._t("default")],2):(_vm.to.name || _vm.to.path)?_c('router-link',{attrs:{"to":_vm.to},nativeOn:{"click":function($event){return _vm.handleClick($event)}}},[_vm._v(" "+_vm._s(_vm.name)+" "),_vm._t("default")],2):_c('span',{on:{"click":_vm.handleClick}},[_vm._v(" "+_vm._s(_vm.name)+" "),_vm._t("default")],2)}
var MyLinkvue_type_template_id_5faf4319_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MyLink.vue?vue&type=template&id=5faf4319&

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/MyLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyLinkvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./src/components/MyLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyLinkvue_type_script_lang_js_ = (MyLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("6544");

// CONCATENATED MODULE: ./src/components/MyLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyLinkvue_type_script_lang_js_,
  MyLinkvue_type_template_id_5faf4319_render,
  MyLinkvue_type_template_id_5faf4319_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MyLink = (component.exports);
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"540ae564-vue-loader-template"}!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/TransitionView.vue?vue&type=template&id=4d04061f&
var TransitionViewvue_type_template_id_4d04061f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"transition-container",on:{"transitionend":_vm.transitionend}},[(_vm.visible)?_c('div',{staticClass:"close-bg",on:{"click":function($event){return _vm.$emit('toggle')}}}):_vm._e(),_c('div',{staticClass:"transition-content"},[_vm._t("default")],2)])}
var TransitionViewvue_type_template_id_4d04061f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TransitionView.vue?vue&type=template&id=4d04061f&

// CONCATENATED MODULE: ./src/utils/getEleSize.js
function getSize(elem) {
  var width,
      height,
      noneNodes = [],
      nodeStyle = [];
  getNoneNode(elem); //获取多层display：none;的元素

  setNodeStyle();
  width = elem.clientWidth;
  height = elem.clientHeight;
  resumeNodeStyle();
  return {
    width: width,
    height: height
  };

  function getNoneNode(node) {
    if (!node) return;
    var display = getStyles(node).getPropertyValue('display'),
        tagName = node.nodeName.toLowerCase();

    if (display != 'none' && tagName != 'body') {
      getNoneNode(node.parentNode);
    } else {
      noneNodes.push(node);
      if (tagName != 'body') getNoneNode(node.parentNode);
    }
  } //这方法才能获取最终是否有display属性设置，不能style.display。


  function getStyles(elem) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  }

  function setNodeStyle() {
    var i = 0;

    for (; i < noneNodes.length; i++) {
      var visibility = noneNodes[i].style.visibility,
          display = noneNodes[i].style.display,
          style = noneNodes[i].getAttribute('style'); //覆盖其他display样式

      noneNodes[i].setAttribute('style', 'visibility:hidden;display:block !important;' + style);
      nodeStyle[i] = {
        visibility: visibility,
        display: display
      };
    }
  }

  function resumeNodeStyle() {
    for (var i = 0; i < noneNodes.length; i++) {
      noneNodes[i].style.visibility = nodeStyle[i].visibility;
      noneNodes[i].style.display = nodeStyle[i].display;
    }
  }
}
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/TransitionView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TransitionViewvue_type_script_lang_js_ = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible: function visible(_visible) {
      if (_visible) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted: function mounted() {
    this.transitionend();
  },
  methods: {
    hide: function hide() {
      if (this.visible) return;
      var container = this.$refs.container;
      container.style.display = 'block';

      var _getEleSize = getSize(container),
          height = _getEleSize.height;

      container.style.height = "".concat(height, "px");
      setTimeout(function () {
        container.style.height = 0;
      });
    },
    show: function show() {
      var container = this.$refs.container;
      container.style.height = '';

      var _getEleSize2 = getSize(container),
          height = _getEleSize2.height;

      container.style.display = 'block';
      container.style.height = 0;
      setTimeout(function () {
        container.style.height = "".concat(height, "px");
      });
    },
    transitionend: function transitionend() {
      var container = this.$refs.container;
      container.style.display = this.visible ? 'block' : 'none';
      container.style.height = '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/TransitionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TransitionViewvue_type_script_lang_js_ = (TransitionViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TransitionView.vue





/* normalize component */

var TransitionView_component = Object(componentNormalizer["a" /* default */])(
  components_TransitionViewvue_type_script_lang_js_,
  TransitionViewvue_type_template_id_4d04061f_render,
  TransitionViewvue_type_template_id_4d04061f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TransitionView = (TransitionView_component.exports);
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/NavMenu.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var NavMenuvue_type_script_lang_js_ = ({
  name: 'NavMenu',
  model: {
    prop: 'active',
    event: 'click'
  },
  components: {
    MyLink: MyLink,
    TransitionView: TransitionView
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    active: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      activeName: this.active,
      collapse: [] // 展开name

    };
  },
  watch: {
    active: function active(_active) {
      this.activeName = _active;
    }
  },
  methods: {
    handleClick: function handleClick(item) {
      var name = item.name;

      if (item.children && item.children.length) {
        this.toggleVisible(item);
      } else {
        this.childrenClick(name);
      }
    },
    childrenClick: function childrenClick(name) {
      this.activeName = name;
      this.$emit('click', name);
    },
    childrenVisible: function childrenVisible(item) {
      return this.collapse.includes(item.name);
    },
    toggleVisible: function toggleVisible(item) {
      var name = item.name;

      if (this.collapse.includes(name)) {
        this.collapse = this.collapse.filter(function (item) {
          return item !== name;
        });
      } else {
        this.collapse.push(name);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/NavMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavMenuvue_type_script_lang_js_ = (NavMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NavMenu.vue





/* normalize component */

var NavMenu_component = Object(componentNormalizer["a" /* default */])(
  components_NavMenuvue_type_script_lang_js_,
  NavMenuvue_type_template_id_bcea9580_render,
  NavMenuvue_type_template_id_bcea9580_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavMenu = (NavMenu_component.exports);
// EXTERNAL MODULE: ./src/styles/index.less
var styles = __webpack_require__("a4b1");

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/VueDrawer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var VueDrawervue_type_script_lang_js_ = ({
  model: {
    prop: 'active',
    event: 'click'
  },
  components: {
    ToggleBar: ToggleBar["default"],
    NavMenu: NavMenu
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    active: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible: function visible(_visible) {
      if (_visible) {
        this.showNav();
      } else {
        this.hideNav();
      }
    }
  },
  mounted: function mounted() {
    if (this.visible) {
      this.showNav();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.hideNav();
  },
  methods: {
    showNav: function showNav() {
      utils_showNav();

      this.$emit('update:visible', true);
    },
    hideNav: function hideNav() {
      utils_hideNav();

      this.$emit('update:visible', false);
    },
    toggle: function toggle() {
      if (this.visible) {
        this.hideNav();
      } else {
        this.showNav();
      }
    },
    menuClick: function menuClick(e) {
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ./src/VueDrawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueDrawervue_type_script_lang_js_ = (VueDrawervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/VueDrawer.vue





/* normalize component */

var VueDrawer_component = Object(componentNormalizer["a" /* default */])(
  src_VueDrawervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueDrawer = (VueDrawer_component.exports);
// CONCATENATED MODULE: ./index.js


VueDrawer.install = function (Vue) {
  Vue.component('vue-drawer', VueDrawer);
};

/* harmony default export */ var index = (VueDrawer);
// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "18c1":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("d2f9");
var global = __webpack_require__("f738");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "1c02":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("7780");
var IndexedObject = __webpack_require__("8667");
var toObject = __webpack_require__("bb2b");
var toLength = __webpack_require__("29b0");
var arraySpeciesCreate = __webpack_require__("51ed");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "1c73":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var propertyIsEnumerableModule = __webpack_require__("08a0");
var createPropertyDescriptor = __webpack_require__("83e1");
var toIndexedObject = __webpack_require__("934d");
var toPrimitive = __webpack_require__("6263");
var has = __webpack_require__("66f4");
var IE8_DOM_DEFINE = __webpack_require__("ccfc");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1cd6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ToggleBar_vue_vue_type_template_id_4768be52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8001");
/* harmony import */ var _ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9593");
/* harmony import */ var _nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6544");





/* normalize component */

var component = Object(_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToggleBar_vue_vue_type_template_id_4768be52___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ToggleBar_vue_vue_type_template_id_4768be52___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1d4f":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("0102");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "21ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("41dd");
var notARegExp = __webpack_require__("74e8");
var requireObjectCoercible = __webpack_require__("f8da");
var correctIsRegExpLogic = __webpack_require__("31f3");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "250a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var setGlobal = __webpack_require__("f845");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "2915":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "29b0":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("548c");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "2a19":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var isObject = __webpack_require__("6eb5");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "2f7e":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8d9d");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "31f3":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("0fc8");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "3769":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "39de":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("18c1");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "3a5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("41dd");
var $filter = __webpack_require__("1c02").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("c272");
var arrayMethodUsesToLength = __webpack_require__("8e22");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "41dd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var getOwnPropertyDescriptor = __webpack_require__("1c73").f;
var createNonEnumerableProperty = __webpack_require__("b09e");
var redefine = __webpack_require__("adcf");
var setGlobal = __webpack_require__("f845");
var copyConstructorProperties = __webpack_require__("a364");
var isForced = __webpack_require__("2f7e");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "4b1f":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "4b6f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a548");
var defineProperties = __webpack_require__("83bb");
var enumBugKeys = __webpack_require__("4b1f");
var hiddenKeys = __webpack_require__("ac39");
var html = __webpack_require__("39de");
var documentCreateElement = __webpack_require__("2a19");
var sharedKey = __webpack_require__("51db");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "50c6":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("0fc8");
var create = __webpack_require__("4b6f");
var definePropertyModule = __webpack_require__("7b8c");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "51db":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("a0c8");
var uid = __webpack_require__("ba70");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "51ed":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6eb5");
var isArray = __webpack_require__("1d4f");
var wellKnownSymbol = __webpack_require__("0fc8");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "548c":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "5a0e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var userAgent = __webpack_require__("72d8");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "5ed8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6eb5");
var classof = __webpack_require__("0102");
var wellKnownSymbol = __webpack_require__("0fc8");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "6263":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6eb5");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6544":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "66f4":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "68e5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("2915");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width:767px){body{-webkit-transition:all .3s linear;transition:all .3s linear;position:relative;min-height:100vh}.vue-drawer-header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.nav-toggle-bar{width:20px;height:16px;position:absolute;opacity:.8;cursor:pointer;top:0;left:20px;bottom:0;margin:auto;-webkit-transition:left .5s ease-in-out;transition:left .5s ease-in-out;z-index:5001}.nav-toggle-bar .nav-bar-item{background-color:#333;position:absolute;left:0;width:100%;height:2px;-webkit-transition:.4s;transition:.4s;-webkit-transform-origin:0;transform-origin:0;border-radius:2px;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}.nav-toggle-bar .nav-bar-item:first-child{top:0}.nav-toggle-bar .nav-bar-item:nth-child(2){top:7px}.nav-toggle-bar .nav-bar-item:nth-child(3){top:14px}.vue-drawer-collapse{-webkit-transform:translateX(250px);transform:translateX(250px);overflow-x:hidden;position:fixed}.vue-drawer-collapse .drawer-nav-container .drawer-mask{opacity:1;visibility:visible}.vue-drawer-collapse .nav-toggle-bar .nav-bar-item{background-color:#fff}.vue-drawer-collapse .nav-toggle-bar .nav-bar-item:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vue-drawer-collapse .nav-toggle-bar .nav-bar-item:nth-child(2){opacity:0}.vue-drawer-collapse .nav-toggle-bar .nav-bar-item:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.drawer-nav-container{position:relative;z-index:5000}.drawer-nav-container .drawer-nav{position:fixed;top:0;right:100%;width:250px;height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:20px 8px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f8f8f8;font-size:14px;color:#555}.drawer-nav-container .drawer-mask{opacity:0;visibility:hidden;-webkit-transition:.5s;transition:.5s;position:fixed;left:0;width:100vw;top:0;bottom:0;background-color:rgba(0,0,0,.7)}.drawer-nav .nav-ul .nav-ul{font-size:14px;padding-left:2em}.drawer-nav .link-wrap{padding-right:1em}.drawer-nav .link-wrap .my-link{padding:0 1em}}@media screen and (min-width:768px){.vue-drawer-outer .vue-drawer-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue-drawer-outer .vue-drawer-header .nav-toggle-bar{display:none}.vue-drawer-outer .drawer-nav{font-size:16px}.vue-drawer-outer .drawer-nav>.nav-ul,.vue-drawer-outer .drawer-nav>.nav-ul>li{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-drawer-outer .drawer-nav>.nav-ul>li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;margin-left:25px}.vue-drawer-outer .drawer-nav>.nav-ul>li>.link-wrap{line-height:50px}.vue-drawer-outer .drawer-nav li{position:relative}.vue-drawer-outer .drawer-nav .transition-container{position:absolute;top:48px;white-space:nowrap;background:#fff;border:1px solid #eee;border-radius:3px}.vue-drawer-outer .drawer-nav .transition-container .nav-ul{padding:.6em}}.vue-drawer-outer{width:100vw;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.05);box-shadow:0 1px 6px rgba(0,0,0,.05)}.vue-drawer-outer .transition-container{position:relative;-webkit-transition:.3s;transition:.3s;overflow:hidden}.vue-drawer-outer .transition-container .close-bg{position:fixed;width:100%;height:100%;top:0;left:0}.vue-drawer-outer .transition-container .transition-content{position:relative}.vue-drawer-outer .vue-drawer-header{max-width:1300px;height:50px;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 auto}.vue-drawer-outer li{list-style:none}.vue-drawer-outer .router-link-active{color:#3eaf7c}.vue-drawer-outer .my-link{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-drawer-outer .my-link:hover{opacity:.6;-webkit-transition:.3s;transition:.3s}.vue-drawer-outer .link-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue-drawer-outer .link-wrap.active a,.vue-drawer-outer .link-wrap.active span{color:#3eaf7c;font-weight:700}.vue-drawer-outer .link-wrap.open .link-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vue-drawer-outer .link-wrap a,.vue-drawer-outer .link-wrap span{line-height:2;color:#555;font-weight:400}.vue-drawer-outer .link-arrow{-webkit-transition:.3s;transition:.3s;-webkit-transition:rotate(0);transition:rotate(0);opacity:.5;width:18px;height:18px;-webkit-box-sizing:content-box;box-sizing:content-box}.vue-drawer-outer .has-child.open{opacity:.7}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6b1e":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//

/***/ }),

/***/ "6eb5":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "72d8":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("18c1");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "7355":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "74e8":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("5ed8");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "7780":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("d607");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "78b6":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("c763");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "7b8c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var IE8_DOM_DEFINE = __webpack_require__("ccfc");
var anObject = __webpack_require__("a548");
var toPrimitive = __webpack_require__("6263");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8001":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"540ae564-vue-loader-template"}!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/ToggleBar.vue?vue&type=template&id=4768be52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-toggle-bar",on:{"click":function($event){return _vm.$emit('click')}}},[_c('span',{staticClass:"nav-bar-item"}),_c('span',{staticClass:"nav-bar-item"}),_c('span',{staticClass:"nav-bar-item"})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ToggleBar.vue?vue&type=template&id=4768be52&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "8055":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("548c");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "83bb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var definePropertyModule = __webpack_require__("7b8c");
var anObject = __webpack_require__("a548");
var objectKeys = __webpack_require__("08a1");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "83e1":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "85bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("41dd");
var $includes = __webpack_require__("8611").includes;
var addToUnscopables = __webpack_require__("50c6");
var arrayMethodUsesToLength = __webpack_require__("8e22");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "8611":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("934d");
var toLength = __webpack_require__("29b0");
var toAbsoluteIndex = __webpack_require__("8055");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "8667":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8d9d");
var classof = __webpack_require__("0102");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "8d9d":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "8e22":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var fails = __webpack_require__("8d9d");
var has = __webpack_require__("66f4");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "8faf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("b8ca");
var global = __webpack_require__("f738");
var isObject = __webpack_require__("6eb5");
var createNonEnumerableProperty = __webpack_require__("b09e");
var objectHas = __webpack_require__("66f4");
var sharedKey = __webpack_require__("51db");
var hiddenKeys = __webpack_require__("ac39");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "934d":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("8667");
var requireObjectCoercible = __webpack_require__("f8da");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "9593":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_thread_loader_dist_cjs_js_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_babel_loader_lib_index_js_ref_12_1_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b1e");
/* harmony import */ var _nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_thread_loader_dist_cjs_js_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_babel_loader_lib_index_js_ref_12_1_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_thread_loader_dist_cjs_js_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_babel_loader_lib_index_js_ref_12_1_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_thread_loader_dist_cjs_js_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_babel_loader_lib_index_js_ref_12_1_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_13_0_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "97c6":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg=="

/***/ }),

/***/ "99cd":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var defineProperty = __webpack_require__("7b8c").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "9c7d":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("cf25");
var enumBugKeys = __webpack_require__("4b1f");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "a0c8":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("7355");
var store = __webpack_require__("250a");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "a364":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("66f4");
var ownKeys = __webpack_require__("a413");
var getOwnPropertyDescriptorModule = __webpack_require__("1c73");
var definePropertyModule = __webpack_require__("7b8c");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "a413":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("18c1");
var getOwnPropertyNamesModule = __webpack_require__("9c7d");
var getOwnPropertySymbolsModule = __webpack_require__("3769");
var anObject = __webpack_require__("a548");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "a4b1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("68e5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("f24d").default
var update = add("a8f9d84e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a548":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6eb5");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "ac39":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "adcf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var createNonEnumerableProperty = __webpack_require__("b09e");
var has = __webpack_require__("66f4");
var setGlobal = __webpack_require__("f845");
var inspectSource = __webpack_require__("f8a2");
var InternalStateModule = __webpack_require__("8faf");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "b09e":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var definePropertyModule = __webpack_require__("7b8c");
var createPropertyDescriptor = __webpack_require__("83e1");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "b8ca":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var inspectSource = __webpack_require__("f8a2");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "ba70":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "bb2b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("f8da");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "c272":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8d9d");
var wellKnownSymbol = __webpack_require__("0fc8");
var V8_VERSION = __webpack_require__("5a0e");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "c763":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8d9d");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "ccfc":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("f402");
var fails = __webpack_require__("8d9d");
var createElement = __webpack_require__("2a19");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "cf25":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("66f4");
var toIndexedObject = __webpack_require__("934d");
var indexOf = __webpack_require__("8611").indexOf;
var hiddenKeys = __webpack_require__("ac39");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2f9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");

module.exports = global;


/***/ }),

/***/ "d607":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "f24d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /Users/kuan/.nvm/versions/node/v10.13.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "f402":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8d9d");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "f738":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7234")))

/***/ }),

/***/ "f845":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f738");
var createNonEnumerableProperty = __webpack_require__("b09e");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "f8a2":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("250a");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "f8da":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ })

/******/ });
});