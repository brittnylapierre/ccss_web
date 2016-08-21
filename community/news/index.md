---
layout: default
permalink: /community/news/
title: News
published: true
---

<div class='content-wrap'>
	<h1>CS@Carleton News</h1>
	<div class="tiles">
	{% for post in site.categories.blog %}
  		{% include post-grid.html %}
	{% endfor %}
	</div>
</div>
