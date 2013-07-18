---
layout: "default"
title: "Jan Dennison Web Dev Blog"
meta-description: "Web development blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<div class="content-container">
  <div class="container-narrow">
	  <div class="row">
			<div class="span12">
				  <h1> Latest entries </h1>
					{% include featured-posts.html %}			
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="span12">
					<h3> Entries before the latest entries </h3> 
					{% assign teasers = site.posts %} 
					{% assign teasers_skip = 4 %} 
					{% assign teasers_take = 6 %} 
					<!--{% include post-teasers.html %} -->
			</div>
		</div>
		<div id="view-all-entries">
		  <a href="/sitemap/">View all the entries</a>
		</div>
  </div> <!-- /container-narrow -->
</div>