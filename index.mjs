// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gcd@esm/index.mjs";function e(e,i){var n;return 0===e||0===i?0:(e<0&&(e=-e),i<0&&(i=-i),n=t(e,i),s(n)?n:e/n*i)}export{e as default};
//# sourceMappingURL=index.mjs.map
