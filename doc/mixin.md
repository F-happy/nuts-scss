# mixin 说明

* ```backgroundImg($value)``` 背景图片处理

```scss
@include backgroundImg($image);
编译为：
background: url($image) no-repeat;
background-size: 100% auto;
```

* ```ellipsis($width)``` 出多少宽度则显示省略号

```scss
@include ellipsis(200px);
编译为：
width: 200px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

* ```box($align, $pack)``` 盒子布局函数, 默认上下左右居中显示

```scss
@include box();
编译为：
display: -webkit-box;
-webkit-box-align: center;
-webkit-box-pack: center;

@include box(start, center);
编译为：
display: -webkit-box;
-webkit-box-align: start;
-webkit-box-pack: center;
```

* ```prefixer($property, $value, $prefixes)``` 用于在属性上加前缀,可通过 setting 设置前缀列表 $prefixes

```scss
$prefix-list: webkit;
@include prefixer(border-radius, 30px);
编译为：
-webkit-border-radius: 30px;
border-radius: 30px;
```

* ```border-box($value)``` 将元素变为圆形

```scss
@include border-box(100px);
编译为：
width: 100px;
height: 100px;
-webkit-border-radius: 50%;
border-radius: 50%;
```

* ```clearfix()``` 清除浮动

```scss
.test {
	@include clearfix();
}
编译为：
.test:before, .test:after {
  content: "";
  display: table; 
}
.test:after {
  clear: both; 
}
```

* ```box-emboss($opacity, $opacity2)``` 内阴影和外阴影

```scss
@include box-emboss(#fff, #000);
编译为：
box-shadow: white(#fff) 0 1px 0, inset black(#000) 0 1px 0;
```

* ```opacity($opacity)``` 透明度

```scss
@include opacity(1);
编译为：
opacity: 1;
filter: alpha(opacity=100);
```

[返回](./doc.md)