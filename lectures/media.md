<!-- Audio, video and media
So far in this guide we’ve talked about adding text, images and colors to our site. What about other media like audio and video?
Audio is pretty straightforward. The first thing we need is to add our audio in MP3 format. Other file types like WAV and OGG work in particular browsers, but MP3 works in all modern browsers.
To add an audio track we can add:
<audio src="smashmouth.mp3"></audio>
By default, we won’t see anything. The audio track is there but
what do we want to do with it? Do we want to let our users play the track and give them some playback controls, or do we want the audio to auto play?

To make the user have some controls we can add:
<audio src="smashmouth.mp3" controls></audio>
To make the audio auto play, we can add:
<audio src="smashmouth.mp3" autoplay></audio>
We could even add both:
274 Learn to Code Now
<audio src="smashmouth.mp3" autoplay controls></audio>

We can also make the audio repeat by adding “loop”, which can be
useful for background sounds:
<audio src="smashmouth.mp3" autoplay loop></audio>
Video
To place a video in our HTML, we can add:
<video src="kitty.mp4"></video>
If we want to add controls, we can add:
<video src="kitty.mp4" controls></video>
If we want to make the video auto play, we can add:
<video src="kitty.mp4" autoplay></video>

If we make the video loop be adding “loop”:
<video src="kitty.mp4" autoplay loop></video>
We could add all three attribute to have an auto-playing, looped video
our users can control:

<video src="kitty.mp4" autoplay loop controls></video>
Slight hitch to auto playing
There’s one big downside to adding the “autoplay” attribute. Mobile browsers will ignore you. There’s a legitimate reason for this — if you’re on a phone, you’re likely to not be connected to wifi, but 3G or 4G, which is slower to load. Browsers would prefer to ask users if they really want to play the video or audio, so they aren’t automatically using up all their mobile data allowance.

There’s no quick way around this auto playing restriction, it’s something we have to design around. Some users detest auto playing videos and audio, so it’s always a friendly gesture for us as authors of web pages to ask the user what they’d like to do.
Other websites’ media
So we have our own audio and videos playing on our own web site, but what if we want to grab a YouTube video or a Spotify playlist? Unfortunately we can’t use the audio or video tags for this. But there is another way.

Back when YouTube was in its infancy, it didn’t have a lot of traffic
coming to its web site. But it did notice a lot of other web sites were
having trouble adding videos to their web pages. By using a pretty old
technique called “embedding content”, YouTube offered a service where
other people could upload content and put it on their own sites. This
made YouTube’s traffic skyrocket.
Other sites followed with the embedding content idea and most larger
media sites now offer this. How you embed content depends on the site.
For instance, if you want to embed a YouTube video, go to the video
you want to place on your site. Underneath, there will be a “share” link.
This will open a new section that will have another link called “embed”.
In here, there will be some HTML code that we can copy and paste into
our own HTML.

Other sites will have their own way, but a lot hide the “embed code”
under share links. Look out for HTML code that starts with an
<iframe> tag. This is an “interactive frame” that essentially puts a small
web page inside your web page. A web page inside a web page sounds
crazy, but it’s exactly what it’s doing. YouTube, Soundcloud, Spotify and
more all have special web pages solely devoted to putting their content
into a box on your web page and millions of others.
Sometimes it can be quicker and easier to add your own content to
YouTube and Soundcloud to convert it into a web friendly format.
They’ll do all the work for you and there’s just a small piece of HTML to
add once it’s done.

Video background
Sometimes you might want to add a video background to your website. We’ll do this with a video tag, but you could do this with an embedded video too.
In our HTML, we’d add at the very top of our content something like:
<video src="background.mp4" autoplay loop></video>
We can then place this in the background of the page:
video {
position: fixed;
z-index: -1;
min-width: 100vw;
min-height: 100vh;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
Here we’re keeping the video in the background as we scroll by using fixed position and making our z-index -1 (remember default is 0, so we move it back). We’re then making sure the video fills the background by doing a minimum width and height. We’re then moving the video’s top left corner into the middle of the page, then moving it back up and left with transform.
278 Learn to Code Now
Remember this will not auto play in mobile browsers. Maybe add
a media query at smaller sizes to hide the video and show a default
background instead:
@media (max-width: 900px) {
video {
display: none;
}
}
 -->
