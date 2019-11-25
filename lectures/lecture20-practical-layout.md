# Practical Layout Techniques

The focus of this lecture will be to describe and offer some sample code for some real-world layout problems.

## What do I mean by “Layout”

A lot of the hacks I've mentioned that we used to use for layout, like tables and floats, were all about how to get our elements to live next to each other on the same line (or maybe a better term is "row"). Flexbox and Grid solve this issue, but there's a lot of nuances and gotcha's I want to talk about, as well as how all of this works with Responsive Web Design (RWD).

## Mixing percentages and standard units

In RWD, we need to be flexible, so often, we'll want to describe our widths in percentages, `VW`'s or other flexible units. However, we might also want to control our whitespace like margins and padding with inflexible, exact units. How can we mix them?

## The calc() function

The `calc()` CSS value can be used pretty much anywhere you would use a number, and it lets you mix units. 

```css
.my-element {
  width: calc(50% - 1em);
}
```

That CSS would tell the browser to compute 50% of its parent and subtract 1em. I can add with `+`, subtract with `-`, divide with `/`, or multiply with `*`.

The following would be a completely valid alternative way to write `width: 33.333%`.

```css
.my-element {
  width: calc(100% / 3);
}
```

There's a lot of power here. Here's something I've done to create an asymmetrical layout using a calculated left margin...

```css
.my-text-container {
  margin-left: calc((100vw - 1240px)/2);
}
```

I took the max-width of my imagined container that would normally be centered, but instead subtract that from `100vw`, then divide by two. I'm essentially figuring out how far from the left my content would be if I was centering the whole layout when I was actually just centering 1 side.

