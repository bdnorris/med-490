# Coding for Responsive Design and Media Queries

We've talked a lot about the design part of Responsive Web Design (RWD), but how do you code it? This is a pretty big subject, but the main key to making all of this work is the use of "media queries". Media Queries allow us to write our design breakpoints into our CSS. 

In the past most web design consisted of pretty much everything being set at a fixed width. Once a plethora of web-enabled devices started hitting the market "responsive" came along as the new web development buzzword. The thing was, a lot of the tools already existed. Flexible units like percentages had been in CSS from the beginning, and min-width and max-width were introduced in IE 7. Media queries were the last needed piece. Without them, our designs couldn't "respond" to the width of the viewport. They were introduced as an official standard in June 2012 and were supported all major browsers. 

## Classic articles from 2010-11

[Responsive Web Design](https://alistapart.com/article/responsive-web-design)

[Guidelines for Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Most of the technique's listed here are pretty similar to what you would use today, with the exception being there was no Flexbox or Grid.

## Media queries

[Media Query Codepen](https://codepen.io/bdnorris/pen/dreZjy)

Media queries are the heart of responsive coding. They're how we set our breakpoints in our code. They let you turn particular CSS styles on and off depending on the size of the viewport.

```css
body {
	font-size: 14px;
}
@media screen and (min-width: 600px) {
	body {
		font-size: 16px;
	}
}
```

Our media query is a wrapper for our CSS. It starts with the @ sign, then the word "media". "screen" means we only want these styles to apply to screens, rather than print stylesheets (when you hit the print button). 

This CSS says our default font-size is `14px`. However, if the browser viewport is at least 600px wide the base font-size should be `16px`.

There's a lot you can do with media queries other than check viewport width, but we're going to stick to that for now. Here's a few options for how you could setup your media queries.

```css
body {
	font-size: 14px;
} 
@media screen and (min-width: 769px) {
	/* medium */
	body {
		font-size: 16px;
		color: blue;
	}
}
@media screen and (min-width: 1025px) {
	/* large */
	body {
		font-size: 18px;
	}
}
```

I'm since we're moving up with our sizes here, I'm adding one pixel to our breakpoints that the design was created at (768px and 1024px). If we were using `max-width`, we would use 768px and 1024px instead. More on this later.

There, we used two media queries to adjust our font size. But what about that `color` property? It would _cascade_ up to from 769px into our desktop. Our font-size will work because the large setting is **after** the medium styles, meaning it will overwrite them. If you want to limit a media query to a specific range, you'll have to use both `min-width` and `max-width` (this also means when someone hit's print, they're printing the mobile version).

You can think of min-width and max-width like the bookends of your CSS code. 

```css
body {
	font-size: 14px;
} 
@media screen and (min-width: 768px) and (max-width: 1023px) {
	/* medium */
	body {
		font-size: 16px;
		color: blue;
	}
}
@media screen and (min-width: 1024px) {
	/* large */
	body {
		font-size: 18px;
	}
}
```

Notice I didn't use `max-width: 1024px`, that would case our style sets to overlap on that one pixel width, which can be hard to notice when you make a mistake.

### Mobile-first

The order of our queries matter, styles further down our file will overwrite previous styles, if match the query.

I'm taking advantage of that and using a "mobile-first" coding approach...not to be confused with "mobile-first" design. Writing my CSS mobile first means I write my mobile styles outside my media queries, and write my medium, then large styles inside my media queries. I prefer this method, since mobile styles are usually simpler it means I'm less likely to have to write unnecessary overwrites.

## Retina Images

[Retina Images Codepen](https://codepen.io/bdnorris/pen/wOjmOq)

If you're on a "Retina" screen (Apple's branded name for pixel dense screens), you'll notice that images might look a little blurry.

> If you’re on a retina screen, for instance on a new iPhone or a new MacBook, you may notice your background images looking blurry
by default.

> Non-retina screens have three sub-pixels per pixel (one red, one green and one blue sub-pixel, remember the hex colors!). On retina screens, to make the screen look crisper, they have 12 sub-pixels per pixel (four red, four green and four blue). With images, each pixel always has three sub-pixels, so when you view a “normal” image on a retina screen, it’ll look a bit blurry. To fix this we need to double the size of the image to give it more definition on those screens.

&mdash; SuperHi

It looks blurry, because the pixel in the image needs to be split into 4 device pixels on the Retina diplay. Remember when we talked about pixels in the [Unit Lecture](lecture07-units.md)

So how do you fix this. Basically, we need to export our images at twice the size we are setting them in CSS. For responsive images, this might mean twice the size of it's _largest_ size that appears in the browser.

So, if we have an image that appears in the browser at 300px &times; 200px, we'll export it out of our design program, or otherwise size it to 600px &times; 400px. Then in our CSS, we could...

```css
.my-class {
	width: 300px;
	height: 200px; /* optional */
}
	.my-class img {
		width: 100%;
		height: auto;
	}
```

This would force the image's container to be half the size of the image, making our image sharp on a Retina screen. But be careful, we still need to watch our image's size. Sometimes you have to balance quality and file size to give an overall good experience to your user.

Remember, setting the style of the `<img>` tag here can be done globally, so images always fill their containers. In fact, height may not be necessary at all.

In the case of background images, we could do something similar. Let's say the biggest size the image will be in the browser is 2000px &times; 500px. We export an image that is 4000px &times; 1000px.

```css
.my-class {
	background-size: 2000px 500px;
	/* or */
	background-size: cover;
}
```

Explicitly setting the background size will keep the background size that size no matter what, even if it gets cropped by the container some, setting it to `cover` will make it fit the container, but either way, it will look sharp.

The importance of these techniques depend on the image. Some photographs and backgrounds may not need it. SVGs will never need it, since they're scalable by nature. You really want your graphics to look sharp, so using SVGs for icons and logos is recommended, or, double sized PNGs. 

Just remember, whatever type of screen you have, it's good to find other types of screens to view your website's on, so you can adjust and optimize. 


## Ems, Rems, Percentage and VW

[Relative Units Codepen](https://codepen.io/bdnorris/pen/oVddgj)

Now's where we bring back those relative units and see how we can use them with media queries.

### Ems and Rems

```css
html, body {
	font-size: 16px;
}

.my-container {
 font-size: 1rem; /* 16px */
}

	.my-container > button {
		padding: 1em;
		margin: 0 1em;
		font-size: 1.5em;
	}

@media screen and (min-width: 769px) {
	.my-container {
		font-size: 1.2rem; /* 19.2px */
	}
} 
```

By using Ems for my button's styles, I can easily change the context of that Em on it's parent to affect the sizing of the button overall, and make it larger for 769px and above. By using Rems, I'm still connecting the size to the root. I could also...

```css
html, body {
	font-size: 16px;
}
@media screen and (min-width: 769px) {
	html, body {
		font-size: 1.2rem; /* 19.2px */
	}
} 
```

But global changes could have side affects you don't intend, so use with care.

### Percentages

Using percentages for widths works really well. We can define our boxes in percentages to have control over how many items we have per row in a flexbox. The percentage is always in reference to the elements direct parent. I'll show you how that works in the next lecture. 

For heights though, I would avoid percentages. Heights of block elements depend on the content. A box with a certain width will naturally expand it's height to accomodate the content, but it doesn't work the other way around. So saying "height: 50%" only works if the parents height is set explicitly. Best to avoid it.

https://stackoverflow.com/questions/5657964/css-why-doesn-t-percentage-height-work

```css
.my-container {
	display: flex;
	flex-wrap: wrap;
}

	.child-element {
		width: 100%;
		flex-basis: 100%; /* we'll look at this closer in the next lecture */
	}

@media screen and (min-width: 769px) {
	.child-element {
		width: 50%;
		flex-basis: 50%;
	}
}
```

In the above code, I'm saying to make my flex children 100% wide, but for above 768px, only 50% wide (two per-row).

### VW and VH

[VW and VH Codepen](https://codepen.io/bdnorris/pen/aMGGZb?editors=1100)

Let's not forget our "Viewport Units." They make it easy for us to size things directly based on the viewport width, with or without media queries. Although the unit itself is essentially 1% of the viewport height or width, they are different from percentages, because percentages are related to the parent, whereas Viewport Units are relative to the viewport only.

```css
.my-container {
	width: 600px;
}

	.my-child {
		width: 50%; /* Here, we're saying make our box half of it's parents width, effectively 300px */
		width: 50vw; /* Here, we're saying make our box half of the viewport width, REGARDLESS of the parent's width */
	}
```

The also work better with heights. If you need to create a hero section that always fills the height of the viewport, regardless of that height, the `vh` unit is here to help.

```css
header {
	width: 100vw;
	height: 80vh;
}
```

Getting your content to look nice inside this is another issue.

We can also tie things like font-size to the viewport, making some responsive headlines (probably not body copy). 

```css
h1 {
	font-size: 18vw;
}

@media screen and (min-width: 769px) {
	h1 {
		font-size: 12vw;
	}
}

@media screen and (min-width: 1280px) {
	h1 {
		font-size: 3rem; /* although, you might not want to let it keep growing indefinitely */
	}
}
```

`vmin` and `vmax` are also useful sometimes. Essentially, they look at the height and the width of the viewport and take whichever one is smaller or larger.

There's a lot of interesting things you can do, check out this link for some ideas.

[CSS Tricks: Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)

## Resources

[RWD Guide from Google](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)


[Media Query Generator](http://giona.net/tools/css3-mediaquery-generator/)


