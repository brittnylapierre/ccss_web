---
layout: default
permalink: /
title: Latest Posts
published: true
---
<img src="techtalk.png" alt="tech talk" >
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
