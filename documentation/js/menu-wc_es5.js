'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">training-assignment documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' : 'data-bs-target="#xs-components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' : 'id="xs-components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FloatingBannerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FloatingBannerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TimerDisplayComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TimerDisplayComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CountdownTimerModule.html\" data-type=\"entity-link\" >CountdownTimerModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' : 'data-bs-target="#xs-components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' : 'id="xs-components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CountdownTimerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CountdownTimerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TimerDisplayComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TimerDisplayComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CountdownTimerRoutingModule.html\" data-type=\"entity-link\" >CountdownTimerRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DynamicDivsModule.html\" data-type=\"entity-link\" >DynamicDivsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'data-bs-target="#xs-components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'id="xs-components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DynamicDivsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DynamicDivsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'data-bs-target="#xs-directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'id="xs-directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/DetectBottomDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DetectBottomDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DynamicDivsRoutingModule.html\" data-type=\"entity-link\" >DynamicDivsRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/EcommercePageModule.html\" data-type=\"entity-link\" >EcommercePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'data-bs-target="#xs-components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'id="xs-components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/EcommercePageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EcommercePageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'data-bs-target="#xs-directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'id="xs-directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/DetectBottomDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DetectBottomDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/EcommercePageRoutingModule.html\" data-type=\"entity-link\" >EcommercePageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeContentModule.html\" data-type=\"entity-link\" >HomeContentModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' : 'data-bs-target="#xs-components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' : 'id="xs-components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeContentComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeContentComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeContentRoutingModule.html\" data-type=\"entity-link\" >HomeContentRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ServiceTimerModule.html\" data-type=\"entity-link\" >ServiceTimerModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' : 'data-bs-target="#xs-components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' : 'id="xs-components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ServiceTimerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ServiceTimerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TimerDisplayComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TimerDisplayComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ServiceTimerRoutingModule.html\" data-type=\"entity-link\" >ServiceTimerRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StudentMarksModule.html\" data-type=\"entity-link\" >StudentMarksModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' : 'data-bs-target="#xs-components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' : 'id="xs-components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/StudentMarksComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StudentMarksComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StudentMarksRoutingModule.html\" data-type=\"entity-link\" >StudentMarksRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links"' : 'data-bs-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/SpinnerComponent.html\" data-type=\"entity-link\" >SpinnerComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TimerButtonLogComponent.html\" data-type=\"entity-link\" >TimerButtonLogComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TimerDisplayComponent-1.html\" data-type=\"entity-link\" >TimerDisplayComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TimerInputsComponent.html\" data-type=\"entity-link\" >TimerInputsComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TimerLogComponent.html\" data-type=\"entity-link\" >TimerLogComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links"' : 'data-bs-target="#xs-directives-links"', ">\n                                <span class=\"icon ion-md-code-working\"></span>\n                                <span>Directives</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"directives/DetectBottomDirective.html\" data-type=\"entity-link\" >DetectBottomDirective</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/CounterService.html\" data-type=\"entity-link\" >CounterService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Counter.html\" data-type=\"entity-link\" >Counter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DynamicDiv.html\" data-type=\"entity-link\" >DynamicDiv</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));