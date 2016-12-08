# 动画模块说明

* ```animation($value)``` 动画模块

```scss
$prefix-list: webkit;
@include animation(down .3s ease-out 0s 1);
编译为：
// 消除 transition 闪屏
-webkit-transform-style: preserve-3d;
// 设置内嵌的元素在 3D 空间如何呈现：
// 保留 3D（设置进行转换的元素的背面在面对用户时是否可见：隐藏）
-webkit-backface-visibility: hidden;
-webkit-animation: down 0.3s ease-out 0s 1;
animation: down 0.3s ease-out 0s 1;
```

* ```transform($value)``` transform模块

```scss
$prefix-list: webkit;
@include transform(translate3d(0, 0, 0));
编译为：
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```

* ```keyframes($value)``` keyframes模块

```scss
$prefix-list: webkit;
@include keyframes(down) {
    0% {
        @include transform(translate3d(0, -100%, 0));
    }
    100% {
        @include transform(translate3d(0, 0, 0));
    }
}
编译为：
@-webkit-keyframes down {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0); 
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); 
  } 
}

@keyframes down {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0); 
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); 
  } 
}
```

[返回](./doc.md)