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
<h1>Events</h1>
<div class="tiles">
{% for event in site.categories.events %}
	{% include event-grid.html %}
{% endfor %}
</div>

<h1>Recent Articles</h1>
<div class="tiles">
{% for post in site.categories.blog %}
	{% include post-grid.html %}
{% endfor %}
</div>
