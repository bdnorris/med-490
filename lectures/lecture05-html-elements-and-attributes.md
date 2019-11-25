# HTML Elements and Attributes

This is not a comprehensive guide of **every** HTML element, but, the ones you will use most often. 

## Inline vs Block

Every HTML element has a default "display" property, either "inline" or "block". 

### Inline

Inline elements behave like text. They sit next to each other, and honor whitespace to the left and right. They will respect left and right margins and padding, but not top and bottom. They cannot have width and height set. We'll discuss this more when we talk about the "Box Model."

### Block

Block elements force a line break whenever they're used and by default, expand to the full width of their container. You can set width, height, and margin and padding on all sides. 

### Setting via CSS

The browser has a default for each element, but you can overwrite this by setting these propertes, as well as other display properties, in CSS.

```css
display: block;
display: inline;
display: inline-block; /* combination of above, sets items next to each other "inline" but honors all heights, widths, margins, and paddings. */
display: none; /* removes the item from the layout entirely */
display: flex; /* flexbox layout, we'll discuss later */
display: grid; /* grid layout, we'll discuss later */
```

We'll discuss the `display` property in more detail later.

### Examples

In this example, the `<p>` tag is _block_, but the `<span>` tag is _inline_.

<p><span style="font-weight: 600;">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

```html
<p><span style="font-weight: 600;">Lorem ipsum dolor sit amet,</span> 
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

**But, if I overwrite the default behavior of span via CSS...**

<p><span style="display: block;font-weight: 600;">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

```html
<p><span style="display: block;font-weight: 600;">Lorem ipsum dolor sit amet,
</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

## Typographic elements

### Headings
`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` are our heading tags. H1 indicates the highest in the hierarchy and by default will be set to the largest size. Headings also all have `font-weight: bold` applied to them. They are **block** elements that by default will have margins set above and below.

### Paragraphs
The `<p>` tag is what we use to markup our paragraphs. They are **block** elements that by default will have some margin set above and below. 

### Strong, Em
In the early days of the web, we used tags called `<bold>` and `<italic>`. But, as the web has progressed, moving our style decisions out of our HTML has been a goal. The idea being, HTML should describe the content, and CSS should be doing all of the styling. So, those tags were replaced by `<strong>` and `<em>`. 

`<strong>` by default is **bold**. However, you could re-style this tag to simply be a different color, or, even italic and bold, and the meaning of the tag still makes sense. 

`<em>` stands for "emphasis" and is italic by default, but of course, can be re-styled however you like. Both of these tags are **inline** elements.

### Span
`<span>` is a generic tag used to separate some section of text. You can add a class and style it easily (change color, weight, etc.). It is **inline** by default.

### Mark
The `<mark>` tag is kind of like a highlighter for your HTML. By default, it sets a bright yellow background for your text.

### Sup and Sub
`<sup>` and `<sub>` are for superscript and subscript, respectively. The default styles for these will usually work. They are **inline** by default.

### Lists

We looked at lists a bit before. They are a nested element made up of a wrapper, and items inside. They are really useful for organizing items, but they have a lot of default styles that need to be overwritten.

`<ul>` stands for "Unordered List." By default, these are bulleted.

`<ol>` stands for "Ordered List." By default, these are numbered.

Both are **block** tags. 

You nest `<li>` tags, "List Items", inside these. List items are **block** elements as well. 

## Organizational

There are a bunch of tags we can use to organize our content that don't have any default styling. They come with some meaning but are still very flexible. All of these tags are **block** by default.

On some of these, I'm just going to include the actual specifications from the [W3C](https://www.w3.org). However, the specs are not hard rules, and you can technically repurpose these tags if you'd like. But pay attention to how assistive technologies (primarily, but not limited to screen readers used by the blind) use these tags. It would be inappropriate and unfortunate to use a `<nav>` tag for something other than navigation. Keep in mind, if it's true for assistive technologies, it's probably also true for search engine optimization.

The W3C is a non-profit group that decides on web coding standards. The standards they decide on are the ones the browser makers implement. If HTML and CSS seem sometimes like they were designed by committee, it's because they were. 

### div

The main generic tag is a `<div>` for "division." It has no default styling. When in doubt, use a `<div>`.

Divs are also good for when you want to hold some text, but you don't want to use a `<p>` or a heading.

### section

> The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading (h1-h6 element) as a child of the section element.

