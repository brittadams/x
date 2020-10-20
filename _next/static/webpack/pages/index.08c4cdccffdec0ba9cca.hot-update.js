webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // TODO\n// - On click the button bg color gets lighter\n// - Stays lighter until menu goes away\n// - hover on start menu has a circle gradient from cursor for 15-20px\n// - hover lights up borders of buttons and bg of items\n// - Highlight color for icon, text color and left border (4px) for buttons\n// - 1px border on right side of button menu\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showMenu && __jsx(\"div\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.outsideMenu,\n    onClick: function onClick() {\n      return setShowMenu(false);\n    },\n    tabIndex: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, showMenu && __jsx(\"nav\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"ol\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBars\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  })), __jsx(\"li\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonSelected,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faList\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }))), __jsx(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/desktop\",\n    render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    onChange: function onChange(cwd) {\n      return !cwd && setShowMenu(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n    type: \"button\",\n    title: \"Start\",\n    onBlur: function onBlur(evt) {\n      console.log(evt.relatedTarget);\n    },\n    onClick: function onClick() {\n      return setShowMenu(!showMenu);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faWindows\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(StartMenu, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic3R5bGVzIiwib3V0c2lkZU1lbnUiLCJtZW51IiwiYnV0dG9ucyIsImZhQmFycyIsImJ1dHRvblNlbGVjdGVkIiwiZmFMaXN0IiwiTWVudVZpZXciLCJjd2QiLCJzdGFydCIsIm1lbnVPcGVuIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInJlbGF0ZWRUYXJnZXQiLCJmYVdpbmRvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDekJDLFFBRHlCO0FBQUEsTUFDZkMsV0FEZTs7QUFHaEMsU0FDRSxtRUFDR0QsUUFBUSxJQUNQO0FBQ0UsYUFBUyxFQUFFRSxtRkFBTSxDQUFDQyxXQURwQjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1GLFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsS0FGWDtBQUdFLFlBQVEsRUFBRSxDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFBUSxJQUNQO0FBQUssYUFBUyxFQUFFRSxtRkFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLG1GQUFNLENBQUNHLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLHdFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFFSixtRkFBTSxDQUFDSyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLHdFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLEVBU0UsTUFBQyxrRkFBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsVUFBTSxFQUFFQywrRUFGVjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0MsR0FBRDtBQUFBLGFBQVMsQ0FBQ0EsR0FBRCxJQUFRVCxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUFBLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRkosRUFrQkU7QUFDRSxhQUFTLFlBQUtDLG1GQUFNLENBQUNTLEtBQVosY0FBcUJYLFFBQVEsSUFBSUUsbUZBQU0sQ0FBQ1UsUUFBeEMsQ0FEWDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFNLEVBQUUsZ0JBQUNDLEdBQUQsRUFBUztBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxhQUFoQjtBQUNELEtBTkg7QUFPRSxXQUFPLEVBQUU7QUFBQSxhQUFNZixXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFaUIsNEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQWxCRixDQVJGLENBREY7QUF5Q0QsQ0E1Q0Q7O0dBQU1uQixTOztLQUFBQSxTO0FBOENTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IEZpbGVNYW5hZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xuaW1wb3J0IE1lbnVWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcnO1xuaW1wb3J0IHsgZmFCYXJzLCBmYUxpc3QgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFXaW5kb3dzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gVE9ET1xuLy8gLSBPbiBjbGljayB0aGUgYnV0dG9uIGJnIGNvbG9yIGdldHMgbGlnaHRlclxuLy8gLSBTdGF5cyBsaWdodGVyIHVudGlsIG1lbnUgZ29lcyBhd2F5XG4vLyAtIGhvdmVyIG9uIHN0YXJ0IG1lbnUgaGFzIGEgY2lyY2xlIGdyYWRpZW50IGZyb20gY3Vyc29yIGZvciAxNS0yMHB4XG4vLyAtIGhvdmVyIGxpZ2h0cyB1cCBib3JkZXJzIG9mIGJ1dHRvbnMgYW5kIGJnIG9mIGl0ZW1zXG4vLyAtIEhpZ2hsaWdodCBjb2xvciBmb3IgaWNvbiwgdGV4dCBjb2xvciBhbmQgbGVmdCBib3JkZXIgKDRweCkgZm9yIGJ1dHRvbnNcbi8vIC0gMXB4IGJvcmRlciBvbiByaWdodCBzaWRlIG9mIGJ1dHRvbiBtZW51XG5cbmNvbnN0IFN0YXJ0TWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vdXRzaWRlTWVudX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudShmYWxzZSl9XG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPG5hdj5cbiAgICAgICAge3Nob3dNZW51ICYmIChcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3R9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPEZpbGVNYW5hZ2VyXG4gICAgICAgICAgICAgIHBhdGg9XCIvZGVza3RvcFwiXG4gICAgICAgICAgICAgIHJlbmRlcj17TWVudVZpZXd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3dkKSA9PiAhY3dkICYmIHNldFNob3dNZW51KGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGFydH0gJHtzaG93TWVudSAmJiBzdHlsZXMubWVudU9wZW59YH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cIlN0YXJ0XCJcbiAgICAgICAgICBvbkJsdXI9eyhldnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KCFzaG93TWVudSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0TWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})