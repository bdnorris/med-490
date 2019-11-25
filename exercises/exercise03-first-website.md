# E3: Your first website

## Quick and minimal walkthrough of the bones of a website

In class: no points

## The limits of Codepen

As a class, we'll use Codepen a lot. It's convenient because we don't have to go through all of the set up we normally would to make a site. However, real websites require a lot of set up. We'll get more detailed later, but for this exercise, we will walk through the bare minimum that is required to make a real website that will run on pretty much any computer or server. 

Later, I'll point you to some base files you can use to get started on in the future, but for now, we'll walk through each piece so you will know what everything does.

## The document...what is HTML anyway?

A quick reminder of the "web front-end trinity": 
* HTML is the structure
* CSS is the style
* Javascript is the actions

This course will only be focusing on the first two, and this exercise is meant to get us going.

_HTML_ stands for Hypertext Markup Language. Every `.html` file can be referred to as a document. Hypertext refers to it's linking powers (which is why it's called "The Web"), and Markup refers to the idea that we're taking content (text and images) and "marking it up" with tags (defines the structure and _some_ presentation). The tags say what that particular piece of content is. A paragraph gets a _P_ tag, a heading gets an _H1_ tag, a sub-heading gets a _H2_ tag, etc. 

We can refer to the HTML file itself as a "document." It becomes clearer if you remember that the beginning of the web was just a network of computers sitting at major universities. HTML was just a language to easily make academic documents with the power of linking them together. Everything that happens on the web is an extension of that initial design.

## Where do I put it

All code files are more or less just text files. Technically, you could use Notepad or Text Edit, but you'll want to use a specialized code editor for several reasons. 

1. Syntax Highlighting (language awareness): Different color schemes for different parts of your code, making it easier to read.
2. Specialized functions geared towards writing code (rather than writing paragraphs)
3. Robust "Find and Replace" functions
4. Built-in or extendable preview tools
5. Many other features and tools

So your HTML just lives in a file, like `myfile.html`

It makes sense to name your HTML files in reference to the content, e.g. an about page would `about.html`.

There's a special filename called `index.html`. Pretty much every web server ever will show that file by default in a directory, and it won't clutter up the URL with the filename. We'll look at this more later.

## Required structure

- `<!DOCTYPE html>` 
- `<html>`
  - `<head>`
  - `<body>`

These are the key required elements that need to be present in every HTML file. The first item is called a "Doctype" declaration. HTML has went through a few iterations over the years. This simple doctype means "Hey browser, interpret this page as standard HTML." This tag is different than most, in that it doesn't need to be closed.

`<html>` is a wrapper for the whole page and `<head>` is where you put tags to load in CSS, set metadata describing the document, and a plethora of other items we'll discuss later. 

The `<body>` element is where the content you actually want to show up on the page lives. If you want it to show up, it has to be between the opening and closing `<body>` tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Hey there!</h1>
  </body>
</html>
```

## Hierarchy is key

```html
<body>
  <p>My paragraph text.</p>
