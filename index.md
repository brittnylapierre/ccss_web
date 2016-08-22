---
layout: default
permalink: /
title: Home
published: true
pimage: ./images/techtalk.png
subjecttext: CARLETON COMPUTER SCIENCE SOCIETY
showlogo: true
subjectsize: 2rem
---
<div class="content-wrap">
	<h1>Recent News</h1>
	<div class="tiles">
	{% for post in site.categories.blog %}
		{% include post-grid.html %}
	{% endfor %}
	</div>
</div>
