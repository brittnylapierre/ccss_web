---
layout: default
permalink: /community/news/
title: News
published: true
---
<div class='search-box'>Search</div>
<div class='content-wrap'>
	<h1>CS @Carleton</h1> <!--class='big-page-title'-->
    <h2>Your source for computer science news and tutorials</h2> <!--class='page-sub-title'-->
	<div class="tiles">
	{% for post in site.categories.blog %}
  		{% include post-grid.html %}
	{% endfor %}
	</div>
    <h3 class='page-sub-title'>Want to write an article? <a href='{{ site.url }}/contact/email' style='text-decoration: none; border-bottom: 1px solid;'>Let us know!</a></h3>
</div>
