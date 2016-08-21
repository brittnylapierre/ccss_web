---
layout: default
permalink: /opportunities/jobs/
title: Jobs
published: true
pimage: ../../images/jobs.jpg
subjecttext: JOBS
subjectstyle: 'font-size: 10rem; border-bottom: 5px solid white; border-top: 5px solid white;'
---

<div class="content-wrap">
	<h1>Jobs</h1>
	<ul class='job-list'>
	{% for job in site.categories.jobpostings %}
    	<li class='job-list-item'>
        	<h1>{{ job.title }}</h1>
            <table class='job-detail-table'>
           		<tr>
                	<td>Company:</td>
                    <td>{{ job.company }}</td>
                </tr>
            	<tr>
                	<td>Deadline:</td>
                    <td>{{ job.deadline }}</td>
                </tr>
            </table>
            <h2>Description</h2>
            <p>{{ job.description }}</p>
    	</li>
	{% endfor %}
	</ul>
</div>
