# nuts-scss
[![Build Status](https://travis-ci.org/F-happy/nuts-scss.svg?branch=master)](https://travis-ci.org/F-happy/nuts-scss)
[![npm](https://img.shields.io/npm/v/nuts-scss.svg?style=flat-square)](https://www.npmjs.com/package/nuts-scss)
[![npm](https://img.shields.io/npm/l/nuts-scss.svg?style=flat-square)](https://www.npmjs.com/package/nuts-scss)
[![npm](https://img.shields.io/npm/dt/nuts-scss.svg?style=flat-square)](https://www.npmjs.com/package/nuts-scss)
> node-sass 下的一个 scss 基础样式库

## 特点：
* nuts-scss 严格控制样式冗余。使用开关变量来做到按需加载，按需开启，避免样式冗余。
* nuts-scss 有两种调用方式，一种是只调用功能，不产生任何多余的css代码；另一种是包含了些重置样式。


### 安装：
```bash
$ npm install --save nuts-scss
```
接下来你就可以在 node-sass 中配置 scss 库了。

例子：

```javascript
const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('test', ()=> {
    gulp.src('./test/*.scss')
        .pipe(sass({
            includePaths: require('nuts-scss').includePaths,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./test/'));
});
```

## 使用：

```scss
@import "nuts-scss"

.test {
    @include box();
}
```

## 组件：
在 V1.4.0 之后我加入了组件功能，除了原始的基础样式之外还提供了一些常用的样式组件，但是这些组件并不是所有情况下都需要使用，因此并没有包含在基础库中。所以如果需要使用，需要如下引用：

```scss
@import "nuts-scss"
@import "nuts-components/animate";

.animate {
    @include animate-flipOutY();
}
```
更多组件的文档请查看下面的文档说明。


## [文档 API](./doc/doc.md)

## [更新日志](./CHANGELOG.md)
