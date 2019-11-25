# How the Web Works

## The Internet and the Web are not the same thing

### The Internet

The Internet is a global network of computers. Pretty much anything you do that connects to another computer through your Internet Service Provider can be said to be over the internet, including "The Web."

### The Web

The simplest way to define the "Web" is that the web is a subset of the internet that deals with what exists in the browser. If it's not in a browser, it's not the web. 

## What's a browser, and what happens when I put a URL in the address bar?

A browser is a software application that displays HTML documents, additionally pulling in CSS, Javascript, Video, audio, etc. 

Chrome, Firefox, Safari, Edge, Opera and Internet Explorer are some of the most popular browsers. Each one of them receives HTML documents from servers. Usually, those documents have links to other files, images, style sheets, videos, javascript, fonts, etc. Each of these requests is happening over a protocol called "HTTP". 

HTTP stands for "Hypertext Transfer Protocol," and it's what it sounds like, a system originally designed to download HTML files to the browser. It's been repurposed to retrieve all kinds of files by a browser. 

### What's in a URL

URL stands for "Uniform Resource Locator," the address of an online resource, like a website or document. As the [MDN article points out](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL), each URL, in theory, points to a unique resource. However, there are exceptions. The web server has different ways of interpreting a URL and may act differently in different circumstances. 

The URL lives in a browser's address bar, and is initialized in one of two ways: 
- after clicking a link
- by typing the URL directly into the address bar

#### Anatomy of a URL

Take the following URL:

<mark>https://developer.mozilla.org/en-US/search?q=URL</mark>

`https` is the _Protocol_, most of the time it's HTTP or it's secured version, HTTPS. You might also see `mailto` for links that open new mail windows, `tel` which can start a phone call, `ftp` which is a protocol meant for transferring files, etc.

`developer.mozilla.org` is the domain name. 

`org` is what's known as a TLD or "top level domain." You're probably pretty familiar with these, they include `com`, `net`, `info`, and country codes like `us`, `uk`, `mx` etc. They're managed by the Internet Corporation for Assigned Names and Numbers (ICANN). 

`mozilla` is the main domain name. This is the one that you buy when you buy a domain name. 

`developer` in this example is a _subdomain_. Once you own a domain, you can usually make as many subdomains as you want. You can use them to point to different places on the web server so you could run several different websites under the same domain name. 

`/en-US/search` is the _path_. At its most basic level, this indicates that at the root of the website, there's a folder called _en-US_ then a folder called _search_. Often these are interpreted by the web server in various ways, but ultimately, they're a way to structure content on your website. 

`?q=URL` represents _parameters_ and their _values_. _q_, in this case is the **parameter** and stands for _query_. Its **value** is "URL". This is an easy way for a URL to pass values to the web server. 

So, in this URL, if you typed it into the address bar, a system called the **Domain Name System** (DNS) that works all the way from your computer, router, internet service provider and the backbone of the internet takes over. It figures out what web server is represented by _developer.mozilla.org_ and routes your request. 

Next, the web server looks at your path to figure out what document or page you're requesting, in this case, search results in US English. 

Then, the parameters are read by the server, and special results are returned based on that parameter. In this case, the server saw you wanted to search for the term _URL_, and it looked up in its database those results. It then built an HTML document with the content of those results, and sent it to your browser. 

### Structuring your site

Sometimes, you'll also see a URL like `http://mydomain.com/about.html`. This is a direct reference to the HTML document.

With basic HTML and no programming language to interpret URLs, you would almost always place in the root of your site an `index.html` file. **The web server will always return the index.html file in any directory if that directory is requested without referencing a file.**

So, if you created a site, and made an index.html file for the home page, how do you make the "About" page? 

You could either create a file called `about.html` and reference like above, or you could create an "about" folder, place an `index.html` file inside of it, and reference it with a path like so: `http://mydomain.com/about/`. Again, the web server will return the index.html file inside the about folder when requested that way. 

### Requesting files

You'll also see URLs that point directly to other kinds of files, like `http://mydomain.com/my-image.jpg` or `http://mydomain.com/myPDF.pdf`. These directly reference files, and your browser acts appropriately. For an image, it'll usually show it in the browser. For a PDF, depending on how your browser is configured, it will either download the PDF or show it in the browser. 

### Referencing files inside your HTML

Referencing URLs is important in not just structuring your site, but the design and layout as well. CSS files, Javascript files, fonts, and images are all referenced with URLs in your HTML. We'll practice this, just remember, those URLs almost never have to be _full_ URLs but can be _relative_ URLs when inside your HTML or CSS.

Consider the following:

`skills/infrastructure/understanding_urls`

If your current URL was `http://mydomain.com/resources/`, this link would attempt to load `http://mydomain.com/resources/skills/infrastructure/understanding_urls`

If I add a slash to the beginning, like so:

`/skills/infrastructure/understanding_urls`

Then it would instead attempt to access `http://mydomain.com/skills/infrastructure/understanding_urls`

See the difference? Adding the slash assumes you want a URL relative to the root of the site, whereas no slash assumes I want a URL relative to my current path.

You might also need to reference a relative URL like:

`../css/mycss.css`

Those two dots indicated I want to, relatively, go up one directory from where I currently am, then down further into that path. I could even use `../../etc.css` to keep on going up however many directories I need to. 

If you needed to reference different website, you would need to use the full URL. So on `http://mydomain.com`, if I wanted to reference an image from another site, I would need to include the full URL to that image... `https://source.unsplash.com/random`

## Back to the browser

So, when you put that URL in your browser, the DNS system finds the correct web server, then that web server interprets that URL, and sends an HTML file back to your browser. That HTML file references other files, that are also requested by your browser and sent back.

When you fill out a form, you are sending more than a request, you're sending a packet of text information too.

So your browser reads the HTML, reads the CSS file, lays out the content on the page. The browser also can read a programming language called Javascript and it can make things change in the browser, and create interactive experiences. 

Some clever people also figured out a way to make javascript send HTTP requests as well. This allows the transfer of data back and forth without the URL actually changing in your browser. This is how all of our modern web applications work. They're just really fancy websites with a lot of javascript.

**Remember**, the files that make up a website might come from a server, but once they're in your browser, they're now on your computer or mobile device, the only thing that can change that is another HTTP request, either in the background with javascript, or by changing the URL in the browser. 

## Conclusion

Often, this all happens so quickly, you barely notice it, but it's important to understand how URLs work to understand the web since it's the backbone of how we structure our sites to make them useable. We'll practice this in class, but I'd like you to start to pay closer attention to the URLs you use every day. 

## Resources

[Anatomy of a URL](https://doepud.co.uk/blog/anatomy-of-a-url)

[What is a URL? (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)