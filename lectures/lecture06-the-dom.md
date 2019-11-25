# The DOM

## Document Object Model

The DOM isn't something we'll need to know a ton about in this course, however, I think it's important to understanding how browser's work, and you'll see the term come up from time to time.

Basically, you write HTML code, the browser reads it, and the tree of elements and all of their attributes are the **DOM**. It's best to think of the DOM as a tree. Each element, it's ancestors and parents, are all "Nodes."

When you style something in CSS, the browser is finding it, based on its selector in the DOM. Think of the DOM as your HTML, as interpreted and held in memory by the browser. The browser is not re-reading your HTML file every time it looks at a style in your CSS. Instead, it builds it's own version of it when a page first loads.

Unlike your HTML file, the DOM can change and be manipulated. I'll show how you can do this with your browser developer tools later, but it can also be done with Javascript. If you're on a website, and something changes on the site dynamically (without a page reload), new content loads in, etc. the DOM has been updated. However, your HTML source file stays the same.

Because it's interpreted, your HTML and the DOM might not be identical. Often, it doesn't matter what order you put an attribute like 'src' and 'alt' in an image, but the browser might re-order them for you automatically, based on what it thinks is best. It can also fix some errors for you. 

In your browser, if you go to any web page and right-click > "View Page Source" (or whatever is the equivalent function in your browser), you will see the HTML source of the page. That is **NOT THE DOM**. If you right-click > "Inspect Element" and navigate with the inspector in the browser tools, you are looking at a visual representation of the DOM. 

This Codepen shows a DOM visualization for whatever HTML is placed in the HTML panel.

[DOM Tree Visualisation](https://codepen.io/pavlovsk/pen/QKGpQA)

## Resources

[Quick DOM Intro from CSS Tricks](https://css-tricks.com/dom/)
