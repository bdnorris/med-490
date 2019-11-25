# CSS Selectors

> By default, the browser gives them a style that looks like the web would have looked in the late 1980s — a simple white background with black text in a default font. At the time this simple styling was fine for scientific research and basic websites, but as the Web became more popular, the Web’s authors wanted to tweak the look and feel of their sites.

> Over a few years between 1989 and 1996, to change the style, authors used plenty of “hacks” — non-standard ways to get around the limitations of the code they could play with. HTML started getting more complicated as more hacks were added, to the point where HTML started to look unusable to normal people.

<!-- Now, remember that HTML was made so regular folks could write it. The people that were making and updating the web browsers at the time decided enough was enough. They needed a new way to Make Coding Great Again, something for the people. -->

> Back at CERN, one of Tim Berners-Lee’s colleagues, a Norwegian called Håkon Wiem Lie, had an idea based on other word processing programs. The idea that if you were using a header or a paragraph in several places across a website, you probably want them to look consistent. The idea that you could make the colors and typography
consistent until you wanted to overwrite something later on.
Håkon had come up with the idea of Cascading Style Sheets (or CSS
for short).

> The cascading part of CSS is the idea that you begin to style your site on
a general basis, then get more particular as you get into the nitty-gritty.
For instance, you might want to make the typeface Arial across the
whole site, except for headers where you prefer Georgia.

> So it’s always good to keep this in mind. Start off thinking about styling
in the most generic way possible. What is the most used color? What is
the most used typeface?

We'll look at the cascade more in the next lecture, for now, let's look at some selectors.

## Basic Selectors

### Element Selectors

The most basic selector is an **element** selector. We've mostly been using these for our examples. They select any HTML Element specified. 

```css
p {
    color: #222233;
}
```
This selector would select every instance of the `<p>` tag on our site. If we wanted to overwrite this style, we would need to be more specific (next lecture).

### Class Selectors

We've mentioned classes before, but let's look a bit closer. In the HTML, we can add a class like so...

```html
<p class="introduction">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. </p>
```

To style this in CSS, we would use a `.` before the class name. 

```css
.introduction {
    font-size: 18px;
    font-weight: bold;
}
```

You can also combine an element and a class selector, like...

```css
p.introduction {
 /* ... */
}
```

The first selector says "these rules apply to every element with the class 'introduction'". The second selector says, "these rules apply to every `<p>` element with the class 'introduction'". The second one is more specific, which we'll talk about in a bit.

**Class selectors make up a large chunk of the selectors you'll write. Effective class naming and usage is key to working with CSS and staying sane.** We'll have an entire lecture on this subject later.

### ID Selectors

You can also give elements "IDs" with the `id` attribute. In theory, every ID should be unique. 

```html
<p id="introduction-but-more-specific" class="introduction"></p>
```

You use these in CSS with a `#` like...

```css
#introduction-but-more-specific {
    color: purple;
}
```

We'll talk more about it in a bit, but IDs are *very* specific. So specific, that you need to be careful when using them. They should only be used when you absolutely only want to write styles for one thing that you'll never re-use again.

## Combinators

### Descendant Selectors

Given the following HTML...

```html
<p class="introduction">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et 
dolore magna aliqua.</p>
```

...We can use the following CSS selector to select _only_ links inside elements with the "introduction" class.

```css
.introduction a {
    color: tomato;
}
```

Simply using a space between the selectors implies an ancestor/descendant relationship. With a descendent selector, it isn't just children that will be styled, but all links that are inside something with the "introduction" class, no matter how deep it's nested.

You can also have more than one descendant in a list.

```css
.introduction ul li {
    margin-left: 1em;
}
```

In this case, li's that are inside ul's that are inside elements with the class "introduction" will be styled.

Keep in mind though, the longer you make these chains, the more specific they get and hence become difficult to overwrite later on.

### Child Selector

Since using the descendant selector (a space) targets all the descendants, the need arises to target just the immediate children of an element. We use the greater than symbol for this (`>`).

```css
.introduction > a {
    color: tomato;
}
```

In this case, only `<a>` tags that are the _immediate children_ of elements with the class "introduction" will be targeted.

### Sibling Selectors

#### Adjacent Sibling

