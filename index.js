// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}var f=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,o=2147483647;return function(e,u){var i;return 0===e||0===u?0:(e<0&&(e=-e),u<0&&(u=-u),i=function(e,u){return r(e)||r(u)||e===f||u===f||e===t||u===t?NaN:n(e)&&n(u)?(e<0&&(e=-e),u<0&&(u=-u),e<=o&&u<=o?function(r,e){var n,f=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,f+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<f}(e,u):function(r,e){var n,f=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,f*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return f*r}(e,u)):NaN}(e,u),r(i)?i:e/i*u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).lcm=e();
//# sourceMappingURL=index.js.map
