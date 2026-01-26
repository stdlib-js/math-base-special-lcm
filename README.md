<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# lcm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [least common multiple][lcm] (lcm).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [least common multiple][lcm] (lcm) of two non-zero integers `a` and `b` is the smallest positive integer that is divisible by both `a` and `b`. The lcm is also known as the **lowest common multiple** or **smallest common multiple** and finds common use in calculating the **lowest common denominator** (lcd).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-lcm
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var lcm = require( '@stdlib/math-base-special-lcm' );
```

#### lcm( a, b )

Computes the [least common multiple][lcm] (lcm).

```javascript
var v = lcm( 48, 18 );
// returns 144
```

If either `a` or `b` is `0`, the function returns `0`.

```javascript
var v = lcm( 0, 0 );
// returns 0

v = lcm( 2, 0 );
// returns 0

v = lcm( 0, 3 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = lcm( 3.14, 18 );
// returns NaN

v = lcm( 48, 3.14 );
// returns NaN

v = lcm( NaN, 18 );
// returns NaN

v = lcm( 48, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var lcm = require( '@stdlib/math-base-special-lcm' );

var opts = {
    'dtype': 'float64'
};
var a = discreteUniform( 100, 0, 50, opts );
var b = discreteUniform( 100, 0, 50, opts );

logEachMap( 'lcm(%0.4f,%0.4f) = %0.4f', a, b, lcm );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/lcm.h"
```

#### stdlib_base_lcm( a, b )

Computes the [least common multiple][lcm] (lcm).

```c
double v = stdlib_base_lcm( 48.0, 18.0 );
// returns 144.0
```

The function accepts the following arguments:

-   **a**: `[in] double` input value.
-   **b**: `[in] double` input value.

```c
double stdlib_base_lcm( const double a, const double b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/lcm.h"
#include <stdio.h>

int main( void ) {
    const double a[] = { 24.0, 32.0, 48.0, 116.0, 33.0 };
    const double b[] = { 12.0, 6.0, 15.0, 52.0, 22.0 };

    double out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_lcm( a[ i ], b[ i ] );
        printf( "lcm(%lf, %lf) = %lf\n", a[ i ], b[ i ], out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/gcd`][@stdlib/math/base/special/gcd]</span><span class="delimiter">: </span><span class="description">compute the greatest common divisor (gcd).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-lcm.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-lcm

[test-image]: https://github.com/stdlib-js/math-base-special-lcm/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-lcm/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-lcm/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-lcm?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-lcm.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-lcm/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-lcm/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-lcm/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-lcm/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-lcm/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-lcm/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-lcm/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-lcm/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-lcm/main/LICENSE

[lcm]: https://en.wikipedia.org/wiki/Least_common_multiple

<!-- <related-links> -->

[@stdlib/math/base/special/gcd]: https://github.com/stdlib-js/math-base-special-gcd

<!-- </related-links> -->

</section>

<!-- /.links -->
