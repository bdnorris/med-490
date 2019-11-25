# Backgrounds in CSS

[Lecture CodePen](https://codepen.io/bdnorris/pen/qgZrZR)

Controlling aspects of the background of our elements is a key part of making our designs come to life. There are color, images, and even gradient options we'll go over in this lecture.

## Background colors

To set or change the background color of an element, use the `background-color` property.

```css
div {
    background-color: red;
}
```

You can define color any of the ways we've talked about previously. Using `rgba` will allow you to make a transparent background.

If you've previously set a background color on an element, and want to remove it in a more specific tag, you can use the `transparent` keyword.

```css
p {
    background-color: gray;
}
p.class-name {
    background-color: transparent;
}
```

If you've specified a dark background color, you'll likely want to provide a lighter text color.

```css
div {
    background-color: #333344;
    color: white;
}
```

## Background images

To add a background image, use the `background-image` property. It's a little different than some others since we have to provide a URL value.

```css
div {
    background-image: url("/images/my-image.jpg");
}
```

One thing to note, the image URL can be relative or absolute (contains `http[s]://` and full domain), and it's relative to where the CSS is, not the HTML file. So if you have an HTML file and there is an images folder on the same level...

```html
<img src="images/my-image.jpg" />
```

But, if your CSS is in a folder as well, you'll first have to back out of that folder by starting the relative URL with two dots before you can enter the image folder to reference that same image.

```css
div {
    background-image: url("../images/my-image.jpg");
}
```

There are a bunch of other properties we need to talk about to support this image though. By default, this image will display at its native size, start at the top left of the element and repeat (tile) in both directions. Let's look at how to adjust some of these settings.

### Repeat

The `background-repeat` property controls the tiling. By default, it is set to tile both directions. 

```css
div {
    background-repeat: no-repeat; /* turns off tiling */
    background-repeat: repeat-x; /* tiles horizontally only */
    background-repeat: repeat-y; /* tiles vertically only */
    background-repeat: repeat; /* reset to default */
}
```

### Position

We can control where our background image origin sits by using the `background-position` property.

It takes in a vertical, then horizontal position, in any valid CSS values starting from the top left of the element, separated by spaces. You can also use a combination of position keywords: `center`, `top`, `bottom`, `left` and `right`.

```css
div {
    background-position: center center; /* centers on both axis */
    background-position: center left; /* center vertically, but left align horizontally */
    background-position: 0 0; /* same as "top left" */
    background-position: 100px 50%; /* 100px from top, centered horizontally  */
}
```

### Size

You can control the background's size with the `background-size` property. It works by giving it a width first, and then height. 

```css
div {
    background-size: 200px 100px;
}
```

There are also some really useful keywords you can use with `background-size`.

If you want to stretch your background image to completely fill the element's background at any size and are not worried about cropping some of the image, you can use the keyword `cover`.

```css
div {
    background-size: cover;
}
```

If you want to keep the whole image with no cropping you can use the keyword `contain`.

```css
div {
    background-size: contain;
}
```

### Attachment

The `background-attachment` property takes two keywords, the default `scroll` and `fixed`. Using `fixed` lets you achieve a really easy "parallax" effect where the background stays in place as you scroll the page.

```css
div {
    background-attachment: fixed;
}
```

## Gradients

Gradients are pretty well supported in browsers now and are relatively easy to achieve. Instead of providing the `background-image` property with a `url()` value, we provide it the `linear-gradient()` value.

`linear-gradient` can accept two color values, with an optional angle value. You can provide it with any color values you would normally use in CSS.

```css
header {
    background-image: linear-gradient(orange, yellow); /* The default angle is 180deg (top to bottom) */
    background-image: linear-gradient(90deg, orange, yellow); /* Prodiving a "deg" value will let you change the angle */
}
```

You can use...
- 0deg from top to bottom
- 90deg from left to right
- 180deg from bottom to top
- 270deg from right to left

...or any valid value from 0 to 360.

You can actually provide more colors as well, just keep adding them.

```css
div {
  background-image: linear-gradient(0deg, red, yellow, purple);
}
```

There are also radial gradients.

```css
div {
  background-image: radial-gradient(circle, green, purple);
}
```

You can specify the shape of the radial gradient with the keywords `circle` or `ellipse` (default).

Here's a cool gradient generator to let you explore what you can do with CSS Gradients

[UI Gradients](https://uigradients.com/)

## Background shorthand

Finally, you can use the background shorthand property if you prefer.

```css
div {
    background: background-image background-position background-size 
    background-repeat background-origin background-clip 
    background-attachment background-color;
}
```

## Multiple backgrounds

You can also supply multiple images or combine images with gradients with a comma delimited notation. 

```css
div {
  background-image: url("image1.jpg"), url("image2.jpg");
  background-repeat: no-repeat, repeat;
}
```

Keep in mind, the background listed first will be the one on top.

## Resources

[CSS Reference for Backgrounds](https://cssreference.io/backgrounds/)