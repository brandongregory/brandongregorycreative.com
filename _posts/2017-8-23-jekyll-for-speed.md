---
categories: tools
class: red
comments: true
date: August 23, 2017
layout: post
pagename: blog
title: "Jekyll for Speed"
---

This site is my first experiment with [Jekyll](https://jekyllrb.com), a templating language that compiles to static HTML. Why? The technology intrigued me for one reason: speed. Any compiled page is going to be faster than a non-compiled language like PHP (what my previous site was built in).

<!--more-->

First off, Jekyll is not the only way to make compiled pages. Java and .NET are compiled languages and are much faster than non-compiled languages like PHP and Ruby. So why not go with one of those? Well, the reason I originally chose PHP is that it's great for small projects. Large projects can get messy in PHP, but I don't need a ton of architecture and overhead for a small site like this one. At the time, the only things I needed were includes and variables (I added the blog after the rebuild), and PHP made both of those very easy. So I wasn't going to overcomplicate things if I didn't need to.

I'd been making performance improvements on the PHP site and gotten the page load time down to about .5 seconds. Not bad, but I knew I could do better. Looking at the page load time broken down by asset, the longest wait was before the assets even started loading. Parsing the PHP was the single biggest time-waster.

Shortly after uncovering that, I discovered Jekyll through the amazing front-end developer [Una Kravets](http://unakravets.com/). This addressed that problem directly, and looked really cool to boot, so I decided to give it a try.

So did it work? After re-coding my site in Jekyll (in one evening), the page load time dropped to about .35 seconds. It may seem ridiculous to get excited about increases of less than a quarter of a second, but the gain could potentially be a lot more for a PHP-intensive site with lots of logic going on behind the scenes. And being that [sites are supposed to load in under two seconds](https://www.forbes.com/sites/oreillymedia/2014/01/16/web-performance-is-user-experience/#5aaf93be5a52), even a quarter of a second can make a huge difference to your viewers.

After the rebuild, I went back and built this blog in the framework. I was amazed how easy it was, and it's all compiled beforehand, so none of burden of that logic happens on the user's time.

Overall, I'm excited for the new possibilities that Jekyll opens up. It's not going to replace PHP or other back-end languages, but it offers a new solution that may be better for some projects. If speed is vital to your site, Jekyll is definitely worth considering.