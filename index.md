---
layout: default
permalink: /
title: Home
published: true
pimage: ./images/techtalk.png
---
<div class="tiles">
{% for post in site.categories.blog.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
