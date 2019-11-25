# Prepping, Compressing and Using Images on the Web

## Types

There are several different file types that are valid to use in browsers. You're probably familiar with most of them, but let's look into the pros and cons of each in a little more detail.

### Jpeg

The king of photography compression is still the <abbr title="Joint Photographic Experts Group">JPEG</abbr> or the `.jpg` file. It's backward compatibility and it's variable compression make it useful not just for the web and the browser, but for file storage and transmission. 

Add a small amount of compression, and a JPEG can retain a lot of its quality and still be printed in high-resolution. Add a lot more compression and it's a great format for the web.

JPEGs work best for photos. Images with a lot of detail, blurs, gradients, etc. work well in JPG because that's what it's compression was designed for, allowing for small files that you don't even really notice were compressed.

JPEG compression works on a variable range. The higher you turn up the compression, the smaller the image, but the more likely you are to get "artifacts" that might be noticeable. Artifacts are much more visible to the naked eye around sharp and contrasty areas like text or graphics. That's why generally we use PNG for graphics and JPEG for photography.

When in doubt, use `.jpg` for photos.

### Gif

However you pronounce it, <abbr title="Graphics Interchange Format">GIF</abbr>s or `.gif` files are now primarily used for animation. There are better ways of doing animation on the web, but GIFs can still be a good choice because they're so easy to implement and work just about anywhere.

When creating an animated GIF, you're basically creating a frame-based animation file. This means it's a series of full graphics. For this reason, long or large GIFs can actually grow to pretty large file size.

There were uses for non-animated `.gif` files. They are compressed even more than `.jpg` files because they had a strictly limited color palette. They also supported some transparency. However, those benefits have mostly been duplicated and improved by PNG files.

### Png

Where JPEG files are "lossy", meaning you actually loose data when compressed, <abbr title="Portable Network Graphics">PNG</abbr> or `.png` files are "lossless" meaning that no data is actually lost (think of a `.zip` file). They gained support much later than JPGs and GIFs and were intended to be the best of both. 

The main strength of PNGs is they allow for "alpha transparency". The transparency in GIFs was binary, a pixel was either opaque or transparent. In a PNG, any given pixel can have its own opacity, allowing for fading and partial transparency effects, making it extremely versatile.

There are two flavors of PNG: PNG-24 refers to "true color" variant. PNG-8 refers to "palette" variant, which supports only 256 colors similar to GIF, allowing for smaller files.

PNG-24s don't suffer from compression artifacts like JPGs, making them great for graphics like logos and icons. The transparency allows them to be placed on any color background. 

On the other hand, a given photograph in PNG format versus a compressed JPG might look similar to the naked eye, but the JPG will be significantly smaller.

When in doubt, use PNG for graphics or any time you need alpha transparency.

### SVG

There are also SVG, "scalable vector graphics". With SVG, you can use vector graphics for the web. Think of it as an `eps` or `ai` file, but "uncompiled." SVG files are made of human-readable code. This means not only can you create them in Illustrator or Sketch, but you can author them by hand coding them as well.

SVGs also have a super-power, the can actually be placed right inside your HTML as well as accessed via an `<img>` tag. This means you can actually **style them with CSS**. For this reason, they're great for icons, since you can manipulate their colors and other properties through CSS. This also makes them able to be **animated via CSS**.

They tend to be small, especially when used for icons and small graphics. However, adding gradients or complicated patterns can quickly bloat them.

SVGs are awesome, but they're a large subject that I'm afraid we just don't have a lot of time for. But I will show you how to export and prepare a simple one.

## Exporting and compressing

Exporting techniques are going to vary widely on what software you're using and how your design is built. Let's cover some basics and demo using the most obvious methods from our common Adobe tools.

If you have a complex design, there is no magic way to get the design asset from a full design to a file. It's best to prepare and crop your images and graphics **before** you place them into Photoshop or Illustrator. However, I find this is not common practice. 

Normally you probably don't worry much about how you set up your files, but if you are handing them off to a developer, it matters. Some developers may expect the full file, some may expect all assets pre-prepared. 

Properly setting up your files by organizing layers and naming things clearly, outlining and expanding graphics, cropping images instead of using masks, etc. will make it easier. It really depends on the design and what you need. Practice and experience will help. But, I can show you how to **properly** save your files so they will look good and be small.

