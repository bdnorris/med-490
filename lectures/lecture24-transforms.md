# Transforms

A newer CSS feature, transforms give you a lot of power to create more advanced effects in the browser. They are also the cornerstone of web animation (animating transforms uses much lower computer resources than animating position, size, etc.)

Transforms are also nice because they do not affect neighboring elements, so you can scale and move and rotate without worrying about how it will affect your page layout. 

[Lecture CodePen](https://codepen.io/bdnorris/pen/xezeXd)

## The syntax

We can use the `transform` property for all transforms. Like other properties, they will overwrite if re-declared, so we'll look at how to do multiple transformations in a bit. For now, the basic syntax is...

```css
.my-element {
  transform: transformtype(relevantvalue);
}
```

That's just a sample, we'll replace `transformtype` with one of our transforms below, just notice that transforms work as "functions", with parenthesis `()` that you pass some value into.

## Rotations

We can rotate our element using the `rotate` transform and the degree unit. Positive values go clockwise, -negative values go counter-clockwise.

```css
.my-element {
  transform: rotate(10deg);
}
.my-element {
  transform: rotate(-10deg);
}
```
<!-- 
transform: rotateY(50deg);
transform: rotateX(50deg); -->

## Skewing

Skewing is kind of like _slanting_. Perhaps you've used the skew tool in Illustrator. 

You can skew in two directions, x (horizontal) and y (vertical). This transform takes degree units as well. You're essentially telling the corners of the element's box to increase or decrease their angles. 

```css
.my-element {
  transform: skew(10deg, 20deg);
}
```

You can also skew in only one direction...

```css
.my-element {
  transform: skewX(10deg);
  transform: skewY(20deg);
}
```

## Scaling

Sometimes you might want to shrink or grow your element, especially as part of an animation.

Scale can take a relative value, similar to `line-height`. 1 = normal, 2 = twice the normal size, 0.5 = 1/2 size, 0 = scaled to nothing.

You can provide one value for overall scale, or two values for x, then y.

```css
.my-element {
  transform: scale(0.5);
  transform: scale(0.5, 1.5);
}
```

And again, you can scale in only one direction if you wish...

```css
.my-element {
  transform: scaleX(0.5);
  transform: scaleY(1.5);
}
```

## Translate

"Translate" pretty much just means "move". We can pass it x and y values like skew, but what happens is the item moves. Similar to `position: relative`, but easier to animate. 

```css
.my-element {
  transform: translate(10px, 1em);
}
```

And again, you can move in only one direction if you wish...

```css
.my-element {
  transform: translateX(10px);
  transform: translateY(1em);
}
```

## Combining Transforms

To combine transforms, we just need to separate them with spaces.

```css
.my-element {
  transform: rotate(5deg) scale(0.9);
}
```

## Origin

`transform-origin` lets you define at what point of the element the transformation starts from. Normally, it would be `center center`, but you can change that.

```css
.my-element {
  transform: rotate(5deg);
  transform-origin: left top;
}
```

This will rotate your element around the top left corner. You can also use pixel units to the transform-origin (across then down) as well as percentages (useful for when you may not be sure of the size of the element). 

```css
.my-element {
  transform: rotate(5deg);
  transform-origin: 25% 25%;
}
```

## 3-D 

There's also a whole 3-dimensional aspect to transforms. 

```css
.my-element {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: perspective(50px);
  perspective-origin: center;
  transform: translateZ(100px);
  transform: matrix3d(
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    -50,-100,0,1.1
  );
  transform: translate3d(42px, -62px, -135px);
  transform: scaleZ(1.4);
  transform: scale3d(0.5, 1, 1.7);
  transform: rotate3d(1, 1, 1, 45deg);
}
```

I'm not an expert in using these, nor do they come up often so this will be something you can explore on your own if you're interested.

There are also some helpful generators out there like...

[westciv.com](http://westciv.com/tools/3Dtransforms/index.html)


## Using with transitions

Combining transforms with transitions allows for a wide range of animations. 

```css
.my-element {
  transform: scale(1); /* Default */
  transition: transform 200ms ease;
}
.my-element:hover {
  transform: scale(1.5);
}
```

We want to set a base transform on the element, this increases performance slightly, getting the element ready to transform. 

Animating transforms is typically highly performant because the browser doesn't have to recompute the positions of neighboring items. But, since transforms only use one property, you have to animate _all_ transformations. You can't separate "scale" from "rotate" and only animate one, for example. 

**Keyframe** animations give us more options, which we'll look at in a later lecture.


## Resources

[CSS Tricks Almanac](https://css-tricks.com/almanac/properties/t/transform/)

[CSS Reference on Transform](https://cssreference.io/property/transform/)

