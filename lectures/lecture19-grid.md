# CSS Grid

Similar to Flexbox, but with two dimensions at once, the Grid specification allows true flexible layouts, combining both the best aspects of responsive design and traditional page layout.

## Caveats

I've hesitated a lot on whether this is the right course and the right time to dig into the CSS Grid specification. However, after working through examples of how to do layout with Flexbox, I've realized a lot of my techniques, although resilient and useful, are difficult to explain. Grid solves a lot of these problems.

There are two reasons I hesitated, one is the size of the Grid specification. There are so many properties, new units, and completely new syntax that you don't see in other CSS properties.

The other is that it's so new. Partly this leads to a lack of patterns of the kinds of things you can do with Grid. But the biggest reason is that there is virtually no support in older browsers. Because of this, I simply don't have very much experience with Grid, because supporting Internet Explorer and older versions of Safari isn't optional in my work. 

However, Grid is just too powerful, too useful, and I'm deciding to bet on the idea that as students who are new to CSS, Grid is a more straight-forward way to layout web pages.

## History

[The Story of CSS Grid from its Creators](https://alistapart.com/article/the-story-of-css-grid-from-its-creators)

Historically, new features of HTML, CSS or Javascript are slow to be implemented. One reason is that the specifications can take a while to get standardized. Flexbox suffered from this, leading to older browsers using different versions of it. Usually, different browser makers all have to implement a feature before a developer can safely use that feature, especially when it's a layout feature. 

The people trying to define the Grid spec wanted to avoid the same mistakes that were made with Flexbox. Everything came out relatively fast as a fully-formed whole, hitting up-to-date browsers in a complete state. The folks at Microsoft actually spearheaded this movement, mostly so they could build more stuff with web technologies. 

[CanIUse: Grid](https://caniuse.com/#search=grid)

Now, with pretty good support, Grid is ready...if you don't have to support Internet Explorer. 

## To Flexbox or to Grid

The main difference between Flexbox and Grid is that although we have the `flex-wrap` property, Flexbox was really only ever meant to work in one direction. Grid is meant to work in two directions, with both columns and rows. 

One thing that Grid can do is it can let you assign content to areas of the grid regardless of that items order in your HTML. This would allow you to prioritize mobile for your HTML order, but really change stuff on larger screens. 

Another thing Grid comes with is it's own explicit gutter property called `grid-gap`. This is really nice, since using margins and paddings with Flexbox can be painful.

Grid doesn't necessarily replace Flexbox, sometimes flexbox is easier. But when you find yourself straining to make Flexbox work, Grid might be your answer.

Here's a great wrap-up of thoughts on when to use each...

[To Grid or to Flex](https://css-irl.info/to-grid-or-to-flex/)

## How to Grid

Instead of covering the entire Grid specification, I'm going to focus on the most used and most useful properties. In the next lecture, we'll look at some practical uses for these. It will be up to you to go further with Grid if you want, there are a ton of resources at the end of this lecture.

Remember the CSS Tricks article showing all of the Flexbox properties? Well, check out the one for Grid...

[CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Any quotes in this lecture that aren't referenced are from the above CSS-Tricks guide.

> CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

It's huge, there really is a lot here. Let's dig in...

## Terminology

Similar to Flexbox, Grid follows a parent child relationship. We'll refer to the parents as **Grid Containers** and the children as **Grid Items**.

One slightly confusing thing about Grid is the idea of lines. **Grid Lines** are numbered and referenced in your code and keeping track of them can be tricky.

> The dividing lines that make up the structure of the grid. They can be either vertical ("column grid lines") or horizontal ("row grid lines") and reside on either side of a row or column.

![Grid Line](/assets/img/grid/terms-grid-line.svg)

**Grid Track** The "track" is actually referencing the column or the row.

> The space between two adjacent grid lines. You can think of them like the columns or rows of the grid.

![Grid Track](/assets/img/grid/terms-grid-track.svg)

**Grid Cell** A unit made up of the intersection one column and one row.

> The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid.

![Grid Cell](/assets/img/grid/terms-grid-cell.svg)

**Grid Area** The actual item in the grid you place your content into. An area can be one cell, or multiple cells.

> The total space surrounded by four grid lines. A grid area may be comprised of any number of grid cells.

![Grid Area](/assets/img/grid/terms-grid-area.svg)

## Grid Examples

[Example CodePen for this Lecture](https://codepen.io/bdnorris/pen/XGYQXo)

## Grid Containers

<!-- We'll use the following HTML for these examples.  -->

<!-- ```html
<div class="parent-container">
  <div>lorem</div>
  <div>lorem ipsum</div>
  <div>lorem ipsum dolor</div>
  <div>lorem ipsum dolor sit</div>
  <div>lorem ipsum dolor sit amet</div>
  <div>lorem ipsum dolor sit amet consectetuer</div>
  <div>lorem</div>
  <div>lorem ipsum</div>
  <div>lorem ipsum dolor</div>
</div>
``` -->

You can create a grid container simply by setting the `display` property to `grid`.

> Defines the element as a grid container and establishes a new grid formatting context for its contents.

```css
.parent-container {
  display: grid;
}
```

The most used properties on grid containers are `grid-template-columns` and `grid-template-rows`.

> Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

```css
.parent-container {
  grid-template-columns: 50px auto 80px 100px;
  grid-template-rows: 5em 200px;
}
```

Basically, we define a space-separated list of values for the columns, then the same for rows. Additional items will be pushed onto new rows, and those new rows will get the `auto` value.

Like the Flexbox's `flex-basis` property, we can use the keyword `auto`. Columns and rows will expand to fill the available space.

<!-- <div class="parent-container" style="display:grid;grid-template-columns:50px auto 80px 100px;grid-template-rows: 5em 200px;">
  <div style="border: 2px solid #ccd">lorem</div>
  <div style="border: 2px solid #ccd">lorem ipsum</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit amet</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit amet consectetuer</div>
  <div style="border: 2px solid #ccd">lorem</div>
  <div style="border: 2px solid #ccd">lorem ipsum</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor</div>
</div> -->

### The fr Unit

We get to use a new unit in grid called `fr` which stands for "fraction" or "fractional". We can use to very explicitly state how much of the remaining space we want to our columns or rows to use.

If we set three columns in the following way...

```css
.my-grid {
  grid-template-columns: 100px 2fr 1fr;
}
```

Lets say our grid container is 1000px wide. The first column will be set explicitly at 100px. That leaves 900px that will be divided for the rest of the columns. 600px for the second one and then 300px for the first one. However, if our site is responsive, and the parent container changes size, that first column will stay at 100px wide. The second and third columns will flex, the second one always remaining twice the size of the first.

[CSS-Tricks: Introduction to the fr Unit](https://css-tricks.com/introduction-fr-css-unit/)

### The Auto keyword

On the previous examples, we can also use the `auto` keyword.

```css
.my-grid {
  grid-template-columns: 100px auto auto;
}
```

A column or row set to auto adjusts the width or height of the grid item to the max width/height of its content. That means that the element auto sizes the column. 

### Functions

There are some new "functions" in grid that allow us add some flexibility and write a little bit less code.

#### minmax()

`minmax` is basically like setting max-width/height and min-width/height on our grid items. 

```css
.my-grid {
  grid-template-columns: 100px 1fr minmax(100px, 300px);
}
```

Our third column here will flex between 100px and 300px depending on the rest of our columns and our total available space.

#### repeat()

The repeat function lets us type a little less. 

```css
.my-grid {
  grid-template-columns: 100px repeat(4, 1fr);
}
```
The repeat function lets us define 4 `1fr` columns. It would be the equivalent of `grid-template-columns: 1fr 1fr 1fr 1fr;` Not a huge deal for 4, but it's nice if we wanted 10 or 12 or more.

### Content

Grid also lets us size columns based on the content in different ways. It's mostly useful for text. It works on rows too???

#### min-content

```css
.my-grid {
  grid-template-columns: min-content repeat(3, 1fr);
}
```

Our first column using `min-content` would size itself based on the longest word, or otherwise the widest piece of content inside it.

#### max-content

```css
.my-grid {
  grid-template-columns: max-content repeat(3, 1fr);
}
```

Our first column using `max-content` would size itself based on all of the content. This would ensure text was placed on one line and never break for that column (unless we ran out of space on our page).

### Aligning content

`align-items`

> Aligns grid items along the block (column) axis (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container.

- start - aligns items to be flush with the start edge of their cell
- end - aligns items to be flush with the end edge of their cell
- center - aligns items in the center of their cell
- stretch - fills the whole height of the cell (this is the default)

`justify-items` ...

> Aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the block (column) axis). This value applies to all grid items inside the container.

- start - aligns items to be flush with the start edge of their cell
- end - aligns items to be flush with the end edge of their cell
- center - aligns items in the center of their cell
- stretch - fills the whole width of the cell (this is the default)

### Aligning the grid

These align the grid itself.

`justify-content`

> Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the inline (row) axis (as opposed to align-content which aligns the grid along the block (column) axis).

- start - aligns the grid to be flush with the start edge of the grid container
- end - aligns the grid to be flush with the end edge of the grid container
- center - aligns the grid in the center of the grid container
- stretch - resizes the grid items to allow the grid to fill the full width of the grid container
- space-around - places an even amount of space between each grid item, with half-sized spaces on the far ends
- space-between - places an even amount of space between each grid item, with no space at the far ends
- space-evenly - places an even amount of space between each grid item, including the far ends

`align-content`

> Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the block (column) axis (as opposed to justify-content which aligns the grid along the inline (row) axis).

- start - aligns the grid to be flush with the start edge of the grid container
- end - aligns the grid to be flush with the end edge of the grid container
- center - aligns the grid in the center of the grid container
- stretch - resizes the grid items to allow the grid to fill the full height of the grid container
- space-around - places an even amount of space between each grid item, with half-sized spaces on the far ends
- space-between - places an even amount of space between each grid item, with no space at the far ends
- space-evenly - places an even amount of space between each grid item, including the far ends

### Areas

> Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

The `grid-template-areas` is really amazing, and also the strangest syntax choice in Grid. It lets you define names for content areas of your grid, then later, assign items (grid children) to those areas by name.

```css
.my-grid {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

You can use `.` to define an empty area. Quotes are needed, because here, whitespace matters. Each set of quotes defines a row, and the spaces define a new column.

Then, on the Grid Items...

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

...to assign the items to the named areas. 

By the way, you can name "lines" this way too, not just areas, but I feel like this is much more useful.

### Gaps

> Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

`grid-gap` is a wonderful property that defines the size of the "lines", but we can think of it as defining our "gutters". 

You can define rows and columns separately, or you an use one property to define them both.

```css
.container {
  grid-row-gap: 1.5em;
  grid-column-gap: 0.75em;
  grid-gap: 1.5em 0.75em;
  grid-gap: 1em; /* sets both */
}
```

> The gutters are only created between the columns/rows, not on the outer edges.

Grid gaps do not affect your `grid-template-columns` or row settings. If you set 10px as the gap, your 100px column will remain 100px. 

## Grid items

### Placing items

> Determines a grid item's location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the item ends.

- _line_ - can be a number to refer to a numbered grid line, or a name to refer to a named grid line
- span _number_ - the item will span across the provided number of grid tracks
- _auto_ - indicates auto-placement, an automatic span, or a default span of one

[Grid Item Placement](https://gedd.ski/post/grid-item-placement/)

These properties let you specify how your Grid items span over rows and columns. 

`grid-column-start`
`grid-column-end`
`grid-row-start`
`grid-row-end`

Or, you can use the shorthand properties with slashes (`/`) to specify both.

`grid-column`
`grid-row`

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

There's also `grid-area` of course, noted previously.

### item alignments

`justify-self`

> Aligns a grid item inside a cell along the inline (row) axis (as opposed to align-self which aligns along the block (column) axis). This value applies to a grid item inside a single cell.

- _start_ - aligns the grid item to be flush with the start edge of the cell
- _end_ - aligns the grid item to be flush with the end edge of the cell
- _center_ - aligns the grid item in the center of the cell
- _stretch_ - fills the whole width of the cell (this is the default)

`align-self`

> Aligns a grid item inside a cell along the block (column) axis (as opposed to justify-self which aligns along the inline (row) axis). This value applies to the content inside a single grid item.
 
- _start_ - aligns the grid item to be flush with the start edge of the cell
- _end_ - aligns the grid item to be flush with the end edge of the cell
- _center_ - aligns the grid item in the center of the cell
- _stretch_ - fills the whole height of the cell (this is the default)

## Back to the parents for a second...

### Implicit vs. Explicit

We won't go too deep into this, but we need to acknowledge the Implicit grid.

> Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid.

Basically, if you have more items than can fit in your explicit grid, rows or columns are added.

[The Difference Between Explicit and Implicit Grids](https://css-tricks.com/difference-explicit-implicit-grids/)

### Auto columns and rows

`grid-auto-columns`

`grid-auto-rows`

> Specifies the size of any auto-generated grid tracks (aka implicit grid tracks).

```css
.container {
  grid-auto-columns: 60px;
  grid-auto-rows: 60px;
}
```

### Flow

`grid-auto-flow`

> If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.


- _row_ - tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
- _column_ - tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
- _dense_ - tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

`dense` is pretty cool, but...

> Note that dense only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

### Gutters aka "Gaps"

We get some new features to define our gutters, and since we're not using margin, they only show up between columns and cells, just like you would expect.

```css
.parent-container {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
```

> The gutters are only created between the columns/rows, not on the outer edges.

### Inspecting in the browser

Firefox is our best tool for inspecting our grid. It allows you to turn on lines and see lines, gaps, and tracks with labeling.

[CSS Grid Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)

## Summary

It's not necessarily important for you to become an expert in this, or to memorize these properties, what's important, especially in your role as a designer, is that you take away from Grid, Flexbox and other layout principles what is possible to do on the web.

## Resources

From the same people as Flexbox Froggy, teaches you grid properties and values through a gardening game. 
[CSS Grid Garden](http://cssgridgarden.com/)

Real world patterns for using grid to achieve different layouts.
[Grid by Example](https://gridbyexample.com/)

[Codrops Grid Guide](https://tympanus.net/codrops/css_reference/grid/)

[CSS Grid (Mozilla)](https://www.mozilla.org/en-US/developer/css-grid/)

### Jen Simmons

Jen has a lot of good grid information:

[Learn CSS Grid](http://jensimmons.com/post/feb-27-2017/learn-css-grid)

<!-- [The benefits of learning how to code layouts with CSS Grid](http://jensimmons.com/post/feb-28-2017/benefits-learning-how-code-layouts-css) -->

- [9 Biggest Mistakes with CSS Grid](https://www.youtube.com/watch?v=0Gr1XSyxZy0)
- [Flexbox vs. CSS Grid — Which is Better?](https://www.youtube.com/watch?v=hs3piaN4b5I)
- [Min & Max Content Sizing in CSS Grid — 1/3 Flexibility](https://www.youtube.com/watch?v=lZ2JX_6SGNI)
- [FR Units in CSS Grid — 2/3 Flexibility](https://www.youtube.com/watch?v=ZPtpzuRajzM&ut=)
- [MinMax in CSS Grid — 3/3 Flexibility](https://www.youtube.com/watch?v=mVQiNpqXov8)
- [Flexibility & The Fold – new possibilities with CSS Grid](https://www.youtube.com/watch?v=EEOJZy_Gge4)
- [Incredibly Easy Layouts with CSS Grid](https://www.youtube.com/watch?v=tFKrK4eAiUQ&t)
- [Responsive Mondrian – a demo of CSS Grid](https://www.youtube.com/watch?v=qNtJ5p3h2A4)
- [Internet Explorer + CSS Grid????](https://www.youtube.com/watch?v=7msERxu7ivg&t=1s)
- [Why I love CSS Grid - by Jen Simmons](https://www.youtube.com/watch?v=tY-MHUsG6ls)
- [Revolutionize Your Page: Real Art Direction on the Web](https://aneventapart.com/news/post/real-art-direction-on-the-web-by-jen-simmons-an-event-apart)

### Some more YouTube Tutorials and Talks

- [How to Create Website Layouts Using CSS Grid](https://www.youtube.com/watch?v=HgwCeNVPlo0)
- [CSS Grid Changes EVERYTHING - Amazing Presentation](https://www.youtube.com/watch?v=7kVeCqQCxlk)
  - [CSS Grid Changes Everything About Web Layouts (Slides)](https://www.slideshare.net/mor10/css-grid-changes-everything-about-web-layouts-wordcamp-europe-2017)
- [CSS Grid Layout by Rachel Andrew](https://aneventapart.com/news/post/css-grid-layout-by-rachel-andrewan-event-apart-video)

<!-- - [hey](https://www.youtube.com/watch?v=bI1wNuvuFxo) -->

### Other Links

[Progressively Enhancing CSS Layout: From Floats To Flexbox To Grid](https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/)

[Practical CSS Grid: Adding Grid to an Existing Design](https://alistapart.com/article/practical-grid)

Wes Bos is a prolific tutorial and web development course author. Normally he charges for his courses, but Mozilla sponsored his time to make a free CSS Grid course. If you want to really learn this, this is the course to take.

[Wes Bos Grid Course](https://cssgrid.io/)