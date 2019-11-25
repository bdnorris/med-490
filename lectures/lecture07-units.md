# CSS Units

## Absolute Units

### Pixels

What should ultimately be the simplest unit, is actually a bit complicated. The good news is, we mostly just have to worry about what are called "Reference Pixels" or "CSS Pixels". I'll quote from a Smashing magazine article to explain these a bit.

[Towards a Retina Web](https://www.smashingmagazine.com/2012/08/towards-retina-web/)

#### Device Pixels (real screens)

> A **device pixel** (or physical pixel) is the tiniest physical unit _in a display_. Each and every pixel sets its own color and brightness as instructed by the operating system, while the imperceptible distance between these tiny dots takes care of tricking the eye into perceiving the full image.

> **Screen density** refers to the number of device pixels on a physical surface. It is often measured in pixels per inch (PPI). Apple has coined the marketing term “Retina” for its double-density displays, claiming that the human eye can no longer distinguish individual pixels on the screen from a “natural” viewing distance.

#### CSS/Reference/Device-Independent Pixels (sizing in the browser)

> A **CSS pixel** is an _abstract unit used by browsers_ to precisely and consistently draw content on Web pages. Generically, CSS pixels are referred to as device-independent pixels (DIPs). On standard-density displays, 1 CSS pixel corresponds to 1 device pixel.

```html
<img height="200" width="300" src="my-image.jpg" />
```

> This would use 200 × 300 device pixels to be drawn on screen. On a Retina display, the same image would use 400 × 600 device pixels in order to keep the same physical size, resulting in four times more pixels...

#### Bitmap Pixels (image)

> A **bitmap pixel** is the smallest unit of data in a raster image (PNG, JPG, GIF, etc). Each pixel contains information on how it is to be displayed, including its position in the image’s coordinate system and its color. Some image formats can store additional per-pixel data, such as opacity (which is the alpha channel).

> Beside its raster resolution, an image on the Web has an _abstract size, defined in CSS pixels_. The browser squeezes or stretches the image based on its CSS height or width during the rendering process.

> When a raster image is displayed at full size on a standard-density display, 1 bitmap pixel corresponds to 1 device pixel, resulting in a full-fidelity representation. Because a bitmap pixel can’t be further divided, it gets multiplied by four on Retina displays to preserve the same physical size of the image, losing detail along the way.

#### Sorry about that

...but the above will become very important when we start talking about retina graphics later. For now, we can define pixels in CSS easily by using the 'px' suffix.

```css
.my-div {
    width: 200px;
}
```

## Relative Units

Relative units are in relation to something else. This means these units can automatically scale when that relationship changes. 

<!-- What is a relative unit?
A relative unit gets sizing from something else. In the specification the relative length units are defined as em, ex, ch and rem. These are font-relative lengths. The specification also defines a % value, which is always relative to another value. Using relative values means that things can scale up and down according to some other value. -->

### Percentages

Setting percentages on an element makes its size relative to their parent. For instance, if you had a `<div>` set to 100%...

```css
.my-div {
    width: 100%;
}
```

It will fill the width of whatever its parent is, if the parent is `<body>`, it will span the entire window. If you placed another div inside this div and set it to 50%...

```css
.my-div .inside-div {
    width: 50%;
}
```

This div will always be half of the parent. 

If you changed the parent to be 80%, the 50% would compute to 40% of the window. If you changed the parent to be 400px, that 50% would now only ever mean 200px.

<!-- A container directly inside the viewport with a width of 90% will always be 90% of the available width - whether I am on a phone or high resolution display.

If I have another container inside that first container with a width of 50%, it takes 50% of the width of the parent element and not the viewport. -->

### em Units

Em is the font relative unit, this is similar to Em spaces and Em dashes that you are already familiar with. This unit is relative to itself, then its parent.  

<!-- > An em unit is a size relative to the current font size of that tag. By default, the font size would 16px, so we could use em units instead of px if we’re unsure what pixel size to use but want to make it relative sized:-->

Given the following CSS...

```css
header {
    font-size: 2em;
}
```

If the base font size is 16px, that would be twice 16px (32px). However, if we have something inside the header and use em units, it would be now based on 32px sizes, because the nested `<h1>` here inherits the font size from its parent. 

```css
header h1 {
    font-size: 1.5em;
}
```

So the H1 size would be 32px &times; 1.5 = 48px.

This can be very useful in creating flexible, scalable designs. 

If I added some padding... 

```css
header h1 {
    font-size: 1.5em;
    padding: 1em;
}
```

The padding would be relative to the `<h1>` which is relative to its parent, making it _48px_ as well. Saying the padding should be 1em, means you want the padding to be the same as the font-size, which we set at 1.5 * its parent. A bit complex. 

The best example would be a standard button. Imagine setting a button's font-size to 2em. Then, you set the margin and padding in Em units as well. If you wanted to make a larger or smaller version, you could just change the font-size of the button, and all the padding and margins will scale accordingly because Em units are relative to their parents.  As the font size changes, anything else set in Ems changes respectively.

Perhaps when you're learning, you might avoid Ems for a bit, but they can be very powerful so I encourage you to try them out here and there. 

[Em example CodePen](https://codepen.io/bdnorris/pen/EroEZp)

<!-- Using em for the width of elements can ensure that a box containing some text increases in width as the font size increases. If I change the widths on the boxes in the example above to ems the boxes now increase in width as their font size increases. -->
<!-- 
The em size is relative to the font size on the element in question. This can make ems a little tricky to use. If elements are nested or appear in different contexts in your document you can find that text or elements sized with ems can appear much smaller or larger than you imagined. In the example below both nested boxes have the same class, setting a width of 10em. However that 10em is much wider in the second box because the parent has a larger font-size. -->

### ch and ex

Honestly, I often forget these exist, but they're worth mentioning. 

_ex_ is a unit referring to the x-height of the font.

_ch_ is a unit referring to the width of the zero character in that font.

Since they're relative, they'll work like Ems.

### rem Units

Rem units ("root" em) are similar to Ems, but instead of being relative to the element or its parent, it is only relative to the default font size of the page. If you're default font size (set on `<html>` or `<body>`), is 16px, then 1rem is always 16px, and 2rem is always 32px.

## Viewport Percentage Units

The viewport is the area in the browser that actually contains your website. Viewport units are relative to this, which makes them incredibly useful.

### vw and vh

1vw = 1% of the viewport width

1vh = 1% of the viewport height

Viewport units are tied to the width and height of the browser, particularly the part of the website that is currently visible. So, if you adjust the size of your browser, these units adjust with it. 

```css
section {
    height: 100vh;
}
```

Would always make that section equal to the full height of the viewport.

### vmin and vmax

`10vmin` would be equal to either 10vh or 10vw, depending on the orientation of the browser. If the width is less than the height (portrait), `10vmin` would be 10vw, and vice versa.

`vmax` is the opposite, orienting to whichever is larger between the width or the height.

## Degrees

For some CSS items (like transforms, that we'll look at later) we might use angles. In this case, the suffix is `deg` as in `45deg`.

<!-- > For some CSS rules, we might use angles, such as in background gradients or rotations. To use degrees we use “deg”. For instance, “5deg” is rotate from the top by 5 degrees clockwise. We can use the opposite direction by making it negative, i.e. “-5deg”. -->

## Multipliers

Some CSS rules can just take multipliers or ratios. The best example is line-height.

<!-- > Some CSS rules can also take multiplier numbers, such as line heights and scale. This would be just a single number, which might include decimal places. For instance: -->

```css
body {
    line-height: 1.5;
}
```

The line height (leading) will always be 1.5 times the current font size. Highly recommended to use a multiplier here instead of setting a pixel or em size.

## Zero is zero

Most of the time, when you need to set something to 0, you don't need a unit. 

```css
font-size: 0;
```

So in most cases "0" and "0px" are treated the same.

<!-- > Some students ask, what’s the difference between using “0” and “0px”
or “0em”. The answer is nothing — no pun intended — zero is zero no
matter what unit you use! -->

## Again, code is a design tool

Currently, you don't get relative units like "em" and "vw" in Photoshop or Illustrator. That may be coming, but I want to point out that if you think about your projects and designs systemically, these units can be really powerful. You can shrink or enlarge all of your sizes and paddings based on screen size with a few lines of code. You can use math and automate your text hierarchies. All of this comes later once you are more familiar with these tools. As an example to get you thinking this way, what would happen if you set your `<h1>` styles to `font-size: 5vw;`? You can't do that in Photoshop.