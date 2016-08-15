# nuts-scss
[![npm](https://img.shields.io/npm/v/nuts-scss.svg?style=flat)](https://www.npmjs.com/package/nuts-scss)
[![npm](https://img.shields.io/npm/l/nuts-scss.svg?style=flat)](https://www.npmjs.com/package/nuts-scss)
> 我的 scss 样式库

### 安装：
```
npm install --save-dev nuts-scss
```
接下来你就可以在 node-sass 中配置 scss 库了。

例子：

```javascript
var gulp = require('gulp'),
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
