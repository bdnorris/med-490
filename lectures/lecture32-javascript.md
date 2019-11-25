# Javascript: Programming the Web

> One of the harder languages to learn, javascript was invented for a slightly different purpose than what it is used for today, this means the thought process and planning for it has been a little less structured than other languages.

> Think of Javascript as a small house that, over years, has more and more extensions and wings built on to it, to the point where it looks like a bit of a mess. And because of this, it means that Javascript itself can be a difficult language to learn. You’ll notice a lot of (round brackets) and {curly brackets} that can look quite confusing at first, but once we understand what they actually do, it hopefully gets a little clearer.

&mdash; SuperHi

## Server-side vs Client-side languages

There are many different programming languages out there, and they need to run in a specific environment&mdash;they need an interpreter of some sort to run. Many can be used to serve web pages and they run on web servers. They manage databases and logins and perform logic to decide the exact HTML, CSS, and Javascript to send to the user. 

For the purposes of the web, we call them Server-Side languages. They run only on the server. These include PHP, Python, C#, Java, Ruby, and more. Even Javascript can run on the web server with a program called [Node.js](https://nodejs.org/en/).

But only Javascript can run "Client-side". Which means it runs in the browser, on the user's computer. The programming code is delivered either embedded into the HTML or as a separate `.js` file, then ran on the user's computer. 

This is where the idea of a "Front-end" coder and a "Back-end" coder comes from. The back-end deals with programing language and databases, the front-end deals with HTML, CSS, and Javascript.

## Basics

Almost every programming language includes these basics. I'm going to try to be brief because there is no shortage of other resources that can teach you about this stuff.

### Variables

A variable is just a name we use to hold some data. It's "variable", meaning it can change as the script runs. 

```js
var name = 'John';
```

We use `var` to say we're "declaring" a variable. We give the variable a unique name, then we use `=` to set it to hold "John". We end the line with a `;`.

### Data Types

This can get complicated, but to start out, there are just a few kinds of data types you need to recognize.

#### Strings

Strings are regular text characters. We use either double or single quotes to say something is a string. In the example above, "John" is a string. They can include any text data, including spaces, punctuation and special characters.

#### Numbers

Numbers are different from strings in that we can perform mathematical operations on them. We don't use quotes for numbers.

```js
var ageNumber = 30; // Number 30
var ageString = "30"; // String 30
```
We can take `ageNumber` and add 1 to it, or any other mathematical operation. In theory, we shouldn't be able to do that with `ageString`. But, Javascript is weird in that sometimes it will allow that. But for simplicities sake, try to avoid this. The typical way to show that these are different is an operation like the following...

```js
var ageNumber = 30;
var ageString = "30";

ageNumber + 1; // Will equal 31
ageString + "1"; // Will equal 301
```

#### Booleans

Booleans are just true/false values. We represent those in Javascript by just saying `true` or `false` without quotes. 

```js
var isStudent = false;
```

#### Arrays

An array is like a list of things. We use square brackets (`[]`) to declare them. 

```js
var classes = ['DES340', 'DES350', 'CIS210'];
```

Arrays can hold anything, strings, numbers, or booleans. You reference arrays with an index, and the index starts at 0.

```js
classes[1]; // Would be DES350
```

#### Objects

Objects are like arrays, except they have keys that can be strings. We use curly brackets (`{}`) to declare them, then keys followed by colons, then the value. At the end of each key/value pair, we use a comma to put in another.

```js
var Person = {
  name: "John",
  age: 30,
  isStudent: false,
  classes: ['DES340', 'DES350', 'CIS210']
}
```

Objects can be accessed with "dot notation".

```js
Person.age; // 30
```

Objects are often used to describe the properties of one thing, where an array is a list of things. 

Also, keep in mind, objects can be inside of arrays, and arrays can be inside of objects!

### Functions

A function is a set of instructions that may or may not take inputs called "parameters". Ideally, they're reusable. A complicated program is basically a lot of functions being used creatively to create an entire application. They may or may not "return" a value when they're done.

You then run the function by calling it by name, followed by a parenthesis.

```js
function addOne(input) {
  return input + 1;
}

addOne(1) // Would return 2
```

### Conditionals

At the most basic level is an "if statement". We only want to run certain code if something else is true or false.

```js
var statement = '';

if (Person.age < 30) {
  statement = "Less than 30";
} else if (Person.age == 30) {
  statement = "30 Years Old";
} else {
  statement = "Over 30";
}
```

Notice, I declared the statement variable but left it as an empty string. Then I reassigned it based on the value of `Person.age`. I checked the age by using comparisons, like less than `<`, and `==` (It's two equal signs, so it's not mistaken for an assignment).

## Accessing the DOM

So the real power of Javascript is being able to manipulate your HTML elements, or DOM elements, by changing text, styles, or adding and removing classes. Honestly, I've always thought this was harder than it should be, but it's what we've got, so I'll walk you through a simple example.

## Adding it to your site

First, where do you put it? You can put it in the HTML file itself, by placing it in a `<script>` tag.

