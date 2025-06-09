System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/clss-templates/src/setting/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/clss-templates/src/setting/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    settings: "Settings",
    iconSizeInstr: "Set Icon size",
    setInnerIconSizeInstr: 'Set Inner Icon Size'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/clss-templates/src/setting/setting.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/clss-templates/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");





function Setting(props) {
    const [headerBackgroundColor, setHeaderBackgroundColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.headerBackgroundColor);
    const [headerTextColor, setHeaderTextColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.headerTextColor);
    const [defaultButtonBackgroundColor, setDefaultButtonBackgroundColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.defaultButtonBackgroundColor);
    const [defaultButtonTextColor, setDefaultButtonTextColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.defaultButtonColor);
    const [selectedButtonBackgroundColor, setSelectedButtonBackgroundColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.selectedButtonBackgroundColor);
    const [selectedButtonTextColor, setSelectedButtonTextColor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(props.config.selectedButtonColor);
    const onDataSourceChange = (useDataSources) => {
        props.onSettingChange({
            id: props.id,
            useDataSources: useDataSources
        });
    };
    const onHeaderBackgroundColor = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('headerBackgroundColor', color)
        });
        setHeaderBackgroundColor(color);
    };
    const onHeaderTextColor = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('headerTextColor', color)
        });
        setHeaderTextColor(color);
    };
    const onDefaultButtonBackgroundColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('defaultButtonBackgroundColor', color)
        });
        setDefaultButtonBackgroundColor(color);
    };
    const onDefaultButtonTextColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('defaultButtonColor', color)
        });
        setDefaultButtonTextColor(color);
    };
    const onSelectedButtonBackgroundColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('selectedButtonBackgroundColor', color)
        });
        setSelectedButtonBackgroundColor(color);
    };
    const onSelectedButtonTextColorChange = (color) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('selectedButtonColor', color)
        });
        setSelectedButtonTextColor(color);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Data Source Selector" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_4__.DataSourceSelector, { types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]), useDataSources: props.useDataSources, useDataSourcesEnabled: true, mustUseDataSource: true, isMultiple: true, hideDataView: true, onChange: onDataSourceChange, widgetId: props.id }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: props.intl.formatMessage({
                id: "settingsLabel",
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].settings
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Header Background"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: headerBackgroundColor, height: 26, icon: "none", value: headerBackgroundColor, onChange: (c) => onHeaderBackgroundColor(c), placement: "auto", type: "default", width: 30 }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Header Text Color"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: headerTextColor, height: 26, icon: "none", value: headerTextColor, onChange: (c) => onHeaderTextColor(c), placement: "auto", type: "default", width: 30 }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Default Button Background Color"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: defaultButtonBackgroundColor, height: 26, icon: "none", value: defaultButtonBackgroundColor, onChange: (c) => onDefaultButtonBackgroundColorChange(c), placement: "auto", type: "default", width: 30 }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Default Button Text Color"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: defaultButtonTextColor, height: 26, icon: "none", value: defaultButtonTextColor, onChange: (c) => onDefaultButtonTextColorChange(c), placement: "auto", type: "default", width: 30 }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Selected Button Background Color"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: selectedButtonBackgroundColor, height: 26, icon: "none", value: selectedButtonBackgroundColor, onChange: (c) => onSelectedButtonBackgroundColorChange(c), placement: "auto", type: "default", width: 30 }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { flex: '1' } }, "Selected Button Text Color"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { color: selectedButtonTextColor, height: 26, icon: "none", value: selectedButtonTextColor, onChange: (c) => onSelectedButtonTextColorChange(c), placement: "auto", type: "default", width: 30 }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jbHNzLXRlbXBsYXRlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLHFCQUFxQixFQUFFLHFCQUFxQjtDQUM3QyxFQUFDOzs7Ozs7Ozs7Ozs7QUNKRjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNEM7QUFNbEQ7QUFFWTtBQUNLO0FBQ2E7QUFFNUQsU0FBUyxPQUFPLENBQUUsS0FBc0M7SUFFckUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTNGLE1B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LEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsaUNBQWlDO29CQUN2RCwyREFBQyx3RUFBZ0IsSUFDZixLQUFLLEVBQUUsdUJBQXVCLEVBQzlCLE1BQU0sRUFBRSxFQUFFLEVBQ1YsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsdUJBQXVCLEVBQzlCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEVBQ2xELFNBQVMsRUFBQyxNQUFNLEVBQ2hCLElBQUksRUFBQyxTQUFTLEVBQ2QsS0FBSyxFQUFFLEVBQUUsR0FDVCxDQUNBLENBQ0ssQ0FDRSxDQUNiLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDO0FBQ00sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY2xzcy10ZW1wbGF0ZXMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY2xzcy10ZW1wbGF0ZXMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgeyBcclxuICBzZXR0aW5nczogXCJTZXR0aW5nc1wiLFxyXG4gIGljb25TaXplSW5zdHI6IFwiU2V0IEljb24gc2l6ZVwiLFxyXG4gIHNldElubmVySWNvblNpemVJbnN0cjogJ1NldCBJbm5lciBJY29uIFNpemUnXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIlxyXG5pbXBvcnQgeyBBbGxEYXRhU291cmNlVHlwZXMsIEltbXV0YWJsZSwgSmltdUZpZWxkVHlwZSwgUmVhY3QsIFVzZURhdGFTb3VyY2UgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgU2V0dGluZ1NlY3Rpb24sXHJcbiAgU2V0dGluZ1JvdyxcclxuICBNYXBXaWRnZXRTZWxlY3RvclxyXG59IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGRlZmF1bHRJMThuTWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcclxuaW1wb3J0IHsgVGhlbWVDb2xvclBpY2tlciB9IGZyb20gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHsgXHJcblxyXG4gIGNvbnN0IFtoZWFkZXJCYWNrZ3JvdW5kQ29sb3IsIHNldEhlYWRlckJhY2tncm91bmRDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5jb25maWcuaGVhZGVyQmFja2dyb3VuZENvbG9yKTtcclxuICBjb25zdCBbaGVhZGVyVGV4dENvbG9yLCBzZXRIZWFkZXJUZXh0Q29sb3JdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnLmhlYWRlclRleHRDb2xvcik7XHJcbiAgXHJcbiAgY29uc3QgW2RlZmF1bHRCdXR0b25CYWNrZ3JvdW5kQ29sb3IsIHNldERlZmF1bHRCdXR0b25CYWNrZ3JvdW5kQ29sb3JdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnLmRlZmF1bHRCdXR0b25CYWNrZ3JvdW5kQ29sb3IpO1xyXG4gIGNvbnN0IFtkZWZhdWx0QnV0dG9uVGV4dENvbG9yLCBzZXREZWZhdWx0QnV0dG9uVGV4dENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy5kZWZhdWx0QnV0dG9uQ29sb3IpO1xyXG4gIFxyXG4gIGNvbnN0IFtzZWxlY3RlZEJ1dHRvbkJhY2tncm91bmRDb2xvciwgc2V0U2VsZWN0ZWRCdXR0b25CYWNrZ3JvdW5kQ29sb3JdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnLnNlbGVjdGVkQnV0dG9uQmFja2dyb3VuZENvbG9yKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCdXR0b25UZXh0Q29sb3IsIHNldFNlbGVjdGVkQnV0dG9uVGV4dENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNvbmZpZy5zZWxlY3RlZEJ1dHRvbkNvbG9yKTtcclxuICBcclxuXHJcbiAgICBjb25zdCBvbkRhdGFTb3VyY2VDaGFuZ2UgPSh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKT0+e1xyXG4gICAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gIGNvbnN0IG9uSGVhZGVyQmFja2dyb3VuZENvbG9yID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgIFxyXG4gICAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdoZWFkZXJCYWNrZ3JvdW5kQ29sb3InLCBjb2xvcilcclxuICAgIH0pO1xyXG4gICAgc2V0SGVhZGVyQmFja2dyb3VuZENvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uSGVhZGVyVGV4dENvbG9yID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgICAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdoZWFkZXJUZXh0Q29sb3InLCBjb2xvcilcclxuICAgIH0pO1xyXG4gICAgc2V0SGVhZGVyVGV4dENvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVmYXVsdEJ1dHRvbkJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKT0+eyAgICAgICAgXHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZGVmYXVsdEJ1dHRvbkJhY2tncm91bmRDb2xvcicsIGNvbG9yKVxyXG4gICAgfSk7XHJcbiAgICBzZXREZWZhdWx0QnV0dG9uQmFja2dyb3VuZENvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVmYXVsdEJ1dHRvblRleHRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKT0+eyAgICAgICAgXHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZGVmYXVsdEJ1dHRvbkNvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldERlZmF1bHRCdXR0b25UZXh0Q29sb3IoY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TZWxlY3RlZEJ1dHRvbkJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKT0+eyBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzZWxlY3RlZEJ1dHRvbkJhY2tncm91bmRDb2xvcicsIGNvbG9yKVxyXG4gICAgfSk7XHJcbiAgICBzZXRTZWxlY3RlZEJ1dHRvbkJhY2tncm91bmRDb2xvcihjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblNlbGVjdGVkQnV0dG9uVGV4dENvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpPT57ICAgICAgICBcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzZWxlY3RlZEJ1dHRvbkNvbG9yJywgY29sb3IpXHJcbiAgICB9KTtcclxuICAgIHNldFNlbGVjdGVkQnV0dG9uVGV4dENvbG9yKGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nXCI+ICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiRGF0YSBTb3VyY2UgU2VsZWN0b3JcIn0+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxyXG4gICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17cHJvcHMudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH0vPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz4gICAgICBcclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogXCJzZXR0aW5nc0xhYmVsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNldHRpbmdzXHJcbiAgICAgICAgICB9KX0+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tmbGV4OiAnMSd9fT5IZWFkZXIgQmFja2dyb3VuZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17aGVhZGVyQmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWFkZXJCYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYyk9PiBvbkhlYWRlckJhY2tncm91bmRDb2xvcihjKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tmbGV4OiAnMSd9fT5IZWFkZXIgVGV4dCBDb2xvcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17aGVhZGVyVGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWFkZXJUZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYyk9PiBvbkhlYWRlclRleHRDb2xvcihjKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tmbGV4OiAnMSd9fT5EZWZhdWx0IEJ1dHRvbiBCYWNrZ3JvdW5kIENvbG9yPC9oND5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtkZWZhdWx0QnV0dG9uQmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZWZhdWx0QnV0dG9uQmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGMpPT4gb25EZWZhdWx0QnV0dG9uQmFja2dyb3VuZENvbG9yQ2hhbmdlKGMpfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZsZXg6ICcxJ319PkRlZmF1bHQgQnV0dG9uIFRleHQgQ29sb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2RlZmF1bHRCdXR0b25UZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlZmF1bHRCdXR0b25UZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYyk9PiBvbkRlZmF1bHRCdXR0b25UZXh0Q29sb3JDaGFuZ2UoYyl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7ZmxleDogJzEnfX0+U2VsZWN0ZWQgQnV0dG9uIEJhY2tncm91bmQgQ29sb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkQnV0dG9uQmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEJ1dHRvbkJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjKT0+IG9uU2VsZWN0ZWRCdXR0b25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoYyl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tmbGV4OiAnMSd9fT5TZWxlY3RlZCBCdXR0b24gVGV4dCBDb2xvcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c2VsZWN0ZWRCdXR0b25UZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQnV0dG9uVGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGMpPT4gb25TZWxlY3RlZEJ1dHRvblRleHRDb2xvckNoYW5nZShjKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9