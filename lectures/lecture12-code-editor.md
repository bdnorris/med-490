# Code Editor and Formatting Conventions

> When we’re making our files, what program do we make them in? Is there a special program we need? If so, is it expensive? Luckily for us, all the files that we’ll be making are essentially text files with a different extension. You can open them in Notepad, TextEdit, IA Writer or any program that you would write plain old text in.

> Make a folder on your computer, then store all your code and assets in there.

> There are, however, easier ways to edit code. There are specialist programs that make it simpler to see what’s happening when you write code.

&mdash; SuperHi _Learn to Code Now_

## Whitespace conventions (tabs and spaces)

HTML and CSS don’t really care about how your code looks, the browser will ignore any white space you put in your code. In HTML, two spaces is just a space. So, there is a difference between no space and one space, but not between one space and two spaces.

```html
<!-- For instance, this code... -->
<p>Hello World!</p>
<!-- ...would look exactly the same as... -->
<p>
Hello 
World</p>
```

Since HTML doesn’t care about gaps, it means we can make our code cleaner to read and make more sense.

```html 
<p><a href="about.html">About</a></p>

<!-- So to make it easier, I would write it like: -->
<p>
    <a href="about.html">About</a>
</p>
```

Indentation is a powerful tool when your code becomes more complex.

To create this whitespace, we usually hit the "tab" key. However, most code editors don't actually use tabs, they use spaces. Typically, CSS only needs 2 spaces, while programming languages and HTML use 4.

You can also usually use the keyboard shortcut `cmd + ]` and `cmd + [` to move selected content left and right.

## Code Editors

There a are a lot of options for code editors out there, and most are free. One of the most popular ones is [VS Code](https://code.visualstudio.com/) from Microsoft. We'll be using it here in class I'll take you on a tour of some of its features.

There are some editors out there called IDEs, which stands for "Integrated Development Environment". These programs typically cost money and not only write code but interpret it as well, adding much more debugging and automation options.

Some of these include Android Studio, XCode (for Macintosh and iOS apps), NetBeans (mostly Java), Microsoft Visual Studio (C++ and C#), WebStorm, and PHPStorm.

For the front-end, we'll mostly be focused on editors that have a lot of features, but they don't actually run our code (sorta, we'll get into the details in a bit). 

Some others you might check out...

[Sublime Text](https://www.sublimetext.com/)
Not technically free, but with an unlimited trial, Sublime is an older product, but with a huge number of followers and a lot of extensions you can add on. 

[Atom](https://atom.io/)
My editor-of-choice before I switched to VS Code, Atom is from the team at GitHub and is easy to use and looks great.

[Brackets](http://brackets.io/)
Originally from Adobe, Brackets is now open-source, with a few cool features for web designers and live-preview built in.

We should also mention **Dreamweaver**. Its gotten a lot of hate over the years for its visual design tools producing some pretty crummy code. However, it's progressed a lot since then and can actually a pretty good code editor with some proper setup. You might check it out, but I personally am not very good at it so don't feel comfortable instructing in it. 

Almost all editors allow you to install extensions to make them even more powerful including VS Code.

## Features

### Fonts

This isn't really a feature, just something to point out. Code editors always use a monospaced font, and you shouldn't change that. Monospaced fonts make it easier to line up items and organize your code. However, you can often change your editing font, just make sure to use a monospaced one.

### Line numbers

Code editors will almost always have line-numbers on the left, making it easier to reference where something is, especially in a large file. 

### Code folding

Near the line numbers, you can often close up sections of code that aren't as important, to make room for the code your working on.

### Mini-maps

Some code editors have a zoomed-out version of your code on the right for scrolling to different parts of the code visually.

### Keyboard shortcuts

Ready to learn more shortcuts? Most code editors have lots of them to make your work go faster as you learn them. We'll mention a few here and there in class. But, they're also almost always customizable as well.

### File explorer

Most code editors also have a file explorer to allow you to quickly open your project's files. Typically, you can also rename, move, copy etc. right from this explorer.

### Split views

Most editors will let you view two files at once, side by side or one on top, one below.

### Syntax highlighting

This is probably one of the most important features of any code editor. The coloring of different parts of your code makes it a lot easier to read and scan your code, as well as give you hints for when you've made a mistake. 

Most also let you install color themes so you can tailor the color scheme to your tastes.

### Multi-cursor

Holding "command" (usually) and clicking will produce multiple cursors, letting you type on multiple lines at once. It's amazing.

### Duplicating and moving lines

There's usually a shortcut for duplicating whole lines as well, in VS Code on Mac it should be Shift+Cmd+D. 

You can also move lines up and down by themselves. Option + Arrow Up/Down is common.

### Autocompletion

Most code editors try to guess what you're going to type, based on the language you're using. This can greatly reduce the amount of typing you have to do.

### Emmet

Emmet is a kind of shorthand way to write HTML that some code editors can expand for you. For instance, you can write `div.myclass` and the expansion would be `<div class="myclass"></div>`.

[Emmet in VS Code](https://code.visualstudio.com/docs/editor/emmet)

BTW, a lot of Emmet works in CodePen too.

### Search and replace

Most editors should let you search and replace in a file or an entire project.

### So much more

That's a good beginning rundown, but there are tons of features and extensions available to add on to your code editor to make it yours and increase your productivity.

## Resources

[VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

[Browser Preview VS Code Extension](https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview)

[Live Server for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