### article

> The article element represents a complete, or self-contained, composition in a document, page, application, or site. This could be a magazine, newspaper, technical or scholarly article, an essay or report, a blog or other social media post.

> A general rule is that the article element is appropriate only if the element’s contents would be listed explicitly in the document’s outline. Each article should be identified, typically by including a heading (h1-h6 element) as a child of the article element.

### aside

> The aside element represents a section of a page that consists of content that is tangentially related to the content of the parenting sectioning content, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

> The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of nav elements, and for other content that is considered separate from the main content of the nearest ancestor sectioning content.

### nav

> The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

> Assistive Technology may convey the semantics of the nav to users. This information can provide a hint to users as to the type of content. For example the role of the element, which in this case is "navigation", can be announced by screen reader software when a user navigates to an nav element. User Agents may also provide methods to navigate to nav elements.

A simple `<nav>` tag might look something like...

```html
<nav>
    <a href="about.html">About</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
</nav>
```

### header

> The header element represents introductory content for its nearest ancestor main element or sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids.

> When a header element’s nearest ancestor sectioning root element is the body element, and it is not a descendant of the main element or a sectioning content element, then that header is scoped to the body element and represents introductory content for the page as a whole.

The header, in this case, can be the header of the site, but it might also be the header of an article, so, you can have more than one header per page.

### footer

> The footer element represents a footer for its nearest ancestor main element or sectioning content or sectioning root element. A footer typically contains information about its section, such as who wrote it, links to related documents, copyright data, and the like.

> A footer element can also contain entire sections representing appendices, indexes, long colophons, verbose license agreements, and other such content.

Similar to the header, this tag can be used for the page footer, but it can also be used for the footer of a smaller component, leading to there being more than one footer per page.

## Grouping HTML tags

You can use the above organizational tags to group your content. This is most useful for layout, which we'll talk more about later, but also, to organize style rules for your site. For instance, lets say globally on your site, `<h1>` tags should be 24px high. But, if an `<h1>` tag is inside an `<article>` tag you want it a bit smaller, your code might look something like...

```html
<h1>Global Heading</h1>

<article>
    <h1>Heading Inside an Article</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.</p>
</article>
```

```css
h1 {
    font-size: 24px;
}

article h1 {
    font-size: 20px;
}
```

## "Semantic" markup

You'll notice a lot of the tags are named relating to a role they perform. The general idea with having two code language, HTML and CSS is that they perform different functions. HTML tags should describe what the content means and what the content's role is, not how they look. That's for CSS. 

So when marking up your HTML, your goal should be to describe the content as accurately as possible using the tags available to you. Then you can describe how it looks with CSS.

This is a goal and a principle, it will not always work out perfectly, and that's ok. Sometimes you will use a tag inappropriately. That's ok, it will work. It happens, but keeping in mind our goal of keeping things "Semantic" (relating to meaning) will help us keep our code clean and sane and easier for machines and people to read.

## Further structure with classes

You'll define further structure by giving all the above tags classes. We'll talk more about this, but for now, just note that all of these tags, and more, can have a class attribute added to them, and more than one class can be added to each, separated by spaces. Class naming can be tricky. Keeping your classes semantic will give you a lot of flexibility, but you'll also likely use classes that are just named after the intended visual style.

**Defining classes and writing CSS to support them is the main task of a front-end developer.**

```html
<div class="my-section my-special-section">
    <!-- content -->
</div>

<div class="my-section padded">
    <!-- content -->
</div>
```

Keeping your HTML semantic and meaningful will also make your CSS cleaner and more readable. When in doubt, keep in mind... <mark>classes for styling, tags for meaning.</mark> That doesn't mean you don't style your tags, you do, but classes let you define your own context, whereas tags are universal and used by every website.

## Also, IDs.

There's another attribute you can use called an "Id". In theory, IDs should only be used once per page. They look like...

```html
<div id="this-one-thing" class="my-regular-section my-special-section">
    <!-- content -->
</div>
```

However, there's nothing preventing you from using duplicate IDs so it can lead to mistakes. Generally, I think you can avoid using IDs for now, and focus on meaningful and smartly written classes. If you do need to style ONE thing on a page differently, you can use an ID in CSS like...

```css
#my-id {
    /* my rules */
}
```

But, there is a specificity problem here, that we will discuss in a future lecture.