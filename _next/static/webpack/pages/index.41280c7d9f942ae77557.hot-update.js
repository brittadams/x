webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: white;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n\\n.StartMenu_menuOpen__1Cs37 {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 275px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO {\\n  position: relative;\\n  bottom: 0;\\n  left: 0;\\n  width: 48px;\\n  height: 300px;\\n  padding-top: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ {\\n  border-left: solid 4px #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ svg {\\n  position: absolute;\\n  left: 16px;\\n  color: #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li {\\n  font-size: 16px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 48px;\\n  height: 48px;\\n  color: white;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,YAAA;AANJ;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;;AAiBA;EACE,wCAAA;AAdF;;AAsBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAtBF;AAwBE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,aAAA;EACA,gBAAA;AAvBJ;AAyBI;EACE,8BAAA;AAvBN;AAyBM;EACE,kBAAA;EACA,UAAA;EAEA,cAAA;AAxBR;AA4BI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;AA7BN;AA+BM;EACE,uCAAA;AA7BR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: white;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n}\\n\\n.menuOpen {\\n  background-color: hsla(\\n    0,\\n    0%,\\n    map-get($taskbar, hover-lightness),\\n    0.75\\n  );\\n}\\n\\n.menu {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 275px;\\n  height: 300px;\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n\\n  .buttons {\\n    position: relative;\\n    bottom: 0;\\n    left: 0;\\n\\n    width: 48px;\\n    height: 300px;\\n    padding-top: 4px;\\n\\n    .buttonSelected {\\n      border-left: solid 4px darken($highlightColor, 15%);\\n\\n      svg {\\n        position: absolute;\\n        left: 16px;\\n\\n        color: darken($highlightColor, 15%);\\n      }\\n    }\\n\\n    li {\\n      font-size: 16px;\\n\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n\\n      width: 48px;\\n      height: 48px;\\n\\n      color: white;\\n\\n      &:hover {\\n        background-color: hsla(\\n          0,\\n          0%,\\n          map-get($taskbar, hover-lightness),\\n          map-get($taskbar, opacity)\\n        );\\n      }\\n    }\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menuOpen\": \"StartMenu_menuOpen__1Cs37\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\",\n\t\"buttonSelected\": \"StartMenu_buttonSelected__2fRqQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLGlCQUFpQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcsZ0NBQWdDLDZDQUE2QyxHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsd0NBQXdDLHdDQUF3QyxHQUFHLG9EQUFvRCx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcscUZBQXFGLG1DQUFtQyxHQUFHLHlGQUF5Rix1QkFBdUIsZUFBZSxtQkFBbUIsR0FBRyx1REFBdUQsb0JBQW9CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcsNkRBQTZELDRDQUE0QyxHQUFHLE9BQU8sOElBQThJLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsa0RBQWtELCtCQUErQixZQUFZLHVCQUF1QixjQUFjLFlBQVksb0JBQW9CLHdCQUF3Qiw0QkFBNEIsd0NBQXdDLHNDQUFzQyxtQkFBbUIsa0NBQWtDLFdBQVcsc0JBQXNCLHFCQUFxQixLQUFLLGVBQWUsdUlBQXVJLGFBQWEsK0JBQStCLE9BQU8sS0FBSyxHQUFHLGVBQWUscUdBQXFHLEdBQUcsV0FBVyx1QkFBdUIsc0NBQXNDLFlBQVksbUJBQW1CLGtCQUFrQiw0RUFBNEUseURBQXlELGdCQUFnQix5QkFBeUIsZ0JBQWdCLGNBQWMsb0JBQW9CLG9CQUFvQix1QkFBdUIseUJBQXlCLDREQUE0RCxlQUFlLDZCQUE2QixxQkFBcUIsZ0RBQWdELFNBQVMsT0FBTyxZQUFZLHdCQUF3Qix3QkFBd0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IscUJBQXFCLHVCQUF1QixtQkFBbUIsK0pBQStKLFNBQVMsT0FBTyxLQUFLLEdBQUcsOEJBQThCLHVDQUF1QywrQkFBK0IsbUJBQW1CLHVCQUF1QixpQ0FBaUMsc0NBQXNDLGtDQUFrQyw4QkFBOEIscUNBQXFDLGdDQUFnQywyQkFBMkIsa0NBQWtDLDhCQUE4QixnTUFBZ00sb0JBQW9CLHNCQUFzQixzQkFBc0Isd0JBQXdCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHdHQUF3Ryw4QkFBOEIsd0JBQXdCLHFCQUFxQjtBQUMzeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZSBzdmcge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogIzc2YjllZDtcXG59XFxuXFxuLlN0YXJ0TWVudV9tZW51T3Blbl9fMUNzMzcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcXG59XFxuXFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDI3NXB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIC5TdGFydE1lbnVfYnV0dG9uU2VsZWN0ZWRfXzJmUnFRIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggIzMyOTZlNDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIC5TdGFydE1lbnVfYnV0dG9uU2VsZWN0ZWRfXzJmUnFRIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNnB4O1xcbiAgY29sb3I6ICMzMjk2ZTQ7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBsaSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsNkJBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtFQUVBLFlBQUE7QUFOSjtBQVNFO0VBQ0UsdUNBQUE7QUFQSjtBQWNJO0VBQ0UsY0NqQ1c7QURxQmpCOztBQWlCQTtFQUNFLHdDQUFBO0FBZEY7O0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FBdEJGO0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7QUF5Qkk7RUFDRSw4QkFBQTtBQXZCTjtBQXlCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7QUF4QlI7QUE0Qkk7RUFDRSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUE3Qk47QUErQk07RUFDRSx1Q0FBQTtBQTdCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi5zdGFydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiBtYXAtZ2V0KCRzdGFydG1lbnUsIHdpZHRoKTtcXG4gIGhlaWdodDogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgc3ZnIHtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAwLFxcbiAgICAgIDAlLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgKTtcXG5cXG4gICAgc3ZnIHtcXG4gICAgICBjb2xvcjogJGhpZ2hsaWdodENvbG9yO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tZW51T3BlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAwLFxcbiAgICAwJSxcXG4gICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgMC43NVxcbiAgKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBiYXNlLWxpZ2h0bmVzcyksIDYwJSk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikgKiAyKTtcXG5cXG4gIC5idXR0b25zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcblxcbiAgICAuYnV0dG9uU2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMTUlKTtcXG5cXG4gICAgICBzdmcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMTZweDtcXG5cXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGhpZ2hsaWdodENvbG9yLCAxNSUpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICB3aWR0aDogNDhweDtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuXFxuICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAgICAgMCxcXG4gICAgICAgICAgMCUsXFxuICAgICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICAgICApO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRoaWdobGlnaHRDb2xvcjogIzc2YjllZDtcXG4kaGlnaGxpZ2h0Q29sb3IyOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuXFxuJHVpQ29sb3IxOiByZ2IoNTUsIDU1LCA1NSk7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJG1pbmltaXplOiByZ2IoMjU1LCAxOTAsIDQ3KTtcXG4kbWluaW1pemVfYWN0aXZlOiByZ2IoMTkxLCAxNDIsIDM1KTtcXG4kbWluaW1pemVfdGV4dDogcmdiKDE1MywgODcsIDApO1xcbiRtYXhpbWl6ZTogcmdiKDQwLCAyMDIsIDY1KTtcXG4kbWF4aW1pemVfYWN0aXZlOiByZ2IoMzEsIDE1MywgNDkpO1xcbiRtYXhpbWl6ZV90ZXh0OiByZ2IoMCwgOTksIDApO1xcbiRjbG9zZTogcmdiKDI1NSwgODUsIDc4KTtcXG4kY2xvc2VfYWN0aXZlOiByZ2IoMTkxLCA2NCwgNTkpO1xcbiRjbG9zZV90ZXh0OiByZ2IoMTUzLCAwLCAwKTtcXG5cXG4kdGV4dFNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSxcXG4gIDAgMXB4IDNweCByZ2IoMCwgMCwgMCksIDAgMXB4IDNweCByZ2IoMCwgMCwgMCk7XFxuXFxuJHRoaWNrTGluZTogMnB4O1xcblxcbiRmb250U2l6ZTogMTIuNXB4O1xcblxcbiRiYXNlWmluZGV4OiAxMDAwO1xcbiR6aW5kZXhMZXZlbFNpemU6IDEwMDtcXG4kaWNvbnNaaW5kZXhMZXZlbDogMTtcXG4kd2luZG93c1ppbmRleExldmVsOiAyO1xcbiR0YXNrYmFyWmluZGV4TGV2ZWw6IDM7XFxuJGZvcmVncm91bmRaaW5kZXg6ICgkYmFzZVppbmRleCArICR3aW5kb3dzWmluZGV4TGV2ZWwgKiAkemluZGV4TGV2ZWxTaXplKSArXFxuICAoJHppbmRleExldmVsU2l6ZSAvIDIpO1xcblxcbiR0YXNrYmFyRW50cnlXaWR0aDogMTYwcHg7XFxuJHRpdGxlYmFySGVpZ2h0OiAyMnB4O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInN0YXJ0XCI6IFwiU3RhcnRNZW51X3N0YXJ0X19tMmdmZVwiLFxuXHRcIm1lbnVPcGVuXCI6IFwiU3RhcnRNZW51X21lbnVPcGVuX18xQ3MzN1wiLFxuXHRcIm1lbnVcIjogXCJTdGFydE1lbnVfbWVudV9fM3JNR0RcIixcblx0XCJidXR0b25zXCI6IFwiU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPXCIsXG5cdFwiYnV0dG9uU2VsZWN0ZWRcIjogXCJTdGFydE1lbnVfYnV0dG9uU2VsZWN0ZWRfXzJmUnFRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})