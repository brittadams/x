webpackHotUpdate_N_E(2,{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/TaskbarEntry.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".TaskbarEntry_taskbarEntry__GRm1o {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  min-width: 0;\\n  height: 30px;\\n  margin: 0 4px;\\n  text-align: left;\\n  border-width: 0 0 2px 0;\\n  border-bottom-style: solid;\\n  border-bottom-color: #76b9ed;\\n  background-color: transparent;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o:hover {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure {\\n  font-family: \\\"Segoe UI\\\", \\\"SegoeUI\\\", \\\"Helvetica\\\", sans-serif;\\n  font-size: 12px;\\n  display: flex;\\n  align-items: center;\\n  height: 28px;\\n  color: #f8f8ff;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure img {\\n  width: 16px;\\n  margin: 0 5px;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure figcaption {\\n  overflow: hidden;\\n  width: 125px;\\n  padding-right: 5px;\\n  letter-spacing: 0;\\n  text-overflow: ellipsis;\\n}\\n\\n.TaskbarEntry_foreground__3NELy {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(89, 89, 89, 0.5);\\n}\\n.TaskbarEntry_foreground__3NELy:hover {\\n  background-color: rgba(115, 115, 115, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/TaskbarEntry.module.scss\",\"webpack://styles/mixins.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAIA;ECiBE,mBAAA;EACA,uBAAA;EDfA,YAAA;EACA,YAAA;EACA,aAAA;EAEA,gBAAA;EAEA,uBAAA;EACA,0BAAA;EACA,4BEfe;EFgBf,6BAAA;AALF;AAOE;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AANJ;AAcE;EACE,2DAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAfJ;AAiBI;EACE,WAAA;EACA,aAAA;AAfN;AAkBI;EACE,gBAAA;EAEA,YAAA;EACA,kBAAA;EAEA,iBAAA;EACA,uBAAA;AAlBN;;AAuBA;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AArBF;AA4BE;EACE,0CAAA;AA1BJ\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n@import '@/styles/variables';\\n\\n.taskbarEntry {\\n  @include textOverflowEllipsis;\\n\\n  min-width: 0;\\n  height: map-get($taskbar, height);\\n  margin: 0 4px;\\n\\n  text-align: left;\\n\\n  border-width: 0 0 $thickLine 0;\\n  border-bottom-style: solid;\\n  border-bottom-color: $highlightColor;\\n  background-color: transparent;\\n\\n  &:hover {\\n    margin: 0;\\n    padding: 0 4px;\\n\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n  }\\n\\n  figure {\\n    font-family: 'Segoe UI', 'SegoeUI', 'Helvetica', sans-serif;\\n    font-size: map-get($taskbarEntry, font-size);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($taskbar, height) - $thickLine;\\n\\n    color: map-get($taskbarEntry, text-color);\\n\\n    img {\\n      width: map-get($taskbarEntry, icon-width);\\n      margin: 0 map-get($taskbarEntry, icon-margin);\\n    }\\n\\n    figcaption {\\n      overflow: hidden;\\n\\n      width: map-get($taskbarEntry, text-width);\\n      padding-right: 5px;\\n\\n      letter-spacing: 0;\\n      text-overflow: ellipsis;\\n    }\\n  }\\n}\\n\\n.foreground {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  background-color: hsla(\\n    0,\\n    0%,\\n    map-get($taskbar, foreground-lightness),\\n    map-get($taskbar, opacity)\\n  );\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-foreground-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbarEntry\": \"TaskbarEntry_taskbarEntry__GRm1o\",\n\t\"foreground\": \"TaskbarEntry_foreground__3NELy\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcz8xODMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxzQ0FBc0Msd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsNEJBQTRCLCtCQUErQixpQ0FBaUMsa0NBQWtDLEdBQUcsMkNBQTJDLGNBQWMsbUJBQW1CLDRDQUE0QyxHQUFHLDRDQUE0QyxzRUFBc0Usb0JBQW9CLGtCQUFrQix3QkFBd0IsaUJBQWlCLG1CQUFtQixHQUFHLGdEQUFnRCxnQkFBZ0Isa0JBQWtCLEdBQUcsdURBQXVELHFCQUFxQixpQkFBaUIsdUJBQXVCLHNCQUFzQiw0QkFBNEIsR0FBRyxxQ0FBcUMsY0FBYyxtQkFBbUIsNENBQTRDLEdBQUcseUNBQXlDLCtDQUErQyxHQUFHLE9BQU8sZ0xBQWdMLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLGtEQUFrRCw0QkFBNEIsK0JBQStCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHNDQUFzQyxrQkFBa0IsdUJBQXVCLHFDQUFxQywrQkFBK0IseUNBQXlDLGtDQUFrQyxlQUFlLGdCQUFnQixxQkFBcUIseUlBQXlJLEtBQUssY0FBYyxrRUFBa0UsbURBQW1ELHNCQUFzQiwwQkFBMEIsdURBQXVELGtEQUFrRCxhQUFhLGtEQUFrRCxzREFBc0QsT0FBTyxvQkFBb0IseUJBQXlCLG9EQUFvRCwyQkFBMkIsNEJBQTRCLGdDQUFnQyxPQUFPLEtBQUssR0FBRyxpQkFBaUIsY0FBYyxtQkFBbUIsa0lBQWtJLGVBQWUsa0pBQWtKLEtBQUssR0FBRyw2QkFBNkIsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsV0FBVyxZQUFZLEdBQUcsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG9DQUFvQyxvQ0FBb0MsMENBQTBDLG1DQUFtQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLDhCQUE4Qix1Q0FBdUMsK0JBQStCLG1CQUFtQix1QkFBdUIsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyw4QkFBOEIsZ01BQWdNLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qix3R0FBd0csOEJBQThCLHdCQUF3QixxQkFBcUI7QUFDcDlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtaW4td2lkdGg6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNzZiOWVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbzpob3ZlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfX0dSbTFvIGZpZ3VyZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlNlZ29lVUlcXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyBmaWd1cmUgaW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfX0dSbTFvIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uVGFza2JhckVudHJ5X2ZvcmVncm91bmRfXzNORUx5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgODksIDg5LCAwLjUpO1xcbn1cXG4uVGFza2JhckVudHJ5X2ZvcmVncm91bmRfXzNORUx5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMC41KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUNpQkUsbUJBQUE7RUFDQSx1QkFBQTtFRGZBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCRWZlO0VGZ0JmLDZCQUFBO0FBTEY7QUFPRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBRUEsdUNBQUE7QUFOSjtBQWNFO0VBQ0UsMkRBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUVBLGNBQUE7QUFmSjtBQWlCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBZk47QUFrQkk7RUFDRSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7QUFsQk47O0FBdUJBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFFQSx1Q0FBQTtBQXJCRjtBQTRCRTtFQUNFLDBDQUFBO0FBMUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL21peGlucyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG4udGFza2JhckVudHJ5IHtcXG4gIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgbWluLXdpZHRoOiAwO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbWFyZ2luOiAwIDRweDtcXG5cXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICBib3JkZXItd2lkdGg6IDAgMCAkdGhpY2tMaW5lIDA7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRoaWdobGlnaHRDb2xvcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgJjpob3ZlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgICAgMCxcXG4gICAgICAwJSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxuXFxuICBmaWd1cmUge1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ1NlZ29lVUknLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGZvbnQtc2l6ZSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KSAtICR0aGlja0xpbmU7XFxuXFxuICAgIGNvbG9yOiBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIHRleHQtY29sb3IpO1xcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGljb24td2lkdGgpO1xcbiAgICAgIG1hcmdpbjogMCBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGljb24tbWFyZ2luKTtcXG4gICAgfVxcblxcbiAgICBmaWdjYXB0aW9uIHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgIHdpZHRoOiBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIHRleHQtd2lkdGgpO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG5cXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZm9yZWdyb3VuZCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgIDAsXFxuICAgIDAlLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyLCBmb3JlZ3JvdW5kLWxpZ2h0bmVzcyksXFxuICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICApO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgICAgMCxcXG4gICAgICAwJSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1mb3JlZ3JvdW5kLWxpZ2h0bmVzcyksXFxuICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICM3NmI5ZWQ7XFxuJGhpZ2hsaWdodENvbG9yMjogcmdiKDIwMCwgMjAwLCAyMDApO1xcblxcbiR1aUNvbG9yMTogcmdiKDU1LCA1NSwgNTUpO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YXNrYmFyRW50cnlcIjogXCJUYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xb1wiLFxuXHRcImZvcmVncm91bmRcIjogXCJUYXNrYmFyRW50cnlfZm9yZWdyb3VuZF9fM05FTHlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss\n");

/***/ })

})