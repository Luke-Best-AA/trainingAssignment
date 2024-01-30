'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">training-assignment documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' : 'data-bs-target="#xs-components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' :
                                            'id="xs-components-links-module-AppModule-7ea55953996442ad55981787422c12e542249f1a6a685b3d4d8976e474a9c77d1797e2567672e2a229fe80eb4ae4aab7ee6403e1135a4e8e4413a883a973ac4e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FloatingBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloatingBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimerDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownTimerModule.html" data-type="entity-link" >CountdownTimerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' : 'data-bs-target="#xs-components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' :
                                            'id="xs-components-links-module-CountdownTimerModule-58dfe77cf687066191f6a1c99129e42568a4104498084f85ba8b879a75b49181ddfe4abec7eb271e40bfafb61ef992cb5828a0eb95736bbff6654c506304c195"' }>
                                            <li class="link">
                                                <a href="components/CountdownTimerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountdownTimerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimerDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownTimerRoutingModule.html" data-type="entity-link" >CountdownTimerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicDivsModule.html" data-type="entity-link" >DynamicDivsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'data-bs-target="#xs-components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' :
                                            'id="xs-components-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' }>
                                            <li class="link">
                                                <a href="components/DynamicDivsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicDivsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' : 'data-bs-target="#xs-directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' :
                                        'id="xs-directives-links-module-DynamicDivsModule-ae6e81b592637e2cd3bcde1df84c885f409f2b495461c8f81368faf89e54cae04e1d1dd9446163a4d35b3a38e71c83491e154f695be7cf56d30658a3edb391b7"' }>
                                        <li class="link">
                                            <a href="directives/DetectBottomDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetectBottomDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicDivsRoutingModule.html" data-type="entity-link" >DynamicDivsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EcommercePageModule.html" data-type="entity-link" >EcommercePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'data-bs-target="#xs-components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' :
                                            'id="xs-components-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' }>
                                            <li class="link">
                                                <a href="components/EcommercePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EcommercePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' : 'data-bs-target="#xs-directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' :
                                        'id="xs-directives-links-module-EcommercePageModule-1e7ef1ed7955311ffad278516a4023097ba23ed7ea2060a75e11b36d9cfcf996dd6d5438557bc15f1d3799339632270dd902512f3722c1ac56e789450c3c7f09"' }>
                                        <li class="link">
                                            <a href="directives/DetectBottomDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetectBottomDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EcommercePageRoutingModule.html" data-type="entity-link" >EcommercePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeContentModule.html" data-type="entity-link" >HomeContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' : 'data-bs-target="#xs-components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' :
                                            'id="xs-components-links-module-HomeContentModule-416b311c8d679f443ada231082f208fa4121a90bd3b6c43ec216243bb62f340568c233ec0aad544cd46d63601b6a32722bebc05a931d345eac2d7abe3c3a6cf9"' }>
                                            <li class="link">
                                                <a href="components/HomeContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeContentRoutingModule.html" data-type="entity-link" >HomeContentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceTimerModule.html" data-type="entity-link" >ServiceTimerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' : 'data-bs-target="#xs-components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' :
                                            'id="xs-components-links-module-ServiceTimerModule-a5ad196fbd2c1ef93b1e29603deb4e3f5de798eca71eb3f921c0162fc95920d41804ca1e03d600dc25160ed6809a181ea9adfe75dbbbf929497ccb1bf0c1bf07"' }>
                                            <li class="link">
                                                <a href="components/ServiceTimerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceTimerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimerDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceTimerRoutingModule.html" data-type="entity-link" >ServiceTimerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentMarksModule.html" data-type="entity-link" >StudentMarksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' : 'data-bs-target="#xs-components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' :
                                            'id="xs-components-links-module-StudentMarksModule-460475e1ebf499ad2f07eff997b10659e2ffefb57fd282b83b4283fc41c5a3be94ef4d8a826983c6ec0ecdff50d604741cd81d14cffa96580a4399394c6f29fa"' }>
                                            <li class="link">
                                                <a href="components/StudentMarksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentMarksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentMarksRoutingModule.html" data-type="entity-link" >StudentMarksRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimerButtonLogComponent.html" data-type="entity-link" >TimerButtonLogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimerDisplayComponent-1.html" data-type="entity-link" >TimerDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimerInputsComponent.html" data-type="entity-link" >TimerInputsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimerLogComponent.html" data-type="entity-link" >TimerLogComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DetectBottomDirective.html" data-type="entity-link" >DetectBottomDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CounterService.html" data-type="entity-link" >CounterService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Counter.html" data-type="entity-link" >Counter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DynamicDiv.html" data-type="entity-link" >DynamicDiv</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});