---
layout: "default"
title: "Jan Dennison Web Dev Blog"
meta-description: "Web development blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<h1> Latest entries </h1>
{% include featured-posts.html %}			

<h3> Entries before the latests entries </h3> 
{% assign teasers = site.posts %} 
{% assign teasers_skip = 4 %} 
{% assign teasers_take = 6 %} 
<!--{% include post-teasers.html %} -->

<div id="view-all-entries">
  <a href="/sitemap/">View all the entries</a>
</div>