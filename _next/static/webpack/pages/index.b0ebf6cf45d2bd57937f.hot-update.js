webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: #e1e1e1;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n.StartMenu_start__m2gfe.StartMenu_menuOpen__1Cs37 {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 275px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO {\\n  position: relative;\\n  bottom: 0;\\n  left: 0;\\n  width: 48px;\\n  height: 300px;\\n  padding-top: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ {\\n  border-left: solid 4px #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ svg {\\n  position: absolute;\\n  left: 16px;\\n  color: #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li {\\n  font-size: 16px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 48px;\\n  height: 48px;\\n  color: rgba(225, 225, 225, 0.8);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n\\n.StartMenu_outsideMenu__1sf8L {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  pointer-events: none;\\n  height: 100vh;\\n  width: 100vw;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,cCfO;ADSX;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;AAgBE;EACE,wCAAA;AAdJ;;AAuBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAvBF;AAyBE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,aAAA;EACA,gBAAA;AAxBJ;AA0BI;EACE,8BAAA;AAxBN;AA0BM;EACE,kBAAA;EACA,UAAA;EAEA,cAAA;AAzBR;AA6BI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,+BAAA;AA9BN;AAgCM;EACE,uCAAA;AA9BR;;AAyCA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oBAAA;EACA,aAAA;EACA,YAAA;AAtCF\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: $offWhite;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n\\n  &.menuOpen {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      0.75\\n    );\\n  }\\n}\\n\\n.menu {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 275px;\\n  height: 300px;\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n\\n  .buttons {\\n    position: relative;\\n    bottom: 0;\\n    left: 0;\\n\\n    width: 48px;\\n    height: 300px;\\n    padding-top: 4px;\\n\\n    .buttonSelected {\\n      border-left: solid 4px darken($highlightColor, 15%);\\n\\n      svg {\\n        position: absolute;\\n        left: 16px;\\n\\n        color: darken($highlightColor, 15%);\\n      }\\n    }\\n\\n    li {\\n      font-size: 16px;\\n\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n\\n      width: 48px;\\n      height: 48px;\\n\\n      color: rgba($offWhite, 80%);\\n\\n      &:hover {\\n        background-color: hsla(\\n          0,\\n          0%,\\n          map-get($taskbar, hover-lightness),\\n          map-get($taskbar, opacity)\\n        );\\n      }\\n    }\\n  }\\n}\\n\\n.outsideMenu {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  pointer-events: none;\\n  height: 100vh;\\n  width: 100vw;\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: rgb(225, 225, 225);\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menuOpen\": \"StartMenu_menuOpen__1Cs37\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\",\n\t\"buttonSelected\": \"StartMenu_buttonSelected__2fRqQ\",\n\t\"outsideMenu\": \"StartMenu_outsideMenu__1sf8L\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLG1CQUFtQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscURBQXFELDZDQUE2QyxHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsd0NBQXdDLHdDQUF3QyxHQUFHLG9EQUFvRCx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcscUZBQXFGLG1DQUFtQyxHQUFHLHlGQUF5Rix1QkFBdUIsZUFBZSxtQkFBbUIsR0FBRyx1REFBdUQsb0JBQW9CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsb0NBQW9DLEdBQUcsNkRBQTZELDRDQUE0QyxHQUFHLG1DQUFtQyxvQkFBb0IsV0FBVyxZQUFZLHlCQUF5QixrQkFBa0IsaUJBQWlCLEdBQUcsT0FBTyw4SUFBOEksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsa0RBQWtELCtCQUErQixZQUFZLHVCQUF1QixjQUFjLFlBQVksb0JBQW9CLHdCQUF3Qiw0QkFBNEIsd0NBQXdDLHNDQUFzQyxtQkFBbUIsa0NBQWtDLFdBQVcsc0JBQXNCLHlCQUF5QixLQUFLLGVBQWUsdUlBQXVJLGFBQWEsK0JBQStCLE9BQU8sS0FBSyxrQkFBa0IsaUhBQWlILEtBQUssR0FBRyxXQUFXLHVCQUF1QixzQ0FBc0MsWUFBWSxtQkFBbUIsa0JBQWtCLDRFQUE0RSx5REFBeUQsZ0JBQWdCLHlCQUF5QixnQkFBZ0IsY0FBYyxvQkFBb0Isb0JBQW9CLHVCQUF1Qix5QkFBeUIsNERBQTRELGVBQWUsNkJBQTZCLHFCQUFxQixnREFBZ0QsU0FBUyxPQUFPLFlBQVksd0JBQXdCLHdCQUF3Qiw0QkFBNEIsZ0NBQWdDLHNCQUFzQixxQkFBcUIsc0NBQXNDLG1CQUFtQiwrSkFBK0osU0FBUyxPQUFPLEtBQUssR0FBRyxrQkFBa0Isb0JBQW9CLFdBQVcsWUFBWSx5QkFBeUIsa0JBQWtCLGlCQUFpQixHQUFHLDhCQUE4Qix1Q0FBdUMsK0JBQStCLG1CQUFtQixrQ0FBa0MsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyw4QkFBOEIsZ01BQWdNLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qix3R0FBd0csOEJBQThCLHdCQUF3QixxQkFBcUI7QUFDdnVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZSBzdmcge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgY29sb3I6ICNlMWUxZTE7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmU6aG92ZXIgc3ZnIHtcXG4gIGNvbG9yOiAjNzZiOWVkO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZS5TdGFydE1lbnVfbWVudU9wZW5fXzFDczM3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC43NSk7XFxufVxcblxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyAuU3RhcnRNZW51X2J1dHRvblNlbGVjdGVkX18yZlJxUSB7XFxuICBib3JkZXItbGVmdDogc29saWQgNHB4ICMzMjk2ZTQ7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyAuU3RhcnRNZW51X2J1dHRvblNlbGVjdGVkX18yZlJxUSBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTZweDtcXG4gIGNvbG9yOiAjMzI5NmU0O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gbGkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XFxuXFxuLlN0YXJ0TWVudV9vdXRzaWRlTWVudV9fMXNmOEwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSw2QkFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0VBRUEsY0NmTztBRFNYO0FBU0U7RUFDRSx1Q0FBQTtBQVBKO0FBY0k7RUFDRSxjQ2pDVztBRHFCakI7QUFnQkU7RUFDRSx3Q0FBQTtBQWRKOztBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG9DQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQXZCRjtBQXlCRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeEJKO0FBMEJJO0VBQ0UsOEJBQUE7QUF4Qk47QUEwQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxjQUFBO0FBekJSO0FBNkJJO0VBQ0UsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtBQTlCTjtBQWdDTTtFQUNFLHVDQUFBO0FBOUJSOztBQXlDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUF0Q0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG4uc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICB3aWR0aDogbWFwLWdldCgkc3RhcnRtZW51LCB3aWR0aCk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIHN2ZyB7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG5cXG4gICAgY29sb3I6ICRvZmZXaGl0ZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICApO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0Q29sb3I7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubWVudU9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICAwLjc1XFxuICAgICk7XFxuICB9XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgbWFwLWdldCgkdGFza2JhciwgYmFzZS1saWdodG5lc3MpLCA2MCUpO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKG1hcC1nZXQoJHRhc2tiYXIsIGJsdXIpICogMik7XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG5cXG4gICAgLmJ1dHRvblNlbGVjdGVkIHtcXG4gICAgICBib3JkZXItbGVmdDogc29saWQgNHB4IGRhcmtlbigkaGlnaGxpZ2h0Q29sb3IsIDE1JSk7XFxuXFxuICAgICAgc3ZnIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDE2cHg7XFxuXFxuICAgICAgICBjb2xvcjogZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMTUlKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcblxcbiAgICAgIGNvbG9yOiByZ2JhKCRvZmZXaGl0ZSwgODAlKTtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgICAgICAgIDAsXFxuICAgICAgICAgIDAlLFxcbiAgICAgICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLFxcbiAgICAgICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICAgICAgKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm91dHNpZGVNZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblwiLFwiJGhpZ2hsaWdodENvbG9yOiAjNzZiOWVkO1xcbiRoaWdobGlnaHRDb2xvcjI6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG5cXG4kdWlDb2xvcjE6IHJnYig1NSwgNTUsIDU1KTtcXG4kdWlDb2xvcjI6IGJsYWNrO1xcblxcbiRvZmZXaGl0ZTogcmdiKDIyNSwgMjI1LCAyMjUpO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzdGFydFwiOiBcIlN0YXJ0TWVudV9zdGFydF9fbTJnZmVcIixcblx0XCJtZW51T3BlblwiOiBcIlN0YXJ0TWVudV9tZW51T3Blbl9fMUNzMzdcIixcblx0XCJtZW51XCI6IFwiU3RhcnRNZW51X21lbnVfXzNyTUdEXCIsXG5cdFwiYnV0dG9uc1wiOiBcIlN0YXJ0TWVudV9idXR0b25zX18yRXphT1wiLFxuXHRcImJ1dHRvblNlbGVjdGVkXCI6IFwiU3RhcnRNZW51X2J1dHRvblNlbGVjdGVkX18yZlJxUVwiLFxuXHRcIm91dHNpZGVNZW51XCI6IFwiU3RhcnRNZW51X291dHNpZGVNZW51X18xc2Y4TFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})