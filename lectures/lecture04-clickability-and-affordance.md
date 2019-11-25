# Clickability and Affordance

## Clickability

When designing for the web or mobile apps or other software, certain items will be interactive, generally referred to as the "User Interface." How do we make it clear to the user which items are content to be consumed, and what items are interactive?

As always, Nielsen Norman Group has the best research on this subject. I encourage you to read the whole article, but we'll review some highlights.

[Beyond Blue Links: Making Clickable Elements Recognizable](https://www.nngroup.com/articles/clickable-elements/)

> **Summary**: Whether you adopt a flat-design style or not, interactive components must retain sufficient cues to suggest clickability. Signaling clickability with cues such as borders, color, size, consistency, placement, and adherence to web standards can give interactive components the proper look.

> How an object looks tells us how to use it. Don Norman, co-founder of Nielsen Norman Group, has described these physically perceptible cues that hint at the use of an object as perceived affordances, or, more recently, signifiers. In the online world, people judge what is clickable based on prior knowledge about the world in general and the web in particular. They attach meaning to visual properties such as shapes, colors, and context based on familiar patterns. Visual cues that align with people’s expectations help them quickly determine which items to click.

> The traditional cue for hyperlinks is blue text, like we’re using here. And buttons, like their real-world counterparts, are rectangular, and have a 3-D appearance. These conventions provide the strongest perceived affordance of clickabilty and in early years we recommended that buttons and links follow these patterns.

> But today’s users have seen hyperlinks and buttons that look widely different. Signifiers can evolve over time as web users gain more exposure to different interaction cues and get to learn these new cues.

A quick note on link state, links can also have a "visited" state to show the user when they have already visited a URL (it uses the user's browser history). The default color for this state is a dark purple. So, it's best not only to avoid purple as a link color, but it's also good to remember you should plan your own visited state for a text-heavy website. For instance, keeping track of visited links may not be that important on a small brochure site, but it's a lot more important on an e-commerce site, a text-heavy site, or a site where users do a lot of searching.

## Digital vs. "Real-World" interfaces

Here's where our design aesthetics and trends can lead to user-experience issues. One of the clearest ways to make a button clickable is to give it a 3-dimensional effect as if it was a "real button". Not very cool. (at least, currently).

But, as digital interfaces dominate more of our lives, older interfaces, like your thermostat, stereo, the dashboard of your call, television remote, kitchen appliances, etc. dominate our idea of interfaces less and less. Some of these are getting completely replaced by digital interfaces anyway. How many buttons did you click this week in a digital interface versus a real physical button? 

## What makes something look "clickable"?

The article offers up some tips for how to make sure our interactive items look interactive.

1. While blue is still the safest link color, other colors work just as well as long as the links stand out clearly from the body text. If you don’t have a particular reason to prefer another color, we still recommend blue as the safest choice.
2. The position of links can help you determine whether or not underlining is necessary. The navigation menu and lists, especially along the peripheral areas of the page, don’t require underlining. Their locations identify them as links.
3. Static items should not have the same color as hyperlinks.
4. Don’t use blue text (or underline text) for non-clickable items. (this doesn't mean don't use rules, but don't underline text for emphasis)
5. Whatever appearance you choose for hyperlinks, make sure to apply the same treatment _consistently throughout your site_.

Consistency is of primary importance. Follow conventions, but even when you choose to break conventions, **keep it consistent**. 

### Buttons

> Make buttons at least remotely resemble physical buttons. In order for an object to be recognizable, it must retain the right visual cues to trigger the right associations quickly and accurately. Retain the rectangular shape (preferably with rounded corners) if you renounce the 3-D effect. Interactive components in flat design should look clickable even without heavier effects such as shadows and gradients. (In one early study, clicks increased by 416% after changing from flat to 3-D buttons. While the effect is smaller now, it's still big.)

Again, I'm not suggesting you go with a 3-d look if you don't think it works for your design, but definitely, do not make something that's **not clickable** look like a 3-d button.

Generally, avoiding making non-clickable things look clickable is just as important as making your clickable items look clickable.

> Focus on content hierarchy within the page. Avoid having many colorful boxes of different sizes on a page. People have difficulty picking out the clickable elements when similar-looking items compete with each other.

#### Button design

Whatever you think of it, a style has emerged for buttons on the web. Background color, white text, all-caps, often rounded corners. This version of a button is really just a simplification of the skeuomorphic buttons of the first generation of websites and interfaces.

[Material Design's Button Documentation](https://material.io/design/components/buttons.html) has some good examples of standards you can use a guide to make buttons not just look clickable, but noticeable and useful.

Here's a good resource to quickly see how major sites have changed their design in a 10 year span. The move towards flatter design and away from skeuomorphic designs is obvious. But you'll also see less cramped designs, which can help clickable things seem more obvious. 
[Website 10-year challenge](https://www.arun.is/blog/10-year-challenge/)

### Icons

> When using icons for links, make sure icons are instantly recognizable. Unless you have a really strong resemblance icon or an icon that has become standard, it should be combined with another visual cue, such as a text label, to indicate clickability.

> An arrow icon may help suggest clickabilty when no other clickability cues are present. However, this is the least favorable approach because the arrow is not a standard cue and it is too subtle for some people to recognize. If you decide to go this route, make sure you use arrows sparingly, as they can defeat the purpose of keeping your interface simple.

## Link Text

The text of your links matters too. Keep the text relevant and actionable. Avoid saying click <a href="#">here</a>. Click here for what? Don't assume people are reading every word, they're often skimming. The following quotes are from the article [Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/).

> Even when the links visually stand out, they need to be meaningful to be helpful. It really backfires to draw people’s eyes to something irrelevant. Links should have good information scent: that is, they must clearly explain where they will take users.

> In order for these links to make sense, users have to read the surrounding text to put the link into context. This process of finding the associated information requires more effort, both in terms of eye movements and mental processing.

Not only do users need clear links, but search engine crawlers (Google) use the text of a link to glean even more information about the page the link appears on, and the page the link points to. 

> First, the most helpful link text describes the page that’s being linked to. When writing links ask yourself, “What will the user get when they click this link?” Mention that the link opens a PDF if that is the case.

> As you can see in my rewrites, link length is less important than a good link description. Use as many words as you need to accurately describe the page (or document) being referenced, while still being concise (as is a generally good practice when writing for the web).

> Second, when users see the same link twice on the same page they assume that it goes to the same place. For this reason, if the second link refers to a different page make sure that the text is unique. Remembering this will also help you write more descriptive link labels and avoid generic links such as Read more, or Click here. (An additional reason to avoid Click here is that there are no clicks on touch-screen devices.)

## Affordance

Although there are a few definitions and the term has morphed a bit over the years, what I mean by "affordance" describes the discoverability of actions through hints given to you by the interface's design.

<!-- ## Signifiers

Don Norman, the author of "The Design of Everyday Things", prefers the term _Signifiers_. In various ways, characteristics of an object suggest to the individual what actions are possible. Signifiers are the “perceivable parts of an affordance”. Again using the door knob example, its roundness signifies that it affords twisting.  -->

### Metaphors

It's extremely common, and useful, to use icons in interface design to create a real-world metaphor of the behavior. Gears for "settings", wrenches for "tools", and a disk for "save" are common examples. However, metaphors can also be misunderstood, and sometimes there just isn't a good analog for that particular action.

### Patterns

Patterns are some of our most reliable affordances in user interface design. For example, the learned behavior of how to use an image carousel implies there will be arrows on the left and right to move between sequential images, and there will often be some kind of indicator at the bottom to show the number of items, and the current one you're on. To break this pattern for similar functionality would be to invite confusion.

### Labels

The most basic and direct affordance is a label. Labeled buttons are a great fallback for when other types of signifiers could be misunderstood. When the above examples could lead to any possible confusion, use a label. 

### Negative affordance

A negative affordance is when you specifically want to indicate that the item is not usable. This is usually when part of an interface needs to be disabled. Be careful here, changing the state of an interface element from active to disabled needs to be very clear. 

Common ways to accomplish this would be to gray out an item, hide it beneath something else, etc. But, if an item is disabled, it needs to be clear what needs to happen in order to re-enable it.

## Touch affordances

On the web, all we can really count on is clicks, but of course, our interfaces could be optimized for touches and gestures. Eventually, we can count on those too. We won't really be covering this much, but keep in mind, some interfaces can be dragged, swiped, pinched, etc. Indicating this is possible would also be an affordance. 


## Resources

[Beyond Blue Links: Making Clickable Elements Recognizable](https://www.nngroup.com/articles/clickable-elements/)

[Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/)

[Affordances in Web Design](https://blog.teamtreehouse.com/affordances-web-design)

[Affordance: The Most Underrated Word in Web Design](https://www.smashingmagazine.com/2014/06/affordance-most-underrated-word-in-web-design/)

[Beyond Blue Links: Making Clickable Elements Recognizable](https://www.nngroup.com/articles/clickable-elements/)

[The Design of Everyday Things: by Don Norman](https://www.amazon.com/gp/product/0465050654/)

[How to Make Something Look Clickable](http://thehipperelement.com/post/152994809915/how-to-make-something-look-clickable)