Keep in mind, both Illustrator and Photoshop now support image linking, meaning you can break your design into smaller pieces and place them into a master layout file. If properly linked, when you make an adjustment in one of the linked files, it will automatically update in the master file.

### File dimensions

Deciding how big (dimension-wise, as in the number of pixels) your image can be can be difficult as well. In responsive design, the size of your image can change. We'll talk more about this when we talk about responsive coding, but we also want to worry about "Retina" screens.

A good rule of thumb is to determine the maximum size your image will be in the browser, then double that for retina. So if an image flexes in size, but its maximum size is 560px wide, I'd save it at 1120px wide.

However, depending on the image, this could be overkill, but for most images, it will be a safe way to save a high-quality image that will look great on any screen. If you compress...

### From Photoshop

From the sized image in Photoshop, choose `File > Export > Export As`

The tool that pops up has all you need to find the best file type and compression for your image. It will give you a live preview of the result.

On the left, you can change the scale. This is an easy way to reduce, but you shouldn't use this enlargement unless you are saving from a file with a smart object or vector graphics/shapes/etc.. 

Under "format" you can switch which image type you want to use and depending on the type, you will have different options. JPG will give you that variable compression dropdown to adjust the compression, showing you a live preview.

PNG will allow you to turn transparency on and off, and switch to PNG-8 if you want.

You can also change the image size right here, or crop the canvas.

You can also right-click (ctrl-click) on a layer and choose `Export As` here to export just one layer from a document. You can also hold the shift key and select multiple layers, choose `Export As` and export all the selected layers at once.

You can do the same thing on a layer folder. As you can imagine, if you're designing in Photoshop, properly managing your layers can make exporting your images much easier.

Selecting multiple layers or folders will bring up the "Export As" tool with each layer or layer folder on the left, allowing more of a "batch" process.

There's one more cool trick in Photoshop for generating assets from layers or groups. Go to `File > Generate > Image Assets`. This is either checked on or off. Now, name a layer with a file extension, like `logo.png` and save your file. If you look in your Finder now, next to the Photoshop file you'll see ann assets folder with your file based on the layer. It will re-generate everytime you hit save.

[Export artboards, layers, and more](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html)

### From Illustrator

Illustrator has a few options for exporting assets, none are very good.

I highly recommend when using Illustrator for digital design, to prep your images in Photoshop first, place them as links in Illustrator, then only using Illustrator for vector graphics, elements that will be built with CSS (buttons, borders, etc.) and type.

However, there aren't a lot of rules here, there's just what works.

You can go to `File > Export > Export As`, but this is really just for whole artboards. This is the best place for you to export your designs for presentation though. You can also go to `File > Export > Export for Screens` if you want more of a preview of what you're exporting. 

Illustrators new export tool is the "Asset Export" panel. Find it by going to `Window > Asset Export`. Here, you can drag elements or groups of elements to the panel. You can name them, and set your parameters for exporting. Then, select or multi-select which items you want to export, and hit the "export" button in the bottom right. This will export everything all at once. Convenient if you make some changes that affect several items since they will stay up to date.

However, currently there's a flaw here, that will perhaps be fixed in a later version. If I add anything with a mask, which is common practice in Illustrator, it will try and export the entire mask, with just additional transparency. Not cool.

If this happens, you can bring the image into Photoshop and choose `Image > Trim` to trim off transparent pixels.

