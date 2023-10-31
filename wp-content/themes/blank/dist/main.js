/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\gsap\\\\CSSPlugin.js'\");\n\n//# sourceURL=webpack:///./node_modules/gsap/CSSPlugin.js?");

/***/ }),

/***/ "./node_modules/gsap/TweenLite.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/TweenLite.js ***!
  \****************************************/
/*! exports provided: _gsScope, TweenLite, globals, default, SimpleTimeline, Animation, Ease, Linear, Power0, Power1, Power2, Power3, Power4, TweenPlugin, EventDispatcher */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\gsap\\\\TweenLite.js'\");\n\n//# sourceURL=webpack:///./node_modules/gsap/TweenLite.js?");

/***/ }),

/***/ "./node_modules/gsap/TweenMax.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/TweenMax.js ***!
  \***************************************/
/*! exports provided: TweenMax, default, TweenLite, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, DirectionalRotationPlugin, RoundPropsPlugin, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\gsap\\\\TweenMax.js'\");\n\n//# sourceURL=webpack:///./node_modules/gsap/TweenMax.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/TweenMax */ \"./node_modules/gsap/TweenMax.js\");\n/* harmony import */ var gsap_CSSPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/CSSPlugin */ \"./node_modules/gsap/CSSPlugin.js\");\n/* harmony import */ var gsap_TweenLite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/TweenLite */ \"./node_modules/gsap/TweenLite.js\");\n// Import styles\n\n// Import scripts\n\n\n\n//header\nfunction scrollAnimated() {\n  var lastScrollTop = 0,\n    delta = 20;\n  /*$(window).on('scroll',function(){\r\n  \tvar nowScrollTop = $(this).scrollTop();\r\n  \tif (nowScrollTop > 50){\r\n  \t\t$('.bot-nav').addClass('animated');\r\n  \t} else {\r\n  \t\t$('.bot-nav').removeClass('animated');\r\n  \t}\r\n  });*/\n}\n\nscrollAnimated();\n//another ios\nvar iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;\nif (iOS) {\n  //\n}\n//scroll\n/*$('.anchor a').on('click', function(event){\r\n     \tevent.preventDefault();\r\n     \tlet $this = $(this);\r\n     \tlet href = $this.attr('href');\r\n     \t$('html, body').stop().animate({scrollTop: $(href).offset().top - 130}, 800);\r\n\t});*/\n\n//header animation\n\n//credits\nconsole.log(\"ღ Blank Theme! ღ \\n Dev con Amor por wampy para el mundo\");\n\n/* MENU RESPONSIVE */\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 8.0.0 is incompatible with ^4.0.0.\\n    at getRenderFuncFromSassImpl (C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:165:13)\\n    at Object.loader (C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:79:18)\\n    at C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4\\n    at C:\\\\xampp\\\\htdocs\\\\upstec\\\\wp-content\\\\themes\\\\blank\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:85:15\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\");\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });