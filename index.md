---
layout: default
permalink: /
title: Home
published: true
pimage: ./images/techtalk.png
---
Events
<div class="tiles">
{% for post in site.categories.blog %}
	{% include post-grid.html %}
{% endfor %}
</div>

Recent Articles
<div class="tiles">
{% for post in site.categories.blog %}
	{% include post-grid.html %}
{% endfor %}
</div>