# Class Usage, Naming, and BEM

## Technical rules

The technical rules for what we name our classes are pretty straightforward. 

> A valid name should start with an underscore (_), a hyphen (-) or a letter (a-z) which is followed by any numbers, hyphens, underscores, letters. A name should be at least two characters long. Cannot start with a digit, two hyphens or a hyphen followed by a number.

&mdash; [Adam Laki](https://pineco.de/css-quick-tip-the-valid-characters-in-a-custom-css-selector/)

The most important thing to remember regarding how you can start a class name... No. Numbers. You can have numerals in your class name, but they can't be the first character.

Also, no special characters, you should avoid anything besides basic characters, underscores(`_`) and hyphens(`-`).

So, while you can have a class named `my-class2`, you cannot have one named `2my-class`. And you should definitely avoid anything like `my-class!`. 

## Conventions

There are a few conventions that have become fairly standard. It's recommended you stick to these, especially if there's any chance someone else would be working on the same project. 

### Case

Although CSS itself is not case-sensitive, HTML is. So if you wrote...

```html
<div class="Myclass"></div>
```

...and then accidentally wrote...

```css
.myclass {
  /* Styles */
}
```

... you would find your CSS doesn't work. 

So, best to stick to all lowercase, making it easier to avoid mistakes.

### Hyphen use

It's become a general convention that we use single hyphens (`-`) in our class names where we would normally have spaces in a phrase.

```css
.my-class {
  /* Styles */
}
```

Avoid using underscores (`_`) here. You'll see why when we look at BEM style below.

## Styles and philosophies

There are several different philosophies when it comes to naming your classes. Finding strategies that work for you is a major part of learning how to style websites.

### Global and element styles

You'll likely always have some global styles and styles on all elements that don't require classes at all. Basic styles for `body`, your typographic elements, and maybe form fields are often the first ones you will want to write. 

There are also classes you might want to write to be used globally across a whole website. I often make a `list` class for custom `ul` styling. I don't apply it to all `ul`s, because I want to use the `ul` tag for things other than a bulleted list sometimes (like navigation). 

### Semantic classes

At a very high level, keeping your classes "semantic" means to make your classes mean something about the content and/or the document, and to avoid descriptive classes. 

Classes like `sidebar`, `main-content`, `navigation`, `logo`, `search-bar`, `social-links`, etc. are all semantic classes, because they describe their contents, without inferring any styles at all.

### Utility styles

In a way, "utility" classes the opposite of semantic classes, although it is possible to successfully mix them. Utility classes describe not the content of the HTML but describe the styles themselves instead. 

Third-party frameworks tend to made up of classes like this because they don't know anything about your HTML, and it doesn't matter.

Previously mentioned frameworks as Bootstrap and Foundation qualify. There's a newer one called "[Tailwind](https://tailwindcss.com/docs/what-is-tailwind/)" that uses these kinds of styles.

```html
<div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="">
    <div class="text-center sm:text-left sm:flex-grow">
      <div class="mb-4">
        <p class="text-xl leading-tight">Adam Wathan</p>
        <p class="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
      </div>
      <div>
        <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
      </div>
    </div>
  </div>
</div>
```

You could see how with a framework like this, you could build quite a bit without actually touching your CSS at all. 

I think this makes some sense for experiments, but for real projects, this would make me crazy. But, it has a large following, so I'll avoid complaining too much here.

Another example would be a class called `.red` or even `.right`. I absolutely do not recommend this, for one very basic reason... it makes it really hard to change later. 

If you use a class like this, make sure that the styles inside are only those that support the class name. 

```css
.red {
  color: red;
}
```

But then, don't do this...

```css
.red {
  color: red;
  font-size: 1.2em;
}
```

The above is a terrible idea because the idea of a utility class is that I should be able to remove it from the HTML, and all I would be doing is changing the color. If it contains any other styles, things start to get complicated.

### Component and BEM

"[BEM](http://getbem.com/)" stands for "Block Element Modifier". There's a lot to this, but I like to just focus on the basics. The idea is you have what are called "blocks". You might also call them components or "Molecules" or "Organisms" in atomic design philosophy. 

Given we have a "component" in our HTML called `contact-info`.

```html
<div class="contact-info contact-info--theme-blue contact-info--simple">
  <div class="contact-info__name">
    <h2>Mike Smith</h2>
  </div>
  <div class="contact-info__phone contact-info__phone--mobile">
    <a href="tel:555-1234">555-1234</a>
  </div>
</div>
```

We have the base class of `contact-info`. 

We modify it using two hyphens (`--`). One modifier, `--theme-blue`, is a non-semantic description of the styles, while the other, `--simple`, is a generic descriptor of complexity. 

Then, under that, we have two sub-items for the name and phone number. We extend the `contact-info` class with two underscores (`__`). 

Now, obviously, a component can go much deeper than that. Thinking "atomically" a component might be made up of lots of sub-components. It's possible you might have an "element" style class and a new base component class on the same element. 

Some people might even want to put classes all the way down to the `<h2>` and the `<a>`. I normally don't like doing this, but, it's up to you. 

It probably looks a little unwieldy having so many long class names, but BEM is nice because when we give everything these very descriptive and detailed class names, we reduce the likelihood of a classname being accidentally used more than once. We also reduce how specific we have to be in our stylesheets.

```css
.contact-info {}
.contact-info--theme-blue {}
.contact-info--simple {}

.contact-info__name {}
.contact-info__name > h2 {}

.contact-info__phone {}
.contact-info__phone > a {}
.contact-info__phone--mobile {}
```

The only items that are more than one level are the ones where I targeted the `<h2>` and the `<a>`. This means our specificity for each ruleset is very low. Low specificity means it's less likely we run into trouble later with styles that are too difficult to overwrite. 

## Organization

Organizing all of this is difficult, but there are a lot of things that help. Some involve discussions of technologies we're not ready for or running software we can't run on lab computers. 

There are two resources I'll point at to help with this. One is [CSS Guidelines](https://cssguidelin.es/).

The other is [SMACSS](http://smacss.com/), a methodology for organizing your CSS. Searching around, you will find articles about SMACSS vs. BEM as if they were incompatible. I beg to differ, you can use them together.

> SMACSS (pronounced “smacks”) is more style guide than rigid framework. There is no library within here for you to download or install. SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS.

But this is all for later. On small projects, while you're learning, just do what works best for you. You will want to start studying these other methodologies when you start feeling the pain on larger projects. 

## Resources

An excellent, very in-depth resource for all kinds of CSS conventions: [cssguidelin.es](https://cssguidelin.es/)

[BEM Introduction](http://getbem.com/introduction/)

[SMACSS](http://smacss.com/)