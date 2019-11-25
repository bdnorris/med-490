# Web Fonts

As I've probably mentioned before, in the early days of the web, we were limited to typefaces that existed on the user's computer, which means we were limited to a small number of common Windows or MacOS standard typefaces.

If you wanted to use a different typeface, you had to bake it into an image or use complex Flash or Javascript based techniques. One of the key blockages was licensing. The big foundries didn't want you to put their fonts on your site, otherwise, savvy user's could steal them and distribute them. 

A few things had to happen to change all of this. First, new font files were developed that weren't as easy to share, like EOT and WOFF. CSS had to have an implementation to load them and let them be called with `font-family`. Finally, foundries had to catch up and come up with some licensing models to make it financially worth it. 

We have all those things now!

## Licensing

There are also a lot more quality free fonts, as more large companies that can afford to employ typeface developers have started to embrace open source for some software and fonts. Some of the most popular fonts on Google Fonts were made by our favorite big tech monoliths: Roboto (Google), Source (Adobe), Open Sans (also Google), and Lato (partially Google)

Others like Montserrat were developed by typeface designers, looking to attract attention, or to sometimes get community help to finish their typeface ideas.

Some of these licenses just use good faith, and maybe some server pinging to allow using the fonts on the web. Others, like Adobe Fonts/Typekit, don't let you download the fonts directly, instead, you need a subscription. But regardless of how it works, the main takeaway is you must either use a font with an open commercial license or a specific web font license. **Do not assume that a desktop font can legally be used on the web.**

## Installing your own

We've used Google Fonts, which pull a hosted CSS file into your site, but you can install the fonts yourself using some specific CSS. In this scenario, you will need to have the web fonts as part of your site, just like you would an image file. We'll look at making the correct files later, for now, let's look at the code.

You'll be using another `@` rule, like `@media` or `@keyframes`. 

```css
@font-face {
  font-family: 'Source Sans';
  src: url('source-sans-normal.otf');
  font-weight: 500;
  font-style: normal;
}

body {
  font-family: 'Source Sans';
}
```

We provide `@font-face` with the same properties we use for typography on our elements, except we provide a `src` property that references the font file, just like we would a background-image with `url()`.

But here, instead of calling `font-family`, we're setting it. The name we define here is the name we call later in our CSS. This would need to be in our CSS before we actually asked for the font with `font-family` on our elements. 

We use a different `@font-face` declaration for each font-weight or variant, setting these things with `font-weight` and `font-style`. This way, when we ask for a specific weight later, it uses the correct file.

```css
@font-face {
  font-family: 'Source Sans';
  src: url('source-sans-bold.otf');
  font-weight: 700;
}

@font-face {
  font-family: 'Source Sans';
  src: url('source-sans-italic.otf');
  font-style: italic;
}
@font-face {
  font-family: 'Source Sans';
  src: url('source-sans-bold-italic.otf');
  font-weight: 700;
  font-style: italic;
}

body {
  font-family: 'Source Sans';
}

h1, h2 {
  font-weight: 700;
}
```

In the above example, our whole site would use Source Sans, but our H1s and H2s would use Source Sans Bold.

As you can see, every time you add another @font-face rule, it's another font the user has to download. This is equivalent to checking those checkboxes for weights and styles in Google Fonts. So ideally, you only include the font files you actually need. 

## Formats

As mentioned above, part of what was needed to bring fonts to the web was formats that couldn't be shared easily. However, as licenses and services have improved, some of these formats are dying. 

*TTF* or Truetype is an old format that still works on desktop and web.
*WOFF* or Web Open Font Format is a wrapper for Truetype or OTF and is still around. Generally recommended.
*EOT* or Embedded Open Type was just for Internet Explorer and is now deprecated.
*SVG* fonts were also a thing, but no longer supported.
*OTF* or Open Type, the same as on your desktop, also work, and have some cool experimental features, perhaps even leading to alternates, and maybe even kerning in the future. 

For now, WOFF or OTF are your best bets. 

Including more than one format is possible by separating with commas and following with a `format()` declaration, like so...

```css
@font-face {
  font-family: 'Aleo';
  src: url('Aleo-Bold-webfont.woff2') format('woff2'),
    url('Aleo-Bold-webfont.woff') format('woff'),
    url('Aleo-Bold-webfont.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
```

## Buying fonts, or making them

There are a thousand choices for buying fonts. Just make sure you buy a web license and a desktop license. 

There's a really great website called [Font Squirrel](https://www.fontsquirrel.com/), that has free fonts for commercial use. It doesn't have a hosting option, but many of the fonts have web licenses (you'll see they have a little globe icon). This is a good way to try and install your own fonts. 

Web fonts in general usually come with the fonts, and also a sample CSS file with @font-face rules already written.

[Font Squirrel](https://www.fontsquirrel.com/) also has a tool that lets you turn desktop font files into web fonts. Again, it's not necessarily legal, but [this tool will give you the formats you need](https://www.fontsquirrel.com/tools/webfont-generator).

## Resources

[The League of Moveable Type](https://www.theleagueofmoveabletype.com/)

[Font Squirrel](https://www.fontsquirrel.com/)

[Monotype](https://www.monotype.com/)

[MyFonts](https://www.myfonts.com/)

[Linotype](https://www.linotype.com/)

[FontShop](https://www.fontshop.com/)

[Font Spring](https://www.fontspring.com/)

[Typewolf](https://www.typewolf.com/)