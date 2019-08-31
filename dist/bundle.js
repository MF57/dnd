!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__extends=function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e.__rest=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]]);return n},e.__decorate=function(t,e,n,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},e.__param=function(t,e){return function(n,i){e(n,i,t)}},e.__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},e.__awaiter=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}u((i=i.apply(t,e||[])).next())})},e.__generator=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},e.__exportStar=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},e.__values=a,e.__read=s,e.__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t},e.__await=u,e.__asyncGenerator=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=n.apply(t,e||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(t){r[t]&&(i[t]=function(e){return new Promise(function(n,i){o.push([t,e,n,i])>1||s(t,e)})})}function s(t,e){try{(n=r[t](e)).value instanceof u?Promise.resolve(n.value.v).then(c,l):d(o[0][2],n)}catch(t){d(o[0][3],t)}var n}function c(t){s("next",t)}function l(t){s("throw",t)}function d(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}},e.__asyncDelegator=function(t){var e,n;return e={},i("next"),i("throw",function(t){throw t}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,r){e[i]=t[i]?function(e){return(n=!n)?{value:u(t[i](e)),done:"return"===i}:r?r(e):e}:r}},e.__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=a(t),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(n){e[n]=t[n]&&function(e){return new Promise(function(i,r){e=t[n](e),function(t,e,n,i){Promise.resolve(i).then(function(e){t({value:e,done:n})},e)}(i,r,e.done,e.value)})}}},e.__makeTemplateObject=function(t,e){Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e;return t},e.__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},e.__importDefault=function(t){return t&&t.__esModule?t:{default:t}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var o=function(){return e.__assign=o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o.apply(this,arguments)};function a(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function s(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return a}function u(t){return this instanceof u?(this.v=t,this):new u(t)}e.__assign=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(1);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i;Object.defineProperty(e,"__esModule",{value:!0}),e.applyPassive=function(t,e){void 0===t&&(t=window);void 0===e&&(e=!1);if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}},function(t,e,n){"use strict";function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){if(t.closest)return t.closest(e);var n=t;for(;n;){if(i(n,e))return n;n=n.parentElement}return null},e.matches=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},e.numbers={NOTCH_ELEMENT_PADDING:8},e.strings={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldCharacterCounterFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(1),o=n(21);var a=function(t){function e(n){return t.call(this,i.__assign({},e.defaultAdapter,n))||this}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2019 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTextFieldCharacterCounterFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},e.strings={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},e.numbers={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},e.VALIDATION_ATTR_WHITELIST=["pattern","min","max","required","step","minlength","maxlength"],e.ALWAYS_FLOAT_TYPES=["color","date","datetime-local","month","range","time","week"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldHelperTextFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(1),o=n(24);var a=function(t){function e(n){return t.call(this,i.__assign({},e.defaultAdapter,n))||this}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(o.strings.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(o.strings.ROLE,"alert"):this.adapter_.removeAttr(o.strings.ROLE),e||n||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(o.strings.ARIA_HIDDEN,"true")},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTextFieldHelperTextFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=i;if("boolean"==typeof i&&!e)return i;if(!n||"function"!=typeof n.supports)return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");r=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return r}(t);e||(i=r);return r},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,u=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u}else{var l=t;i=l.pageX-s,r=l.pageY-u}return{x:i,y:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFloatingLabelFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(12),o=n(52);var a=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.shakeAnimationEndHandler_=function(){return r.handleShakeAnimationEnd_()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.getWidth=function(){return this.adapter_.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;t?this.adapter_.addClass(i):(this.adapter_.removeClass(i),this.adapter_.removeClass(r))},e.prototype.handleShakeAnimationEnd_=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2016 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCFloatingLabelFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCNotchedOutline=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(57),o=n(13),a=n(5),s=n(17);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(a.strings.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+o.MDCFloatingLabelFoundation.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(a.cssClasses.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root_.classList.add(a.cssClasses.NO_LABEL)},e.prototype.notch=function(t){this.foundation_.notch(t)},e.prototype.closeNotch=function(){this.foundation_.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNotchWidthProperty:function(e){return t.notchElement_.style.setProperty("width",e+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}};return new s.MDCNotchedOutlineFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCNotchedOutline=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCNotchedOutlineFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(16),o=n(5);var a=function(t){function e(n){return t.call(this,i.__assign({},e.defaultAdapter,n))||this}return i.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=o.numbers.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCNotchedOutlineFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(1),o=n(59),a=n(19);var s=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],c=[],l=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(s.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;s.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&c.length>0&&c.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){c=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c=f.x+"px, "+f.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?(0,a.getNormalizedEventCoords)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},o.numbers.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(r.MDCFoundation);e.MDCRippleFoundation=l,e.default=l},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=i;if("boolean"==typeof i&&!e)return i;if(!n||"function"!=typeof n.supports)return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");r=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return r}(t);e||(i=r);return r},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,u=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u}else{var l=t;i=l.pageX-s,r=l.pageY-u}return{x:i,y:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldCharacterCounter=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(2),o=n(6);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={setContent:function(e){t.root_.textContent=e}};return new o.MDCTextFieldCharacterCounterFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2019 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldCharacterCounter=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ROOT:"mdc-text-field-character-counter"},r={ROOT_SELECTOR:"."+i.ROOT};e.strings=r,e.cssClasses=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(1),o=n(7);var a=["mousedown","touchstart"],s=["click","keydown"],u=function(t){function e(n,r){void 0===r&&(r={});var o=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return o.isFocused_=!1,o.receivedUserInput_=!1,o.isValid_=!0,o.useNativeValidation_=!0,o.helperText_=r.helperText,o.characterCounter_=r.characterCounter,o.leadingIcon_=r.leadingIcon,o.trailingIcon_=r.trailingIcon,o.inputFocusHandler_=function(){return o.activateFocus()},o.inputBlurHandler_=function(){return o.deactivateFocus()},o.inputInputHandler_=function(){return o.handleInput()},o.setPointerXOffset_=function(t){return o.setTransformOrigin(t)},o.textFieldInteractionHandler_=function(){return o.handleTextFieldInteraction()},o.validationAttributeChangeHandler_=function(t){return o.handleValidationAttributeChange(t)},o}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return o.ALWAYS_FLOAT_TYPES.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||Boolean(this.getValue())||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&Boolean(this.getValue())},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),a.forEach(function(e){t.adapter_.registerInputInteractionHandler(e,t.setPointerXOffset_)}),s.forEach(function(e){t.adapter_.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),a.forEach(function(e){t.adapter_.deregisterInputInteractionHandler(e,t.setPointerXOffset_)}),s.forEach(function(e){t.adapter_.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(t){return o.VALIDATION_ATTR_WHITELIST.indexOf(t)>-1&&(e.styleValidity_(!0),!0)}),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(o.cssClasses.DENSE)?o.numbers.DENSE_LABEL_SCALE:o.numbers.LABEL_SCALE,n=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(n)}else this.adapter_.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),r=n.clientX-i.left;this.adapter_.setLineRippleTransformOrigin(r)},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;t?this.adapter_.removeClass(n):this.adapter_.addClass(n),this.helperText_&&this.helperText_.setValidity(t)},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter_.addClass(i),this.adapter_.removeClass(r)):this.adapter_.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(r.MDCFoundation);
/**
                                                       * @license
                                                       * Copyright 2016 Google Inc.
                                                       *
                                                       * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                       * of this software and associated documentation files (the "Software"), to deal
                                                       * in the Software without restriction, including without limitation the rights
                                                       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                       * copies of the Software, and to permit persons to whom the Software is
                                                       * furnished to do so, subject to the following conditions:
                                                       *
                                                       * The above copyright notice and this permission notice shall be included in
                                                       * all copies or substantial portions of the Software.
                                                       *
                                                       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                       * THE SOFTWARE.
                                                       */e.MDCTextFieldFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldHelperText=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(2),o=n(8);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e}};return new o.MDCTextFieldHelperTextFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldHelperText=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},r={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+i.ROOT};e.strings=r,e.cssClasses=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldIcon=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(2),o=n(26);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={getAttr:function(e){return t.root_.getAttribute(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(o.MDCTextFieldIconFoundation.strings.ICON_EVENT,{},!0)}};return new o.MDCTextFieldIconFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldIcon=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldIconFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(1),o=n(27);var a=["click","keydown"],s=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.savedTabIndex_=null,r.interactionHandler_=function(t){return r.handleInteraction(t)},r}return i.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),a.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.interactionHandler_)})},e.prototype.destroy=function(){var t=this;a.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionHandler_)})},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",o.strings.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&this.adapter_.notifyIconAction()},e}(r.MDCFoundation);
