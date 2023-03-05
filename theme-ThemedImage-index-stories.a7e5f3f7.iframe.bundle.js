"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[812],{"./src/theme/ThemedImage/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ThemedImage",component:__webpack_require__("./src/theme/ThemedImage/index.tsx").Z},Default={args:{alt:"Storybook logo",sources:{light:"img/storybook-light.svg",dark:"img/storybook-dark.svg"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    alt: "Storybook logo",\n    sources: {\n      light: "img/storybook-light.svg",\n      dark: "img/storybook-dark.svg"\n    }\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/theme/ThemedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ThemedImageWrapper});var react=__webpack_require__("../node_modules/react/index.js"),esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),useIsBrowser=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js"),contexts_colorMode=__webpack_require__("../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const ThemedImage_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;function ThemedImage_ThemedImage(props){const isBrowser=(0,useIsBrowser.Z)(),{colorMode}=(0,contexts_colorMode.I)(),{sources,className,alt,...propsRest}=props,renderedSourceNames=isBrowser?"dark"===colorMode?["dark"]:["light"]:["light","dark"];return react.createElement(react.Fragment,null,renderedSourceNames.map((sourceName=>react.createElement("img",(0,esm_extends.Z)({key:sourceName,src:sources[sourceName],alt,className:(0,clsx_m.Z)(ThemedImage_styles_module.themedImage,ThemedImage_styles_module[`themedImage--${sourceName}`],className)},propsRest)))))}function ThemedImageWrapper(props){return react.createElement(react.Fragment,null,react.createElement(ThemedImage_ThemedImage,props))}try{ThemedImage.displayName="ThemedImage",ThemedImage.__docgenInfo={description:"",displayName:"ThemedImage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/ThemedImage/index.tsx#ThemedImage"]={docgenInfo:ThemedImage.__docgenInfo,name:"ThemedImage",path:"src/theme/ThemedImage/index.tsx#ThemedImage"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.ucx404Khr60VMvYbCCzU {\n  display: none;\n}\n\n[data-theme='light'] .RYNfUhPB9_r_Rt7g9uhh {\n  display: initial;\n}\n\n[data-theme='dark'] .XEtOaWm9lI8PklnM6O3n {\n  display: initial;\n}\n","",{version:3,sources:["webpack://./../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css"],names:[],mappings:"AAAA;;;;;EAKE;;AAEF;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:["/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.themedImage {\n  display: none;\n}\n\n[data-theme='light'] .themedImage--light {\n  display: initial;\n}\n\n[data-theme='dark'] .themedImage--dark {\n  display: initial;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={themedImage:"ucx404Khr60VMvYbCCzU","themedImage--light":"RYNfUhPB9_r_Rt7g9uhh","themedImage--dark":"XEtOaWm9lI8PklnM6O3n"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);