</body>
```

> HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed `<p>` tags within `<body>` tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.

<!-- > In the example above, the `<p>` element is nested inside the <body> element. The `<p>` element is considered a child of the <body> element, and the <body> element is considered the parent. You can also see that we've added two spaces of indentation (using the space bar) for better readability. -->

> Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. The relationship between elements and their ancestor and descendent elements is known as __hierarchy__.

> Understanding HTML hierarchy is important because child elements can inherit behavior and styling from their parent element. You'll learn more about webpage hierarchy in when you start digging into CSS.

&mdash; Codecademy HTML (Introduction to HTML)

Note, we're talking about the hierarchy of the document, not necessarily _visual hierarchy_.

However you describe it, the nesting/hierarchy/parent-child relationships of our element is important. The first concern is describing the document. You want to section items off in a logical way. The second concern is styling and layout, which depend a lot on the relationships of your elements in HTML. 

## Getting started

Make an empty folder anywhere on your computer, then open that folder in your code editor. 

In your code editor, create a new file called index.html. Remember, naming our file index makes sure it's the default HTML file loaded on our site.

:::tip Filenames
It's best to keep your filenames "web-safe." URLs can only contain certain characters, so sticking to those is best. To be extra safe, use all lowercase, with no spaces or special characters. Use hyphens and underscores to separate words instead.
:::

Type `<!DOCTYPE html>` on the first line. Then add `<html>` opening and closing tags, then put `<head>`, and `<body>` opening and closing tags inside the `<html>` tag.

Next, put some kind of text element inside body, a heading and a paragraph. Doesn't matter what they are, we're just messing around.

Now, in the `<head>` tag, add a new tag called `<title>` and put some text inside it. The title isn’t displayed within the content, but you’ll see it in your browser tab and as your page’s headline in Google's search results.

Find the index.html file on your computer, and drag it to any web browser. You should see in the top of your browser tab, the title you placed in the title tag as well as your heading and paragraph.

## Running a local server

Running a local web server will speed up your development since it allows you to preview what you're working on live, and, in the context of how it will be treated when its deployed on a server. There are several ways to do this, but the easiest is to add an extension to your code editor. 

For VS Code, click the extensions tab...

![Extension Tab in VS Code](/assets/img/vscode-extensions.png)

...and search for `Live Server`. Hit "install" and "relaunch". You now have this extension as a part of your VS Code editor. 

Click on the "Go Live" option in the bottom bar, this will launch in your browser, and will automatically update when you save. You can click that spot again to turn the server off. 

## Adding more pages

Let's add another page. In Finder or your code editor, copy/duplicate your index.html file. Rename it to `about.html`. Open this file in your editor, and change the content in the body, and the title tag.

Go back to index.html and add the following code somewhere in the body of your html document:

```html
<a href="about.html">About</a>
```

Then, in your about file, add this code somewhere:

```html
<a href="index.html">Index</a>
```

In the browser, clicking on these links, will let you switch from page to page. Congratulations! You have a website.

## Friendly URLs

Notice the URLs in the browser when you click the links, you see the filenames in the URL. That's ok, but a lot of people perfer this not show up, since it's not easy for people to type and remember.

In your code editor or Finder, make a new folder in the root of your site named `about`. Move your about.html file into that folder, and rename it to index.html. Now we have an index.html file in the root, and one in a folder.

Change the link in the about/index.html file to...

```html
<a href="/">
```

and change the one in the root index.html file to...

```html
<a href="/about/">
```

That slash (/) means "look at the root of my site, then do what you're programmed to do", which in almost every case would be "load the index.html" file. 

## CSS 

CSS Stands for "Cascading Style Sheets". We'll talk a lot about how that cascade works, and it's pros and cons, but for now, let's just talk about its basic structure, and where you actually put it in your code editor.

The first thing we do is similar to how we make HTML files. Instead
of having a file that ends in “.html”, we just make one with “.css”. The
name doesn’t matter too much, whatever makes sense to you. I like to
call my style sheets something like “style.css” so it’s very obvious. 

You could break your files up into smaller style sheets later on, e.g.
“about.css” and “homepage.css”, but it’s personal preference.
The next thing to know is that CSS is not HTML. It looks different
because it does a completely different job. It’s not marking up content,
it’s describing what content should look like.

### Anatomy of CSS

There are two main parts to CSS: selectors and rules. The selector picks which part of HTML you want to style, then the rules tell the browser how to style HTML elements that match those selectors.

```css
p {
  color: red;
  text-align: center;
}
```

Together, this is called a rule-set. 

The **p** is called a **selector** because it selects the HTML element to style. In this case, every `<p>` element.

`color: red;` is called a **declaration**.

`color` is a **property**, `red` is a **value**. 

The real power of CSS comes from the selectors, which we'll talk more about later. There are a lot of CSS properties we'll discuss as well, and each property has a range of acceptable values. 

If you get a property wrong, it won't work. If you get a value wrong, it won't work. But, CSS is pretty forgiving, if you mess up, your page will still display, the browser will just ignore things it doesn't understand. In theory this is great, but it can make it hard to figure out what the actual problem is. We'll talk more about debugging your code later. 

### Where to put your CSS

1. it's own file.
2. in the head of the document. 
3. inline with the HTML.

We'll do all three so you can see how it works. 

There are a couple of ways to add a CSS file to your project, but the most common is to use the `<link>` tag. Start by making a file in your project called `style.css`. You can do this through your code editor.

Then, in your index.html file, add the following tag:
```html
<link href="style.css" rel="stylesheet">
```

You're familiar with the `href` attribute now. In this case, it would usually be a relative URL, but it could be an absolute URL (one with HTTP://... etc.). The `rel` attribute stands for "relationship". There are other uses for the link tag, but we'll stick to using it for CSS for now.

On every page of our website, we can place this link tag (do that now), and we will pull in the exact same CSS file on every page, making this one CSS file able to style our entire site. If we make one change to this file, it will be a global change, which is typically what you'd want.

You can also include multiple CSS files by adding more link tags.

The order of how the stylesheets load is important, the bottom file would take precedence, and overwrite contradictory styles in earlier files. 

Now, in your style.css file, write a simple CSS ruleset:
```css
body {
  background-color: #dedede;
  font-size: 16px;
  margin: 0;
  color: #334;
  font-family: sans-serif;
}
p {
  color: inherit;
}
```

Selecting the body tag lets us set global styles for our entire document. If your live server is working, or you have dropped our index.html into a browser and refresh, you should see some style changes to your document. 

Next, lets put some CSS at the head of the document. 

In your index.html file, inside the `<head>` tag, add the following code.

```html
<style type="text/css">
body {
  background-color: pink;
}
p {
  color: blue;
}
</style>

```

These styles in the page are considered a higher priority than the linked file. If your styles do not conflict, both will be applied. If there's a conflict, your linked files styles will be overwritten. 

Now, on your paragraph tag in your HTML file, add this attribute.

```html
style="color: green;"

```

That's an "inline style", and it has the highest priority. It will always overwrite conflicting styles.

### Best Practices

CSS and HTML are extremely open languages. They're forgiving and there are always a dozen ways to solve one problem. There's very little enforcement on how you organize your document and styles.

Because of this, it's very easy for things to get out of control. If you're using styles in the head of the document, or inline styles, consider if you really need to, because later, if you need like to overwrite an inline style in your external CSS file, you're in big trouble. 

We'll talk more about this when we discuss "specificity" and the "cascade". 

## Comments

One last thing, let's look at "comments" in HTML and CSS. 

They allow you to document your code, or place reminders or notes. You can also use them to disable chunks of code, without actually removing the code entirely.

```html
<!-- In HTML, you use comments like this -->

<h1>My headline</h1>
<!-- You can disable pieces of HTML this way
<h1>My disabled headline</h1>
-->
```

```css
/* In CSS, you use comments like this */

h1 {
  color: blue;
  margin: 1em;
  font-family: serif;
}
/* You can disable pieces of CSS code this way 
h1 {
  color: red;
  margin: 0;
  font-family: sans-serif;
}
*/
```

Instead of having to type them out, you can select pieces of your code in some code editors, and use the keyboard shortcut `command + /`. 