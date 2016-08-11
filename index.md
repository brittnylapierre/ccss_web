---
layout: default
permalink: /
title: Latest Posts
published: true
pimage: ./images/techtalk.png
---
<img class="page-image" src="./images/techtalk.png" alt="tech talk"  height="1080">
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
