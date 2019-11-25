# Animation on the Web: Practice

There are quite a few ways to animate on the web including:

*   [Animating items created in the Canvas element](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
*   Javascript animation libraries like
    *   [Greensock](https://greensock.com/)
    *   [Dynamics.js](http://dynamicsjs.com/)
    *   [Paper.js](http://paperjs.org/)
    *   [Velocity.js](http://velocityjs.org/)
    *   [Anime.js](https://animejs.com/)
    *   and more
*   [Indirectly by including video files](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) or GIFs.

But we're going to focusing on CSS based animation (although you might need Javascript to trigger them).

## Transitions review

Transitions operate on given properties over a given time period. Generally, the properties you're trying to transition should have **numeric** values as start and end points.

[CodePen: Transitions](https://codepen.io/bdnorris/pen/pBpBNW)

[CSS Reference: Transitions](http://cssreference.io/transitions/)

With transitions, we're just animating between two different states. With keyframe animations, we can describe more complicated and multi-step animations.

## Keyframes

Keyframes allow you to define animations as a timeline, echoing traditional video software, but typed in the code. They can be changed with user interactions, but they don't require them, and can just start animating on load.

There are two steps, define the keyframe animation, then, set the animation on the element. Separating them makes keyframe animations re-usable.

The keyframe animations use percentages, instead of actual time units, then, you set how long you wish your animation to run on the specific element you wish to animate. This allows keyframe animations to be reusable, and highly configurable, including infinite loops, reverse, pauses, etc.

> Think of a keyframe as a timeline of what we want to animate. We might, for instance, want to animate the background color between two colors, or we might just want to fade in a tag on load. Let’s say we want to fade in a tag. The first thing we need to do is think of a name for our keyframe. This can be anything that describes it as one word — think like an HTML class name — so let’s call ours “fadein”.

&mdash; SuperHi

### Defining keyframes

[MDN Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

Keyframe syntax is very different from most CSS but is fairly easy to pick up.

We start by using the `@` sign, like a media query, then you set a name for the animation, then open and closing curly brackets.

```css
@keyframes fade-in {

}
```

Then, we define a starting point, and a stopping point, with the keywords `from` and `to` with their own set of curly braces. That's where we put our styles.

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

You can add more keyframes though, using percentages.

```css
@keyframes bounce {
  0% {
    transform: translateY(-400px);
    opacity: 0;
  }
  60% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0);;
  }
}
```

The browser will fill in the in-between states to create the animation. 

That's actually a really crummy bounce. How about this...

```css
@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
```

That animation is taken from my favorite animation generating site, [Animista](http://animista.net/)

It also doesn't matter where you put your keyframes. There one of the few things in CSS that order doesn't matter, as long as their loaded, they'll run.

### Applying keyframes

Next, you have to apply the animations to the elements. You start with setting the name, and the duration. 

```css
.element-to-animate {
  animation-name: fade-in;
  animation-duration: 1.2s;
}
```

Then, there a bunch of optional settings to apply (values are defaults). 

```css
.element-to-animate {
  animation-timing-function: ease; 
  animation-delay: 0s; /* will delay the start of the animation */
  animation-iteration-count: 1; /* can be a number or the word infinite */
  animation-direction: normal; /* normal = forwards, can also do reverse, or alternate to switch */
  animation-fill-mode: none; /* this one defines whether the styles in the animation are applied outside of the animation, 
    values are none, forwards (apply after), or backwards (apply before). */
  animation-play-state: running; /* can also be paused */
}
```

You can also define these with the `animation` shorthand. Order is important!

```css
animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0 20 reverse forwards running;
```

I absolutely refer to CSSReference.io the most for this shorthand property.

[CSS Reference: Animations](http://cssreference.io/animations/)

[CodePen Demo](https://codepen.io/bdnorris/pen/PgVRag)

## Easings

Easing refers to applying acceleration and deceleration effects to the animation, creating a pleasing effect similar to how real objects behave in the real world. They can be applied to both types of CSS animation. There are several built-in easings, and additional ways to generate your own. Animation libraries sometimes have their own as well.

Often, I suggest you just use "ease", it will often work both backward and forwards (like when using a transition). "Ease" is also the default for `animation-timing-function`. Another option is no easing, also known as "linear", which sometimes works best for certain types of animations.

You can also use a cubic-bezier function. You can use this site to generate that code for you.

[cubic-bezier.com](http://cubic-bezier.com/)

You can't copy these, they're meant to help visualize easings built into the javascript library Anime, but, [this codePen can help you visualize how easing curves affect speed](https://codepen.io/juliangarnier/pen/mWdraw).

One of the key benefits of keyframe animations is that since they use percentages and not actual time, they can be stretched out over however much time you want. 

## Re-using and other styles

Since we define our keyframes separately from attaching them to our elements, you can have one "slide-in" keyframe animation, and use it on multiple elements, all with different durations and easing functions. 

It's likely the element your animating has other styles applied to it. How those styles are affected by styles inside the keyframe animations, is up to you to figure out, and can get complicated. One thing to keep in mind, transforms will overwrite other transforms, so use keyframe animations with care on any element you already have transforms set on. 

## Transforms and performance

CSS animation is most powerful when being combined with the Transform property. Transforms are not just for animation but can be combined with animations for a much larger range of effects than traditional CSS properties. They have a very different syntax than traditional CSS properties.

You can put any properties you want in keyframe animations, but remember, anything other than `transform` or `opacity` may have impacts on other items on the page, causing the browser to need a lot of processing power to re-layout. But again, I've never had any issues with `color`, or `background-color`. I would avoid trying to animate box-model settings like width, height, margin, and padding, and be very careful with trying to animate positions like top, left, right, bottom, when `transform: translate()` would likely work better.

(High-Performance Animations)[https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/]

## Animation builders

Previously mentioned [Animista](http://animista.net/) is my favorite. It lets you pick from a library of animations, change settings, and generates just the code you need. It's a great place to start, even if you end up modifying the animations later.

[Animate.css](https://daneden.github.io/animate.css/) is also really popular. It's a CSS file you can download and include in your project, and add animations to your elements by applying classes in your HTML.

Some libraries of animations I haven't tried yet: 
- [Magic](https://www.minimamente.com/project/magic/)
- [Vivify](http://vivify.mkcreative.cz/)
- [Obnoxious](http://tholman.com/obnoxious/)
- [CSS Shake](http://elrumordelaluz.github.io/csshake/)
- [Hover.css](http://ianlunn.github.io/Hover/)
- [Wait! Animate](http://waitanimate.wstone.io/#!/#%2F)
- [Effeckt](https://h5bp.org/Effeckt.css/)
- [CSS3 Animation Cheat Sheet](http://www.justinaguilar.com/animations/index.html)

Here's a few that actually use a timeline tool: 
- [CSS Animate Beta](http://cssanimate.com/).
- [Angry Tools: Animation](http://angrytools.com/css/animation/)
- [Keyframes App](https://keyframes.app/editor/)

Here's a few more generators:
- [Bounce.js](http://bouncejs.com)
- [Stylie](http://jeremyckahn.github.io/stylie/)
- [CSS Synth](https://bennettfeely.com/cssynth/)

## State Changes

Just setting an animation on an element would cause the animation to immediately occur when the document loads, so to trigger them when we want them, we have to somehow cause the state of an element to change. CSS gives us a few pseudo-selectors like `:hover` and `:focus`, but, what we really need is some Javascript and/or jQuery to **add and remove classes**, triggering a change on the element, thus triggering the animation.

So, if you had an element: 

```html
<div id="js-hook" class="my-element">
  Element!
</div>
```

```css
.my-element {
  /* Regular styles */
}

.animate-me {
  animation: scale-up-center 1s ease 1;
}
```

We can use javascript to add the `animate-me` class to your element, triggering the animation.

```html
<div id="js-hook" class="my-element animate-me">
  Element!
</div>
```

IDs are useful here because it's easy to reference only one element with Javascript using IDs.

```js
var myElement = document.getElementById("js-hook");

myElement.addEventListener("click", function(){
  myElement.classList.toggle("animate-me");
});
```

But again, this is beyond the scope of this class. But here are some resources to get you started.

[Khan Academy: Making webpages interactive](https://www.khanacademy.org/computing/computer-programming/html-css-js#concept-intro)

[Kirupa: Setting CSS Styles Using JavaScript](https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm)

[CSS Tricks: Controlling CSS Animations with Javascript](https://css-tricks.com/controlling-css-animations-transitions-javascript/)

## Code School Animation Videos

Here are some videos I've saved from the now-defunct Code School on web animations.

[Dropbox Link](https://www.dropbox.com/sh/roat9fxize2alox/AABuQ0jH6cHpt4xgd5czCqJXa?dl=0)

## Resources

[CSS Reference for Transitions](https://cssreference.io/transitions/)

[CSS Reference for Animation](https://cssreference.io/animations/)

[MDN: Using CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
