# Responsive Design

There are a multitude of devices and screen sizes in use today, and most of them are capable of accessing the web. Designing sites that can run anywhere is a significant challenge. Responsive Web Design (RWD) is an approach to this problem. 

Designing for the multitude of canvas dimensions is one of the most significant differences between print and digital design. We are now eight years into responsive design as an industry standard design approach, yet, the current state of design tools are not quite up to the task of assisting us in this approach (although, they are getting better). 

So until our design software forces us to think this way, it's up to you to make sure you fill that gap. Thinking of your design canvas as a flexible document rather than one with defined boundaries is the first step.

> Unlike designing a poster or a book, we have to factor in different screen sizes, different browsers and different devices used to access our web pages. A poster design doesn’t have to worry about the person looking at it. A magazine isn’t interactive and can’t change when we turn the pages.

&mdash; SuperHi

## Responsive Behavior

There are several different ways your content can behave as the viewport size changes. Item's dimensions can flex, they can reflow (e.g. stack), and otherwise change at a certain width, etc. Generally, we use "responsive" to mean all of these things, but it’s worth being familiar with the differences. It’s easier to show than describe:

- [Liquid vs Adaptive](http://www.liquidapsive.com)
- [The Difference Between Responsive and Adaptive Design](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)

Most of the time, it’s obvious from the design files which approach certain elements of the page should take, but not always. That’s why it’s good to have a common language with your front-end developer to help describe responsive behaviors.

## Breakpoints

Breakpoints are the pixel value dimensions of the browser’s viewport (browser window) that will trigger different visual layouts. They are typically based on the viewport width (since overflowing content can normally be reached by scrolling) but can be written for height as well. Major breakpoints necessarily need to be chosen at the beginning of the design process to form a basis for responsive layout. 

### Breakpoints and Artboards

Before we discuss breakpoints in detail, you don't actually need to create designs for all of the breakpoints the site will probably end up using. Typically, when choosing the actual sizes to make your artboards in design software, the typical pattern is to design for phones (aka "mobile", "small"), tablets (aka "medium"), and desktop (aka "large"). This obviously won't cover the entire spectrum, but these design will be the base for the rest of the decisions.

### Content vs. Device Breakpoints

There are a few approaches you can take when defining breakpoints. You can base them on content, or track common device sizes. The best approach is often to choose a few common device widths first, and add content based ones as needed.

#### Device Breakpoints

Since Apple's suite of devices is pretty common, choosing some breakpoints based on iPhone and iPad sizes is a pretty popular approach.

Visit [screensiz.es](http://screensiz.es/) to view a wide variety of device resolutions. 

Visit [iOSRes](http://iosres.com/) to view Apple specific resolutions. Notice the "Logical Resolution" row on this site. It describes how you would size something in CSS. For instance, making a box in CSS 375px wide would be 100% of the iPhone 8's screen width. We'll talk more about this when we talk about retina graphics.

Popular phone breakpoints let you know how most people see your site, allowing you to optimize for most users, while not outright breaking anything for anyone.

Here’s some common breakpoints based on some assumptions about devices: 

Small (Phone): 420px
Medium (Tablet): 768px
Large (Desktop): 1024px
XLarge (Desktop+): 1366px

Currently, our breakpoints are almost always based on the _viewport_ size. The ability to add breakpoints based on the size of elements within the page have been proposed and may be coming in the future.

#### Content Breakpoints

Content breakpoints are sometimes added, often in development, where content starts to actually break. A common example is a grid of items that reduce the number of columns available as the viewport width shrinks.

[Or maybe call them... "Tweakpoints"](https://adactio.com/journal/6044/)

Breakpoints are free, but they can add some complication and organizational difficulties, so we have to choose wisely. 

:::tip Summary
Choose standard breakpoints for your artboards, and let your design and content inform the rest of your choices.
:::


## Mobile First

> Mobile First is a philosophy created by Luke Wroblewski that highlights the need to prioritize the mobile context when creating user experiences. Starting with mobile first:

> Allows websites to reach more people (smartphones with built-in browsers have a higher penetration than desktops in some markets)

> Forces designers to focus on core content and functionality (What do you do when you lose 80% of your screen real estate?)

&mdash; Brad Frost [Mobile First Responsive Web Design](http://bradfrost.com/blog/post/mobile-first-responsive-web-design/)

The mobile first approach essentially keeps you from making decisions that will hurt mobile users. Consider this approach, especially early in the process during wireframing. 

## The Content Question

When RWD was first an issue—and a question for companies considering whether they were ready to make the investment—the idea of having a separate mobile site seemed like a good solution. Why pay to fix the desktop site we just paid for? Let's make version specific for mobile users.

There are several problems with this. The obvious issues of having two sites to maintain and effectively detecting mobile devices (you can't) are deal breakers by themselves. But should mobile users ever have different content from desktop users?

Perhaps it is arguable that in some industries there really are different reasons for a user to get on your website. But is device or screen size really the best determiner of what a user wants?

Best to have efficient navigation and helpful flows and visual queues to make sure all users are able to find what they need, regardless of their specific needs—and certainly regardless of their particular device.

## Layout Patterns

A designer starting out in responsive design should familiarize themselves with common layout patterns. 

[Multi-Device Layout Patterns](https://www.lukew.com/ff/entry.asp?1514)

The majority of designs that come through our shop are some combination of what Mr. Wroblewski has dubbed "Mostly Fluid" and "Column Drop".

"Layout Shifter" is tougher in older browsers, but is becoming more and more feasible as browsers without Grid (we'll talk more about CSS Grid later) support are losing market share. 

"Off Canvas" is usually reserved for items of utility (navigation) rather than content, but it's potentially a good pattern when there are simple and reliable methods for moving from one "canvas" to another.

## Column Grids

A practical and useful approach is to develop or adopt, a grid system. The popular CSS frameworks [Bootstrap](https://getbootstrap.com/) and [Foundation](https://foundation.zurb.com/) are built around this idea. 

Imagine you have 12 columns in your design, with gutters. Items that are 4 columns wide (3 in a row) on desktop become 6 columns on tablet (2 in a row) and 12 columns on phones (1 per row). 

The columns themselves are 100% fluid and based on percentages, it the items that change how many columns they span at given breakpoints.

This is pretty effective, but, your developer needs to be on the same page. The column system needs to be clear in your designs and clearly specified somewhere so your developer can mirror your column system in their code. 

This works best for even columns, although asymmetrical solutions are possible as well. The most important part is that you must **be consistent with your system throughout the project**. Applying your grid to _some_ things and _some_ pages is possible but needs to be well documented and clear.

This site sums up some approaches pretty well: [Profound Grid](http://www.profoundgrid.com/#examples)

A mix between "Max-Width Fluid" and the "Responsive Fluid" examples is a common and flexible approach. 

Asymmetric grids based around content is probably the most sophisticated approach: [Content-out Layout](https://alistapart.com/article/content-out-layout)

## Responsive Typography

When designing for various screens, there are multiple approaches to optimizing typography and a thousand variables.

Measure (characters per line) and word breaking are some of the more difficult things to control on the web and to optimize for responsive designs. Assuming a flexible container set to some percentage width of the viewport, how do you control line lengths when you don't control the canvas?

A few approaches to consider:
- adjusting the font size to maintain proper measure within different breakpoints. 
- setting minimum and maximum widths on the type's container (most of the time we can set min and max widths on anything, as opposed to setting a hard, inflexible width).
- flexible type sizes (actually tying the size of the type to the width so it scales, typically only used on headlines)

Leading, if properly set, should be set as a ratio, so it scales with the type size.

Just remember, you have less control here, _design for resiliency_, but accept that the web is a flexible medium.

[Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/)

[Fluid Type](http://trentwalton.com/2012/06/19/fluid-type/)

[Scaling your hierarchy](http://www.modularscale.com/)

[Grid Lover](https://www.gridlover.net/try)

[Archetype App](https://archetypeapp.com/)


## Responsive Images

There are special considerations regarding images in responsive design as well. 

### Content Images

Roughly, content images are those that show a subject and are not just used as a background or a decoration. Most of the time, a simple solution of letting them scale will work fine. 

Setting an image to take up a given percentage width and let the height scale naturally is the easiest and best solution. 1/3 in desktop, 1/2 tablet, 100% full width on mobile etc.

Some layouts need more attention though, and how they scale can complicate other items in the layout. Occasionally, it might be useful to actually re-crop images for different screen sizes. Through various techniques, the images can be swapped out depending on the viewport size.  

### Decorative Images and Icons

Other images may benefit from being set to a very specific size and staying there as having them change size would lead to them being either too small or too large.

### Background Images

Background images have the most flexibility in responsive design. They can be set to scale, or not, scroll, or not, and you can set their start point to the center or a given edge or corner.

Remember, background images can also repeat, meaning they more viewport you have, you'll never run out of background. 

## The Layout problem

Responsive web design is hard, and for a while, the tools that made it easier (mostly the Bootstrap framework) made a lot of sites look like they came off of the same assembly line. This was mostly a reliance on common patterns (generally a good thing), but also, it was a response to just how hard it is to design responsively. Designers repeatedly fell back on familiar territory and patterns.

However, now that a lot of the patterns are defined, we're in a better place to start breaking, expanding and generally being more creative with our layouts. 

[Modern Layouts: Getting Out of Our Ruts by Jen Simmons](https://vimeo.com/147950924)

# Responsive browser preview

I'll do a quick demo of how to preview websites responsively in [Chrome](https://developers.google.com/web/tools/chrome-devtools/device-mode/), [Safari](https://www.macobserver.com/tmo/article/safari-9-using-responsive-design-mode) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode). 

# Responsive Resources

[Brad Frost's Responsive Resources](http://bradfrost.github.io/this-is-responsive/resources.html)

[Responsive Web Design Basics (Google)](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)

[Where to Start (Trent Walton)](http://trentwalton.com/2013/02/07/where-to-start/)

[Media Queries (RWD Examples)](https://mediaqueri.es/)

[RWD Sketch Sheets](http://www.mightymeta.co.uk/responsive-web-design-sketch-sheets/)

[More RWD Sketch Sheets](http://zurb.com/playground/responsive-sketchsheets)

## Coding

We'll discuss responsive coding techniques in a future lecture :)
