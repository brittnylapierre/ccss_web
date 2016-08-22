---
layout: default
permalink: /community/news/
title: News
published: true
---
<div class='search-box'>Search</div>
<div class='content-wrap'>
	<h1 class='big-page-title'>CS @Carleton</h1>
    <h2 class='page-sub-title'>Your source for computer science news and tutorials</h2>
	<div class="tiles">
	{% for post in site.categories.blog %}
  		{% include post-grid.html %}
	{% endfor %}
	</div>
    <h3 class='page-sub-title'>Want to write an article? Let us know!</h3>
</div>
