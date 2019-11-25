# CSS Effects

## Shadows

There are two kinds of shadows we can use. One for text, and the other for elements (boxes).

### Text shadows

You can define shadows on your text by using the `text-shadow` property, and giving it four values. 

```css
p { 
  text-shadow: 1px 1px 1px #000;
}
```

The first value is the x, or horizontal offset, the second is the y, or vertical offset. Positive values push the shadow right, then down respectively. You can specify 0s here for no offset, or negative numbers to move left and up. 

The third value is the blur. A higher number here results in a more diffuse shadow.

The last value is the color. It's actually pretty useful to use RGBA or HSLA values here, so you can have transparent shadows.

```css
p { 
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
}
```

You can stack shadows with commas, leading to some more elaborate effects. Obviously, there's a lot of good reasons to not use shadows with your type, and I would rarely recommend them for body fonts. But, they can be good to add to headers and larger text to achieve certain effects, or if you're not sure what kind of background the text might appear on.

Keep in mind, you can use lighter colors too, achieving more of a glow effect.

### Box Shadows

To add shadows to your elements, you can use the `box-shadow` property. It uses similar values to `text-shadow`: "x", "y", blur, color. 

```css
.my-element {
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.5);
}
```

You can make glow affects with this property as well, by using lighter colors.

There's one more value we can pass to `box-shadow` though, and that's `inner`. By setting `inner` as the first value in the list, we can create an inner shadow that runs along the inside of the box.

```css
.my-element {
  box-shadow: inner 0 0 15px rgba(255, 255, 255, 0.4);
}
```

Shadows like this can be a pain to get right, so I often use a generator to help out.

[CSSMatic Box-Shadow](https://www.cssmatic.com/box-shadow)

## Filters

`filter` is a newer property that allows you to use Photoshop like filters on your elements. It has decent browser support, but notably, doesn't work in IE.

[Can I Use: Filter](https://caniuse.com/#search=filter)

It works similarly to the `transform` property we'll discuss in the next lecture, where the property is `filter`, then you give it a function with a value in parenthesis. 

```css
img {
  filter: blur(2px);
}
```

Here's all of the filters you can try on your elements...

```css
.my-element {
  filter: grayscale(100%); /* 0% is normal, 100% is black and white */
  filter: sepia(50%);
  filter: saturation(200%); /* 100% is normal, lower is less saturated, higher is more */
  filter: contrast(500%); /* 100% is normal */
  filter: brightness(200%); /* 100% is normal */
  filter: invert(100%); /* 0% is normal */
}
```

You can also combine filters by separating them with spaces. **Do not repeat the property**, it will overwrite your previous declaration.

```css
.my-class {
  filter: contrast(200%) grayscale(100%) blur(3px);
  filter: brightness(150%); /* this would overwrite all of the above */
}
```

There are technically more, and I expect they will keep adding them.

[MDN CSS Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

[Here's a good set of examples from CSS Tricks](https://css-tricks.com/almanac/properties/f/filter/)

[Here's another from Alligator.io](https://alligator.io/css/css-filter-examples/)


## Resources

[CSS Tricks text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)

[CSS Reference text-shadow](https://cssreference.io/property/text-shadow/)

[CSS Reference box-shadow](https://cssreference.io/property/box-shadow/)

[CSSMatic Box-Shadow Generator](https://www.cssmatic.com/box-shadow)
