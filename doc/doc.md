# 文档

## 如何使用？

在通过 npm 安装之后便可成为一个模块来通过 ```require``` 的方式加载近你的构建工具中。
然后通过 ```includePaths``` 方法获取全部的路径。

# API 目录

[reset 说明](./reset.md)

[设置说明](./setting.md)

[补丁模块说明](./prefix.md)

[函数说明](./function.md)

[mixin说明](./mixin.md)

[动画模块说明](./animate.md)

# 组件

## animate
将[animate.css](https://github.com/daneden/animate.css)动画库转成scss版本。api 保持和 animate 一致，具体使用可参看官方 [demo](https://daneden.github.io/animate.css)

### 使用

```scss
@import "nuts-scss";
@import "nuts-components/animate";

.animate {
    @include animate-flipOutY();
}
```

## flex 布局
> [Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)（ Flexible Box 或CSS3 弹性布局），是CSS3中的一种新的布局模式，可以自动调整子元素的高和宽，来很好的填充任何不同屏幕大小的显示设备中的可用显示空间，收缩内容防止内容溢出，确保元素拥有恰当的行为的布局方式。使用Flexbox来布局更容易，可以使用更少的代码，更简单的方式实现更复杂的布局，例如对齐方式，排列方
向，排列顺序（这也是Flexbox布局的核心能力所在），弹性盒中的子元素通过在各个方向放置就可以以弹性的尺寸适应父元素的显示区域。由
于子元素的显示顺序和它们在代码中 的顺序是独立的，通过使用弹性盒，定位子元素变得更加简单，复杂的布局也能够使用更清晰的代码更简单
的实现。

### 使用

```scss
@import "nuts-scss";
@import "nuts-components/flex";

.flex {
    @include display-flex();
    @include flex-direction();
    @include flex-wrap();
    @include flex-flow();
    @include order();
    @include justify-content();
    @include align-items();
    @include align-content();
    @include align-self();
}
```
