---
layout: "home"
title: "Jan Dennison | Front End Developer"
meta-description: "Web development portfolio blog by Jan Dennison"
meta-robots: "noodp, noydir"
---
<aside id="intro-cont">
  <p>I am a Web Developer with special interests in UX/UI and accessibility. After several years working in web design and front-end, I recently attended <a href="http://devbootcamp.com" title="Dev Bootcamp website">Dev Bootcamp</a> in the <a href="http://local.devbootcamp.com" title="Information about the Localhost pilot">Localhost pilot cohort</a> in Columbus, OH, to complete my education in back-end programming.</p>
  <p>As someone who loves both coding and design, I delight in bridging front-end and back-end development. My diverse background reflects curiosity, persistence, and an ability to adapt. I bring together tech skills and personal strengths to meet the challenge of the ever-evolving user experience.</p>
  <p>I do not actually have a mustache.</p>
</aside>
<section class="col-half">
  <h2 id="writings">Writings</h2>
  {% include featured-posts.html %}
</section>
<section id="works" class="col-half">
  <h2>Workings</h2>
  {% include featured-projects.html %}
</section>
<aside class="container">
  <section class="col-third">
    <h4>Past Posts</h4>
    {% assign teasers = site.posts %}
    {% assign teasers_skip = 6 %}
    {% assign teasers_take = 4 %}
    {% include teasers.html %}
    <div class="" id="view-all-entries">
      <a class="button" href="archive.html" title="blog archive">Read More Posts</a>
    </div>
  </section>
  <section class="col-third">
    <h4>Web Works</h4>
      <ul>
        <li><a href="http://codepen.io/jannypie/pen/kbdDg" title="Taj Majal code sample on codepen">Pure CSS Taj Mahal</a></li>
        <li><a href="http://codepen.io/jannypie/pen/lFysn" title="Bridge code sample on codepen">Pure CSS Golden Gate</a></li>
        <li><a href="http://codepen.io/jannypie/pen/DcHdo" title="Quizzie in CSS/JS">Quizzie in CSS/JS</a></li>
        <li><a href="http://jannypie.github.io/cheat-sheet.html" title="JSON Cheat Sheet">JSON Cheat Sheet</a></li>
      </ul>
  </section>
  <section class="col-third">
    <h4>Art Works</h4>
      <ul>
        <li><a href="/art-portfolio/verisimilitude-sylva/">Verisimilitude Sylva</a></li>
        <li><a href="/art-portfolio/wanderlust/">Wanderlust</a></li>
      </ul>
  </section>
</aside>



