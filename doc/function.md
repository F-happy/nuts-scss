# 函数说明

* ```pxToRem()``` 将px转换成rem

```scss
pxToRem(像素)		// 会被编译为对应的 rem

pxToRem(32) => 1rem
```

* ```tint()``` 为颜色添加白色，以百分比形式

```scss
tint($color, $percent)

color: tint(#f96f13, .3); => color: #f96f14;
```

* ```shade()``` 为颜色添加黑色，以百分比形式

```scss
shade($color, $percent)

color: shade(#f96f13, .3); => color: #f86f13;
```

[返回](./doc.md)