The plus (`+`) sign indicates an adjacent sibling. Given the following CSS...

```css
h2 + p {
    font-size: 1.5em;
}
```

...would apply the rule-set to  any `<p>` element that appears _directly after_ an `<h2>`. These only work forwards though, you couldn't target `<h2>`s that occurred before a `<p>`.

#### General Sibling

The `~` character lets us target general siblings.

```css
h2 ~ p {
    font-size: 1.5em;
}
```

That selector would target any `<p>` elements that were siblings of an `<h2>`. It still only works forwards though. For example...

```html
<p>text ...</p>
<h2>Heading</h2>
<p>text ...</p>
<p>text ...</p>
```

... only the last two paragraphs would be targeted.

## Attribute Selectors

You won't use these much as a beginner, but Attribute Selectors are worth mentioning because they're really powerful. 

We'll just look at one really simple example, you can dig in deeper if you'd like by reviewing the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```css
a[href="https://example.org"] {
  color: green;
}
```

The syntax here is `selector[attribute="value"]`. The above CSS would select any link on your page with the exact `href` value of "https://example.org". 

You can also check for the simple existence of an attribute like...

```css
a[class] {
  color: purple;
}
```

This would select any `<a>` tag that had a class set. Even if the class attribute was empty. There are more practical examples, but, they would involve HTML we've not covered yet.

## Pseudo classes

### Link States

Anchor links get to use some special selectors called "Pseudo Classes." Because your browser keeps track of your history, every URL has a state, it's either not visited, visited, or active (being pressed). You can style these states like so...

```css
a {
    color: blue;
}
a:active {
    color: lightblue;
}
a:visited {
    color: gray;
}
```

### Hover

There's also a really cool pseudo selector that works on links called "hover". This allows us to change styles as users hover the mouse cursor over our links.

```css
a:hover {
    color: red;
}
```

But, hover actually works on just about any element, allowing us to do things like...

```css
div:hover {
    background-color: yellow;
}
```

One of the main pitfalls of hover is that it's works differently on touchscreens. There's no such thing as hover on a touch screen device, so it should never be used to hide and show content.

### Focus

The focus pseudo class is mostly for form elements and buttons. If you click into a text field, that field has focus.

```css
input:focus {
    border-color: blue;
}
```

### Child Selection

Given the following HTML...

```html
<div class="content">
    <p>Lorem....</p>
    <p>Lorem...</p>
    <p>Lorem...</p>
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>
</div>
```

...there are several pseudo selectors that allow us to pick elements based on their order. 

`first-child` lets us pick the first element when it's the first child of its parent.

```css
.content p:first-child {
    font-size: 1.5em;
}
```
This only works if the paragraph element is the first element directly inside that container. To select the first paragraph, even if there was something else before it, we can use `first-of-type` or `last-of-type`.

There's also `last-child`, which works similarly...

```css
.content p {
    border-bottom: 1px solid gray;
}
.content p:last-child {
    border-bottom: none;
}
```

Both of these can be really useful for building things like borders and margins you want in-between items, but not on the first or last item.

A more complicated one is `nth-child`. It allows us to pass formulas in to select different repeating patterns of elements. We can also pass in the keywords "odd" or "even"

```css
ul li:nth-child(odd) {
    background-color: #eee;
}
```

The best way to get a feel for what you can do with `nth-child` is to check out a few links from CSS Tricks...

[Useful :nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/)

[:nth Tester](https://css-tricks.com/examples/nth-child-tester/)

There is also `only-child` which will only select an item if it is the only child of its parent. 

```css
li:only-child { 
    margin-top: 1em;
    margin-bottom: 1em;
}
```

That CSS would only work on an `<ul>` or an `<ol>` if they only had one `<li>` inside.


<!-- Multiple classes
We can also add more than one class on to a tag. The way we do this is
by using a space between the two class names:
<p class="highlighted large">
I’m a large and highlighted paragraph
</p>
We can now select this style by using either class name. Both “p.highlighted”
and “p.large” will select this tag. We could also be incredibly
particular and select any paragraphs with both classes by adding to
our CSS:
p.highlighted.large {
font-size: 24px;
background-color: yellow;
} -->

## Resources

[Selector Quiz](https://codepen.io/pehaa/pen/ROapJZ)