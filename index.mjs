// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gcd@esm/index.mjs";var e=s,r=t;var a=function(s,t){var a;return 0===s||0===t?0:(s<0&&(s=-s),t<0&&(t=-t),a=r(s,t),e(a)?a:s/a*t)};export{a as default};
//# sourceMappingURL=index.mjs.map
