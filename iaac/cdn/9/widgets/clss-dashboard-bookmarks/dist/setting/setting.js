System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/clss-dashboard-bookmarks/src/setting/setting.tsx ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");




function Setting(props) {
    const [fontSize, setFontSize] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.fontSize);
    const [textColor, setTextColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [selectedTextColor, setSelectedTextColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [backgroundColor, setBackgroundColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [borderColor, setBorderColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [selectedBorderColor, setSelectedBorderColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const [borderWidth, setBorderWidth] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.textColor);
    const onFontSizeChange = (fsize) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('fontSize', fsize)
        });
        setFontSize(fsize);
    };
    const onTextColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('textColor', color)
        });
        setTextColor(color);
    };
    const onSelectedTextColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('selectedTextColor', color)
        });
        setSelectedTextColor(color);
    };
    const onBackgroundColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('backgroundColor', color)
        });
        setBackgroundColor(color);
    };
    const onSelectedBackgroundColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('selectedBackgroundColor', color)
        });
        setSelectedBackgroundColor(color);
    };
    const onBorderColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('borderColor', color)
        });
        setBorderColor(color);
    };
    const onSelectedBorderColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('selectedBorderColor', color)
        });
        setSelectedBorderColor(color);
    };
    const onBorderWidthChange = (width) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('borderWidth', width)
        });
        setBorderWidth(width);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-template-container" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: props.intl.formatMessage({
                id: "settingsLabel",
                defaultMessage: 'Settings'
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Font Size"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: fontSize, onChange: (e) => onFontSizeChange(Number(e.target.value)), size: "lg" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Text Color"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: textColor, height: 26, icon: "none", value: textColor, onChange: (c) => onTextColorChange(c), placement: "bottom", type: "default", width: 30 })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Selected Text Color"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: selectedTextColor, height: 26, icon: "none", value: selectedTextColor, onChange: (c) => onSelectedTextColorChange(c), placement: "bottom", type: "default", width: 30 })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Background Color"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: backgroundColor, height: 26, icon: "none", value: backgroundColor, onChange: (c) => onBackgroundColorChange(c), placement: "bottom", type: "default", width: 30 })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Selected Background Color"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: selectedBackgroundColor, height: 26, icon: "none", value: selectedBackgroundColor, onChange: (c) => onSelectedBackgroundColorChange(c), placement: "bottom", type: "default", width: 30 })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { size: "lg" }, "Border Color"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: borderColor, height: 26, icon: "none", value: borderColor, onChange: (c) => onBorderColorChange(c), placement: "bottom", type: "default", width: 30 })))));
}
;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jbHNzLWRhc2hib2FyZC1ib29rbWFya3MvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xqQjtBQUkyQjtBQUVsQjtBQUNtQjtBQUcvQyxTQUFTLE9BQU8sQ0FBRSxLQUFzQztJQUdyRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN4RSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN4RixNQUFNLENBQUMsZUFBZSxF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Q1gsS0FBSyxFQUFFLHVCQUF1QixFQUM5QixNQUFNLEVBQUUsRUFBRSxFQUNWLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLHVCQUF1QixFQUM5QixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxFQUNsRCxTQUFTLEVBQUMsUUFBUSxFQUNsQixJQUFJLEVBQUMsU0FBUyxFQUNkLEtBQUssRUFBRSxFQUFFLEdBQ1QsQ0FDSztZQUViLDJEQUFDLDJFQUFVO2dCQUNULDJEQUFDLDBDQUFLLElBQUMsSUFBSSxFQUFDLElBQUksbUJBQXFCO2dCQUNyQywyREFBQyx3RUFBZ0IsSUFDWCxLQUFLLEVBQUUsV0FBVyxFQUNsQixNQUFNLEVBQUUsRUFBRSxFQUNWLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLFdBQVcsRUFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFDdEMsU0FBUyxFQUFDLFFBQVEsRUFDbEIsSUFBSSxFQUFDLFNBQVMsRUFDZCxLQUFLLEVBQUUsRUFBRSxHQUNULENBQ0ssQ0FNRSxDQUNiLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDO0FBQ00sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jbHNzLWRhc2hib2FyZC1ib29rbWFya3Mvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfY29sb3JfcGlja2VyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xyXG5pbXBvcnQge1xyXG4gIFNldHRpbmdSb3csXHJcbiAgU2V0dGluZ1NlY3Rpb259IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgTGFiZWwsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXIgfSBmcm9tIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nIChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gIFxyXG5cclxuICBjb25zdCBbZm9udFNpemUsIHNldEZvbnRTaXplXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy5mb250U2l6ZSk7XHJcbiAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy50ZXh0Q29sb3IpXHJcbiAgY29uc3QgW3NlbGVjdGVkVGV4dENvbG9yLCBzZXRTZWxlY3RlZFRleHRDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5jb25maWcudGV4dENvbG9yKVxyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kQ29sb3IsIHNldEJhY2tncm91bmRDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5jb25maWcudGV4dENvbG9yKVxyXG4gIGNvbnN0IFtzZWxlY3RlZEJhY2tncm91bmRDb2xvciwgc2V0U2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3JdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnLnRleHRDb2xvcilcclxuICBjb25zdCBbYm9yZGVyQ29sb3IsIHNldEJvcmRlckNvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy50ZXh0Q29sb3IpXHJcbiAgY29uc3QgW3NlbGVjdGVkQm9yZGVyQ29sb3IsIHNldFNlbGVjdGVkQm9yZGVyQ29sb3JdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnLnRleHRDb2xvcilcclxuICBjb25zdCBbYm9yZGVyV2lkdGgsIHNldEJvcmRlcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy50ZXh0Q29sb3IpXHJcbiAgXHJcblxyXG4gIGNvbnN0IG9uRm9udFNpemVDaGFuZ2UgPSAoZnNpemU6IG51bWJlcik9PnsgICAgXHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZm9udFNpemUnLCBmc2l6ZSlcclxuICAgIH0pO1xyXG4gICAgc2V0Rm9udFNpemUoZnNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25UZXh0Q29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZyk9PnsgICAgXHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgndGV4dENvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldFRleHRDb2xvcihjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblNlbGVjdGVkVGV4dENvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgIFxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3NlbGVjdGVkVGV4dENvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldFNlbGVjdGVkVGV4dENvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQmFja2dyb3VuZENvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgIFxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2JhY2tncm91bmRDb2xvcicsIGNvbG9yKVxyXG4gICAgfSk7XHJcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TZWxlY3RlZEJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKT0+eyAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzZWxlY3RlZEJhY2tncm91bmRDb2xvcicsIGNvbG9yKVxyXG4gICAgfSk7XHJcbiAgICBzZXRTZWxlY3RlZEJhY2tncm91bmRDb2xvcihjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkJvcmRlckNvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgIFxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2JvcmRlckNvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldEJvcmRlckNvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0ZWRCb3JkZXJDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKT0+eyAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzZWxlY3RlZEJvcmRlckNvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldFNlbGVjdGVkQm9yZGVyQ29sb3IoY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Cb3JkZXJXaWR0aENoYW5nZSA9ICh3aWR0aDogc3RyaW5nKT0+eyAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdib3JkZXJXaWR0aCcsIHdpZHRoKVxyXG4gICAgfSk7XHJcbiAgICBzZXRCb3JkZXJXaWR0aCh3aWR0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy10ZW1wbGF0ZS1jb250YWluZXJcIj4gICAgICAgIFxyXG5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogXCJzZXR0aW5nc0xhYmVsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnU2V0dGluZ3MnXHJcbiAgICAgICAgICB9KX0+ICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPExhYmVsIHNpemU9XCJsZ1wiPkZvbnQgU2l6ZTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2ZvbnRTaXplfSBvbkNoYW5nZT17KGUpPT4gb25Gb250U2l6ZUNoYW5nZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gc2l6ZT1cImxnXCIvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8TGFiZWwgc2l6ZT1cImxnXCI+VGV4dCBDb2xvcjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxUaGVtZUNvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjKT0+IG9uVGV4dENvbG9yQ2hhbmdlKGMpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxMYWJlbCBzaXplPVwibGdcIj5TZWxlY3RlZCBUZXh0IENvbG9yPC9MYWJlbD5cclxuICAgICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkVGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRleHRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjKT0+IG9uU2VsZWN0ZWRUZXh0Q29sb3JDaGFuZ2UoYyl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPExhYmVsIHNpemU9XCJsZ1wiPkJhY2tncm91bmQgQ29sb3I8L0xhYmVsPlxyXG4gICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17YmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYyk9PiBvbkJhY2tncm91bmRDb2xvckNoYW5nZShjKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8TGFiZWwgc2l6ZT1cImxnXCI+U2VsZWN0ZWQgQmFja2dyb3VuZCBDb2xvcjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxUaGVtZUNvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZEJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgICAgaWNvbj1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYyk9PiBvblNlbGVjdGVkQmFja2dyb3VuZENvbG9yQ2hhbmdlKGMpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxMYWJlbCBzaXplPVwibGdcIj5Cb3JkZXIgQ29sb3I8L0xhYmVsPlxyXG4gICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Ym9yZGVyQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvcmRlckNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGMpPT4gb25Cb3JkZXJDb2xvckNoYW5nZShjKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIHsvKiA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPExhYmVsIHNpemU9XCJsZ1wiPkJvcmRlciBXaWR0aDwvTGFiZWw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2JvcmRlcldpZHRofSBvbkNoYW5nZT17KGUpPT4gb25Cb3JkZXJXaWR0aENoYW5nZShlLnRhcmdldC52YWx1ZSl9IHNpemU9XCJsZ1wiLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz4gKi99XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9