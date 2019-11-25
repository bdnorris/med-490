# Hover and Transitions

[Lecture CodePen](https://codepen.io/bdnorris/pen/pBpBNW)

## Hover states

Pretty much any HTML element can be styled when the user's cursor is above it. We call that the "hover" state. To add hover styles, we just need to use the "hover" pseudo-class.

```css
/* Selects any <a> element when "hovered" */
a {
  color: #2727e6;
  text-decoration: none;
}
a:hover {
  color: #111118;
  text-decoration: underline;
}
```

You won't need to repeat anything in the second ruleset, just change the styles you need to, they'll overwrite what came before.

You can do this with any selector, not just links.

```css
header {
  background-color: red;
}
header:hover {
  background-color: yellow;
}
```

The intention of hover is often to let the user know they are clickable, or otherwise that some kind of interaction is possible.

By the way, you can use this with classes or any other selectors as well. 

```css
.header {
  background-color: red;
}
.header:hover {
  background-color: yellow;
}
```


### Mobile caveats

Before web capable devices with touch screens, it was also common to use hover to show or hide some information. You could make stateful interactions with just CSS and no Javascript. However, hover is unreliable on mobile devices. Some devices have a "soft-touch" capability, where they distinguish between a light touch on the screen and an intentional tap, sometimes showing the hover state. 

But this is unreliable. Best to only use hover for desktop enhancements, and make sure your page doesn't _need_ it to function.

## Transitions

> Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

&mdash; [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Transitions are the first type of animation we'll look at in CSS. With them, you can transition between two sets of styles, based on the "state". 

There aren't a lot of options for changing state without Javascript. However, `hover` is one of them, so we'll look at how to set up a transition along with hover.

Currently, if we have a hover style, the change in CSS happens immediately. With a transition, we can set the change up to take place over a given amount of time.

```css
a {
  color: #2727e6;
  text-decoration: none;
  transition: color 0.5s;
}
a:hover {
  color: #111118;
}
```

Here, we've used the `transition` property and told it we want to transition the color property over half a second. 

So, why put the transition in the default style, rather than the hover style? Putting it in the default style makes sure it runs, not only when hover comes into affect, but when you move the mouse away as well. Essentially, any state change that includes a change to `color` will trigger the transition.

### Multiple transitions and "all"

If you want to transition more than one thing, lets say, both background color **and** color, you have a couple of options.

One option is to use the `all` keyword instead of specifying what property to transition.

```css
a {
  color: #2727e6;
  background-color: white;
  text-decoration: none;
  transition: all 0.5s;
}
a:hover {
  color: #111118;
  background-color: black;
}
```

This would transition every property that differs. If you don't want to transition every property, or want two different properties to take different amounts of time, you'll need to list them out, separated by commas, instead.

```css
a {
  color: #2727e6;
  background-color: white;
  text-decoration: none;
  transition: color 0.2s, background-color 0.3s;
}
a:hover {
  color: #111118;
  background-color: black;
}
```

### Timing

We'll talk more about timing in the animation section, but for now, just know that there are different animating timing settings, some of which you can define yourself, and some easy presets as well. You you can apply these to transitions as well as other types of animations we'll look at soon.

Built in ones are `linear`, `ease`, `ease-in`, `ease-in-out`, and `ease-out`.

You can preview examples of these at [cubic-bezier.com](http://cubic-bezier.com/#.17,.67,.83,.67)

```css
a {
  color: #2727e6;
  text-decoration: none;
  transition: color 0.5s ease;
}
a:hover {
  color: #111118;
}
```

`ease` is pretty safe, I tend to start with ease before I try anything else. It starts the animation slowly, speeds up, but then slows back down again at the end. Imagine it like a car accelerating, going fast for a bit, then braking.

## Resources

[CSS Reference: Transitions](https://cssreference.io/transitions/)
