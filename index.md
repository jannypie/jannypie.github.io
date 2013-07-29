---
layout: "default"
title: "Jan Dennison : WebDev Blog"
meta-description: "Web development blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<div class="row-fluid span8">
			{% include featured-posts.html %}			
</div>
<div class="row-fluid span3 sidebar">
	{% assign teasers = site.posts %} 
	{% assign teasers_skip = 4 %} 
	{% assign teasers_take = 4 %} 
	{% include teasers.html %}
	<div class="row-fluid" id="view-all-entries">
		<a href="/sitemap/">View all the entries</a>
	</div>
</div>

