# Accessibility

[Access Movie](https://accessmovie.org/)

Accessibility of the web is a tough subject and one where I have to admit I still have a lot to learn. We've touched on it a bit in other lectures, but here's a rough overview of some things to keep in mind.

[From Wikipedia](https://en.wikipedia.org/wiki/Web_accessibility): 

> Web accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites on the World Wide Web by people with disabilities. When sites are correctly designed, developed and edited, generally all users have equal access to information and functionality. 

Obviously, different disabilities require different strategies for inclusion. Deafness is only a problem if you use audio on your site. If you have videos, they should have captions. Blindness and other visual impairments are tougher. It means our sites need to be accessible by assistive technologies like screen readers. 

## Assistive technologies

Also from Wikipedia...

> Individuals living with a disability use assistive technologies such as the following to enable and assist web browsing:

- Screen reader software, which can read out, using synthesized speech, either selected elements of what is being displayed on the monitor (helpful for users with reading or learning difficulties), or which can read out everything that is happening on the computer (used by blind and vision impaired users).
- Braille terminals, consisting of a refreshable braille display which renders text as Braille characters (usually by means of raising pegs through holes in a flat surface) and either a mainstream keyboard or a braille keyboard.
- Screen magnification software, which enlarges what is displayed on the computer monitor, making it easier to read for vision impaired users.
- Speech recognition software that can accept spoken commands to the computer, or turn dictation into grammatically correct text - useful for those who have difficulty using a mouse or a keyboard.
- Keyboard overlays, which can make typing easier or more accurate for those who have motor control difficulties.
- Access to subtitled or sign language videos for deaf people.

## Guidelines

The guidelines for accessibility are standardized by the [W3C](https://www.w3.org/) under the name [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).

Who **must** comply and meet these guidelines is a bit of a gray area. Government websites for sure, but any commercial enterprise could, in theory, be sued for having a non-accessible website, just like they could be sued for not having wheelchair access to their front door. 

[Wikipedia: the United States and Web Accessibility](https://en.wikipedia.org/wiki/Web_accessibility#United_States)

## Text and contrast

The things a designer is most responsible for are the visual aspects of a website and typography. 

First, make sure your site can be zoomed in (CMD or CNTRL +) and everything still works. 

Make sure your text has enough contrast with the background. Here's a great little tool that will tell you if your text does not have enough contrast and will fail accessibility guidelines.

[Colorable](https://colorable.jxnblk.com/)

## Semantic HTML

Having "semantic HTML" means your HTML has some relationship to meaning. This means using the correct elements, like `<h1>`, `<h2>`, `<p>`, `<strong>`, `<ul><li></li></ul>`, `<nav>`, `<main>`, `<header>`, etc. It also means your HTML should be in the proper reading order. This means a screen reader or similar technology will read your document and understand it, giving it the ability to be more understood by the person using the technology. 

<!-- Imagine you couldn't use a mouse but could use a keyboard, or some accessible version of a keyboard. Could you navigate around your site? Try using the _tab_, _enter_ and _space_ keys on your site. You should see dotted lines to indicate what item has focus, you should be able to move down with the spacebar, and you should be able to access links with the enter key.  -->


## ARIA

I'm not going to go deep into [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), but I want you to be aware. 

> WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

&mdash; W3C

ARIA is a set of HTML attributes that can be added to richer web applications that go beyond basic HTML/CSS. 

A relevant example might be a dropdown nav list. You could use the `aria-expanded=false`, `aria-expanded=true` to communicate to assistive technologies that a particular menu is open. 

[Inclusive Components](https://inclusive-components.design/menus-menu-buttons/)

## Relation to SEO

Making your site work for screen readers and other assistive technologies also make your site more accessible to search engines. Semantic HTML and indexability help. 

Alt text is also important for both, your `<img>` alt text should describe the image in a meaningful way.

> Inconsistent use of alt text is one of the most common problems found in our web audits. These golden rules make your alt tags more useful to your site visitors and mean your site is more likely to be legally compliant. These rules are aimed at content editors but may also be useful for anyone producing content on the web.

- Rule 1: Every <img> must have an alt= attribute
- Rule 2: Describe the information, not the picture
- Rule 3: Active images require descriptive alt text.
- Rule 4: Images that contain information require descriptive alt text.
- Rule 5: Decorative images should have empty alt text.

&mdash; Stefan Sollinger [Five golden rules for compliant alt text](https://abilitynet.org.uk/blog/five-golden-rules-compliant-alt-text)

## Accessible for everyone

> Overall, by designing inclusively of the most extreme disabilities first, it almost always improves the end product for everyone else. 

> For instance, designing for people with no vision can lay a great foundation for those who can see. This is because it puts us in a position to ensure that the structure of the website is independent of its presentation, and can be interpreted by assistive technologies as well as people. Therefore, if presentational changes were to happen for any other reason, the structure of the website will still be accessible. 

&mdash; Graeme Fulton [Accessibility Basics: Designing for Visual Impairment ](https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634)

## Testing

There are ways to test your site for accessibility, one of the easiest is to install the [WAVE tool browser extension](https://wave.webaim.org/extension/). 

There's also the [No Coffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) Chrome extension that simulates visual problems.

<!-- [Google's Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) -->

## Resources

There are some difficult and very technical things here. But, keep in mind, **more accessible is always better than less**. Even if you can't meet a standard guideline for accessibility, that doesn't mean you can't make your site more accessible.

[W3C Accessiblity Basics](https://www.w3.org/wiki/Accessibility_basics)

[W3C WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0)

[Usability.gov](https://www.usability.gov/what-and-why/accessibility.html)

[TutsPlus Accessability for Visual Impariment](https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634)

[MDN Learn Accessibiltiy](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)

[Web Accessibility Basics](https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/)
