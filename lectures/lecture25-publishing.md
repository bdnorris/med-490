# Publishing a site to the web

## Hosting

To put your site online, you need "hosting." Basically, you need to get your site's files onto a web server. A web server is basically just a computer that is configured to allow HTTP requests from anyone with a browser and serve up the site's HTML and associated files. 

### Server side languages and databases vs. static sites

A majority of websites on the internet are served by some sort of server-side programing language. This can be PHP, Ruby, C#, or even server-side Javascript. The programming around these is often to facilitate retrieving information from a database, then building the HTML dynamically before serving it back to the client (your browser). 

But in the end, no matter what is happening on the server, it's still just HTML that's being sent to the browser. What you've been learning to build in this class is called a **"static"** site. "Static" here just means the opposite of "dynamic", as in, it doesn't need to be built dynamically by the server, it can just be served as is. 

[Static Web Page (Wikipedia)](https://en.wikipedia.org/wiki/Static_web_page)

[Dynamic Web Page (Wikipedia)](https://en.wikipedia.org/wiki/Dynamic_web_page)

### Classic shared hosting and FTP

Most hosting on the internet has traditionally come in two flavors, Windows servers or Linux servers. It's hard to really say, but estimates put Linux has hosting about 70% of the internet. Amazon Web Services (AWS) and other cloud services are beginning to host more and more of the web.

The most accessible type of hosting was Shared Linux hosting. This is where you host your site, along with other user's sites, on a Linux server. They usually come with an e-mail address and FTP access to publish your site.

#### FTP

FTP stands for "File Transfer Protocol". There's also FTPS, it's secure sibling, and SFTP, its secure cousin. FTP is a basic way to send files from one computer to another. You can use it to easily upload the website on your computer to the server or to download the files from the server.

Here's an empty site I set up to demonstrate. It's basic FTP so we can connect with only a username and password.

Host: `course.msuwebdesign.com`

User: `courseuser`

Password: `gRE4x7wF`

You'll need an FTP program to do this. I like [Cyberduck](https://cyberduck.io/) for Mac. [Filezilla](https://filezilla-project.org/) is also a popular option and works on Windows and Mac. Be careful with the install for Filezilla, it has some crapware options you'll want to avoid when installing. 

When I successfully login, I'll have to navigate to the proper directory, this could vary with different hosts. Then, I upload my site to that folder. My main index.html file should be in this directory!

Then, if I navigate to [http://course.msuwebdesign.com](http://course.msuwebdesign.com), I should see my site!

I use [Dreamhost](https://www.dreamhost.com/), and currently, that's the only host I can recommend. 

### Newer types of hosting

The thing is, when you don't need a server-side programming language, you don't need much software. Serving up just HTML, CSS, and Javascript doesn't require a lot. So there have been a lot of new products and services in the past few years for publishing static sites.  Here are a few you might want to try.

#### Github

Github has a bit of learning curve. Github is a way to host your code, but also will let you publish sites as well. You can do quite a bit with a free account, or pay for more features.

The "git" in Github is a program that lets you track and manage code and code history. 

> Git (/ɡɪt/) is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

Learning git is beyond the scope of this class, but there are Codecademy courses and lots of other ways to learn on your own. Once you have a static site on hosted Github, you can publish to a URL it gives you automatically. You can have one custom domain pointing to this on a free account, you can have more if you pay for a pro account.

#### Netlify

Netlify is my new favorite thing. It's meant to run off of git projects, but it also has a drag and drop interface where you can upload a site from your computer. And it just works.

[They have a generous free tier](https://www.netlify.com/pricing/) and Netlify will even do form collection for you.

Create a new account on Netlify, and under "Sites", you'll see an area outlined with a dotted border labeled _"Want to deploy a new site without connecting to Git? Drag and drop your site folder here"_. Unlike FTP, it's okay to drag your entire site folder here. 

Netlify will make a random subdomain, followed by `.netlify.com` for your site. You can change this under site settings, or you can hook up your own domain by following the instructions. 

Anytime you want to update your site, from the site's Overview, go to "Deploys", and you'll see that same spot to drop your updated site.

#### CodePen Projects

CodePen has [a projects mode](https://codepen.io/pro/projects/), that allows you to publish a real website. However, the free version is limited to 10 files, so likely, you will need to upgrade to at least a starter Pro account, which gives you one project with 50 files, plus a lot of other CodePen benefits.

<!-- https://surge.sh/
https://zeit.co/now -->

## Domain Names

You need a domain name! Even if it's just to point to your Behance or Squarespace site, now's the time to secure a domain for yourself. 

### Where to find 

There are some cool tools out there to help you find a domain that's still available for purchase. Here are a few:

- [DomainsBot](https://domainsbot.com/)
- [NameMesh](https://www.namemesh.com/)
- [Domainr](https://domainr.com/)
- [Instant Domain Search](https://instantdomainsearch.com/)

### Where to buy

When it comes to actually purchasing a domain, you'll want to be a bit pickier. You want good controls, a good interface, and competitive pricing. The place you buy a domain is called a "Registrar".

I'm not saying domain registrars that aren't these two are all bad, I'm just saying, these are the only ones I can vouch for: 

- [namecheap](https://www.namecheap.com/)
- [Hover](https://www.hover.com/)

Namecheap also offers [students one year for free](https://nc.me/).

A lot of services that offer you hosting will want to offer you domain registration and vice versa. I think you should keep these separate. If you are dissatisfied with your hosting, or your domain registration, it can be a real pain to leave for another service if they are tied together. 

### Domain registration basics

You register domains on a yearly basis. Around $13 is typical for a `.com` address. This gets you that domain for a year, then you have to renew. Some registrars automatically set you up for auto-renewal, so watch out for that. 

When you register a domain, the organization that oversees domain registration, ICANN, requires you to fill out `WHOIS` information. You can visit [who.is](https://who.is/) and look up any domain to find their info. Because this info is so public, and will likely lead to you getting SPAM e-mail, and even snail mail trying to get you to move your domain, some registrars, offer WHOIS protection. WHOIS protection basically puts the registrar's info in as the owner on your behalf, protecting your privacy. It's typically an additional fee though. 

If you ever want to move your domain to a different registrar, this is called "Transferring." Typically, you pay for an additional year at the new registrar, then you can get a secret code from your current registrar, proving you're the owner.

### Domain settings and DNS

Depending on if you're hosting on a Linux server, one of these other services, or using something like Squarespace, you'll have to change your domain's DNS settings to make it all work. 

**DNS** stands for _Domain Name System_. It describes the process of mapping domains to servers. I spoke about it a bit in [Lecture 3](/lectures/lecture03-web-how.md).

I can't cover all possible items here, but here are 3 things you might see, and some basics about how they work. 

#### Nameservers

Changing your nameservers is basically saying you want these new servers to house your domain's DNS settings, instead of the registrar. When you sign up for a hosting account, you'll be provided with the proper entries here. They'll look something like `NS.MYHOST.COM`. You usually get a few, in case one of them is down. 

You'll visit your registrar's site, find your domain settings and change these values. It can take a few hours up to a day for this to take effect, but otherwise, this is a pretty easy process. 

Once this is in effect, it is now your hosting account handling DNS settings, instead of your registrar.

#### A Record

The **A record** is the raw DNS setting that tells a domain name what IP address to resolve to. If you are using "default" nameservers, then this setting will be under something like "Advanced DNS" at your registrar. If you're using custom nameservers, then this setting will reside with your hosting.

#### CNAME

If you're using your domain as a forward or hooking it up to something like Squarespace, you'll likely be using a CNAME. The actual settings will vary widely from place to place.

A CNAME is essentially an alias. For Netlify for instance, you could set up a CNAME that would basically function and mask Netlify's own domain name. 

I can't really vouch for [this companies service](https://support.dnsimple.com/categories/dns/), but their DNS documentation is great. 