/**
                                                * @license
                                                * Copyright 2017 Google Inc.
                                                *
                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                * of this software and associated documentation files (the "Software"), to deal
                                                * in the Software without restriction, including without limitation the rights
                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                * copies of the Software, and to permit persons to whom the Software is
                                                * furnished to do so, subject to the following conditions:
                                                *
                                                * The above copyright notice and this permission notice shall be included in
                                                * all copies or substantial portions of the Software.
                                                *
                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                * THE SOFTWARE.
                                                */e.MDCTextFieldIconFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},e.cssClasses={ROOT:"mdc-text-field__icon"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFormFieldFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(28),o=n(30);var a=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame(function(){return t.adapter_.deactivateInputRipple()})},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCFormFieldFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={ROOT:"mdc-form-field"},e.strings={LABEL_SELECTOR:".mdc-form-field > label"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(9);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(9),o=n(71),a=n(33);var s=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],c=[],l=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(s.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;s.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&c.length>0&&c.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){c=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c=f.x+"px, "+f.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?(0,a.getNormalizedEventCoords)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},o.numbers.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(r.MDCFoundation);e.MDCRippleFoundation=l,e.default=l},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=i;if("boolean"==typeof i&&!e)return i;if(!n||"function"!=typeof n.supports)return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");r=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return r}(t);e||(i=r);return r},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,u=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u}else{var l=t;i=l.pageX-s,r=l.pageY-u}return{x:i,y:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCheckboxFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(9),o=n(35);var a=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.currentCheckState_=o.strings.TRANSITION_STATE_INIT,r.currentAnimationClass_="",r.animEndLatchTimer_=0,r.enableAnimationEndHandler_=!1,r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(o.cssClasses.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(o.cssClasses.DISABLED):this.adapter_.removeClass(o.cssClasses.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1},o.numbers.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var n=o.strings.TRANSITION_STATE_UNCHECKED,i=o.cssClasses.SELECTED;e===n?this.adapter_.removeClass(i):this.adapter_.addClass(i),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var t=o.strings.TRANSITION_STATE_INDETERMINATE,e=o.strings.TRANSITION_STATE_CHECKED,n=o.strings.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:n},e.prototype.getTransitionAnimationClass_=function(t,n){var i=o.strings.TRANSITION_STATE_INIT,r=o.strings.TRANSITION_STATE_CHECKED,a=o.strings.TRANSITION_STATE_UNCHECKED,s=e.cssClasses,u=s.ANIM_UNCHECKED_CHECKED,c=s.ANIM_UNCHECKED_INDETERMINATE,l=s.ANIM_CHECKED_UNCHECKED,d=s.ANIM_CHECKED_INDETERMINATE,f=s.ANIM_INDETERMINATE_CHECKED,p=s.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return n===a?"":n===r?f:p;case a:return n===r?u:c;case r:return n===a?l:d;default:return n===r?f:p}},e.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(o.strings.ARIA_CHECKED_ATTR,o.strings.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(o.strings.ARIA_CHECKED_ATTR)},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2016 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCCheckboxFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},e.strings={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},e.numbers={ANIM_END_LATCH_MS:250}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(36),o=n(38),a=n(10);var s=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],c=[],l=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(s.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;s.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&c.length>0&&c.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){c=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c=f.x+"px, "+f.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?(0,a.getNormalizedEventCoords)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},o.numbers.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(r.MDCFoundation);e.MDCRippleFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(11);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){if(t.closest)return t.closest(e);var n=t;for(;n;){if(i(n,e))return n;n=n.parentElement}return null},e.matches=i},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,r=i;if("boolean"==typeof i&&!e)return i;if(!n||"function"!=typeof n.supports)return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");r=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return r}(t);e||(i=r);return r},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,u=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u}else{var l=t;i=l.pageX-s,r=l.pageY-u}return{x:i,y:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDialogFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(11),o=n(43);var a=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.isOpen_=!1,r.animationFrame_=0,r.animationTimer_=0,r.layoutFrame_=0,r.escapeKeyAction_=o.strings.CLOSE_ACTION,r.scrimClickAction_=o.strings.CLOSE_ACTION,r.autoStackButtons_=!0,r.areButtonsStacked_=!1,r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.hasClass(o.cssClasses.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(o.strings.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(o.cssClasses.OPENING),this.runNextAnimationFrame_(function(){t.adapter_.addClass(o.cssClasses.OPEN),t.adapter_.addBodyClass(o.cssClasses.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),t.adapter_.notifyOpened()},o.numbers.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(o.cssClasses.CLOSING),this.adapter_.removeClass(o.cssClasses.OPEN),this.adapter_.removeBodyClass(o.cssClasses.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},o.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.handleClick=function(t){if(this.adapter_.eventTargetMatches(t.target,o.strings.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var e=this.adapter_.getActionFromEvent(t);e&&this.close(e)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter_.getActionFromEvent(t)){var n=!this.adapter_.eventTargetMatches(t.target,o.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);e&&n&&this.adapter_.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(o.cssClasses.OPENING),this.adapter_.removeClass(o.cssClasses.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},e.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(o.cssClasses.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(o.cssClasses.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(o.cssClasses.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(o.cssClasses.SCROLLABLE)},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCDialogFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},e.strings={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},e.numbers={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFocusTrapInstance=function(t,e,n){void 0===e&&(e=o.default);return e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:n})}
/**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */,e.isScrollable=function(t){return!!t&&t.scrollHeight>t.offsetHeight},e.areTopsMisaligned=function(t){var e=new Set;return[].forEach.call(t,function(t){return e.add(t.offsetTop)}),e.size>1};var i,r=n(81),o=(i=r)&&i.__esModule?i:{default:i}},function(t,e,n){n(46),t.exports=n(47)},function(t,e,n){t.exports=n.p+"bundle.css"},function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(48),a=n(63),s=n(64),u=n(67),c=n(72),l=n(75);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)}function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var o=n.shift();if(f(t)&&f(o))for(var a in o)f(o[a])?(t[a]||i(t,d({},a,{})),p(t[a],o[a])):i(t,d({},a,o[a]));return p.apply(void 0,[t].concat(n))}new c.MDCRipple(document.querySelector(".import-button")),new c.MDCRipple(document.querySelector(".export-button")),["#character-name-textfield","#player-name-textfield","#class-textfield","#level-textfield","#race-textfield","#character-textfield","#religion-textfield","#size-textfield","#sex-textfield","#age-textfield","#height-textfield","#weight-textfield","#eye-textfield","#hair-textfield","#skin-textfield"].forEach(function(t){return new o.MDCTextField(document.querySelector(t))}),["#character-name-outline","#player-name-outline","#class-outline","#level-outline","#race-outline","#character-outline","#religion-outline","#size-outline","#sex-outline","#age-outline","#height-outline","#weight-outline","#eye-outline","#hair-outline","#skin-outline"].forEach(function(t){return new a.MDCNotchedOutline(document.querySelector(t))});var _=new u.MDCCheckbox(document.querySelector(".mdc-checkbox"));new s.MDCFormField(document.querySelector(".mdc-form-field")).input=_;var h={baseStats:{strength:{},agility:{},build:{},inteligence:{},wisdom:{},charisma:{}},hp:{},armorClass:{},attacks:{melee:{},distance:{}},initiative:{},magic:{},defensiveThrows:{will:{},endurance:{},reflex:{}},weapons:{weapon1:{},weapon2:{},weapon3:{}},armor:{},shield:{},ammo:{},money:{},abilities:{alchemy:{},bluff:{},quietMoving:{},magicTheory:{},lypReading:{},diplomacy:{},forgery:{},riding:{},focus:{},pickpocketing:{},healing:{},listening:{},decyphering:{},lockpicking:{},swimming:{},animalTreating:{},disinformation:{},profession:{},clothesChanging:{},searching:{},balancing:{},craft:{},jumping:{},lineHandling:{},magicItemsHandling:{},approximating:{},wildSecrets:{},hiding:{},disabling:{},falling:{},knowledge:{},fortunetelling:{},climbing:{},directionIntuition:{},intentionIntuition:{},performances:{},escaping:{},threatening:{},noticing:{},informationGathering:{},animalEmpathy:{},customAbility1:{},customAbility2:{},customAbility3:{},customAbility4:{},customAbility5:{},customAbility6:{},customAbility7:{},customAbility8:{},customAbility9:{},customAbility10:{},customAbility11:{},customAbility12:{},customAbility13:{}},equipment:{},languages:{},trumps:{}};function m(t,e,n){var i=document.getElementById(t),r=document.getElementById(t+"-textfield"),a="";try{a=n(h)}catch(t){}if(r){var s=new o.MDCTextField(document.getElementById(t+"-textfield"));a&&(s.value=a)}else a&&(i.value=a);i.addEventListener("blur",function(){e(i.value),localStorage.character=JSON.stringify(h),console.log(h)})}function v(t,e){var n=new u.MDCCheckbox(document.getElementById(t));new s.MDCFormField(document.getElementById(t+"-textfield")).input=n;var i=!1;try{i=e(h).isClassAbility}catch(t){}i&&(n.checked=!0),document.getElementById(t+"-textfield").addEventListener("click",function(){console.log(n.checked),e(h).isClassAbility=n.checked,localStorage.character=JSON.stringify(h)}),document.getElementById(t+"-custom")&&m(t+"-custom",function(t){return e(h).custom=t},function(t){return e(t).custom}),m(t+"-total-modifier",function(t){return e(h).totalModifier=t},function(t){return e(t).totalModifier}),m(t+"-stat-modifier",function(t){return e(h).statModifier=t},function(t){return e(t).statModifier}),m(t+"-range",function(t){return e(h).range=t},function(t){return e(t).range}),m(t+"-other",function(t){return e(h).other=t},function(t){return e(t).other})}function g(){m("character-name",function(t){return h.characterName=t},function(t){return t.characterName}),m("player-name",function(t){return h.playerName=t},function(t){return t.playerName}),m("class",function(t){return h.class=t},function(t){return t.class}),m("level",function(t){return h.level=t},function(t){return t.level}),m("race",function(t){return h.race=t},function(t){return t.race}),m("size",function(t){return h.size=t},function(t){return t.size}),m("character",function(t){return h.character=t},function(t){return t.character}),m("sex",function(t){return h.sex=t},function(t){return t.sex}),m("age",function(t){return h.age=t},function(t){return t.age}),m("height",function(t){return h.height=t},function(t){return t.height}),m("weight",function(t){return h.weight=t},function(t){return t.weight}),m("eye",function(t){return h.eye=t},function(t){return t.eye}),m("hair",function(t){return h.hair=t},function(t){return t.hair}),m("skin",function(t){return h.skin=t},function(t){return t.skin}),m("religion",function(t){return h.religion=t},function(t){return t.religion}),m("strength-total-stat",function(t){return h.baseStats.strength.total=t},function(t){return t.baseStats.strength.total}),m("agility-total-stat",function(t){return h.baseStats.agility.total=t},function(t){return t.baseStats.agility.total}),m("build-total-stat",function(t){return h.baseStats.build.total=t},function(t){return t.baseStats.build.total}),m("inteligence-total-stat",function(t){return h.baseStats.inteligence.total=t},function(t){return t.baseStats.inteligence.total}),m("wisdom-total-stat",function(t){return h.baseStats.wisdom.total=t},function(t){return t.baseStats.wisdom.total}),m("charisma-total-stat",function(t){return h.baseStats.charisma.total=t},function(t){return t.baseStats.charisma.total}),m("strength-modifier",function(t){return h.baseStats.strength.modifier=t},function(t){return t.baseStats.strength.modifier}),m("agility-modifier",function(t){return h.baseStats.agility.modifier=t},function(t){return t.baseStats.agility.modifier}),m("build-modifier",function(t){return h.baseStats.build.modifier=t},function(t){return t.baseStats.build.modifier}),m("inteligence-modifier",function(t){return h.baseStats.inteligence.modifier=t},function(t){return t.baseStats.inteligence.modifier}),m("wisdom-modifier",function(t){return h.baseStats.wisdom.modifier=t},function(t){return t.baseStats.wisdom.modifier}),m("charisma-modifier",function(t){return h.baseStats.charisma.modifier=t},function(t){return t.baseStats.charisma.modifier}),m("strength-tmp-stat",function(t){return h.baseStats.strength.tmp=t},function(t){return t.baseStats.strength.tmp}),m("agility-tmp-stat",function(t){return h.baseStats.agility.tmp=t},function(t){return t.baseStats.agility.tmp}),m("build-tmp-stat",function(t){return h.baseStats.build.tmp=t},function(t){return t.baseStats.build.tmp}),m("inteligence-tmp-stat",function(t){return h.baseStats.inteligence.tmp=t},function(t){return t.baseStats.inteligence.tmp}),m("wisdom-tmp-stat",function(t){return h.baseStats.wisdom.tmp=t},function(t){return t.baseStats.wisdom.tmp}),m("charisma-tmp-stat",function(t){return h.baseStats.charisma.tmp=t},function(t){return t.baseStats.charisma.tmp}),m("strength-tmp-modifier",function(t){return h.baseStats.strength.tmpModifier=t},function(t){return t.baseStats.strength.tmpModifier}),m("agility-tmp-modifier",function(t){return h.baseStats.agility.tmpModifier=t},function(t){return t.baseStats.agility.tmpModifier}),m("build-tmp-modifier",function(t){return h.baseStats.build.tmpModifier=t},function(t){return t.baseStats.build.tmpModifier}),m("inteligence-tmp-modifier",function(t){return h.baseStats.inteligence.tmpModifier=t},function(t){return t.baseStats.inteligence.tmpModifier}),m("wisdom-tmp-modifier",function(t){return h.baseStats.wisdom.tmpModifier=t},function(t){return t.baseStats.wisdom.tmpModifier}),m("charisma-tmp-modifier",function(t){return h.baseStats.charisma.tmpModifier=t},function(t){return t.baseStats.charisma.tmpModifier}),m("hp-total",function(t){return h.hp.total=t},function(t){return t.hp.total}),m("armor-class-total",function(t){return h.armorClass.total=t},function(t){return t.armorClass.total}),m("touch-attack-total",function(t){return h.attacks.touchTotal=t},function(t){return t.attacks.touchTotal}),m("suprise-attack-total",function(t){return h.attacks.supriseTotal=t},function(t){return t.attacks.supriseTotal}),m("hp-current",function(t){return h.hp.current=t},function(t){return t.hp.current}),m("armor-class-armor-bonus",function(t){return h.armorClass.armorBonus=t},function(t){return t.armorClass.armorBonus}),m("armor-class-shield-bonus",function(t){return h.armorClass.shieldBonus=t},function(t){return t.armorClass.shieldBonus}),m("armor-class-agility-modifier",function(t){return h.armorClass.agilityModifier=t},function(t){return t.armorClass.agilityModifier}),m("base-attack-bonus",function(t){return h.attacks.baseBonus=t},function(t){return t.attacks.baseBonus}),m("initiative-total",function(t){return h.initiative.total=t},function(t){return t.initiative.total}),m("initiative-agility-modifier",function(t){return h.initiative.agilityModifier=t},function(t){return t.initiative.agilityModifier}),m("initiative-other",function(t){return h.initiative.other=t},function(t){return t.initiative.other}),m("bruises",function(t){return h.hp.bruises=t},function(t){return t.hp.bruises}),m("armor-class-size-modifier",function(t){return h.armorClass.sizeModifier=t},function(t){return t.armorClass.sizeModifier}),m("armor-class-natural-armor",function(t){return h.armorClass.naturalArmor=t},function(t){return t.armorClass.naturalArmor}),m("armor-class-other",function(t){return h.armorClass.other=t},function(t){return t.armorClass.other}),m("speed",function(t){return h.speed=t},function(t){return t.speed}),m("damage-reduction",function(t){return h.armorClass.damageReduction=t},function(t){return t.armorClass.damageReduction}),m("miss-chance",function(t){return h.armorClass.missChance=t},function(t){return t.armorClass.missChance}),m("armor-penalty",function(t){return h.armorClass.armorPenalty=t},function(t){return t.armorClass.armorPenalty}),m("life-dices",function(t){return h.hp.lifeDices=t},function(t){return t.hp.lifeDices}),m("spells-limitation",function(t){return h.magic.spellsLimitation=t},function(t){return t.magic.spellsLimitation}),m("magic-resistance",function(t){return h.magic.resistance=t},function(t){return t.magic.resistance}),m("defensive-endurance-total",function(t){return h.defensiveThrows.endurance.total=t},function(t){return t.defensiveThrows.endurance.total}),m("defensive-endurance-base-defense",function(t){return h.defensiveThrows.endurance.baseDefense=t},function(t){return t.defensiveThrows.endurance.baseDefense}),m("defensive-endurance-magic-modifier",function(t){return h.defensiveThrows.endurance.magicModifier=t},function(t){return t.defensiveThrows.endurance.magicModifier}),m("defensive-endurance-trait-modifier",function(t){return h.defensiveThrows.endurance.traitModifier=t},function(t){return t.defensiveThrows.endurance.traitModifier}),m("defensive-endurance-other",function(t){return h.defensiveThrows.endurance.other=t},function(t){return t.defensiveThrows.endurance.other}),m("defensive-endurance-tmp-modifier",function(t){return h.defensiveThrows.endurance.tmpModifier=t},function(t){return t.defensiveThrows.endurance.tmpModifier}),m("defensive-reflex-total",function(t){return h.defensiveThrows.reflex.total=t},function(t){return t.defensiveThrows.reflex.total}),m("defensive-reflex-base-defense",function(t){return h.defensiveThrows.reflex.baseDefense=t},function(t){return t.defensiveThrows.reflex.baseDefense}),m("defensive-reflex-magic-modifier",function(t){return h.defensiveThrows.reflex.magicModifier=t},function(t){return t.defensiveThrows.reflex.magicModifier}),m("defensive-reflex-trait-modifier",function(t){return h.defensiveThrows.reflex.traitModifier=t},function(t){return t.defensiveThrows.reflex.traitModifier}),m("defensive-reflex-other",function(t){return h.defensiveThrows.reflex.other=t},function(t){return t.defensiveThrows.reflex.other}),m("defensive-reflex-tmp-modifier",function(t){return h.defensiveThrows.reflex.tmpModifier=t},function(t){return t.defensiveThrows.reflex.tmpModifier}),m("defensive-will-total",function(t){return h.defensiveThrows.will.total=t},function(t){return t.defensiveThrows.will.total}),m("defensive-will-base-defense",function(t){return h.defensiveThrows.will.baseDefense=t},function(t){return t.defensiveThrows.will.baseDefense}),m("defensive-will-magic-modifier",function(t){return h.defensiveThrows.will.magicModifier=t},function(t){return t.defensiveThrows.will.magicModifier}),m("defensive-will-trait-modifier",function(t){return h.defensiveThrows.will.traitModifier=t},function(t){return t.defensiveThrows.will.traitModifier}),m("defensive-will-other",function(t){return h.defensiveThrows.will.other=t},function(t){return t.defensiveThrows.will.other}),m("defensive-will-tmp-modifier",function(t){return h.defensiveThrows.will.tmpModifier=t},function(t){return t.defensiveThrows.will.tmpModifier}),m("defensive-special-modifier",function(t){return h.defensiveThrows.specialModifier=t},function(t){return t.defensiveThrows.specialModifier}),m("melee-attack-total",function(t){return h.attacks.melee.total=t},function(t){return t.attacks.melee.total}),m("melee-attack-base-bonus",function(t){return h.attacks.melee.baseBonus=t},function(t){return t.attacks.melee.baseBonus}),m("melee-attack-strength-modifier",function(t){return h.attacks.melee.strengthModifier=t},function(t){return t.attacks.melee.strengthModifier}),m("melee-attack-size-modifier",function(t){return h.attacks.melee.sizeModifier=t},function(t){return t.attacks.melee.sizeModifier}),m("melee-attack-other",function(t){return h.attacks.melee.other=t},function(t){return t.attacks.melee.other}),m("melee-attack-tmp-modifier",function(t){return h.attacks.melee.tmpModifier=t},function(t){return t.attacks.melee.tmpModifier}),m("distance-attack-total",function(t){return h.attacks.distance.total=t},function(t){return t.attacks.distance.total}),m("distance-attack-base-bonus",function(t){return h.attacks.distance.baseBonus=t},function(t){return t.attacks.distance.baseBonus}),m("distance-attack-agility-modifier",function(t){return h.attacks.distance.agilityModifier=t},function(t){return t.attacks.distance.agilityModifier}),m("distance-attack-size-modifier",function(t){return h.attacks.distance.sizeModifier=t},function(t){return t.attacks.distance.sizeModifier}),m("distance-attack-other",function(t){return h.attacks.distance.other=t},function(t){return t.attacks.distance.other}),m("distance-attack-tmp-modifier",function(t){return h.attacks.distance.tmpModifier=t},function(t){return t.attacks.distance.tmpModifier}),m("weapon1-name",function(t){return h.weapons.weapon1.name=t},function(t){return t.weapons.weapon1.name}),m("weapon1-total-attack-bonus",function(t){return h.weapons.weapon1.attackBonus=t},function(t){return t.weapons.weapon1.attackBonus}),m("weapon1-damage",function(t){return h.weapons.weapon1.damage=t},function(t){return t.weapons.weapon1.damage}),m("weapon1-crit",function(t){return h.weapons.weapon1.crit=t},function(t){return t.weapons.weapon1.crit}),m("weapon1-range",function(t){return h.weapons.weapon1.range=t},function(t){return t.weapons.weapon1.range}),m("weapon1-weight",function(t){return h.weapons.weapon1.weight=t},function(t){return t.weapons.weapon1.weight}),m("weapon1-kind",function(t){return h.weapons.weapon1.kind=t},function(t){return t.weapons.weapon1.kind}),m("weapon1-size",function(t){return h.weapons.weapon1.size=t},function(t){return t.weapons.weapon1.size}),m("weapon1-special",function(t){return h.weapons.weapon1.special=t},function(t){return t.weapons.weapon1.special}),m("weapon2-name",function(t){return h.weapons.weapon2.name=t},function(t){return t.weapons.weapon2.name}),m("weapon2-total-attack-bonus",function(t){return h.weapons.weapon2.attackBonus=t},function(t){return t.weapons.weapon2.attackBonus}),m("weapon2-damage",function(t){return h.weapons.weapon2.damage=t},function(t){return t.weapons.weapon2.damage}),m("weapon2-crit",function(t){return h.weapons.weapon2.crit=t},function(t){return t.weapons.weapon2.crit}),m("weapon2-range",function(t){return h.weapons.weapon2.range=t},function(t){return t.weapons.weapon2.range}),m("weapon2-weight",function(t){return h.weapons.weapon2.weight=t},function(t){return t.weapons.weapon2.weight}),m("weapon2-kind",function(t){return h.weapons.weapon2.kind=t},function(t){return t.weapons.weapon2.kind}),m("weapon2-size",function(t){return h.weapons.weapon2.size=t},function(t){return t.weapons.weapon2.size}),m("weapon2-special",function(t){return h.weapons.weapon2.special=t},function(t){return t.weapons.weapon2.special}),m("weapon3-name",function(t){return h.weapons.weapon3.name=t},function(t){return t.weapons.weapon3.name}),m("weapon3-total-attack-bonus",function(t){return h.weapons.weapon3.attackBonus=t},function(t){return t.weapons.weapon3.attackBonus}),m("weapon3-damage",function(t){return h.weapons.weapon3.damage=t},function(t){return t.weapons.weapon3.damage}),m("weapon3-crit",function(t){return h.weapons.weapon3.crit=t},function(t){return t.weapons.weapon3.crit}),m("weapon3-range",function(t){return h.weapons.weapon3.range=t},function(t){return t.weapons.weapon3.range}),m("weapon3-weight",function(t){return h.weapons.weapon3.weight=t},function(t){return t.weapons.weapon3.weight}),m("weapon3-kind",function(t){return h.weapons.weapon3.kind=t},function(t){return t.weapons.weapon3.kind}),m("weapon3-size",function(t){return h.weapons.weapon3.size=t},function(t){return t.weapons.weapon3.size}),m("weapon3-special",function(t){return h.weapons.weapon3.special=t},function(t){return t.weapons.weapon3.special}),m("armor-name",function(t){return h.armor.name=t},function(t){return t.armor.name}),m("armor-kind",function(t){return h.armor.kind=t},function(t){return t.armor.kind}),m("armor-bonus",function(t){return h.armor.bonus=t},function(t){return t.armor.bonus}),m("armor-max-agility-bonus",function(t){return h.armor.agilityBonus=t},function(t){return t.armor.agilityBonus}),m("armor-test-penalty",function(t){return h.armor.testPenalty=t},function(t){return t.armor.testPenalty}),m("armor-spell-failure",function(t){return h.armor.spellFailure=t},function(t){return t.armor.spellFailure}),m("armor-speed",function(t){return h.armor.speed=t},function(t){return t.armor.speed}),m("armor-weight",function(t){return h.armor.weight=t},function(t){return t.armor.weight}),m("armor-special",function(t){return h.armor.special=t},function(t){return t.armor.special}),m("shield-name",function(t){return h.shield.name=t},function(t){return t.shield.name}),m("shield-kind",function(t){return h.shield.kind=t},function(t){return t.shield.kind}),m("shield-protection-bonus",function(t){return h.shield.protectionBonus=t},function(t){return t.shield.protectionBonus}),m("shield-max-agility-bonus",function(t){return h.shield.agilityBonus=t},function(t){return t.shield.agilityBonus}),m("shield-test-penalty",function(t){return h.shield.testPenalty=t},function(t){return t.shield.testPenalty}),m("shield-spell-failure",function(t){return h.shield.spellFailure=t},function(t){return t.shield.spellFailure}),m("shield-speed",function(t){return h.shield.speed=t},function(t){return t.shield.speed}),m("shield-weight",function(t){return h.shield.weight=t},function(t){return t.shield.weight}),m("shield-special",function(t){return h.shield.special=t},function(t){return t.shield.special}),m("ammo1",function(t){return h.ammo.ammo1=t},function(t){return t.ammo.ammo1}),m("ammo2",function(t){return h.ammo.ammo2=t},function(t){return t.ammo.ammo2}),m("magic-ammo1",function(t){return h.ammo.magicAmmo1=t},function(t){return t.ammo.magicAmmo1}),m("magic-ammo2",function(t){return h.ammo.magicAmmo2=t},function(t){return t.ammo.magicAmmo2}),m("campaign",function(t){return h.campaign=t},function(t){return t.campaign}),m("experience",function(t){return h.experience=t},function(t){return t.experience}),m("platinum",function(t){return h.money.platinum=t},function(t){return t.money.platinum}),m("gold",function(t){return h.money.gold=t},function(t){return t.money.gold}),m("silver",function(t){return h.money.silver=t},function(t){return t.money.silver}),m("coppers",function(t){return h.money.coppers=t},function(t){return t.money.coppers});for(var t=function(t){m("jewelry-"+t.toString(),function(e){return h.money["jewelry-"+t.toString()]=e},function(e){return e.money["jewelry-"+t.toString()]})},e=1;e<7;e++)t(e);var n=function(t){m("other-jewelry-"+t.toString(),function(e){return h.money["other-jewelry-"+t.toString()]=e},function(e){return e.money["other-jewelry-"+t.toString()]})};for(e=1;e<10;e++)n(e);m("max-range",function(t){return h.abilities.maxRange=t},function(t){return t.abilities.maxRange}),m("spare-points",function(t){return h.abilities.sparePoints=t},function(t){return t.abilities.sparePoints}),v("alchemy",function(t){return t.abilities.alchemy}),v("bluff",function(t){return t.abilities.bluff}),v("quiet-moving",function(t){return t.abilities.quietMoving}),v("magic-theory",function(t){return t.abilities.magicTheory}),v("lyp-reading",function(t){return t.abilities.lypReading}),v("diplomacy",function(t){return t.abilities.diplomacy}),v("forgery",function(t){return t.abilities.forgery}),v("riding",function(t){return t.abilities.riding}),v("focus",function(t){return t.abilities.focus}),v("pickpocketing",function(t){return t.abilities.pickpocketing}),v("healing",function(t){return t.abilities.healing}),v("listening",function(t){return t.abilities.listening}),v("decyphering",function(t){return t.abilities.decyphering}),v("lockpicking",function(t){return t.abilities.lockpicking}),v("swimming",function(t){return t.abilities.swimming}),v("animal-treating",function(t){return t.abilities.animalTreating}),v("disinformation",function(t){return t.abilities.disinformation}),v("profession",function(t){return t.abilities.profession}),v("clothes-changing",function(t){return t.abilities.clothesChanging}),v("searching",function(t){return t.abilities.searching}),v("balancing",function(t){return t.abilities.balancing}),v("craft",function(t){return t.abilities.craft}),v("jumping",function(t){return t.abilities.jumping}),v("line-handling",function(t){return t.abilities.lineHandling}),v("magic-items-handling",function(t){return t.abilities.magicItemsHandling}),v("approximating",function(t){return t.abilities.approximating}),v("wild-secrets",function(t){return t.abilities.wildSecrets}),v("hiding",function(t){return t.abilities.hiding}),v("disabling",function(t){return t.abilities.disabling}),v("falling",function(t){return t.abilities.falling}),v("knowledge",function(t){return t.abilities.knowledge}),v("fortunetelling",function(t){return t.abilities.fortunetelling}),v("climbing",function(t){return t.abilities.climbing}),v("direction-intuition",function(t){return t.abilities.directionIntuition}),v("intention-intuition",function(t){return t.abilities.intentionIntuition}),v("performances",function(t){return t.abilities.performances}),v("escaping",function(t){return t.abilities.escaping}),v("threatening",function(t){return t.abilities.threatening}),v("noticing",function(t){return t.abilities.noticing}),v("information-gathering",function(t){return t.abilities.informationGathering}),v("animal-empathy",function(t){return t.abilities.animalEmpathy});var i=function(t){var e,n;n=function(e){return e.abilities["customAbility"+t.toString()]},m("custom-ability-"+(e=t).toString()+"-name",function(t){return n(h).name=t},function(t){return n(t).name}),m("custom-ability-"+e.toString()+"-ability-trait",function(t){return n(h).abilityTrait=t},function(t){return n(t).abilityTrait}),m("custom-ability-"+e.toString()+"-total-modifier",function(t){return n(h).totalModifier=t},function(t){return n(t).totalModifier}),m("custom-ability-"+e.toString()+"-stat-modifier",function(t){return n(h).statModifier=t},function(t){return n(t).statModifier}),m("custom-ability-"+e.toString()+"-range",function(t){return n(h).range=t},function(t){return n(t).range}),m("custom-ability-"+e.toString()+"-other",function(t){return n(h).other=t},function(t){return n(t).other})};for(e=1;e<14;e++)i(e);var r=function(t){m("equipment-"+t.toString(),function(e){return h.equipment["equipment-"+t.toString()]=e},function(e){return e.equipment["equipment-"+t.toString()]})};for(e=1;e<31;e++)r(e);var o=function(t){m("magic-equipment-"+t.toString(),function(e){return h.equipment["magic-equipment-"+t.toString()]=e},function(e){return e.equipment["magic-equipment-"+t.toString()]})};for(e=1;e<16;e++)o(e);var a=function(t){m("race-trump-"+t.toString(),function(e){return h.trumps["race-trump-"+t.toString()]=e},function(e){return e.trumps["race-trump-"+t.toString()]})};for(e=1;e<9;e++)a(e);var s=function(t){m("learned-trump-"+t.toString(),function(e){return h.trumps["learned-trump-"+t.toString()]=e},function(e){return e.trumps["learned-trump-"+t.toString()]})};for(e=1;e<9;e++)s(e);var u=function(t){m("class-trump-"+t.toString(),function(e){return h.trumps["class-trump-"+t.toString()]=e},function(e){return e.trumps["class-trump-"+t.toString()]})};for(e=1;e<18;e++)u(e);var c=function(t){m("language-"+t.toString(),function(e){return h.languages["language-"+t.toString()]=e},function(e){return e.languages["language-"+t.toString()]})};for(e=1;e<7;e++)c(e);m("defense-casting-spells-modifier",function(t){return h.magic.defenseCastingSpellsModifier=t},function(t){return t.magic.defenseCastingSpellsModifier});var l=function(t){m("defense-throw-"+t.toString(),function(e){return h.magic["defense-throw-"+t.toString()]=e},function(e){return e.magic["defense-throw-"+t.toString()]})};for(e=0;e<10;e++)l(e);var d=function(t){m("spells-daily-"+t.toString(),function(e){return h.magic["spells-daily-"+t.toString()]=e},function(e){return e.magic["spells-daily-"+t.toString()]})};for(e=0;e<10;e++)d(e);var f=function(t){m("premium-spells-"+t.toString(),function(e){return h.magic["premium-spells-"+t.toString()]=e},function(e){return e.magic["premium-spells-"+t.toString()]})};for(e=1;e<10;e++)f(e);var p=function(t){m("known-spells-number-"+t.toString(),function(e){return h.magic["known-spells-number-"+t.toString()]=e},function(e){return e.magic["known-spells-number-"+t.toString()]})};for(e=0;e<10;e++)p(e);var _=function(t){m("learned-spell-"+t.toString(),function(e){return h.magic["learned-spell-"+t.toString()]=e},function(e){return e.magic["learned-spell-"+t.toString()]})};for(e=1;e<21;e++)_(e);var g=function(t){m("remembered-spell-"+t.toString(),function(e){return h.magic["remembered-spell-"+t.toString()]=e},function(e){return e.magic["remembered-spell-"+t.toString()]})};for(e=1;e<21;e++)g(e)}function y(){var t=new l.MDCDialog(document.querySelector("#portrait-dialog")),e=new l.MDCDialog(document.querySelector("#sygil-dialog"));document.getElementById("portrait-upload-icon").addEventListener("click",function(){t.open()}),document.getElementById("sygil-upload-icon").addEventListener("click",function(){e.open()});var n=new o.MDCTextField(document.getElementById("portrait-url-textfield"));if(h.portraitUrl){n.value=h.portraitUrl;var i=document.getElementById("character-portrait"),r=document.getElementById("character-portrait-upload-wrapper");i.style.backgroundImage="url("+h.portraitUrl+")",r.style.display="none"}var a=new o.MDCTextField(document.getElementById("sygil-url-textfield"));if(h.sygilUrl){a.value=h.sygilUrl;var s=document.getElementById("character-logo"),u=document.getElementById("character-logo-upload-wrapper");s.style.backgroundImage="url("+h.sygilUrl+")",u.style.display="none"}t.listen("MDCDialog:closed",function(t){if("yes"===t.detail.action){h.portraitUrl=n.value;var e=document.getElementById("character-portrait"),i=document.getElementById("character-portrait-upload-wrapper");e.style.backgroundImage="url("+h.portraitUrl+")",i.style.display="none",localStorage.character=JSON.stringify(h)}else h.portraitUrl?n.value=h.portraitUrl:n.value=""}),e.listen("MDCDialog:closed",function(t){if("yes"===t.detail.action){h.sygilUrl=a.value;var e=document.getElementById("character-logo"),n=document.getElementById("character-logo-upload-wrapper");e.style.backgroundImage="url("+h.sygilUrl+")",n.style.display="none",localStorage.character=JSON.stringify(h)}else h.sygilUrl?a.value=h.sygilUrl:a.value=""}),document.getElementById("portrait-clear-icon").addEventListener("click",function(){h.portraitUrl="",n.value="";var t=document.getElementById("character-portrait"),e=document.getElementById("character-portrait-upload-wrapper");t.style.backgroundImage="",e.style.display="block",localStorage.character=JSON.stringify(h)}),document.getElementById("sygil-clear-icon").addEventListener("click",function(){h.sygilUrl="",a.value="";var t=document.getElementById("character-logo"),e=document.getElementById("character-logo-upload-wrapper");t.style.backgroundImage="",e.style.display="block",localStorage.character=JSON.stringify(h)})}localStorage.character&&(h=p(h,JSON.parse(localStorage.character))),document.getElementById("import-button").addEventListener("click",function(){return function(){var t=document.getElementById("selectFiles").files;if(t.length<=0)return!1;var e=new FileReader;e.onload=function(t){h=p(h,JSON.parse(t.target.result)),localStorage.character=JSON.stringify(h),console.log(h),g(),y()},e.readAsText(t.item(0))}()}),document.getElementById("export-button").addEventListener("click",function(){return function(t){var e=new Blob([JSON.stringify(h)],{type:"application/json"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),i=URL.createObjectURL(e);n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(function(){document.body.removeChild(n),window.URL.revokeObjectURL(i)},0)}}("character.json")}),g(),y()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(49);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(7);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(22);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})});var a=n(60);Object.keys(a).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})});var s=n(61);Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})});var u=n(62);Object.keys(u).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return u[t]}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextField=void 0;var i=y(n(0)),r=n(2),o=n(3),a=y(n(4)),s=n(50),u=n(53),c=n(15),l=n(58),d=n(18),f=n(20),p=n(6),_=n(7),h=n(22),m=n(23),v=n(8),g=n(25);function y(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,i,r,o,a){void 0===t&&(t=function(t,e){return new l.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new u.MDCLineRipple(t)}),void 0===n&&(n=function(t){return new m.MDCTextFieldHelperText(t)}),void 0===i&&(i=function(t){return new f.MDCTextFieldCharacterCounter(t)}),void 0===r&&(r=function(t){return new g.MDCTextFieldIcon(t)}),void 0===o&&(o=function(t){return new s.MDCFloatingLabel(t)}),void 0===a&&(a=function(t){return new c.MDCNotchedOutline(t)}),this.input_=this.root_.querySelector(_.strings.INPUT_SELECTOR);var d=this.root_.querySelector(_.strings.LABEL_SELECTOR);this.label_=d?o(d):null;var h=this.root_.querySelector(_.strings.LINE_RIPPLE_SELECTOR);this.lineRipple_=h?e(h):null;var y=this.root_.querySelector(_.strings.OUTLINE_SELECTOR);this.outline_=y?a(y):null;var b=v.MDCTextFieldHelperTextFoundation.strings,C=this.root_.nextElementSibling,E=C&&C.classList.contains(_.cssClasses.HELPER_LINE),A=E&&C&&C.querySelector(b.ROOT_SELECTOR);this.helperText_=A?n(A):null;var T=p.MDCTextFieldCharacterCounterFoundation.strings,O=this.root_.querySelector(T.ROOT_SELECTOR);!O&&E&&C&&(O=C.querySelector(T.ROOT_SELECTOR)),this.characterCounter_=O?i(O):null,this.leadingIcon_=null,this.trailingIcon_=null;var I=this.root_.querySelectorAll(_.strings.ICON_SELECTOR);I.length>0&&(I.length>1?(this.leadingIcon_=r(I[0]),this.trailingIcon_=r(I[1])):this.root_.classList.contains(_.cssClasses.WITH_LEADING_ICON)?this.leadingIcon_=r(I[0]):this.trailingIcon_=r(I[0])),this.ripple=this.createRipple_(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),t.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input_.required},set:function(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input_.pattern},set:function(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input_.minLength},set:function(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input_.maxLength},set:function(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input_.min},set:function(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input_.max},set:function(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input_.step},set:function(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation_.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation_.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation_.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.input_.focus()},e.prototype.layout=function(){var t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=i.__assign({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new h.MDCTextFieldFoundation(t,this.getFoundationMap_())},e.prototype.getRootAdapterMethods_=function(){var t=this;return{addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},registerTextFieldInteractionHandler:function(e,n){return t.listen(e,n)},deregisterTextFieldInteractionHandler:function(e,n){return t.unlisten(e,n)},registerValidationAttributeChangeHandler:function(e){var n=new MutationObserver(function(t){return e(function(t){return t.map(function(t){return t.attributeName}).filter(function(t){return t})}(t))});return n.observe(t.input_,{attributes:!0}),n},deregisterValidationAttributeChangeHandler:function(t){return t.disconnect()}}},e.prototype.getInputAdapterMethods_=function(){var t=this;return{getNativeInput:function(){return t.input_},isFocused:function(){return document.activeElement===t.input_},registerInputInteractionHandler:function(e,n){return t.input_.addEventListener(e,n,(0,o.applyPassive)())},deregisterInputInteractionHandler:function(e,n){return t.input_.removeEventListener(e,n,(0,o.applyPassive)())}}},e.prototype.getLabelAdapterMethods_=function(){var t=this;return{floatLabel:function(e){return t.label_&&t.label_.float(e)},getLabelWidth:function(){return t.label_?t.label_.getWidth():0},hasLabel:function(){return Boolean(t.label_)},shakeLabel:function(e){return t.label_&&t.label_.shake(e)}}},e.prototype.getLineRippleAdapterMethods_=function(){var t=this;return{activateLineRipple:function(){t.lineRipple_&&t.lineRipple_.activate()},deactivateLineRipple:function(){t.lineRipple_&&t.lineRipple_.deactivate()},setLineRippleTransformOrigin:function(e){t.lineRipple_&&t.lineRipple_.setRippleCenter(e)}}},e.prototype.getOutlineAdapterMethods_=function(){var t=this;return{closeOutline:function(){return t.outline_&&t.outline_.closeNotch()},hasOutline:function(){return Boolean(t.outline_)},notchOutline:function(e){return t.outline_&&t.outline_.notch(e)}}},e.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}},e.prototype.createRipple_=function(t){var e=this,n=this.root_.classList.contains(_.cssClasses.TEXTAREA),r=this.root_.classList.contains(_.cssClasses.OUTLINED);if(n||r)return null;var s=i.__assign({},l.MDCRipple.createAdapter(this),{isSurfaceActive:function(){return a.matches(e.input_,":active")},registerInteractionHandler:function(t,n){return e.input_.addEventListener(t,n,(0,o.applyPassive)())},deregisterInteractionHandler:function(t,n){return e.input_.removeEventListener(t,n,(0,o.applyPassive)())}});return t(this.root_,new d.MDCRippleFoundation(s))},e}(r.MDCComponent);e.MDCTextField=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFloatingLabel=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(51),o=n(13);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation_.shake(t)},e.prototype.float=function(t){this.foundation_.float(t)},e.prototype.getWidth=function(){return this.foundation_.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getWidth:function(){return t.root_.scrollWidth},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)}};return new o.MDCFloatingLabelFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2016 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCFloatingLabel=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(12);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLineRipple=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(54),o=n(55);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},registerEventHandler:function(e,n){return t.listen(e,n)},deregisterEventHandler:function(e,n){return t.unlisten(e,n)}};return new o.MDCLineRippleFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCLineRipple=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(14);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLineRippleFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(14),o=n(56);var a=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.transitionEndHandler_=function(t){return r.handleTransitionEnd(t)},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(o.cssClasses.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter_.addClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING))},e}(r.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCLineRippleFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(16);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var i=c(n(0)),r=n(2),o=n(3),a=n(4),s=n(18),u=c(n(19));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var i=new e(t);return void 0!==n.isUnbounded&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return u.supportsCssVariables(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,(0,o.applyPassive)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,a.matches)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,(0,o.applyPassive)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,(0,o.applyPassive)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new s.MDCRippleFoundation(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(r.MDCComponent);e.MDCRipple=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(6);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(21);Object.defineProperty(e,"characterCountCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"characterCountStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(23);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(8);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(24);Object.defineProperty(e,"helperTextCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"helperTextStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(25);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(26);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(27);Object.defineProperty(e,"iconCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"iconStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(15);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(5);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(17);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(30);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(29);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFormField=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),r=n(66),o=n(29);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=o.MDCFormFieldFoundation.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}};return new o.MDCFormFieldFoundation(e)},e}(r.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCFormField=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(28);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(68);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(35);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(34);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCheckbox=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(69),o=n(31),a=n(3),s=n(4),u=n(70),c=n(32),l=n(34);var d=["checked","indeterminate"],f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(t){this.nativeControl_.indeterminate=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation_.handleChange()},this.handleAnimationEnd_=function(){return t.foundation_.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen((0,r.getCorrectEventName)(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},e.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten((0,r.getCorrectEventName)(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},forceLayout:function(){return t.root_.offsetWidth},hasNativeControl:function(){return!!t.nativeControl_},isAttachedToDOM:function(){return Boolean(t.root_.parentNode)},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(e){return t.root_.classList.remove(e)},removeNativeControlAttr:function(e){return t.nativeControl_.removeAttribute(e)},setNativeControlAttr:function(e,n){return t.nativeControl_.setAttribute(e,n)},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}};return new l.MDCCheckboxFoundation(e)},e.prototype.createRipple_=function(){var t=this,e=i.__assign({},u.MDCRipple.createAdapter(this),{deregisterInteractionHandler:function(e,n){return t.nativeControl_.removeEventListener(e,n,(0,a.applyPassive)())},isSurfaceActive:function(){return(0,s.matches)(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,n){return t.nativeControl_.addEventListener(e,n,(0,a.applyPassive)())}});return new u.MDCRipple(this.root_,new c.MDCRippleFoundation(e))},e.prototype.installPropertyChangeHooks_=function(){var t=this,e=this.nativeControl_,n=Object.getPrototypeOf(e);d.forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);if(p(r)){var o=r.get,a={configurable:r.configurable,enumerable:r.enumerable,get:o,set:function(n){r.set.call(e,n),t.foundation_.handleChange()}};Object.defineProperty(e,i,a)}})},e.prototype.uninstallPropertyChangeHooks_=function(){var t=this.nativeControl_,e=Object.getPrototypeOf(t);d.forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);p(i)&&Object.defineProperty(t,n,i)})},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=l.MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),e}(o.MDCComponent);function p(t){return!!t&&"function"==typeof t.set}e.MDCCheckbox=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getCorrectPropertyName=function(t,e){if(o(t)&&e in i){var n=t.document.createElement("div"),r=i[e],a=r.standard,s=r.prefixed,u=a in n.style;return u?a:s}return e},e.getCorrectEventName=function(t,e){if(o(t)&&e in r){var n=t.document.createElement("div"),i=r[e],a=i.standard,s=i.prefixed,u=i.cssProperty,c=u in n.style;return c?a:s}return e};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},r={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function o(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var i=c(n(0)),r=n(31),o=n(3),a=n(4),s=n(32),u=c(n(33));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var i=new e(t);return void 0!==n.isUnbounded&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return u.supportsCssVariables(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,(0,o.applyPassive)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,a.matches)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,(0,o.applyPassive)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,(0,o.applyPassive)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new s.MDCRippleFoundation(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(r.MDCComponent);e.MDCRipple=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var i=n(73);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(38);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(37);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})});var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(10));e.util=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var i=c(n(0)),r=n(74),o=n(3),a=n(4),s=n(37),u=c(n(10));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var i=new e(t);return void 0!==n.isUnbounded&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return u.supportsCssVariables(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,(0,o.applyPassive)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,a.matches)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,(0,o.applyPassive)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,(0,o.applyPassive)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new s.MDCRippleFoundation(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(r.MDCComponent);e.MDCRipple=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(36);var o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var i=n(76);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var r=n(43);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var o=n(42);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})});var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(44));e.util=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDialog=void 0;var i=c(n(0)),r=n(39),o=n(40),a=n(77),s=n(42),u=c(n(44));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=s.MDCDialogFoundation.strings,d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var e,n,r=this.root_.querySelector(l.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+l.CONTAINER_SELECTOR+" container element");this.container_=r,this.content_=this.root_.querySelector(l.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(l.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector("["+l.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory_=t,this.buttonRipples_=[];try{for(var o=i.__values(this.buttons_),s=o.next();!s.done;s=o.next()){var u=s.value;this.buttonRipples_.push(new a.MDCRipple(u))}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap_=u.createFocusTrapInstance(this.container_,this.focusTrapFactory_,this.getInitialFocusEl_()||void 0),this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.handleKeydown_=this.foundation_.handleKeydown.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.handleLayout_=this.layout.bind(this);var e=["resize","orientationchange"];this.handleOpening_=function(){e.forEach(function(e){return window.addEventListener(e,t.handleLayout_)}),document.addEventListener("keydown",t.handleDocumentKeydown_)},this.handleClosing_=function(){e.forEach(function(e){return window.removeEventListener(e,t.handleLayout_)}),document.removeEventListener("keydown",t.handleDocumentKeydown_)},this.listen("click",this.handleClick_),this.listen("keydown",this.handleKeydown_),this.listen(l.OPENING_EVENT,this.handleOpening_),this.listen(l.CLOSING_EVENT,this.handleClosing_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(l.OPENING_EVENT,this.handleOpening_),this.unlisten(l.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach(function(t){return t.destroy()}),t.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(e){return t.root_.classList.add(e)},areButtonsStacked:function(){return u.areTopsMisaligned(t.buttons_)},clickDefaultButton:function(){return t.defaultButton_&&t.defaultButton_.click()},eventTargetMatches:function(t,e){return!!t&&(0,o.matches)(t,e)},getActionFromEvent:function(t){if(!t.target)return"";var e=(0,o.closest)(t.target,"["+l.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(l.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl_()},hasClass:function(e){return t.root_.classList.contains(e)},isContentScrollable:function(){return u.isScrollable(t.content_)},notifyClosed:function(e){return t.emit(l.CLOSED_EVENT,e?{action:e}:{})},notifyClosing:function(e){return t.emit(l.CLOSING_EVENT,e?{action:e}:{})},notifyOpened:function(){return t.emit(l.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(l.OPENING_EVENT,{})},releaseFocus:function(){return t.focusTrap_.deactivate()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(e){return t.root_.classList.remove(e)},reverseButtons:function(){t.buttons_.reverse(),t.buttons_.forEach(function(t){t.parentElement.appendChild(t)})},trapFocus:function(){return t.focusTrap_.activate()}};return new s.MDCDialogFoundation(e)},e.prototype.getInitialFocusEl_=function(){return document.querySelector("["+l.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(r.MDCComponent);e.MDCDialog=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var i=c(n(0)),r=n(39),o=n(78),a=n(40),s=n(79),u=c(n(41));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var i=new e(t);return void 0!==n.isUnbounded&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return u.supportsCssVariables(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,(0,o.applyPassive)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,a.matches)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,(0,o.applyPassive)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,(0,o.applyPassive)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new s.MDCRippleFoundation(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(r.MDCComponent);e.MDCRipple=l},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i;Object.defineProperty(e,"__esModule",{value:!0}),e.applyPassive=function(t,e){void 0===t&&(t=window);void 0===e&&(e=!1);if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),r=n(11),o=n(80),a=n(41);var s=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],c=[],l=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(s.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;s.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&c.length>0&&c.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){c=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c=f.x+"px, "+f.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?(0,a.getNormalizedEventCoords)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},o.numbers.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(r.MDCFoundation);e.MDCRippleFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";var i,r,o=n(82),a=n(83),s=(r=[],{activateTrap:function(t){if(r.length>0){var e=r[r.length-1];e!==t&&e.pause()}var n=r.indexOf(t);-1===n?r.push(t):(r.splice(n,1),r.push(t))},deactivateTrap:function(t){var e=r.indexOf(t);-1!==e&&r.splice(e,1),r.length>0&&r[r.length-1].unpause()}});function u(t){return setTimeout(t,0)}t.exports=function(t,e){var n=document,r="string"==typeof t?n.querySelector(t):t,c=a({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),l={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d={activate:function(t){if(!l.active){C(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=n.activeElement;var e=t&&t.onActivate?t.onActivate:c.onActivate;return e&&e(),p(),d}},deactivate:f,pause:function(){!l.paused&&l.active&&(l.paused=!0,_())},unpause:function(){l.paused&&l.active&&(l.paused=!1,C(),p())}};return d;function f(t){if(l.active){clearTimeout(i),_(),l.active=!1,l.paused=!1,s.deactivateTrap(d);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:c.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:c.returnFocusOnDeactivate)&&u(function(){E(l.nodeFocusedBeforeActivation)}),d}}function p(){if(l.active)return s.activateTrap(d),i=u(function(){E(m())}),n.addEventListener("focusin",g,!0),n.addEventListener("mousedown",v,{capture:!0,passive:!1}),n.addEventListener("touchstart",v,{capture:!0,passive:!1}),n.addEventListener("click",b,{capture:!0,passive:!1}),n.addEventListener("keydown",y,{capture:!0,passive:!1}),d}function _(){if(l.active)return n.removeEventListener("focusin",g,!0),n.removeEventListener("mousedown",v,!0),n.removeEventListener("touchstart",v,!0),n.removeEventListener("click",b,!0),n.removeEventListener("keydown",y,!0),d}function h(t){var e=c[t],i=e;if(!e)return null;if("string"==typeof e&&!(i=n.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(i=e()))throw new Error("`"+t+"` did not return a node");return i}function m(){var t;if(!(t=null!==h("initialFocus")?h("initialFocus"):r.contains(n.activeElement)?n.activeElement:l.firstTabbableNode||h("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function v(t){r.contains(t.target)||(c.clickOutsideDeactivates?f({returnFocus:!o.isFocusable(t.target)}):c.allowOutsideClick&&c.allowOutsideClick(t)||t.preventDefault())}function g(t){r.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),E(l.mostRecentlyFocusedNode||m()))}function y(t){if(!1!==c.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void f();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(C(),t.shiftKey&&t.target===l.firstTabbableNode)return t.preventDefault(),void E(l.lastTabbableNode);t.shiftKey||t.target!==l.lastTabbableNode||(t.preventDefault(),E(l.firstTabbableNode))}(t)}function b(t){c.clickOutsideDeactivates||r.contains(t.target)||c.allowOutsideClick&&c.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function C(){var t=o(r);l.firstTabbableNode=t[0]||m(),l.lastTabbableNode=t[t.length-1]||m()}function E(t){t!==n.activeElement&&(t&&t.focus?(t.focus(),l.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):E(m()))}}},function(t,e,n){"use strict";var i=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=i.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(t,e){e=e||{};var n,i,a,u=[],c=[],f=t.querySelectorAll(r);for(e.includeContainer&&o.call(t,r)&&(f=Array.prototype.slice.apply(f)).unshift(t),n=0;n<f.length;n++)s(i=f[n])&&(0===(a=l(i))?u.push(i):c.push({documentOrder:n,tabIndex:a,node:i}));return c.sort(d).map(function(t){return t.node}).concat(u)}function s(t){return!(!u(t)||function(t){return function(t){return f(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||l(t)<0)}function u(t){return!(t.disabled||function(t){return f(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}a.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==o.call(t,r)&&s(t)},a.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==o.call(t,c)&&u(t)};var c=i.concat("iframe").join(",");function l(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function d(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function f(t){return"INPUT"===t.tagName}t.exports=a},function(t,e,n){"use strict";t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)i.call(n,r)&&(t[r]=n[r])}return t};var i=Object.prototype.hasOwnProperty}]);