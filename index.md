---
layout: "home"
title: "Jan Dennison | Front End Developer"
meta-description: "Web development portfolio blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<aside id="intro-cont">
  <h4>About this</h4>
  <p>This site is designed to be <strong>responsive</strong>, <strong>HTML5</strong> validated, <strong>CSS validated</strong> (ignoring some experimental Chrome attributes), optimized for <strong>accessibility</strong>, with minimal <strong>JavaScript</strong> enhancements. It's also a github.io site with Jekyll blog integration.</p>
  <p>Jan is a Front-End Developer with strong interests in UX and design. She is also currently a <a href="http://devbootcamp.com" title="Dev Bootcamp website">Dev Bootcamp</a> student in the <a href="http://local.devbootcamp.com" title="Information about the Localhost pilot">Localhost pilot cohort</a> in Columbus, Oh. She does not actually have a mustache.</p>
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
    <h4>Web Works</h4>
      <ul>
        <li><a href="http://codepen.io/jannypie/pen/kbdDg" title="Taj Majal code sample on codepen">Pure CSS Taj Mahal</a></li>
        <li><a href="http://codepen.io/jannypie/pen/lFysn" title="Bridge code sample on codepen">Pure CSS Golden Gate</a></li>
        <li><a href="http://codepen.io/jannypie/pen/DcHdo" title="Quizzie in CSS/JS">Quizzie in CSS/JS</a></li>
      </ul>
    <h4>Art Works</h4>
      <ul>
        <li><a href="/art-portfolio/verisimilitude-sylva/">Verisimilitude Sylva</a></li>
        <li><a href="/art-portfolio/wanderlust/">Wanderlust</a></li>
      </ul>
  </section>
</aside>