[Calc Examples CodePen](https://codepen.io/bdnorris/pen/aXYvaj)

## Making columns

The general principle for making columns of elements is the “row/column” method. Basically, you have a block level container as your row, and you use Flexbox to set items inside that row. Your container will usually have a `max-width` set, so your columns do not expand indefinitely. How many containers you need depends on your background.

**Transparent background, or background that only goes out to your max-width**: if you don't need the row to have a background you can get away with one wrapper.

**Full-width background**: you'll need two containers, one that expands indefinitely and another one with a max-width set.

[Flexbox Column CodePen](https://codepen.io/bdnorris/pen/GzwNpz)

As you can also see in this pen, you can easily use Flexbox settings to change how many items per row at different breakpoints by overwriting your settings inside media queries.

### Adding gutters

Here's where things get tricky. CSS Grid has a gutter concept built in, but let's see how we can make this work with Flexbox. 

Now, we can, with Flexbox, use `justify-content` to space out our items. So a feasible solution would be to specify our children with less of a percentage than we normally would, automatically creating our gutters.

```css
.my-parent {
  display: flex;
  justify-content: space-between;
}
.my-children {
  flex: 0 0 22%;
}
```

Here, we are telling our flex-parent to distribute extra whitespace between our child boxes, then, we are telling our boxes to be 22%, instead of 25%. We are also telling them not to grow or to shrink since percentages shrink and grow anyway. If I have 4 flex children, that gives me 88% of our parents width I'm using up with boxes, leaving 12% left over for whitespace. With 4 items, I need three gutters, and 12/3 is 4%. So I automatically get 4% between each item. 

However, what if I don't want flexible gutters? What if I want my boxes to flex, but my gutters to be a stable number. This is where a couple of new selectors come into play as well as the `calc()` function.

### First and last child

We looked a bit at "pseudo-classes" earlier in the CSS Selectors lecture, but I want to re-introduce two right now, They are `first-child` and `last-child`. We use pseudo-classes by placing an `:` after our selector.

First and last child select the first child of a parent, and the last child of a parent, leaving the rest alone.

```html
<ul>
  <li>Aardvark</li>
  <li>Anteater</li>
  <li>Elephant</li>
</ul>
```

```css
ul > li {
  margin-left: 1em;
  margin-right: 1em;
}
ul > li:first-child {
  margin-left: 0;
}
ul > li:last-child {
  margin-right: 0;
}
```

Using the above code, no matter how many items were inside the `<ul>`, they would all get a `margin-left` and `margin-right`, except the first item gets it's left margin reset to 0, and the last item gets it's margin reset to 0. 

We can combine this idea with the `calc()` function to control our rows of items.

```css
.row {
  display: flex;
}
.row > .column {
  flex-basis: 0 0 calc(25% - 0.75em);
  margin: 0 0.5em 1em 0.5em;
}
.row > .column:first-child {
  margin-left: 0;
}
.row > .column:last-child {
  margin-right: 0;
}
```

So we have to do some arithmetic here... 4 items per row means 3 gutters because I want no spacing on the outside for now. If I want 1em of spacing in the 3 gutters, I'll use left and right margins of 0.5em. 

My total space I want is still 3em, so each box should be 25% - 3/4 ems. Giving me, `calc(25% - 0.75em)`. Complicated, but it's the kind of thing you only need to figure out once, then you can use over and over again. Here's a CodePen showing some options.

But what if I want to have a wrapping grid of items, `first-child` and `last-child` won't work. There is no pseudo-class for first and last in a row of wrapping flex-children.

You can implement "nth child" patterns as well, targeting even or odd items to make this work, _if_ you know how many items you have total. But, if your not sure how many items you have and you want a grid, CSS Grid may be more useful. 

## Grids of items

It is possible to use Flexbox to make grids of items, however, it can be tricky to use margins (although, not impossible). Grid offers a better solution. The following CodePen demonstrates the issues:

[Grid of items CodePen](https://codepen.io/bdnorris/pen/oOjLjv)

<!-- The solution to that is to use Grid, it's what it was made for. For now, here's a Flexbox solution, instead of compensating for the left and right margin with pseudo classes, we'll just allow our container to be a bit larger than the container above it.  -->

<!-- The second solution in this CodePen is based on another pseudo selector called `nth-child()`, that works like `first-child` and `last-child`, but lets us specify things like "every third item" or "every sixth item", etc. We'll look at these closer in another lecture. -->

## RWD Layout Patterns

Going back to when we first talked about RWD, here are some examples of some of those responsive layout patterns.

### Mostly Fluid pattern

[Mostly Fluid CodePen](https://codepen.io/bdnorris/pen/oOLVWM)

### Column Drop pattern

[Column Drop CodePen](https://codepen.io/bdnorris/pen/BEzbma)

<!-- ### Combining max-widths and percentages

Let's look a little closer. A really common pattern I use would be to combine a container's max-width with  -->

## Responsive CSS Grid

CSS Grid has the benefit of several new values and functions that allow some responsiveness without media queries.

Grid `auto-fit` is an awesome value for this. It fills your row with as many columns it can fit. 

```css
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 10px;
```

[Learn more about `auto-fit` and `auto-fill`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

<!-- The `grid-gap` property makes this quite a bit easier.  -->

<!-- You can also do a lot with Grid for responsive layout, sometimes without using any media queries at all. -->

You can also use "grid area" to great effect combined with media queries.

[Responsive Grid CodePen](https://codepen.io/bdnorris/pen/rbepeP)


## Using order

We can use the Flexbox `order` property to let us flip things around in our RWD patterns.

[Flex Order CodePen](https://codepen.io/bdnorris/pen/PLagZW)


## Using `display` in media queries

Sometimes you might need very different components to show in different breakpoints. For instance, differing navigation for mobile and desktop might not always work with just different styles. Different HTML may be required. This is pretty simple to do with the `display` property. 

[Display and Media Queries CodePen](https://codepen.io/bdnorris/pen/VNjRyq)

## Nesting

The real trick of layout is to figure out your boxes. Sometimes I like to do by printing out a black and white copy of the design, and with a red pen, draw my boxes. Remember, CSS is all about boxes. 

A combination of Flexbox and the right nesting of elements can often get you the layout you need.

[Nesting Example CodePen](https://codepen.io/bdnorris/pen/wZWVgJ)

Remember, you can nest both Grid and Flexbox. Grid children and Flex children can also be Grid and Flex containers.

## Frameworks

CSS Frameworks are essentially JS and CSS files you include as a base, prior to defining your custom styles. They have built-in grid systems and lots of pre-fab styles to get you running quickly. 

Ultimately, you'll learn more by doing it yourself, but frameworks can be a good way to get started making websites since they can fill in gaps in your knowledge.

An extremely popular one is [Bootstrap](https://getbootstrap.com/), made by the developers at Twitter. 

Personally, I've always been partial to [Foundation](https://foundation.zurb.com/) from Zurb. 

[Framework CodePen](https://codepen.io/bdnorris/pen/yrJmPE)

You can quickly build grids using these by using the frameworks pre-defined utility classes.

<!-- Media queries for layouts
> Media queries are heavily used to turn multi-column layouts into
single-column layouts in responsive design. Let’s take a two-column
desktop layout in HTML: -->

<!-- ```css
<section>
<div class="main">
Here is the main content
</div>
<div class="side">
Here is a sidebar
</div>
</section>
``` -->

<!-- In your desktop version of your CSS, you’d have something like:
section {
overflow: hidden;
width: 920px; 
margin: 0 auto 0 auto;
}
div.main {
width: 600px;
float: left;
}

div.side {
width: 300px;
float: right;
} -->

## Text columns

Yes! You can do traditional text columns in CSS. I find them lacking sometimes because they don't often stand up to good typographic practices. 

This CSS-Tricks article explains how to use them pretty well.

[Guide to Responsive-Friendly CSS Columns](https://css-tricks.com/guide-responsive-friendly-css-columns/)

## In class exercise

Please find a layout you'd like me to try, take a screenshot and the URL, and send to me via Slack. I will set aside some time next class to pick one, and attempt to code it live.


## Learn from patterns!

[Responsive Design Patterns](https://responsivedesign.is/patterns/)

[Grid by Example Patterns](https://gridbyexample.com/patterns/)

[Google Developers Responsive Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)

[Brad Frost Responsive Patterns](https://bradfrost.github.io/this-is-responsive/patterns.html)

## Resources

[Jen Simmons Layout Lab](https://labs.jensimmons.com/2016/)

[Look Ma, No Media Queries! Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/)

[Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

