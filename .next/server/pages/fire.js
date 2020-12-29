module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/components/Footer.js\";\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.footer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 16\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJCLENBQThCO0FBQzFCQyxRQUFNLEdBQUU7QUFDSix3QkFDRztBQUFBLDZCQUNJO0FBQUEsa0JBQU0sS0FBS0MsS0FBTCxDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBS0g7O0FBUHlCOztBQVVmSixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmZvb3Rlcn08L2Rpdj5cbiAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/components/Header.js\";\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.header\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 16\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 16\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiaGVhZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBOEI7QUFDMUJDLFFBQU0sR0FBRTtBQUNKLHdCQUNHO0FBQUEsOEJBQ0k7QUFBQSxrQkFBTSxLQUFLQyxLQUFMLENBQVdDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUssS0FBS0QsS0FBTCxDQUFXRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFNSDs7QUFSeUI7O0FBV2ZMLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/components/Layout.js\";\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: this.props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), _static_Style__WEBPACK_IMPORTED_MODULE_4__[\"default\"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        header: this.props.header,\n        title: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), this.props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        footer: \"copyright\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJzdHlsZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUE4QjtBQUMxQkMsUUFBTSxHQUFFO0FBQ0osd0JBQ0k7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFBLGdDQUNJO0FBQUEsb0JBQVEsS0FBS0MsS0FBTCxDQUFXQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxpQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUtLQyxxREFMTCxlQU1JLHFFQUFDLDBEQUFEO0FBQVEsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csTUFBM0I7QUFDQSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQztBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosRUFRUyxLQUFLRCxLQUFMLENBQVdJLFFBUnBCLGVBU0kscUVBQUMsMERBQUQ7QUFBUSxjQUFNLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFhSDs7QUFmeUI7O0FBa0JmUCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3RhdGljL1N0eWxlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIHtzdHlsZX1cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkZXJ9IFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3Rlcj1cImNvcHlyaWdodFwiICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Sampledata.js":
/*!**********************************!*\
  !*** ./components/Sampledata.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/components/Sampledata.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Sampledata extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 10px\"\n    });\n\n    this.state = {\n      data: []\n    };\n    this.getFireData();\n  } // Firebaseからデータの取得\n\n\n  getFireData() {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().limitToFirst(10).on('value', snapshot => {\n      self.setState({\n        data: snapshot.val()\n      });\n    });\n  } // データの表示\n\n\n  getTableData() {\n    let result = [];\n\n    if (this.state.data == null || this.state.data.length == 0) {\n      return [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: \"NO DATA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 35\n        }, this)\n      }, \"0\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, this)];\n    }\n\n    for (let i in this.state.data) {\n      result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].ID\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          children: this.state.data[i].name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          children: this.state.data[i].message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 17\n        }, this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }, this));\n    }\n\n    return result;\n  }\n\n  render() {\n    if (this.state.data.length == 0) {\n      this.getFireData();\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: this.getTableData()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sampledata);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NhbXBsZWRhdGEuanM/NzdhMyJdLCJuYW1lcyI6WyJTYW1wbGVkYXRhIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsInN0YXRlIiwiZGF0YSIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJsaW1pdFRvRmlyc3QiLCJvbiIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJ2YWwiLCJnZXRUYWJsZURhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsIklEIiwibmFtZSIsIm1lc3NhZ2UiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLCtDQUF6QixDQUFrQztBQU05QkMsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOOztBQURjLG1DQUxYO0FBQ0hDLGNBQVEsRUFBQyxNQUROO0FBRUhDLGFBQU8sRUFBQztBQUZMLEtBS1c7O0FBRWQsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBQztBQURJLEtBQWI7QUFHQSxTQUFLQyxXQUFMO0FBQ0gsR0FaNkIsQ0FjOUI7OztBQUNBQSxhQUFXLEdBQUU7QUFDVCxRQUFJQyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFFBQUlDLEdBQUcsR0FBR0gsRUFBRSxDQUFDRyxHQUFILENBQU8sU0FBUCxDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUQsT0FBRyxDQUFDRSxVQUFKLEdBQWlCQyxZQUFqQixDQUE4QixFQUE5QixFQUFrQ0MsRUFBbEMsQ0FBcUMsT0FBckMsRUFBOENDLFFBQUQsSUFBYztBQUN2REosVUFBSSxDQUFDSyxRQUFMLENBQWM7QUFDVlgsWUFBSSxFQUFDVSxRQUFRLENBQUNFLEdBQVQ7QUFESyxPQUFkO0FBR0gsS0FKRDtBQUtILEdBeEI2QixDQTBCOUI7OztBQUNBQyxjQUFZLEdBQUU7QUFDVixRQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxRQUFHLEtBQUtmLEtBQUwsQ0FBV0MsSUFBWCxJQUFtQixJQUFuQixJQUEyQixLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JlLE1BQWhCLElBQTBCLENBQXhELEVBQTBEO0FBQ3RELGFBQU8sY0FBQztBQUFBLCtCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQsU0FBVSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRCxDQUFQO0FBQ0g7O0FBQ0QsU0FBSSxJQUFJQyxDQUFSLElBQWEsS0FBS2pCLEtBQUwsQ0FBV0MsSUFBeEIsRUFBNkI7QUFDekJjLFlBQU0sQ0FBQ0csSUFBUCxlQUFZO0FBQUEsZ0NBQ1I7QUFBQSxvQkFBSyxLQUFLbEIsS0FBTCxDQUFXQyxJQUFYLENBQWdCZ0IsQ0FBaEIsRUFBbUJFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFEsZUFFUjtBQUFBLG9CQUFLLEtBQUtuQixLQUFMLENBQVdDLElBQVgsQ0FBZ0JnQixDQUFoQixFQUFtQkc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUSxlQUdSO0FBQUEsb0JBQUssS0FBS3BCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmdCLENBQWhCLEVBQW1CSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhRO0FBQUEsU0FBU0osQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVo7QUFLSDs7QUFDRCxXQUFPRixNQUFQO0FBQ0g7O0FBRURPLFFBQU0sR0FBRTtBQUNKLFFBQUcsS0FBS3RCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmUsTUFBaEIsSUFBMEIsQ0FBN0IsRUFBK0I7QUFDM0IsV0FBS2QsV0FBTDtBQUNIOztBQUNELHdCQUNJO0FBQUEsNkJBQ0k7QUFBQSxrQkFDSyxLQUFLWSxZQUFMO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQU9IOztBQXJENkI7O0FBd0RuQnBCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TYW1wbGVkYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jbGFzcyBTYW1wbGVkYXRhIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0eWxlPSB7XG4gICAgICAgIGZvbnRTaXplOlwiMTJwdFwiLFxuICAgICAgICBwYWRkaW5nOlwiNXB4IDEwcHhcIlxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTpbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0RmlyZURhdGEoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlYmFzZeOBi+OCieODh+ODvOOCv+OBruWPluW+l1xuICAgIGdldEZpcmVEYXRhKCl7XG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ3NhbXBsZS8nKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZWYub3JkZXJCeUtleSgpLmxpbWl0VG9GaXJzdCgxMCkub24oJ3ZhbHVlJywoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6c25hcHNob3QudmFsKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg4fjg7zjgr/jga7ooajnpLpcbiAgICBnZXRUYWJsZURhdGEoKXtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmRhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgcmV0dXJuIFs8dHIga2V5ID0gXCIwXCI+PHRoPk5PIERBVEE8L3RoPjwvdHI+XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5zdGF0ZS5kYXRhKXtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDx0aD57dGhpcy5zdGF0ZS5kYXRhW2ldLklEfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmRhdGFbaV0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5kYXRhW2ldLm1lc3NhZ2V9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgdGhpcy5nZXRGaXJlRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldFRhYmxlRGF0YSgpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVkYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sampledata.js\n");

/***/ }),

