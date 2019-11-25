# Search Engine Optimization

SEO or Search Engine Optimization is a big subject. There are professionals whose only job is to help companies make their websites show up better in search results. It's easy to see why if you think about how often you use Google or an equivalent. 

I could easily digress on the history of search and site indexes. But I'll try instead to focus on what's relevant now, and the things that you should know if you're going to make a website. I'm of the mind that there are things a client should pay extra for, and then there are things they should expect with a well-designed site. I'll focus on those basic expectations.

## Crawling and indexing

Search engines work by crawling your site indexing your content. So first off, your site must be crawlable. This simply means your site must have normal links (`<a href="">`) and no dead ends or orphaned pages. An orphaned page might be one you forgot to link to, or the link is broken because you changed the name and forgot to fix the links _to_ it. 

Pages should also load quickly, a crawler might skip a page that won't load fast enough.

Indexability has to do with your HTML. Proper use of tags, live text and sensible structure will help. Title tags are a must, as well as smart use of heading tags. They tell crawlers what the page is about. 

URLs also matter. Readable URLs with a clear hierarchy help the indexes understand your site's structure.

`http://my-website.com/pages/services-02.html` only communicates a small amount about the page.

`http://my-website.com/services/our-search-engine-optimization-services/` communicates a lot more.

## Relevancy and keywords

The toughest part of SEO is to have a site worth searching for. Quality content will always matter more than anything else. Having good content that also includes keywords the user is likely to search for is key to a good SEO strategy. 

That means you should do keyword research and use educated guesses about what your users might search for. There are tools to help you with this. Then, make sure those keywords are placed into your copy _in a natural way_. Don't force keywords. 

### Images

Although Google does index images, understanding those images is still in its early stages. That's why the "alt text" is really important. 

```html
<img src="image.jpg" alt="Description of image">
```

If you have an image heavy website, make sure to also include paragraph and heading text supporting the images, since that text will get indexed and may contain useful keywords. 

## Incoming links

One of the hardest parts of SEO, and not usually something that comes standard with a website, is having lots of good incoming links. Someone posting a link to your site on social media, or a blog etc. increases your "authority." That's why you see a new style developing for headlines on the web, and sometimes it can get ridiculous. But getting a link shared around is extremely important to your ranking.

## SERPs

The SERP, or the Search Engine Results Page, requires a bit of thought as well. 

Your `<title>` tag will show up as the main heading, then your URL, then your "meta description", if you have one. Otherwise, Google will just choose some content on your page. 

> The first meta tag is the description. Google and other search engines will use this to add a little description under a search result: Google doesn’t consider this in its search ranking, but it’s useful for potential visitors to our site to know what the site is about before they click.

&mdash; SuperHi


```html
<head>
  <title>SuperHi — children’s hand-made clothes</title>
  <meta name="description" content="We made organic...">
</head>
```

[SERP Preview Tool](https://zeo.org/seo-tools/serp-preview/)

## Social tags

You can also add some meta tags to your HTML `<head>` called Open Graph tags that Facebook and other social networks use to display an image, title, and description when someone shares a link from your site. 

```html
<head>
  <meta property="og:title" content="SuperHi online course">
  <meta property="og:type" content="article">
  <meta property="og:url" content="http://superhi.com/">
  <meta property="og:image" content="http://superhi.com/image.jpg">
  <meta property="og:description" content="Learn tocode...">
  <meta property="og:site_name" content="SuperHi" />
</head>
```

### Twitter social tags

For Twitter cards, we can use something very similar to Facebook’s meta tags:

```html
<head>
  <meta name="twitter:card" content="summary_large">
  <meta name="twitter:site" content="@superhi_">
  <meta name="twitter:title" content="SuperHi online course">
  <meta name="twitter:description" content="Learn to code...">
  <meta name="twitter:image" content="http://superhi.com/image.jpg">
</head>
```

## Resources

MOZ is one of the most authoritative companies when it comes to SEO. They have paid tools, but also lots of free information.

[MOZ: Beginners Guide to SEO](https://moz.com/beginners-guide-to-seo)

There's a bit of marketing to wade through here, but this keyword tool is pretty useful:

[Ubersuggest keyword research tool](https://neilpatel.com/ubersuggest/)