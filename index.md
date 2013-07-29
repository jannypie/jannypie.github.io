---
layout: "default"
title: "Jan Dennison : WebDev Blog"
meta-description: "Web development blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<div class="row">
	<div class="span12">
		  <p>In the year 2004, I graduated college with a degree in biology and spent six years researching biodefense at a worldwide institute.</p>

		  <p>I've spent the time since then moving my career path into web design and development. </p>

		  <p>Here I share my experiences.</p>		
	</div>
</div>
<hr>
<div class="row-fluid">
		  <h1> Latest entries </h1>
			{% include featured-posts.html %}			
</div>
<hr>
<div class="row-fluid">
			<h3> Entries before the latest entries </h3> 
			{% assign teasers = site.posts %} 
			{% assign teasers_skip = 4 %} 
			{% assign teasers_take = 4 %} 
			{% include teasers.html %}
</div>
<div class="row-fluid" id="view-all-entries">
  <a href="/sitemap/">View all the entries</a>
</div>