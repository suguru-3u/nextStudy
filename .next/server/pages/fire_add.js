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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Fireadd.js":
/*!*******************************!*\
  !*** ./components/Fireadd.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/components/Fireadd.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Fireadd extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 10px\"\n    });\n\n    this.state = {\n      name_str: '',\n      msg_str: '',\n      lastID: -1,\n      data: []\n    };\n    this.getLastID();\n    this.doChangeName = this.doChangeName.bind(this);\n    this.doChangeMsg = this.doChangeMsg.bind(this);\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doChangeName(e) {\n    this.setState({\n      name_str: e.target.value\n    });\n  }\n\n  doChangeMsg(e) {\n    this.setState({\n      msg_str: e.target.value\n    });\n  }\n\n  doAction(e) {\n    this.addFireData();\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/fire');\n  } // 最後のIDを取得\n\n\n  getLastID() {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().limitToLast(1).on('value', snapshot => {\n      let res = snapshot.val();\n\n      for (let i in res) {\n        self.setState({\n          lastID: i\n        });\n        return;\n      }\n    });\n  } // データを追加する\n\n\n  addFireData() {\n    if (this.state.lastID == -1) {\n      return;\n    }\n\n    let id = this.state.lastID * 1 + 1;\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/' + id);\n    ref.set({\n      ID: id,\n      message: this.state.msg_str,\n      name: this.state.name_str\n    });\n  }\n\n  render() {\n    if (this.state.lastID == -1) {\n      this.getLastID();\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: this.state.lastID == -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Please wait...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"label\",\n              children: \"name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                placeholder: \"your name\",\n                onChange: this.doChangeName,\n                value: this.state.name_str\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              cclassName: \"label\",\n              children: \"message\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                size: \"40\",\n                placeholder: \"type message\",\n                onChange: this.doChangeMsg,\n                value: this.state.msg_str\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"botton\", {\n                onClick: this.doAction,\n                children: \"Add\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 38\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fireadd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVhZGQuanM/YTNkOCJdLCJuYW1lcyI6WyJGaXJlYWRkIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsInN0YXRlIiwibmFtZV9zdHIiLCJtc2dfc3RyIiwibGFzdElEIiwiZGF0YSIsImdldExhc3RJRCIsImRvQ2hhbmdlTmFtZSIsImJpbmQiLCJkb0NoYW5nZU1zZyIsImRvQWN0aW9uIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRGaXJlRGF0YSIsIlJvdXRlciIsInB1c2giLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsImxpbWl0VG9MYXN0Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImkiLCJpZCIsInNldCIsIklEIiwibWVzc2FnZSIsIm5hbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFOLFNBQXNCQywrQ0FBdEIsQ0FBK0I7QUFNM0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2QsVUFBTUEsS0FBTjs7QUFEYyxtQ0FMWjtBQUNGQyxjQUFRLEVBQUMsTUFEUDtBQUVGQyxhQUFPLEVBQUM7QUFGTixLQUtZOztBQUVkLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUMsRUFEQTtBQUVUQyxhQUFPLEVBQUMsRUFGQztBQUdUQyxZQUFNLEVBQUMsQ0FBQyxDQUhDO0FBSVRDLFVBQUksRUFBQztBQUpJLEtBQWI7QUFNQSxTQUFLQyxTQUFMO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFD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LElBQXhCO0FBQTZCLDJCQUFXLEVBQUMsY0FBekM7QUFDQSx3QkFBUSxFQUFJLEtBQUtPLFdBRGpCO0FBRUEscUJBQUssRUFBRSxLQUFLUixLQUFMLENBQVdFO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSixlQXFCSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUosZUFBYTtBQUFBLHFDQUNiO0FBQVEsdUJBQU8sRUFBRSxLQUFLTyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBc0NIOztBQTlHMEI7O0FBaUhoQmYsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmVhZGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jbGFzcyBGaXJlYWRkIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0eWxlPXtcbiAgICAgICAgZm9udFNpemU6XCIxMnB0XCIsXG4gICAgICAgIHBhZGRpbmc6XCI1cHggMTBweFwiXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lX3N0cjonJyxcbiAgICAgICAgICAgIG1zZ19zdHI6JycsXG4gICAgICAgICAgICBsYXN0SUQ6LTEsXG4gICAgICAgICAgICBkYXRhOltdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMYXN0SUQoKTtcbiAgICAgICAgdGhpcy5kb0NoYW5nZU5hbWUgPSB0aGlzLmRvQ2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvQ2hhbmdlTXNnID0gdGhpcy5kb0NoYW5nZU1zZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRvQ2hhbmdlTmFtZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lX3N0cjplLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRvQ2hhbmdlTXNnKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1zZ19zdHI6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkb0FjdGlvbihlKXtcbiAgICAgICAgdGhpcy5hZGRGaXJlRGF0YSgpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpcmUnKTtcbiAgICB9XG5cbiAgICAvLyDmnIDlvozjga5JROOCkuWPluW+l1xuICAgIGdldExhc3RJRCgpe1xuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdzYW1wbGUvJyk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcyl7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJRDppXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg4fjg7zjgr/jgpLov73liqDjgZnjgotcbiAgICBhZGRGaXJlRGF0YSgpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSApe1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWQgPSB0aGlzLnN0YXRlLmxhc3RJRCAqIDEgKyAxO1xuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdzYW1wbGUvJyArIGlkKTtcbiAgICAgICAgcmVmLnNldCh7XG4gICAgICAgICAgICBJRDppZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6dGhpcy5zdGF0ZS5tc2dfc3RyLFxuICAgICAgICAgICAgbmFtZTp0aGlzLnN0YXRlLm5hbWVfc3RyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmdldExhc3RJRCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSlcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSB3YWl0Li4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLmRvQ2hhbmdlTmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWVfc3RyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzaXplPVwiNDBcIiBwbGFjZWhvbGRlcj1cInR5cGUgbWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLmRvQ2hhbmdlTXNnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXNnX3N0cn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGg+PC90aD48dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Ym90dG9uIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PkFkZDwvYm90dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD48L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaXJlYWRkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fireadd.js\n");

/***/ }),

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

/***/ "./pages/fire_add.js":
/*!***************************!*\
  !*** ./pages/fire_add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Fireadd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fireadd */ \"./components/Fireadd.js\");\n\nvar _jsxFileName = \"/Users/oohirasuguru/Desktop/Study/React/reactStudy/next_app/pages/fire_add.js\";\n// import Link from 'next/link';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"add data\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Fireadd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 4\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2FkZC5qcz82N2VhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxrRkFDWixxRUFBQywwREFBRDtBQUFRLFFBQU0sRUFBQyxNQUFmO0FBQXNCLE9BQUssRUFBQyxVQUE1QjtBQUFBLHlCQUNLLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgiLCJmaWxlIjoiLi9wYWdlcy9maXJlX2FkZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGaXJlYWRkIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWFkZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+KFxuICAgPExheW91dCBoZWFkZXI9XCJGaXJlXCIgdGl0bGU9XCJhZGQgZGF0YVwiPlxuICAgICAgICA8RmlyZWFkZC8+XG4gICAgPC9MYXlvdXQgPlxuKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fire_add.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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