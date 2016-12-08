# reset 说明

nuts-scss 是移动优先设计的，所以在默认情况下会通过 ```@media``` 属性来设置页面的基础字体大小，从而可以使用 ```rem``` 单位来进行移动端的自适应。

```css
@media screen and (min-width: 640px) and (max-width: 1023px) {
    html {
        font-size: 32px
    }
}
@media screen and (min-width: 424px) and (max-width: 639px) {
    html {
        font-size: 21.2px
    }
}
@media screen and (min-width: 414px) and (max-width: 423px) {
    html {
        font-size: 20.7px
    }
}
@media screen and (min-width: 384px) and (max-width: 413px) {
    html {
        font-size: 19.2px
    }
}
@media screen and (min-width: 375px) and (max-width: 383px) {
    html {
        font-size: 18.75px
    }
}
@media screen and (min-width: 360px) and (max-width: 374px) {
    html {
        font-size: 18px
    }
}
@media screen and (min-width: 320px) and (max-width: 359px) {
    html {
        font-size: 16px
    }
}
```
同时会重置一部分基础的 HTML5 标签，生成的 CSS 如下：
> iOS 4.0+ 使用英文字体 Helvetica Neue，之前的iOS版本降级使用 Helvetica。
> 中文字体设置为华文黑体STHeiTi。需补充说明，华文黑体并不存在[iOS的字体库](http://support.apple.com/kb/HT5484?viewlocale=en_US)中，
> 但系统会自动将华文黑体STHeiTi兼容命中系统默认中文字体黑体-简或黑体-繁：
> 原生Android下中文字体与英文字体都选择默认的无衬线字体。
> 4.0之前版本英文字体原生Android使用的是Droid Sans，中文字体原生Android会命中Droid Sans Fallback。4.0+ 中英文字体都会使用原生Android新的Roboto字体。
> 其他第三方Android系统也一致选择默认的无衬线字体。

```css
html {
    -webkit-text-size-adjust: none;
    -webkit-appearance: none
}
html, body, div, p, header {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline
}
html {
    line-height: 1;
    font-family: Helvetica, sans-serif
}
```

[返回](./doc.md)
