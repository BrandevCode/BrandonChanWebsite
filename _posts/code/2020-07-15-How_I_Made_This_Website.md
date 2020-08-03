---
title: How I Made This Website
categories: [code]
tags: [Website, Design, Javascript, HTML]
maths: 1
toc: 1
snippet: 1
date: 2020-07-15
---

{% include tip.html content="Keep in mind, this post will not be teaching you how to make a website but will help describe the process and resources I used to make mine." %}
 
## Jekylling for the first time

<a href="https://jekyllrb.com/" target="_blank">Jekyll</a> is a blog-aware static site generator that has been become popular in the recent years. After being adopted by GitHub and their easy to use website hosting platform <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, I decided to use this as the main tool for this website. This has been immensely useful as I am able to customize all of the components for the HTML, CSS and Javascript rather than being reliant on a third party service.

As an example, I can put a chess game in the middle of my post easily. Try it out! 

<div class="row" align="center">
<iframe src="../images/posts/chess/toledo_javascript_chess2.html" width="400" height="410" scrolling="no" frameborder="no" id="chess"></iframe>
</div>
<div class="row" align="center">
If you want to play with black's pieces, click this
<input type="button" value="button" onclick="with(document.getElementById('chess').contentWindow)setTimeout('X(0,0,0,21,u,2),X(0,0,0,21,u,1),W()',250);">
to force a move, you will need to click every time after you do a move.
</div>

## Theme/Framework
<div class="row">
<p>
After deciding to use Jekyll, I found a website called <a href="http://jekyllthemes.org/" target="_blank">jekyllthemes.org</a>. They have a variety of themes that anyone can pull from. After exploring through the themes I found one called <a href="https://dinhanhthi.github.io/notetheme/" target="_blank">Notetheme</a>. This was built off another theme called <a href="http://jekyllthemes.org/themes/matjek/" target="_blank">MatJek</a>, both of these themes not being so popular. What stood out to me was the ability to create categories/tags. I believe that useability in any website is the most important thing, so the ability to categorize each post to make it simple for the user to find what they need made this theme an easy choice. 
</p>

<div class="col s12 l6" markdown="1">

<img src="images/posts/notetheme.jpg" class="profile z-depth-5"/>

<p class="post-more-info" markdown="1">
Since my website initially looked like this, I enjoy looking back to compare and see how much I was able to change.
</p>

</div>


<div class="col s12 l6" markdown="1">
<br>
<p>
Each of these themes are using <a href="https://materializecss.com/" target="_blank">Materialize</a> as their front-end framework. Their documentation is very informative, though this framework seems to be less customizable than I wish it was. I was able to work around this by overriding their CSS on occasion.
</p>
</div>

</div>

## Design

Deciding on the look for the website was difficult. I first researched on different color palettes but eventually decided on my favourite colour combination red, white and black. There is also a useful website called <a href="https://coolors.co/ffffff-959794-45433e-181619-e9322e" target="_blank">coolors.co</a> which gave me a variety of options to generate and modify the palette for my site.

<a href="https://codepen.io" target="_blank">CodePen</a> was a game changer for me. I was able to see so many amazing creations from other developers and it also helped me learn more about animation with CSS. For the <a href="https://codepen.io/Coding_Journey/pen/BEMgbX" target="_blank">Typewriter Animation</a> effect on my front page, I was able to get it off codepen.io and make some modifications. <a href="https://animista.net/" target="_blank">Animista</a> is also a great place to create simple animations in CSS.

## Additional Resources

<a href="https://github.com/bradtraversy/design-resources-for-developers" target="_blank">Design Resources For Developers</a>: Catalog of web design resources I will definitely be using in the future.

<a href="https://whc.ca/en" target="_blank">Web Host Canada</a>: Where I bought the domain name. 

<a href="https://desktop.github.com/" target="_blank">GitHub Desktop</a>: Tool to deploy changes to github pages.

<a href="https://nanochess.org/chess4.html" target="_blank">Toledo Javascript Chess Game</a>: Where I got the chess game code from.

<style>
@media (max-width: 768px) 
{
    iframe {
    -moz-transform: scale(0.8, 0.8); 
    -webkit-transform: scale(0.8, 0.8); 
    -o-transform: scale(0.8, 0.8);
    -ms-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8); 
    -moz-transform-origin: top left;
    -webkit-transform-origin: top left;
    -o-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    }
} 
</style>