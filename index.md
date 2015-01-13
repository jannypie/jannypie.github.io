---
layout: "default"
title: "Jan Dennison | Front End Developer"
meta-description: "Web development portfolio blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<h2>Writings on Web Development</h2>
<div class="content-wrap">
    <section class="row-fluid span8">
          {% include featured-posts.html %}
    </section>
    <aside class="row-fluid span3 sidebar">
      <h3>Past Posts</h3>
      {% assign teasers = site.posts %}
      {% assign teasers_skip = 4 %}
      {% assign teasers_take = 3 %}
      {% include teasers.html %}
      <div class="row-fluid" id="view-all-entries">
      <!-- <a href="/sitemap/">View all the entries</a> -->
      </div>
    </aside>
</div> <!-- /content-wrap -->