[Collect assets and export in batches](https://helpx.adobe.com/illustrator/using/collect-assets-export-for-screens.html)

[Option to export to clipping mask boundaries](https://illustrator.uservoice.com/forums/333657-illustrator-feature-requests/suggestions/20359933-option-to-export-to-clipping-mask-boundaries?tracking_code=aec1f576e11af201b0b914654bfb8865)

### From XD

I am a beginner in XD, the same as you. Read this article.

[Exporting Design Assets](https://helpx.adobe.com/xd/help/export-design-assets.html)

### From Sketch

Individual items, as well as groups of items, can be "made exportable." Select the items you want on the artboards or in the layers panel, scroll down on the right toolbar and look for `MAKE EXPORTABLE`. Once you clicked this, you can set up the format to export, then choose `Export Selected...`. There are some cool options here, but you don't get the same control Photoshop gives you on JPGs (but it's ok, we can use some other tools). 

The cool thing is that Sketch is going to remember these settings so you won't have to do this every time you make a change. This can even be done on entire artboards. 

## Further compression

Always use an "Export" option when you are saving from an Adobe program, not just "Save-As". However, Adobe is kind of a baby when it comes to compression&mdash;I almost never stop at what Adobe programs export. 

Here's a list of a few applications and websites you can try to further compress your images. They're listed here in order of aggressiveness.

1. [TinyPNG (it does JPGs too)](https://tinypng.com/)
2. [Compressor.io](https://compressor.io/)
3. [ImageOptim](https://imageoptim.com/mac)

These are all free, there are others, and probably some good paid options. 99% time, I get great results from TinyPNG.

I recommend always saving your original file exports in a separate folder. TinyPNG, in particular, is very aggressive, and sometimes it will turn a PNG-24 into a PNG-8. So, you cannot assume the files that come out of these compressors could be re-opened in Photoshop and edited.

The worst case scenario is, your file doesn't look good, you can always go back and try a less aggressive approach.

## SVG preparation

SVGs can be a bit complicated, but I can give you some basic guidelines.

The number one rule of SVG is to keep them simple. Avoiding complex masks, gradients, and objects with a ton of points. Expand your shapes (Object > Expand Appearance) and outline your fonts. Both strokes and fills are valid, but you would get unexpected results if you had any complex outlines or brushes unless you expand them.

Just like a JPG or PNG, an SVG has dimensions that are based on the artboard. In SVG this is called the "viewbox". Make sure your SVG fits inside your artboard. I also recommend you make your SVG artboards even numbers, it will make it easier to calculate changes later. 

Since the artboard is so important, I actually don't recommend using Illustrator's Asset Export panel for this either. I would keep each SVG as a separate AI file, and to make an exception for what I said before, choose File > Save As and choose SVG from the filetype (not SVGZ). 

### Using SVGs

The easiest way to use an SVG is just use the `<img>` tag and control it's sizing with CSS.

But, I would also encourage you to explore opening the SVG in a text editor, copying the code, and just pasting it into your HTML. You can assign styles and classes to the SVG code, and control it with CSS. Here's a super simple example of what that would look like...

Here's a black circle, 20px &times; 20px, saved from Illustrator as an SVG:

```html
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

Right away, if we're going to include this directly in our HTML, we can get rid of the doctype declaration and the Adobe Illustrator comment.

```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

<div style="width: 20px; height: 20px;">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
</div>

So, as you can see, this looks a bit like HTML. It's made up of tags. The surrounding `<svg>` tag has attributes related to the document. The viewBox attribute sets the size of the "artboard" and all of the other numbers in the document are in reference to that.

Inside that is a `<g>` tag, just standing for "group". Inside that is the `<circle>` element. There are several different shape elements available with SVG, including: `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline` and `rect`.

I could add a class to my circle, by either adding it directly, or I could add it to the group. 

```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g class="my-circle">
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

And then I could style it like so...

```css
.my-circle > circle {
  fill: red;
}
```

<div style="width: 20px; height: 20px;">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g >
	<circle style="fill:red" cx="10" cy="10" r="10"/>
</g>
</svg>
</div>

You'll notice I didn't use `color` or `background-color`, but a specific property for SVGs called "fill".

We could talk about all we could do with SVGs for a while, but it's a bit beyond the scope of this class, so we'll leave it there for now. But, I hope you can see how powerful this could be, with SVG, we get a new language to draw with, that can be used inside of our HTML.

## How big is too big?

Of course, the point of all of this is that even with broadband speed internet, the time it takes our sites to load matters. It matters to give someone on a crummy 3G connection a chance at accessing your site, and it even matters that your site feels snappy to someone with a really fast connection. There are a lot of factors here, but the items that are in your control are what we're concerned with. 

If we looked at Missouri State's homepage as an example, the largest asset on the page is actually a javascript file. The main featured image is second, measuring in at around 63k. That's pretty good. 

When deciding on what's acceptable, you need to consider your audience and your content. If you're making a portfolio site, image quality really matters. The home page of a university, being a more general audience, likely to be accessed from mobile devices, image quality matters less than speedy delivery. 

The size of your files matters for you or your client's bottom line as well. Consider our University's website. It probably gets a lot of traffic. Let's say it gets 50,000 views a month (although, I have no idea). Now, returning visitors likely get a cached version of that main image from their own browser's storage, saving the need to download a new copy. But let's say all 50,000 views are unique. Just that one image (63k), downloaded 50,000 times is 3.15GB. Not crazy, but that is just one image. 

Now say you didn't compress the image and it was 140k instead. Now we're talking 7GB. That's bandwidth the school (you) has to pay for. 

To the real question, how big is too big? Well, you need to test and make sure your site feels like it's loading well, even if it's on a slow connection. We'll look at how to do this when we talk about browser developer tools. For now, keep your big hero images under 300k, and your smaller content images at 150k or so, and you should be fine.

## Using images on your site

We've looked at the `<img>` tag and the `background-image` property in CSS. Let's look at how we can use the `<img>` tag in a little more detail.

Something I include in every site is the following CSS code snippet: 

```css
img {
	display: block;
	width: 100%;
	height: auto;
}
```
This is something easy you can do for responsive images. The idea here is that you use the images container to control the size of the image. 

First off, images by default are `display: inline`. So we want to make them display block so they automatically break when around text and follow our normal box model (width, height, border, margin, padding).

If you HTML is structured like so...

```html
<div class="image-container">
   <img src="myimage.jpg" alt="My Image" />
</div>
```

...you can control the size of this image in CSS and the image will always try and fill the entirety of its container. Its height will adjust automatically because **images have an inherent aspect ratio**.

```css
.image-container {
	width: 100%;
}
```

Now my container will fill 100% of its container, which may be 100% too, or 50%, or 200px, or whatever. If I wanted two images side-by-side, I might set my container to 50%&mdash;but that gets into layout, so we'll save it for a bit later.

But you might be wondering if I have a 300px &times; 300px image, shouldn't I only show it that size in the browser? Images in the browser can be set at any size with our CSS, and yes, if you enlarge an image, it will likely degrade its quality. That's why it's a good idea to determine the largest an image might be in the browser and set the image size to that. If the images shrink, it will still look good.

For retina screens (and other high pixel density screens), including an image at twice the width and height of the largest size, it might appear at is will make the images look even better, but possibly at the cost of file size. We'll look at this more when we talk about responsive coding.

### Background or Content?

So, when should you use the `<img>` tag in your HTML, and when should you just set a background image on an element in your CSS? 

The best way to think about this is whether the image is a part of the content of a site, or is it a part of the design. It's a tricky question. One way to think about it would be if you were to re-design the site in a year, which images would have to stay, and which might go. If an image should stay, it's probably content.

Also remember that assistive technologies for the disabled will acknowledge an `<img>` tag, and Google will index it, where background images are usually ignored.

### Floats

Let's talk about floats. Originally, when designers and developers were trying to make interesting layouts on the web, they used a hack. HTML was really just for documents, and CSS wasn't implemented yet, so we used tables to layout out websites. Tables are meant to show tabular data, but HTML let you nest tables inside other tables ad infinitum, so this was fundamentally how we made designs for the web. 

It wasn't always fun, but it worked. However, responsive design wasn't going to work with tables, because although they flexed a bit, you couldn't really reshuffle content or drop blocks down to stack, or follow any of the other responsive layout patterns.

Floats came to the rescue. Floats were an old CSS thing that let you place an image to the left or right, and text would flow around it, rather than it sitting on the baseline. 

```html
<p>
	<img class="float" src="https://source.unsplash.com/random/400x400" />
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

<p><img class="float" src="https://source.unsplash.com/random/400x400" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

If I set a float on the image...

```css
.float {
	float: left;
}
```

I get...

<p style="clear: both;"><img class="float" style="float: left;" src="https://source.unsplash.com/random/400x400" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div style="clear: both;"></div>


So, the new pattern was, float everything you want to be on the same row, and those things will line up next to each other. This allowed you to make columns, and adjust widths, and basically do a responsive layout.

However, this is also a hack. It's honestly pretty amazing the web went along as long as it did with no real method of layout, just various hacks. 

I've decided I don't need to teach floats anymore, because now we have Flexbox and Grid, that we'll talk about soon. Flexbox is not a hack and is actually meant for layout. So, if you see floats when looking at some code, it's probably used for layout, however, you can still use floats on images like I've shown if you need to wrap text around an image or some other kind of box.

[All About Floats](https://css-tricks.com/all-about-floats/)