/***/ "./pages/fire.js":
/*!***********************!*\
  !*** ./pages/fire.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Sampledata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sampledata */ \"./components/Sampledata.js\");\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/pages/fire.js\";\n// import Link from 'next/link';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"Sample data\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Sampledata__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 4\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlLmpzPzMzOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLGtGQUNaLHFFQUFDLDBEQUFEO0FBQVEsUUFBTSxFQUFDLE1BQWY7QUFBc0IsT0FBSyxFQUFDLGFBQTVCO0FBQUEseUJBQ0sscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCIsImZpbGUiOiIuL3BhZ2VzL2ZpcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgU2FtcGxlZGF0YSBmcm9tICcuLi9jb21wb25lbnRzL1NhbXBsZWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcbiAgIDxMYXlvdXQgaGVhZGVyPVwiRmlyZVwiIHRpdGxlPVwiU2FtcGxlIGRhdGFcIj5cbiAgICAgICAgPFNhbXBsZWRhdGEvPlxuICAgIDwvTGF5b3V0ID5cbik7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/fire.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  jsx: true,\n  children: `\n        body{\n            margin:10px;\n            padding:5px;\n            color:#669\n        }\n        header{\n            font-size:64pt;\n            font-weight:bold;\n            text-align:right;\n            leter-spacing:-8px;\n            color:#ddddff;\n            margin:-32px 5px;\n        }\n        footer{\n            color:#99c;\n            font-size:12pt;\n            text-align:right;\n            border-bottom:1px solid #99c;\n            margin:50px 0px 10px 0px;\n            position:relative;\n            bottom:10px;\n            right:10px;\n            left:10px\n        }\n        h1{\n            font-size:32pt;\n            font-weight:bold;\n            text-align:left;\n            leter-spacing:0px;\n            color:#77a;\n            margin:-50px 0px 50px 0px;\n        }\n        p{\n             font-size:16pt;\n             color:#669;\n             margin:0px;\n        }\n        hr{\n            margin:25px 0px;\n        }\n        tr{\n            margin:0px;\n        }\n        th{\n            font-size:14pt;\n            font-weight:plain;\n            text-align:left;\n            padding:0px 20px;\n            margin:0px;\n            border-bottom:1px solid gray;\n        }\n        td{\n            font-size:14pt;\n            font-weight:plain;\n            text-align:right;\n            padding:0px 20px;\n            margin:0px;\n            border-bottom:1px solid gray;\n        }\n        td{\n            font-size:14pt;\n            font-weight:plain;\n            text-align:right;\n            padding:0px 20px;\n            margin:0px;\n            border-bottom:1px solid gray;\n        }\n    `\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 2,\n  columnNumber: 5\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNJO0FBQU8sS0FBRyxNQUFWO0FBQUEsWUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESiIsImZpbGUiOiIuL3N0YXRpYy9TdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYm9keXtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgICBjb2xvcjojNjY5XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgZm9udC1zaXplOjY0cHQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgIGxldGVyLXNwYWNpbmc6LThweDtcbiAgICAgICAgICAgIGNvbG9yOiNkZGRkZmY7XG4gICAgICAgICAgICBtYXJnaW46LTMycHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlcntcbiAgICAgICAgICAgIGNvbG9yOiM5OWM7XG4gICAgICAgICAgICBmb250LXNpemU6MTJwdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTljO1xuICAgICAgICAgICAgbWFyZ2luOjUwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206MTBweDtcbiAgICAgICAgICAgIHJpZ2h0OjEwcHg7XG4gICAgICAgICAgICBsZWZ0OjEwcHhcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMnB0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIGxldGVyLXNwYWNpbmc6MHB4O1xuICAgICAgICAgICAgY29sb3I6Izc3YTtcbiAgICAgICAgICAgIG1hcmdpbjotNTBweCAwcHggNTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgICBmb250LXNpemU6MTZwdDtcbiAgICAgICAgICAgICBjb2xvcjojNjY5O1xuICAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIH1cbiAgICAgICAgaHJ7XG4gICAgICAgICAgICBtYXJnaW46MjVweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdHJ7XG4gICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICB9XG4gICAgICAgIHRoe1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDpwbGFpbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JheTtcbiAgICAgICAgfVxuICAgICAgICB0ZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6cGxhaW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzowcHggMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xuICAgICAgICB9XG4gICAgICAgIHRke1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDpwbGFpbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOjBweCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });