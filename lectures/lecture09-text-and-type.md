# CSS Text Properties and Typographic Guidelines

In this lecture, we will focus on CSS properties that are primarily for text and typography styling as well as some general typography guidelines

## Weight

To make a font bold, we give it a font-weight:

```css
p {
  font-weight: 700;
}
```

This number references a family weight. There are essentially nine weights to choose from:

- 100 thin
- 200 extra light
- 300 light
- 400 regular
- 500 medium
- 600 semi bold
- 700 bold
- 800 extra bold
- 900 black

The above is just a guide, when installing webfonts (which we will review in depth later) you will need to look closely at the font files in question, each weight of the font should correspond to one of these numbers. If your font does not include an extra bold, then setting 800 won't do anything, it will default to the nearest one it can find.

You can also use font keywords: `normal` and `bold`. This works when you are either just quickly experimenting, or if you are using a font that really only has two weights.

## Family

To change the typeface, you will change the font’s family:

```css
p {
  font-family: Arial;
}
```

By default, you can only use fonts that are already installed on the user's machine. How do you know what font's the user has? You don't. In the early days of the web, we had to pick a safe font that we could assume a lot of people had on their computers like Arial, Georgia, Helvetica and Times New Roman. This was pretty limiting, but a lot of clever designers managed to be creative regardless. *Webfonts* have changed all that, but we're not quite ready to dive in to all the ins-and-outs of installing them yet.

### Font "Stacks"

You can also stack your font list, and the browser will go down the list until it finds a font it can use. Now that we can use webfonts, this is usually implemented as a "Just in case" feature. As in, "just in case my fonts are broken or otherwise don't load." 

```css
p {
  font-family: "My Font", BackupFont, Helvetica, Arial, sans-serif; /* Use Quotes around font names with spaces */
}
```

The "sans-serif" is just a generic catch-all that the operating system will use to pick its default sans-serif font. You can use `sans-serif`, `serif`, `cursive`, or `monospace`. It's usually a good idea to include this, again, just in case.

Again, We’ll talk later about how to add web fonts to your site.

## Italics

To make the font italic, we'll use the `font-style` property:

```css
p {
  font-style: italic;
}
```

To overwrite an italic font and make it normal again:

```css
p {
  font-style: normal;
}
```

## Leading or line heights

To change the leading, we use the `line-height` property.

```css
p {
  line-height: 1.5;
}
```

In this case, if the font size was 16px, the leading would be 16 &times; 1.5 = 24px. You can also specify units for line-height like ems or pixels, but the ratio is preferable. You can set it at a default value for all elements of a certain type, and it will scale if you change the font size on a subset of those elements.

## Letter spacing or tracking

To change the distance between characters in a text, we can change the `letter-spacing` property.

```css
p {
  letter-spacing: 1px;
}
```

The above code would add an additional pixel between every character. You can also use negative values to tighten the letter spacing.

### Tracking to letter-spacing

Computing how to translate tracking in an Adobe program to letterspacing in CSS is a bit tricky, but you can follow this formula. 

Illustrator Tracking = 100 = 0.1em. 

```css
p {
  letter-spacing: 0.1em; /* tracking of 100 */
}
```

This is rough though, and relates to the font-size in unpredictable ways, best to use your eyeball as well.

## Aligning text

```css
p {
  text-align: left;
}
```

Here, there are four different values you can use: `left`, `center`, `right` and
`justify`.

Be very careful with Justify. The reason Justify works in Adobe programs is because they have complex algorithms to figure out where to break the text. Your browser is not as sophisticated, and will not produce the best results. 

## Underlining

To control underlines, you can use the `text-decoration` property.

```css
p {
  text-decoration: underline;
}
```

To get rid of the default underlines on links, you can add:

```css
a {
  text-decoration: none;
}
```

But again, consider whether you should use or turn off underlining carefully, in reference to what we discussed in the [Clickability and Affordance lecture](/lectures/lecture04-clickability-and-affordance.html).

## Controlling case

It's always best to make all caps in your CSS, rather than typing all-caps into your HTML. That way, if you want to change it later, you can. To change, use the text-transform property.

```css
p {
  text-transform: uppercase; /* you can also use lowercase here */
}
```

You could also make each first letter capitalized too, but keep in mind, it's not "smart" and will capitalize every word, including "a", "the", etc.

```css
p {
  text-transform: capitalize;
}
```

## Vertical alignment

We'll deal with vertical alignment in layout when we talk about Flexbox, but there is a `vertical-align` property that only works on elements that are _inline_ or _inline-block_. It only really works when you are mixing text of different sizes.

```css
a {
  vertical-align: top;
}
```

<p style="font-size: 20px;">Vertical alignment example: <a href="#" style="font-size:14px;vertical-align: top;">This link is vertically aligned top</a></p>

You can also use "middle", "bottom", "baseline", or provide a value. 

```css
a {
  vertical-align: 10px;
}
```

This can be useful for styling superscripts and subscripts.

## Hierarchy and scale

Determining hierarchy and scale to your type designs can be tough, as you probably experienced in other design classes, and Project 1A of this class. Whatever your process is, it's good to at least _have_ a process. I find it useful to adopt someone else's scale or a previous design of your own and then make adjustments for your typeface choices and style. 

Google's **Material Design** [typography system guidelines](https://material.io/design/typography/the-type-system.html) are extremely useful to remind yourself of what kinds of text elements you should design for on a large project. 

Here's a great resource discussing scale and measer in Responsive Design: [A More Modern Scale for Web Typography](http://typecast.com/blog/a-more-modern-scale-for-web-typography)

## Text legibility

Google's Material [design guidelines for legibility](https://material.io/design/color/text-legibility.html#legibility-standards) are also pretty useful (even though they are more geared to app design than websites).

Remember, the web shares a lot of principles with other graphic design disciplines, but there are also a lot of patterns and specifications people are used to, if you deviate, make sure you have a good reason. 

Apple and Google, for better or for worse, are some of the thought leaders and influencers when it comes to these patterns. They create apps and sites that people use all of the time, nearly daily. And other companies reference their design guidelines simply because it makes it easier for the user to not have to re-learn new user-interface queues for every new app or website. 

But it's not just the patterns that make these guidelines useful, the people at these companies have spent more time thinking about this stuff than you have, so I encourage you to learn from their work. Just keep in mind that they are guidelines, and don't apply to every solution.

## The line break tag

There's a tag called `<br>` that lets you break a line of text. You can use it when you don't need space between something, but the word breaking matters. For instance, when writing something like an address. _Sometimes_ you can get away with using it to finesse line breaking on a headline. Just make sure to test and make sure it works responsively.

> The HTML `<br>` element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

> The `<br>` element has a single, well-defined purpose&mdash;to create a line break in a block of text. As such, it has no dimensions or visual output of its own, and there is very little you can do to style it.

> Accessibility concerns

> Creating separate paragraphs of text using `<br>` is not only bad practice, it is problematic for people who navigate with the aid of screen reading technology. Screen readers may announce the presence of the element, but not any content contained within `<br>`s. This can be a confusing and frustrating experience for the person using the screen reader.

> Use `<p>` elements, and use CSS properties like margin to control their spacing.

&mdash;MDN 

Essentially, **do not use the `<br>` tag to create whitespace between items**. It does not give you the fine control over spacing you probably need. Use margin and padding on your CSS elements instead.

## Resources

[CSS Reference for Typography](https://cssreference.io/typography/)