# Colors in CSS and the Web

[Lecture CodePen](https://codepen.io/bdnorris/pen/QYNdvm)

There are several CSS rules that accept color values. We'll discuss some of them, and the various ways you can describe color in CSS.

Color in interface and web design is a huge subject. We'll discuss a lot during your work on your projects, so I mainly want to focus on the details of using color in CSS. However, we'll touch on a few key points regarding contrast you should be thinking about when picking colors for your designs.

## Named colors

CSS supports 140 standard color names. Typically, you wouldn't use these for production, since it's unlikely they match up with your designs. They're most useful for quick testing and debugging. If you want to highlight an element on the page to figure out where its bounds are and how other elements are behaving in relation to it, setting `background-color: pink` is an easy way to make that item stand out.

There are many resources online to show you all of these colors. I like this one, that groups them by hue. 

[HTML Color Codes: Color Names](https://htmlcolorcodes.com/color-names/)

[Named Colors (CSS Tricks)](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/)

There is also the "transparent" keyword. This let's you explicitly set no color. It works best on backgrounds and borders. 

## Hex colors

Probably the most common way to specify colors in CSS is Hex Codes or hexadecimal codes. We won't bother going into the computer science basis of hexadecimal, let's just look at how this color specification works.

Each hex code is prefixed with a `#` sign and is made up of an RGB color value. The trick is, the values are specified on a scale from 0&ndash;F. Let's break this down.

`#FF0000` is pure red light from the screen. The first two characters in a hex code indicate the red color channel. So you can think of a hex code like this: 

`#RRGGBB`

`#FFFFFF` is white and `#000000` is black. The scale of values is probably the trickiest part to learn. It starts at `0`, goes through `9`, then continues with `A` on to `F`. So `0` means no light in that channel's color, and `F` means full light from that channel. 

You can specify hex colors in a shorthand of just 3 characters like `#F00`, which is equivalent to `#FF0000`.

So if `#FF0000` is the brightest red, what would `#F00000` be? It's a slightly darker red. Removing letters from our calculations makes it a bit easier. Take the color `#990000`. This is a dark-ish red. The smallest amount I could make this color darker would be by changing the second character to `#980000`. If I changed it to `#890000`, it would be a more drastic change. 

Photoshop and Illustrator's color pickers show hex values so you can play with this easily. 

## RGB and RGBa

We can also specify colors in RGB values more directly. The syntax is slightly different. 

```css
color: rgb(40, 40, 194);
```

This would make a purple color. These are the same values you would see in your design program. **RGB values go from 0 to 255.**

But this becomes much more powerful when we add the `a`, the "alpha" channel. This allows us to specify transparency on a color.

Note, there is a CSS property called "opacity". However, changing the opacity of an element effects the entire element and everything inside of it, whereas using RGBa, we can specify opacity just on the color related property, instead of the entire element. The syntax is:

```css
color: rgba(40, 40, 194, 0.5);
```

This would create the same color as above, except 50% opacity. Often in CSS, we'll use fractions of 1 instead of a percentage.

## HSL

Less common is to use HSL color values, this stands for Hue, Saturation, Lightness. These work the same as RGB. 

```css
color: hsl(97, 50, 65); /* you can also use hsla similar to rgb */
```

The H in HSL, for "Hue," is described as a color circle, so the values go from 0 - 360, with red being the hue at those values, and light blue at the 180 mark. "Saturation" is a percentage of 0 (unsaturated/gray) to 100 (fully saturated). Lightness is also percentage ranging from 0 (black) to 100 (white). If you wanted the reddest red in HSL, you would use `hsl(0, 100, 50)`. 

Basically, HSL is still RGB, it's just a different way to describe it. Some people think it's easier to wrap your head around. The main problem is, _in Adobe programs, you don't get HSL, you get HSB, which is similar, but not the same_.

## Properties that take color values

### Color

The main property you'll use color values on is 'color', from MDN:

> The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```css
.my-element {
    color: red;
    color: #FF0000;
    color: rgb(255, 0, 0);
}
```

That's three different ways of saying the same thing. Any of them would set the text color of any text inside that class of 'my-element'. If you had an element inside that element, you could say: 

```css
.my-element .inside-element {
    background-color: currentcolor;
    color: inherit;
}
```

This would make the element inherit the color of its parent (usually unnecessary, since it would do this anyway, but this would overwrite a conflict). Using the `currentcolor` keyword, we can set the background-color to its parents color value.

### Background Color

The next most common property you'll use color on is the `background-color` property. We'll dig more into this when we talk about backgrounds. 

```css
.my-element {
    background-color: seagreen;
}
```

### Shadows

We'll worry about shadows in another lecture.

### Text decoration

We'll look at this in the Text Properties lecture, but for now, note the property `text-decoration-color` would allow you to change the color of an underline separate from the text itself (this doesn't work in all browsers though). 

### Borders

Borders can be colored by using the property `border-color`. We'll talk more about borders later.

## Color Contrast and Accessibility

Like all design, having the right amount of contrast is essential for making text readable and designing your hierarchies. Making elements that have different behaviors look different is important for good interface design. Contrast can also help make items look clickable as we've discussed. 

There are also Accessibility standards for contrast and color blindness concerns.

For contrast, you can use this tool to make sure your color choices for text have the required contrast to meet the W3Cs "Web Content Accessibility Guidelines (WCAG). [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). Here's another one: [Colorable](https://colorable.jxnblk.com/)

In your design process, you might consider using Photoshop's color blindness preview features. They can be found under `View > Proof Setup` near the bottom of the list. The most notable problem for color blindness is combinations of red and green. For normal viewers, they have a lot of contrast, but for deuteranopia color blindness, they tend to look very similar.

## Don't use black

Just a general design rule, try to avoid using #000000 or pure black in your designs. Almost always, some sort of cool or warm dark gray will fit into your overall color pallet better. It's also likely to lead to easier to read text using a dark gray on white instead of pure black. Generally managing your contrast is a big part of choosing your color pallet. Too little, things are hard to read and discern, too much and it dazzles the eye. Here are some good articles on the subject...

[Design Tip: Never Use Black](https://ianstormtaylor.com/design-tip-never-use-black/)

[Why You Should Never Use Pure Black for Text or Backgrounds](https://uxmovement.com/content/why-you-should-never-use-pure-black-for-text-or-backgrounds/)


## Resources

[MDN: CSS Color Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color)

[Hail Pixel Color App](https://color.hailpixel.com)

[Adobe Color CC](https://color.adobe.com/create/color-wheel/)

[Coolors.co](https://coolors.co/)