# Animation on the Web: Theory

## Why animate?

Animation, in general, has a lot of uses, but for this lecture, I want to focus on how important it is for user interfaces and user experience.

> **Animations enhance the way users interact with an interface**. For example, smart animations can **reduce cognitive load** by giving users better context between page transitions. They can provide **clear cues** to users, like where we want them to **focus attention**. Animations serve as another design pattern in and of themselves, helping users to get **emotionally attached to and engage with the interface**. Another benefit of using animations is that they can **create a perception that a site or app loads faster than it actually does**.

&mdash; Prasanjit Singh [Writing Animations That Bring Your Site to Life ](https://css-tricks.com/writing-animations-that-bring-your-site-to-life/)

## Animation on the Web

This is an attempt to categorize some of the uses of animation in digital design. There is a lot of overlap between the categories, but the main point, as always, is _think about the user_.

### Drawing the User's Attention

Blinking, flashing, movement to attract the eye.

Obviously, this can be a "dark" pattern, like using animations to get people to look at advertisements. But it can also be used to show a new or transformed element. 

On this site, the animated "entrances" draws attention to the main copy points.

[playcharms.com](https://playcharms.com/en/)

### Demonstration and Narrative

Anything that takes place over time may benefit from an animated explanation, including instructions and explanations.

[Storytelling Map](https://tympanus.net/Development/StorytellingMap/)

### Entertainment/Mood/Dimensions

Effective animation can also be used in narrative or to strengthen a visual's message (essentially, a third or fourth dimension to graphic design). It can also be used simply to add a sense of fun and make a design seem less flat.

[Upper Quad](https://upperquad.com/)

### "Delight" (while not breaking user expectations)

![](/assets/img/animation/1-NAYVqTvLOJya0Yeouu6-sA.gif)

### Feedback

Often our electronic interfaces take some time before an action can be completed, animations like spinners and loaders let the user know that _something_ is happening. Hover effects can let the user now they've entered a clickable area.

[Spinkit](https://tobiasahlin.com/spinkit/)

### Transition Smoothing

Animating a scroll, a slide, etc. feels more like the real world. Abrupt changes simply don't feel correct because they are disconnected from how we experience the world.

Think about turning the pages of a book, or rotating something in your hand. Think about the relationship of a virtual button to a real button on an electronic device.

[10x18](http://10x18.co/)

#### Reducing Change Blindness

[Change Blindness](https://www.nngroup.com/articles/change-blindness/) occurs when an interface changes quickly, and the new information isn't noticeable to the user.

Animation can help alleviate this affect:

![](/assets/img/animation/0-tAlK3EOkHdLj6MDE.gif)
![](/assets/img/animation/0-ugnsxwIKHdkMHEe1.gif)

## Principles

### Easing

Linear animations don't feel natural, because they don't feel like the real world (typically for something to stop, it needs to slow down first).

![](/assets/img/animation/1-KcWZCCOMr7QrFpqxWirtMw.gif)

[Google Developers: The Basics of Easing](https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing)

[cubic-bezier.com](http://cubic-bezier.com/)

### Continuity

Reducing change blindness with a ranged dynamic value:

![](/assets/img/animation/1-3IWEaIssuoLSu4U7Y-hdgQ.gif)

Reducing change blindness with static values:

![](/assets/img/animation/1-TFFz9-Zl1UIUWRlc1rY11Q.gif)

Transformation creating **continuity** and reducing change blindness:

![](/assets/img/animation/1-JNE8gIhMViaL-Yri9SiCjg.gif)

#### Relationships and Layers

![](/assets/img/animation/1-7rRMvWTms2t7FnR0kyJN3g.gif)

![](/assets/img/animation/1-XCEmrzdTIbLt0a37pj0nBQ.gif)

![](/assets/img/animation/1-g-MHVlWPL1RF1W4UZIk6Qg.gif)

![](/assets/img/animation/1-f6MiFmeYfXqGim9Vo8ymwg.gif)

#### Obfuscation/Obscuration

Obscuring your user interface to force the user to focus on something else can be a useful strategy. This usually lets the user know the old interface is still there, but simplifies the layout and forces them to focus on the new item.

![](/assets/img/animation/1-dYmhIISFfqIh-w5hMD8-aw.gif)

![](/assets/img/animation/1-QX9BrprmQkvccsKaep_otA.gif)

#### Parallax

Parallax effects are basically just the idea that different layers move at different rates. This is either during animations or during scrolling. 

![](/assets/img/animation/1-tVCAaCgws_1Q2u8ViQ6z6w.gif)
![](/assets/img/animation/1-flKRcXTaSjJ9eyGAIIx4Aw.gif)

It's been a bit overused lately. But, done with subtlety, it can be effective for giving a site a sense of depth. The caveat? besides fixed background effects, parallax on the web requires quite a bit of javascript.

## Don't overdo it

Too many things animating means its hard for the user to know what to pay attention to. Animating everything is equivalent to animating nothing. Additionally, animating too much can be a big performance hit and cause slowdown's in the user's browser.

## Sources

[The Importance of Context-Shifting in UX Patterns](https://css-tricks.com/the-importance-of-context-shifting-in-ux-patterns/)

[Transitional Interfaces](https://medium.com/@pasql/transitional-interfaces-926eb80d64e3)

[Creating Usability with Motion](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc)

[The Ultimate Guide to Web Animation](https://www.webdesignerdepot.com/2015/05/the-ultimate-guide-to-web-animation/)

[Smart Transitions In User Experience Design](https://www.smashingmagazine.com/2013/10/smart-transitions-in-user-experience-design/)

[The Guide To CSS Animation: Principles and Examples](https://www.smashingmagazine.com/2011/09/the-guide-to-css-animation-principles-and-examples/)

[5 Mistakes to Avoid When Designing Micro-interactions](https://medium.com/ux-in-motion/5-mistakes-to-avoid-when-designing-micro-interactions-a6f638ee6a86)