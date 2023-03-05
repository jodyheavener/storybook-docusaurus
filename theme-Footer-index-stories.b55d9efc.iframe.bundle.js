"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{"./src/theme/Footer/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("../node_modules/react/index.js"),useThemeConfig=__webpack_require__("../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js");var LinkItem=__webpack_require__("../node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js");function ColumnLinkItem(_ref){let{item}=_ref;return item.html?react.createElement("li",{className:"footer__item",dangerouslySetInnerHTML:{__html:item.html}}):react.createElement("li",{key:item.href??item.to,className:"footer__item"},react.createElement(LinkItem.Z,{item}))}function Column(_ref2){let{column}=_ref2;return react.createElement("div",{className:"col footer__col"},react.createElement("div",{className:"footer__title"},column.title),react.createElement("ul",{className:"footer__items clean-list"},column.items.map(((item,i)=>react.createElement(ColumnLinkItem,{key:i,item})))))}function FooterLinksMultiColumn(_ref3){let{columns}=_ref3;return react.createElement("div",{className:"row footer__links"},columns.map(((column,i)=>react.createElement(Column,{key:i,column}))))}var Simple=__webpack_require__("./src/theme/Footer/Links/Simple/index.tsx");function FooterLinks(_ref){let{links}=_ref;return function isMultiColumnFooterLinks(links){return"title"in links[0]}(links)?react.createElement(FooterLinksMultiColumn,{columns:links}):react.createElement(Simple.Z,{links})}var clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Link=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/Link.js"),useBaseUrl=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js"),ThemedImage=__webpack_require__("./src/theme/ThemedImage/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Logo_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;function LogoImage(_ref){let{logo}=_ref;const{withBaseUrl}=(0,useBaseUrl.C)(),sources={light:withBaseUrl(logo.src),dark:withBaseUrl(logo.srcDark??logo.src)};return react.createElement(ThemedImage.Z,{className:(0,clsx_m.Z)("footer__logo",logo.className),alt:logo.alt,sources,width:logo.width,height:logo.height,style:logo.style})}function FooterLogo(_ref2){let{logo}=_ref2;return logo.href?react.createElement(Link.Z,{href:logo.href,className:Logo_styles_module.footerLogoLink,target:logo.target},react.createElement(LogoImage,{logo})):react.createElement(LogoImage,{logo})}function FooterCopyright(_ref){let{copyright}=_ref;return react.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:copyright}})}function FooterLayout(_ref){let{style,links,logo,copyright}=_ref;return react.createElement("footer",{className:(0,clsx_m.Z)("footer",{"footer--dark":"dark"===style})},react.createElement("div",{className:"container container-fluid"},links,(logo||copyright)&&react.createElement("div",{className:"footer__bottom text--center"},logo&&react.createElement("div",{className:"margin-bottom--sm"},logo),copyright)))}function Footer_Footer(){const{footer}=(0,useThemeConfig.L)();if(!footer)return null;const{copyright,links,logo,style}=footer;return react.createElement(FooterLayout,{style,links:links&&links.length>0&&react.createElement(FooterLinks,{links}),logo:logo&&react.createElement(FooterLogo,{logo}),copyright:copyright&&react.createElement(FooterCopyright,{copyright})})}const theme_Footer=react.memo(Footer_Footer);try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/Footer/index.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/theme/Footer/index.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Footer",component:function FooterWrapper(props){return react.createElement(react.Fragment,null,react.createElement(theme_Footer,props))}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/theme/Footer/Links/Simple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SimpleWrapper});var react=__webpack_require__("../node_modules/react/index.js"),LinkItem=__webpack_require__("../node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js");function Separator(){return react.createElement("span",{className:"footer__link-separator"},"·")}function SimpleLinkItem(_ref){let{item}=_ref;return item.html?react.createElement("span",{className:"footer__link-item",dangerouslySetInnerHTML:{__html:item.html}}):react.createElement(LinkItem.Z,{item})}function FooterLinksSimple(_ref2){let{links}=_ref2;return react.createElement("div",{className:"footer__links text--center"},react.createElement("div",{className:"footer__links"},links.map(((item,i)=>react.createElement(react.Fragment,{key:i},react.createElement(SimpleLinkItem,{item}),links.length!==i+1&&react.createElement(Separator,null))))))}function SimpleWrapper(props){return react.createElement(react.Fragment,null,react.createElement(FooterLinksSimple,props))}try{Simple.displayName="Simple",Simple.__docgenInfo={description:"",displayName:"Simple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/Footer/Links/Simple/index.tsx#Simple"]={docgenInfo:Simple.__docgenInfo,name:"Simple",path:"src/theme/Footer/Links/Simple/index.tsx#Simple"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/ThemedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ThemedImageWrapper});var react=__webpack_require__("../node_modules/react/index.js"),esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),useIsBrowser=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js"),contexts_colorMode=__webpack_require__("../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const ThemedImage_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;function ThemedImage_ThemedImage(props){const isBrowser=(0,useIsBrowser.Z)(),{colorMode}=(0,contexts_colorMode.I)(),{sources,className,alt,...propsRest}=props,renderedSourceNames=isBrowser?"dark"===colorMode?["dark"]:["light"]:["light","dark"];return react.createElement(react.Fragment,null,renderedSourceNames.map((sourceName=>react.createElement("img",(0,esm_extends.Z)({key:sourceName,src:sources[sourceName],alt,className:(0,clsx_m.Z)(ThemedImage_styles_module.themedImage,ThemedImage_styles_module[`themedImage--${sourceName}`],className)},propsRest)))))}function ThemedImageWrapper(props){return react.createElement(react.Fragment,null,react.createElement(ThemedImage_ThemedImage,props))}try{ThemedImage.displayName="ThemedImage",ThemedImage.__docgenInfo={description:"",displayName:"ThemedImage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/ThemedImage/index.tsx#ThemedImage"]={docgenInfo:ThemedImage.__docgenInfo,name:"ThemedImage",path:"src/theme/ThemedImage/index.tsx#ThemedImage"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.eXmduegvPizVEJ1YJEgQ {\n  opacity: 0.5;\n  transition: opacity var(--ifm-transition-fast)\n    var(--ifm-transition-timing-default);\n}\n\n.eXmduegvPizVEJ1YJEgQ:hover {\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css"],names:[],mappings:"AAAA;;;;;EAKE;;AAEF;EACE,YAAY;EACZ;wCACsC;AACxC;;AAEA;EACE,UAAU;AACZ",sourcesContent:["/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.footerLogoLink {\n  opacity: 0.5;\n  transition: opacity var(--ifm-transition-fast)\n    var(--ifm-transition-timing-default);\n}\n\n.footerLogoLink:hover {\n  opacity: 1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={footerLogoLink:"eXmduegvPizVEJ1YJEgQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.yOwoyHsHgUU1K8mjcISo {\n  margin-left: 0.3rem;\n}\n","",{version:3,sources:["webpack://./../node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/styles.module.css"],names:[],mappings:"AAAA;;;;;EAKE;;AAEF;EACE,mBAAmB;AACrB",sourcesContent:["/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.iconExternalLink {\n  margin-left: 0.3rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={iconExternalLink:"yOwoyHsHgUU1K8mjcISo"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.ucx404Khr60VMvYbCCzU {\n  display: none;\n}\n\n[data-theme='light'] .RYNfUhPB9_r_Rt7g9uhh {\n  display: initial;\n}\n\n[data-theme='dark'] .XEtOaWm9lI8PklnM6O3n {\n  display: initial;\n}\n","",{version:3,sources:["webpack://./../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css"],names:[],mappings:"AAAA;;;;;EAKE;;AAEF;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:["/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.themedImage {\n  display: none;\n}\n\n[data-theme='light'] .themedImage--light {\n  display: initial;\n}\n\n[data-theme='dark'] .themedImage--dark {\n  display: initial;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={themedImage:"ucx404Khr60VMvYbCCzU","themedImage--light":"RYNfUhPB9_r_Rt7g9uhh","themedImage--dark":"XEtOaWm9lI8PklnM6O3n"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/@docusaurus/core/lib/client/exports/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>exports_Link});var esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../node_modules/react/index.js"),react_router_dom=__webpack_require__("../node_modules/react-router-dom/esm/react-router-dom.js"),lib=__webpack_require__("../node_modules/@docusaurus/utils-common/lib/index.js"),useDocusaurusContext=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js"),isInternalUrl=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js"),ExecutionEnvironment=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js");const Context=react.createContext({collectLink:()=>{}}),useLinksCollector=()=>(0,react.useContext)(Context);var useBaseUrl=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js");const shouldAddBaseUrlAutomatically=to=>to.startsWith("/");function Link(_ref,forwardedRef){let{isNavLink,to,href,activeClassName,isActive,"data-noBrokenLinkCheck":noBrokenLinkCheck,autoAddBaseUrl=!0,...props}=_ref;const{siteConfig:{trailingSlash,baseUrl}}=(0,useDocusaurusContext.Z)(),{withBaseUrl}=(0,useBaseUrl.C)(),linksCollector=useLinksCollector(),innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(forwardedRef,(()=>innerRef.current));const targetLinkUnprefixed=to||href;const isInternal=(0,isInternalUrl.Z)(targetLinkUnprefixed),targetLinkWithoutPathnameProtocol=targetLinkUnprefixed?.replace("pathname://","");let targetLink=void 0!==targetLinkWithoutPathnameProtocol?function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str}(targetLinkWithoutPathnameProtocol):void 0;targetLink&&isInternal&&(targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash,baseUrl}));const preloaded=(0,react.useRef)(!1),LinkComponent=isNavLink?react_router_dom.OL:react_router_dom.rU,IOSupported=ExecutionEnvironment.Z.canUseIntersectionObserver,ioRef=(0,react.useRef)(),onInteractionEnter=()=>{preloaded.current||null==targetLink||(window.docusaurus.preload(targetLink),preloaded.current=!0)};(0,react.useEffect)((()=>(!IOSupported&&isInternal&&null!=targetLink&&window.docusaurus.prefetch(targetLink),()=>{IOSupported&&ioRef.current&&ioRef.current.disconnect()})),[ioRef,targetLink,IOSupported,isInternal]);const isAnchorLink=targetLink?.startsWith("#")??!1,isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;return isRegularHtmlLink||noBrokenLinkCheck||linksCollector.collectLink(targetLink),isRegularHtmlLink?react.createElement("a",(0,esm_extends.Z)({ref:innerRef,href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:"_blank",rel:"noopener noreferrer"},props)):react.createElement(LinkComponent,(0,esm_extends.Z)({},props,{onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:el=>{innerRef.current=el,IOSupported&&el&&isInternal&&(ioRef.current=new window.IntersectionObserver((entries=>{entries.forEach((entry=>{el===entry.target&&(entry.isIntersecting||entry.intersectionRatio>0)&&(ioRef.current.unobserve(el),ioRef.current.disconnect(),null!=targetLink&&window.docusaurus.prefetch(targetLink))}))})),ioRef.current.observe(el))},to:targetLink},isNavLink&&{isActive,activeClassName}))}const exports_Link=react.forwardRef(Link)},"../node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FooterLinkItem});var esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../node_modules/react/index.js"),Link=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/Link.js"),useBaseUrl=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js"),isInternalUrl=__webpack_require__("../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const ExternalLink_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;function IconExternalLink(_ref){let{width=13.5,height=13.5}=_ref;return react.createElement("svg",{width,height,"aria-hidden":"true",viewBox:"0 0 24 24",className:ExternalLink_styles_module.iconExternalLink},react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}function FooterLinkItem(_ref){let{item}=_ref;const{to,href,label,prependBaseUrlToHref,...props}=item,toUrl=(0,useBaseUrl.Z)(to),normalizedHref=(0,useBaseUrl.Z)(href,{forcePrependBaseUrl:!0});return react.createElement(Link.Z,(0,esm_extends.Z)({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),label,href&&!(0,isInternalUrl.Z)(href)&&react.createElement(IconExternalLink,null))}},"../node_modules/@docusaurus/utils-common/lib/applyTrailingSlash.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function applyTrailingSlash(path,options){const{trailingSlash,baseUrl}=options;if(path.startsWith("#"))return path;if(void 0===trailingSlash)return path;const[pathname]=path.split(/[#?]/),newPathname="/"===pathname||pathname===baseUrl?pathname:function handleTrailingSlash(str,trailing){return trailing?function addTrailingSlash(str){return str.endsWith("/")?str:`${str}/`}(str):function removeTrailingSlash(str){return str.endsWith("/")?str.slice(0,-1):str}(str)}(pathname,trailingSlash);return path.replace(pathname,newPathname)}},"../node_modules/@docusaurus/utils-common/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyTrailingSlash=exports.blogPostContainerID=void 0,exports.blogPostContainerID="post-content";var applyTrailingSlash_1=__webpack_require__("../node_modules/@docusaurus/utils-common/lib/applyTrailingSlash.js");Object.defineProperty(exports,"applyTrailingSlash",{enumerable:!0,get:function(){return __importDefault(applyTrailingSlash_1).default}})}}]);