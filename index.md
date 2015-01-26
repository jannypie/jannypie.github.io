---
layout: "home"
title: "Jan Dennison | Front End Developer"
meta-description: "Web development portfolio blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<aside>
  <h4>About this</h4>
  <p>Designed by Jan Dennison, this site is <strong>responsive</strong>, <strong>HTML5</strong> validated, <strong>CSS validated</strong> (ignoring some experimental Chrome attributes), optimized for <strong>accessibility</strong>, and has minimal <strong>JavaScript</strong> enhancements.</p>
  <p>Jan is a Front-End Developer with strong interests in UX and design. She is also currently a <a href="http://devbootcamp.com" title="Dev Bootcamp website">Dev Bootcamp</a> student in the <a href="http://local.devbootcamp.com" title="Information about the Localhost pilot">Localhost pilot cohort</a> in Columbus, Oh.</p>
</aside>
<section class="column-me">
  <h2 id="writings">Writings</h2>
  {% include featured-posts.html %}
  <div class="" id="view-all-entries">
    <a href="archive.html">View all the entries</a>
  </div>
</section>
<aside class="sidebar column-me">
  <section>
    <h4>Past Posts</h4>
    {% assign teasers = site.posts %}
    {% assign teasers_skip = 4 %}
    {% assign teasers_take = 3 %}
    {% include teasers.html %}
  </section>
  <section id="works">
    <h4>Works</h4>
    <div>
      <ul>
        <li><h5>Web Works</h5></li>
        <li>To come</li>
        <li><h5>Art Works</h5></li>
        <li><a href="/portfolio/verisimilitude-sylva/">Verisimilitude Sylva</a></li>
        <li><a href="/portfolio/wanderlust/">Wanderlust</a></li>
      </ul>
    </div>
  </section>
</aside>



