webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor(-(width / 2) + window.innerWidth * 0.5),\n      y: Math.floor(-(height / 2) + window.innerHeight * 0.45)\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"7/dVr8p6VaMad/a1eqBeHszT6Xo=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZWZhdWx0WCIsImRlZmF1bHRZIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldmVudCIsInJlbGF0ZWRUYXJnZXQiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsInNsaWNlIiwicmV2ZXJzZSIsImluZGV4T2YiLCJ1c2VFZmZlY3QiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsImZpbHRlciIsInN0YWNrSWQiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJzdHlsZXMiLCJhbmltYXRlZFdpbmRvd3MiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2luZG93TW90aW9uU2V0dGluZ3MiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhGQUFSO0FBQUE7QUFBQSxjQUFRLDBDQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBRU4sSUFBTUUsWUFBWSxHQUFHQywyREFBVSxHQUFHQyxtRUFBa0IsR0FBR0MsZ0VBQXZEOztBQUVBLElBQU1DLGFBQWdDLEdBQUcsU0FBbkNBLGFBQW1DLE9Bb0JuQztBQUFBOztBQUFBLHlCQW5CSkMsTUFtQkk7QUFBQSxNQWxCTUMsR0FrQk4sZUFsQkZELE1Ba0JFO0FBQUEsTUFqQkZFLGdCQWlCRSxlQWpCRkEsZ0JBaUJFO0FBQUEsMENBaEJGQyxhQWdCRTtBQUFBLE1BaEJzQkMsWUFnQnRCLHlCQWhCZUMsS0FnQmY7QUFBQSxNQWhCNENDLGFBZ0I1Qyx5QkFoQm9DQyxNQWdCcEM7QUFBQSxNQWRKQyxPQWNJLFFBZEpBLE9BY0k7QUFBQSxNQWJJQyxhQWFKLFFBYkpGLE1BYUk7QUFBQSxNQVpKRyxJQVlJLFFBWkpBLElBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVZKQyxhQVVJLFFBVkpBLGFBVUk7QUFBQSxNQVRKQyxlQVNJLFFBVEpBLGVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxTQU9JLFFBUEpBLFNBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxjQUtJLFFBTEpBLGNBS0k7QUFBQSxNQUpHQyxZQUlILFFBSkpiLEtBSUk7QUFBQSxNQUhKYyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxDQUVJLFFBRkpBLENBRUk7QUFBQSxNQURKQyxDQUNJLFFBREpBLENBQ0k7O0FBQUEsb0JBTUFDLHdEQUFVLENBQUNDLHVFQUFELENBTlY7QUFBQSxNQUVGQyxVQUZFLGVBRUZBLFVBRkU7QUFBQSxNQUdGQyxRQUhFLGVBR0ZBLFFBSEU7QUFBQSxNQUlGQyxTQUpFLGVBSUZBLFNBSkU7QUFBQSx3Q0FLRkMsT0FMRTtBQUFBLE1BS1NDLFlBTFQsdUJBS1NBLFlBTFQ7QUFBQSxNQUt1QkMsVUFMdkIsdUJBS3VCQSxVQUx2Qjs7QUFBQSxxQkFlQVAsd0RBQVUsQ0FBQ1EsdUVBQUQsQ0FmVjtBQUFBLE1BUUZDLFNBUkUsZ0JBUUZBLFNBUkU7QUFBQSxNQVNGQyxLQVRFLGdCQVNGQSxLQVRFO0FBQUEsTUFVRkMsUUFWRSxnQkFVRkEsUUFWRTtBQUFBLE1BV0ZDLFFBWEUsZ0JBV0ZBLFFBWEU7QUFBQSxNQVlGQyxRQVpFLGdCQVlGQSxRQVpFO0FBQUEsTUFhRkMsT0FiRSxnQkFhRkEsT0FiRTtBQUFBLE1BY0ZDLElBZEUsZ0JBY0ZBLElBZEU7O0FBQUEsa0JBZ0J3Q0Msc0RBQVEsQ0FBQyxLQUFELENBaEJoRDtBQUFBLE1BZ0JHQyxjQWhCSDtBQUFBLE1BZ0JtQkMsaUJBaEJuQjs7QUFBQSxrQkFpQm1DZixRQUFRLENBQUM7QUFDOUNkLE1BQUUsRUFBRkE7QUFEOEMsR0FBRCxDQWpCM0M7QUFBQSxNQWlCTzhCLFNBakJQLGFBaUJJckIsQ0FqQko7QUFBQSxNQWlCcUJzQixTQWpCckIsYUFpQmtCckIsQ0FqQmxCOztBQUFBLDBCQW9Cc0JzQiw2RUFBZ0IsQ0FDeEN6QixZQUR3QyxFQUV4Q1QsYUFGd0MsRUFHeENMLFlBSHdDLEVBSXhDRSxhQUp3QyxFQUt4Q08sZUFMd0MsQ0FwQnRDO0FBQUEsTUFvQklOLE1BcEJKLHFCQW9CSUEsTUFwQko7QUFBQSxNQW9CWUYsS0FwQloscUJBb0JZQSxLQXBCWjs7QUFBQSxpQkEyQmlDdUMscURBQU8sQ0FDMUM7QUFBQSxXQUFPO0FBQ0x4QixPQUFDLEVBQUV5QixJQUFJLENBQUNDLEtBQUwsQ0FBVyxFQUFFekMsS0FBSyxHQUFHLENBQVYsSUFBZTBDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUE5QyxDQURFO0FBRUwzQixPQUFDLEVBQUV3QixJQUFJLENBQUNDLEtBQUwsQ0FBVyxFQUFFdkMsTUFBTSxHQUFHLENBQVgsSUFBZ0J3QyxNQUFNLENBQUNFLFdBQVAsR0FBcUIsSUFBaEQ7QUFGRSxLQUFQO0FBQUEsR0FEMEMsRUFLMUMsRUFMMEMsQ0EzQnhDO0FBQUEsTUEyQk9DLFFBM0JQLFlBMkJJOUIsQ0EzQko7QUFBQSxNQTJCb0IrQixRQTNCcEIsWUEyQmlCOUIsQ0EzQmpCOztBQWtDSixNQUFNK0IsYUFBYSxHQUFHO0FBQ3BCQyxjQUFVLEVBQUU7QUFBQSxhQUFNbkIsUUFBUSxDQUFDdkIsRUFBRCxDQUFkO0FBQUEsS0FEUTtBQUVwQjJDLGNBQVUsRUFBRTtBQUFBLGFBQU94QyxTQUFTLEdBQUdzQixPQUFPLENBQUN6QixFQUFELEVBQUssV0FBTCxDQUFWLEdBQThCc0IsUUFBUSxDQUFDdEIsRUFBRCxDQUF0RDtBQUFBLEtBRlE7QUFHcEI0QyxXQUFPLEVBQUUsbUJBQU07QUFDYjdCLGVBQVMsQ0FBQztBQUNSbkIsY0FBTSxFQUFOQSxNQURRO0FBRVJJLFVBQUUsRUFBRkEsRUFGUTtBQUdSTixhQUFLLEVBQUxBLEtBSFE7QUFJUmUsU0FBQyxFQUFFLENBQUNxQixTQUFELEdBQWFTLFFBQVEsR0FBRzlCLENBQXhCLEdBQTRCQSxDQUp2QjtBQUtSQyxTQUFDLEVBQUUsQ0FBQ3FCLFNBQUQsR0FBYVMsUUFBUSxHQUFHOUIsQ0FBeEIsR0FBNEJBO0FBTHZCLE9BQUQsQ0FBVDtBQU9BVyxXQUFLLENBQUNyQixFQUFELENBQUw7QUFDRCxLQVptQjtBQWFwQjZDLFdBQU8sRUFBRTtBQUFBLGFBQU1oQyxVQUFVLENBQUNiLEVBQUQsQ0FBaEI7QUFBQSxLQWJXO0FBY3BCOEMsVUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQTZCO0FBQ25DLFVBQUlBLEtBQUssQ0FBQ0MsYUFBTixLQUF3QjFDLGNBQTVCLEVBQTRDO0FBQzFDTyxrQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FsQm1CO0FBbUJwQm9DLGtCQUFjLEVBQUV6QixRQUFRLENBQUN4QixFQUFELENBbkJKO0FBb0JwQmtELFVBQU0sRUFBRWxFLFlBQVksR0FBR2tDLFVBQVUsQ0FBQ2lDLEtBQVgsR0FBbUJDLE9BQW5CLEdBQTZCQyxPQUE3QixDQUFxQ3JELEVBQXJDLENBcEJIO0FBcUJwQkcsYUFBUyxFQUFFeUIsY0FyQlM7QUFzQnBCeEIsYUFBUyxFQUFUQSxTQXRCb0I7QUF1QnBCSixNQUFFLEVBQUZBLEVBdkJvQjtBQXdCcEJKLFVBQU0sRUFBTkEsTUF4Qm9CO0FBeUJwQkYsU0FBSyxFQUFMQTtBQXpCb0IsR0FBdEI7QUE0QkE0RCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJckMsWUFBWSxLQUFLakIsRUFBakIsSUFBdUJJLFNBQTNCLEVBQXNDO0FBQ3BDUyxnQkFBVSxDQUNSMEMsaUZBQW9CLENBQ2xCbkMsU0FEa0IsRUFFbEJGLFVBQVUsQ0FBQ3NDLE1BQVgsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sS0FBS3pELEVBQXpCO0FBQUEsT0FBbEIsQ0FGa0IsQ0FEWixDQUFWO0FBTUQsS0FQRCxNQU9PLElBQUksQ0FBQ2tCLFVBQVUsQ0FBQ3dDLFFBQVgsQ0FBb0IxRCxFQUFwQixDQUFMLEVBQThCO0FBQ25DYSxnQkFBVSxDQUFDMEMsaUZBQW9CLENBQUNuQyxTQUFELEVBQVlGLFVBQVosQ0FBckIsQ0FBVjtBQUNEO0FBQ0YsR0FYUSxFQVdOLENBQUNELFlBQUQsRUFBZWpCLEVBQWYsRUFBbUJJLFNBQW5CLEVBQThCZ0IsU0FBOUIsRUFBeUNGLFVBQXpDLENBWE0sQ0FBVDtBQWFBb0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSW5ELFNBQUosRUFBZTtBQUNiMEIsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJRCxjQUFKLEVBQW9CO0FBQ3pCK0IsZ0JBQVUsQ0FDUjtBQUFBLGVBQU05QixpQkFBaUIsQ0FBQyxLQUFELENBQXZCO0FBQUEsT0FEUSxFQUVSK0Isb0ZBQW1DLEdBQUdDLHVFQUY5QixDQUFWO0FBSUQ7QUFDRixHQVRRLEVBU04sQ0FBQzFELFNBQUQsQ0FUTSxDQUFUO0FBV0Esc0JBQ0UscUVBQUMsb0RBQUQsQ0FBUSxPQUFSO0FBRUUsYUFBUyxFQUFFMkQsNkZBQU0sQ0FBQ0MsZUFGcEI7QUFHRSxTQUFLLEVBQUU7QUFDTGIsWUFBTSxFQUFFakMsWUFBWSxLQUFLakIsRUFBakIsR0FBc0JnRSxpRUFBdEIsR0FBeUN2QixhQUFhLENBQUNTLE1BRDFEO0FBRUx0RCxZQUFNLEVBQU5BLE1BRks7QUFHTEYsV0FBSyxFQUFMQTtBQUhLO0FBSFQsS0FRTXVFLDRFQUFvQixDQUFDO0FBQ3ZCQyxZQUFRLEVBQUVwQyxTQUFTLElBQUlTLFFBREE7QUFFdkI0QixZQUFRLEVBQUVwQyxTQUFTLElBQUlTLFFBRkE7QUFHdkI0QixhQUFTLEVBQ05qRSxTQUFTLElBQUlDLFNBQWIsSUFBMEIsUUFBM0IsSUFDQ0QsU0FBUyxJQUFJLFdBRGQsSUFFQ0MsU0FBUyxJQUFJLFdBRmQsSUFHQSxPQVBxQjtBQVF2QlIsVUFBTSxFQUFOQSxNQVJ1QjtBQVN2QkYsU0FBSyxFQUFMQSxLQVR1QjtBQVV2QmUsS0FBQyxFQUFEQSxDQVZ1QjtBQVd2QkMsS0FBQyxFQUFEQSxDQVh1QjtBQVl2Qkosa0JBQWMsRUFBZEEsY0FadUI7QUFhdkJMLGlCQUFhLEVBQWJBO0FBYnVCLEdBQUQsQ0FSMUI7QUFBQSxjQXdCR08sUUFBUSxnQkFDUCxxRUFBQyxNQUFEO0FBQ0UsVUFBSSxFQUFFVCxJQURSO0FBRUUsVUFBSSxFQUFFTSxJQUZSO0FBR0UsYUFBTyxFQUFFUixPQUhYO0FBSUUscUJBQWUsRUFBRUssZUFKbkI7QUFLRSxnQkFBVSxFQUFFd0IsSUFBSSxDQUFDMUIsRUFBRDtBQUxsQixPQU1NeUMsYUFOTjtBQUFBLDZCQVFFLHFFQUFDLEdBQUQsa0NBQVNsRCxnQkFBVCxHQUErQmtELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBWVAscUVBQUMsR0FBRCxrQ0FBU2xELGdCQUFULEdBQStCa0QsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBDSixNQUNPekMsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0FuSkQ7O0dBQU1aLGE7O01BQUFBLGE7QUFxSlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93TWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgUHJvY2VzcyB9IGZyb20gJ0AvdXRpbHMvcHJvY2Vzcyc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQge1xuICBiYXNlWmluZGV4LFxuICBmb3JlZ3JvdW5kWmluZGV4LFxuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgTUlMTElTRUNPTkRTX0lOX1NFQ09ORCxcbiAgd2luZG93c1ppbmRleExldmVsLFxuICB6aW5kZXhMZXZlbFNpemVcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0TmV4dFZpc2libGVXaW5kb3csIGdldE1heERpbWVuc2lvbnMgfSBmcm9tICdAL3V0aWxzL3dpbmRvd21hbmFnZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aW5kb3dNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdXRpbHMvbW90aW9ucyc7XG5cbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93JykpO1xuXG5jb25zdCB3aW5kb3daaW5kZXggPSBiYXNlWmluZGV4ICsgd2luZG93c1ppbmRleExldmVsICogemluZGV4TGV2ZWxTaXplO1xuXG5jb25zdCBQcm9jZXNzV2luZG93OiBSZWFjdC5GQzxQcm9jZXNzPiA9ICh7XG4gIGxvYWRlcjoge1xuICAgIGxvYWRlcjogQXBwLFxuICAgIGxvYWRlZEFwcE9wdGlvbnMsXG4gICAgbG9hZGVyT3B0aW9uczogeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfVxuICB9LFxuICBiZ0NvbG9yLFxuICBoZWlnaHQ6IGluaXRpYWxIZWlnaHQsXG4gIGljb24sXG4gIGlkLFxuICBsYXVuY2hFbGVtZW50LFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIG1heGltaXplZCxcbiAgbWluaW1pemVkLFxuICBuYW1lLFxuICB0YXNrYmFyRWxlbWVudCxcbiAgd2lkdGg6IGluaXRpYWxXaWR0aCxcbiAgd2luZG93ZWQsXG4gIHgsXG4gIHlcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGZvcmVncm91bmQsXG4gICAgZ2V0U3RhdGUsXG4gICAgc2F2ZVN0YXRlLFxuICAgIHNlc3Npb246IHsgZm9yZWdyb3VuZElkLCBzdGFja09yZGVyIH1cbiAgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCB7XG4gICAgcHJvY2Vzc2VzLFxuICAgIGNsb3NlLFxuICAgIG1heGltaXplLFxuICAgIG1pbmltaXplLFxuICAgIHBvc2l0aW9uLFxuICAgIHJlc3RvcmUsXG4gICAgc2l6ZVxuICB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IFttYXhpbWl6ZVdpbmRvdywgc2V0TWF4aW1pemVXaW5kb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHg6IHByZXZpb3VzWCwgeTogcHJldmlvdXNZIH0gPSBnZXRTdGF0ZSh7XG4gICAgaWRcbiAgfSk7XG4gIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0TWF4RGltZW5zaW9ucyhcbiAgICBpbml0aWFsV2lkdGgsXG4gICAgaW5pdGlhbEhlaWdodCxcbiAgICBkZWZhdWx0V2lkdGgsXG4gICAgZGVmYXVsdEhlaWdodCxcbiAgICBsb2NrQXNwZWN0UmF0aW9cbiAgKTtcbiAgY29uc3QgeyB4OiBkZWZhdWx0WCwgeTogZGVmYXVsdFkgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHg6IE1hdGguZmxvb3IoLSh3aWR0aCAvIDIpICsgd2luZG93LmlubmVyV2lkdGggKiAwLjUpLFxuICAgICAgeTogTWF0aC5mbG9vcigtKGhlaWdodCAvIDIpICsgd2luZG93LmlubmVySGVpZ2h0ICogMC40NSlcbiAgICB9KSxcbiAgICBbXVxuICApO1xuICBjb25zdCB3aW5kb3dPcHRpb25zID0ge1xuICAgIG9uTWluaW1pemU6ICgpID0+IG1pbmltaXplKGlkKSxcbiAgICBvbk1heGltaXplOiAoKSA9PiAobWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpKSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeDogIXByZXZpb3VzWCA/IGRlZmF1bHRYICsgeCA6IHgsXG4gICAgICAgIHk6ICFwcmV2aW91c1kgPyBkZWZhdWx0WSArIHkgOiB5XG4gICAgICB9KTtcbiAgICAgIGNsb3NlKGlkKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IGZvcmVncm91bmQoaWQpLFxuICAgIG9uQmx1cjogKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVQb3NpdGlvbjogcG9zaXRpb24oaWQpLFxuICAgIHpJbmRleDogd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKSxcbiAgICBtYXhpbWl6ZWQ6IG1heGltaXplV2luZG93LFxuICAgIG1pbmltaXplZCxcbiAgICBpZCxcbiAgICBoZWlnaHQsXG4gICAgd2lkdGhcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb3JlZ3JvdW5kSWQgPT09IGlkICYmIG1pbmltaXplZCkge1xuICAgICAgZm9yZWdyb3VuZChcbiAgICAgICAgZ2V0TmV4dFZpc2libGVXaW5kb3coXG4gICAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICAgIHN0YWNrT3JkZXIuZmlsdGVyKChzdGFja0lkKSA9PiBzdGFja0lkICE9PSBpZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFzdGFja09yZGVyLmluY2x1ZGVzKGlkKSkge1xuICAgICAgZm9yZWdyb3VuZChnZXROZXh0VmlzaWJsZVdpbmRvdyhwcm9jZXNzZXMsIHN0YWNrT3JkZXIpKTtcbiAgICB9XG4gIH0sIFtmb3JlZ3JvdW5kSWQsIGlkLCBtaW5pbWl6ZWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heGltaXplZCkge1xuICAgICAgc2V0TWF4aW1pemVXaW5kb3codHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtYXhpbWl6ZVdpbmRvdykge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gc2V0TWF4aW1pemVXaW5kb3coZmFsc2UpLFxuICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbiAgICAgICk7XG4gICAgfVxuICB9LCBbbWF4aW1pemVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgIGtleT17aWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZFdpbmRvd3N9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB6SW5kZXg6IGZvcmVncm91bmRJZCA9PT0gaWQgPyBmb3JlZ3JvdW5kWmluZGV4IDogd2luZG93T3B0aW9ucy56SW5kZXgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH19XG4gICAgICB7Li4ud2luZG93TW90aW9uU2V0dGluZ3Moe1xuICAgICAgICBpbml0aWFsWDogcHJldmlvdXNYIHx8IGRlZmF1bHRYLFxuICAgICAgICBpbml0aWFsWTogcHJldmlvdXNZIHx8IGRlZmF1bHRZLFxuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgKG1heGltaXplZCAmJiBtaW5pbWl6ZWQgJiYgJ21heG1pbicpIHx8XG4gICAgICAgICAgKG1heGltaXplZCAmJiAnbWF4aW1pemVkJykgfHxcbiAgICAgICAgICAobWluaW1pemVkICYmICdtaW5pbWl6ZWQnKSB8fFxuICAgICAgICAgICdzdGFydCcsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHRhc2tiYXJFbGVtZW50LFxuICAgICAgICBsYXVuY2hFbGVtZW50XG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7d2luZG93ZWQgPyAoXG4gICAgICAgIDxXaW5kb3dcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYmdDb2xvcj17YmdDb2xvcn1cbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgICB1cGRhdGVTaXplPXtzaXplKGlkKX1cbiAgICAgICAgICB7Li4ud2luZG93T3B0aW9uc31cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgICA8L1dpbmRvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1dpbmRvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})