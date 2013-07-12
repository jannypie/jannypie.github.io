---
layout: default
---
<h1>Hello world</h1>
<div class="posts">
  {% for post in site.posts limit:10 %}
  <div class="content">
  {% include listed-post.html %}
  </div>
  {% endfor %}
</div>