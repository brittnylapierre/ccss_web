---
layout: default
permalink: /
title: Latest Posts
published: true
---
<img src="techtalk.png" alt="tech talk" height="42" width="42">
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
