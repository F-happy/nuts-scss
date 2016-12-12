# mixin 说明

## 常用基础

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

## 生成三角形

* ```triangle($direction, $size, $borderColor)``` 生成三角形

```scss
@include triangle(top, 20px, #fff);
编译为：
content: "";
height: 0;
width: 0;
overflow: hidden;
border-bottom: 20px solid #fff;
border-left: 20px dashed transparent;
border-right: 20px dashed transparent;
```


## 渐变

* ```gradient-horizontal($gradient...)``` 水平渐变，从左往右

```scss
@include gradient-horizontal(#333, #ccc);
编译为：
background-image: -webkit-linear-gradient(left, #333, #ccc);
background-image: -o-linear-gradient(left, #333, #ccc);
background-image: linear-gradient(to right, #333, #ccc);
```

* ```gradient-horizontal-repeating($gradient...)``` 水平渐变，从左往右，平铺

```scss
@include gradient-horizontal-repeating(#333 5%, #ccc 10%);
编译为：
background-image: -webkit-repeating-linear-gradient(left, #333 5%, #ccc 10%);
background-image: -moz-repeating-linear-gradient(left, #333 5%, #ccc 10%);
background-image: repeating-linear-gradient(to right, #333 5%, #ccc 10%);
```

* ```gradient-vertical($gradient...)``` 垂直渐变，从上往下

```scss
@include gradient-vertical(#333 30%, #ccc);
编译为：
background-image: -webkit-linear-gradient(top, #333 30%, #ccc);
background-image: -moz-linear-gradient(top, #333 30%, #ccc);
background-image: linear-gradient(to bottom, #333 30%, #ccc);
```

* ```gradient-vertical-repeating($gradient...)``` 垂直渐变，从上往下，平铺

```scss
@include gradient-vertical-repeating(#333 30%, #ccc 50%);
编译为：
background-image: -webkit-repeating-linear-gradient(top, #333 30%, #ccc 50%);
background-image: -moz-repeating-linear-gradient(top, #333 30%, #ccc 50%);
background-image: repeating-linear-gradient(to bottom, #333 30%, #ccc 50%);
```

* ```gradient-angle($gradient...)``` 角度渐变

```scss
@include gradient-angle(45deg, #333 30%, #ccc);
编译为：
background-image: -webkit-linear-gradient(45deg, #333 30%, #ccc);
background-image: -moz-linear-gradient(45deg, #333 30%, #ccc);
background-image: linear-gradient(45deg, #333 30%, #ccc);

@include gradient-angle(45deg, #333 30%, #ccc 50%);
编译为：
background-image: -webkit-linear-gradient(45deg, #333 30%, #ccc 50%);
background-image: -moz-linear-gradient(45deg, #333 30%, #ccc 50%);
background-image: linear-gradient(45deg, #333 30%, #ccc 50%);
```

* ```gradient-radial($gradient...)``` 径向渐变

```scss
@include gradient-radial(#00f,#fff);
编译为：
background-image: -webkit-radial-gradient(#00F, #fff) no-repeat;
background-image: -moz-radial-gradient(#00F, #fff) no-repeat;
background-image: radial-gradient(#00F, #fff) no-repeat;
```


[返回](./doc.md)