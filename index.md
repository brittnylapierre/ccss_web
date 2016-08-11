---
layout: default
permalink: /
title: Home
published: true
pimage: ./images/techtalk.png
---
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->