```html
<script>
  function myJavascript() {
    return true;
  }

  myJavascript();
</script>
```

Or, you can put it in its own file ending in `.js`. Then you use the script tag with a `src` attribute to add it to your page.

```html
<script src="path/to/javascript.js"></script>
```

The best place to put the script tag is usually before the closing `</body>` tag. That way, the loading of the script or the file doesn't get in the way of your page's content loading. Plus, if your code references something in the DOM, you need to wait until it's loaded before your script runs.

The exception to this is when the Javascript needs to run before the page loads, which is true of a lot of analytics and such. Then, you can put the `<script>` tag in the `<head>`.

## Console logs

When we're developing, we can log useful stuff to the developer console to check it.

```js
console.log(Person);
```

## A simple example

Here's something close to the example I used in the animation lecture. Let's break it down.

```js
var myElement = document.querySelector("#js-hook");

myElement.addEventListener("click", function(){
  myElement.classList.toggle("animate-me");
});
```

First, I'm making a new variable. This variable is going to hold my DOM node in it. So, I say `var myElement` and use an `=` for assignment.

Then, I use a "Global object" called `document`. Document exists as a global object on the page. It's the root of my DOM. 

Then, with dot notation, access a function that's a part of `document` called `querySelector`. A function that is a part of an object is called a method. There are several different methods for getting references to DOM nodes (your elements). 

`querySelector()` takes a CSS style selector and gets a copy of the first element on the page that matches that selector.

`query​SelectorAll()` is similar, but it will get an array, or list, of all elements that match that selector. 

Similarly, there's `get​Element​ById()` which takes only an Id, then uses the Id HTML attribute, which should be unique, to get one match for the element.

`get​Elements​ByClass​Name()` takes only a class name and returns an array of all matching elements.

The main difference is the first two take any CSS selector. So `querySelector(".class > .child h1")` would work, where the next two could only take a class or id, like `get​Elements​ByClass​Name("child")` or `get​Element​ById("one-thing")`. Note, you don't use `.` or `#` in those.

I pass my `querySelector()` `"#js-hook"`, so an element like `<div id="js-hook">` would be selected.

One my element is stored in memory, I can access it using Javascript. 

```js
myElement.addEventListener("click", function);
```

I can refer to it with the variable name I gave it, `myElement`. Now, as a variable representing a DOM element, there are all kinds of methods I can run on it. One is `addEventListener`, which sets up a listener for browser events. `click` is a really common event, but there's [a host of others](https://developer.mozilla.org/en-US/docs/Web/Events).

So now, when `myElement` is clicked, it will run the function we provided as a parameter. Yes, we can pass a function into a method as a parameter. So instead of the word function above, we'll just write a function right there. 

```js
myElement.addEventListener("click", function(){
  // Do stuff
});
```

Now, we can put anything we want inside that function, and it will run that code when our element is clicked. 

```js
myElement.addEventListener("click", function(){
  myElement.classList.toggle("animate-me");
});
```

In this case, we want to refer to that same element, access it's `classList` property, which has a method called `toggle` that will toggle the given class on and off, every time the click event fires.

I know that's a lot, but this is the basis for all web interactivity.

## On jQuery

So there's this [Javascript library called jQuery](https://jquery.com/). It originally came along to make web developer's jobs easier by smoothing out differences between web browsers javascript engines and came with a ton of build in methods to make it easier to manipulate the DOM. It's also got a ton of compatible plugins to add interactivity to your site without writing everything from scratch.

That same code from above would be written in jQuery like...

```js
$('#js-hook').on("click", function() {
  $(this).toggleClass("animate-me");
});
```

Not that different really, but 5-10 years ago, our above code wouldn't have worked, because things like `querySelector` and `classList` didn't exist. So ultimately jQuery is less useful now, but it's still arguably easier to learn than plain Javascript. 

You use jQuery by including it in your page _before_ you reference it in your own code with `$`. My base HTML starter has jQuery built in.

There's also a lot of debate about whether or not if you know jQuery you really know Javascript, and if it's bad or good for learning. My opinion is it's fine to use jQuery to learn and even to solve some specific problems. But, it's important to realize, it's just a library and an extension of Javascript. Learning where it fits in is helpful for growing.

## On Frameworks

You might also see a lot of references to JS frameworks like [React](https://reactjs.org/), [Angular](https://angular.io/), or [Vue](https://vuejs.org/). These are things you should look into if you want to get into development. They combine tools that run on your computer and Javascript that runs in the browser to make it way easier to add interactivity to your page. They utilize different ways to write HTML where you can manipulate your page without writing a lot of cumbersome `querySelector()` calls and managing dozens of Event Listeners. But, they take some time to learn. 

If I had one suggestion it might be to try [Gatsby](https://www.gatsbyjs.org/). It's a React based library for building sites that have excellent documentation.

## Resources

This is a nice gamified spin-up of the kinds of topics I just covered:

[Javascript in 14 Minutes](https://jgthms.com/javascript-in-14-minutes/)

An excellent introduction to all things programming: 

[What is Code?](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)