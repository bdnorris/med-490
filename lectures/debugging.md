<!-- Fixing bugs
The word “bug” to mean a fault in computers predates computers themselves. It was originally coined by Thomas Edison, inventor of devices such as the light bulb, the gramophone and the movie camera. He said bugs were little faults and difficulties in his inventions.
The popularity of the word bug in computers started with mechanical computers in the 1940s — one of the first computer scientists, Grace Hopper, found a moth stuck inside the mechanics of a computer which was stopping it from working. She took the moth out and added it to her log book, commenting on it being funny how in this case the little fault stopping the computer from working was literally a bug.

The process of fixing code is to remove bugs, literally or figuratively — we call this “debugging”. In our code, it’s not as simple as taking out a
428 Learn to Code Now
moth, so what does it involve? There’s no perfect way to debug code but
let’s talk about a few options.

Counting starts and ends
The first way is to make sure our code matches up on both sides. For
instance, if we’re in HTML, we need to make sure there’s the same
number of opening and closing tags:
<div>
</div>
</div>
For instance, here there’s only one opening tag but two closing tags, so
we’d need to get rid of one of them to fix the code. Watch out for your
single tags that don’t have a closing tag, such as the image tag. They can
throw your counting!
In our CSS, we might have some code that looks like:

@media (max-width: 800px) {
body {
font-size: 12px;
}
section {
padding: 20px;
}
Let’s go through our code. We have an opening round bracket, then a matching close round bracket, so that’s fine. Next we have three opening curly brackets but only two closing curly brackets. The first open curly bracket needs to match the very last one. The body
style has an open and close curly bracket, but the section style only
has one open and no close curly bracket, so we need to close our section style properly.

In Javascript, there are even more curly and round brackets, so we have to be extra careful:
$("a").on("click", function () {)
$("div").addClass("highlight)
})
There are two mistakes here. There are five open round brackets but six close round brackets. The extra one is right at the end of the first line, as we want the “on()” function to go around the function.

The second mistake is with the quote marks. We have seven of them, but there should be either six or eight as each opening quote
430 Learn to Code Now
should have a close quote. The quotes around “a” are fine. The quotes
around “click” are fine. The quotes around “div” are fine. The word
“highlight” is missing a close quote mark.

Adding backgrounds and borders
One of my favorite things to do when fixing layout issues is to add
either strange backgrounds or borders to tags. I like to add in bright red
borders or bright yellow backgrounds to see where our issue may lie.
Think of it being like a doctor testing for symptoms.
Let’s take for example a sticky bar that doesn’t stretch across the screen:
header {
position: fixed;
top: 0;
left: 0;
}
To see what the header is doing, we could add in a background color or
a border to see how big it is:

header {
position: fixed;
top: 0;
left: 0;
background-color: yellow;
}
We might notice that the header just fits to its content, so it would be a sign that we need to give it some width:
header {
position: fixed;
top: 0;
left: 0;
width: 100%;
}

Inspect element
There are sets of tools built into every web browser that are specially for coders to debug their code.
In Google Chrome, we can just go to our menu bar, go to View and there are a few options under Developer Tools. In Safari, we have to turn on Developer Tools by going to Preferences, then we’ll see a Developer option in the menu bar.

A quick way to debug is to right click on the area you want to fix and
click “Inspect Element”. This will pop open the Developer Tools that let
you see what’s going on.
We can play around with the tags and styles on our web site to get
it right.
However, it won’t save any changes. We have to remember what we
change and alter our code accordingly. The reason it doesn’t save is
because you can right click and go to Inspect Element on any web site
— you wouldn’t want other people editing your code!

We can also put some test messages in our Javascript code by using “console.log()”. For instance, we might want to see how many pixels down the page we are on scroll, but not put it directly into our web page for our users to see, so we could hide it in the Javascript console:
$(document).on("scroll", function () {
var pixels = $(document).scrollTop()
console.log("we have scrolled by... " + pixels)
})
In our Javascript console, as we scroll, we’ll see a message saying “we have scrolled by... 1”, then “we have scrolled by... 2”, etc. It’s hidden from our users but useful for us coders.

Sometimes, we might want to test our sites on our iPhones and iPads using Developer Tools. The simple way to do this is to plug your device into a Mac, then in your menu bar under Developer Tools, you’ll see your plugged-in device as an option to use over the Safari desktop browser.

Google
Guess what? Coders don’t keep all this information in their brains. They use Google to find answers all the time. If you’re having a problem or can’t remember something, the best way is to Google it! Copy and
434 Learn to Code Now
paste in your error message. Look up what “CSS overflow” is and how
it works.
There’s no shame in looking things up. I do it all the time and so does
every other coder.

Stack Overflow
One of the sites you see pop up in Google search results for code
questions is Stack Overflow, which is a question and answer
community for coders. If you get stuck and can’t find a relevant answer,
sign up and post a question. Tag it with the right languages and
hopefully someone will answer.
Other advanced coders answer questions for free because they want
to give back to the community (just like open source code). The Stack
Overflow community is very welcoming to new users.
Practice, practice, practice
The best way to learn how to fix bugs is to keep encountering them.
Don’t give up, keep at it and try and try again. It’s easy to get disillusioned when you get stuck on a problem but push your way through.
 -->

<!-- One of the most important things to remember when learning to code is there are essentially two modes: idiot or genius, with nothing in between. Unfortunately those feelings will probably never go away. Coders old and new have these two moods and it’s totally natural. It’s hard to believe that a coder of 10 or 20 years experience would feel like an idiot but it’s true. We do.
Why does this happen? When you’re coding, you’re essentially in a creative state of mind. You’re creating brand new sections, features or even sites that have never been created in this way before. You’re in the flow of creativity, you get a feeling of achievement. Everything is going well and you’re so good at this coding malarkey. It feels unstoppable and you lose track of time. Three hours of productive coding can speed by in what feels like 30 minutes.
Then. You. Get. Stuck.
Why is this code not working? It should be so simple. But it’s just
not working.
Computers are dumb. They just carry out the instructions you give them. So if it’s going wrong, it’s not the computer’s fault. It’s yours.
And that can make you feel really dumb. It’s quite incredible how
Idiot or genius?
442 Learn to Code Now
quickly the high of productive coding can turn into a low of confusion
and anger.
Usually it’s a tiny mistake that can be easily solved. Sometimes you
might fix it and you don’t really know what you did but it worked. But
as soon as it works again, the high comes back. I fixed the code. I did it.
It was me.
I. Am. A. Genius. -->


https://www.youtube.com/watch?v=NJjlzxud4_M&index=3&list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y

Feature Queries
https://www.youtube.com/watch?v=T8uxmUQZsck&list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y&index=5