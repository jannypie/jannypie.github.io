---
layout: "post"
title: "Combining Jekyll With Focal Point CSS Adaptive Images For Smart Thumbnail Images"
meta-description: "How I used Focal Point with Jekyll to create pure CSS Adaptive Post Thumbnails"
image: "/assets/post-images/focal-point-image.png"
---

## Introduction

[Focal Point: Intelligent Cropping of Responsive Images][1] is an excellent article on [design shack][5] introducing [Focal Point CSS][3], a project on GitHub by [Adam Bradley][4] that sets up a small collection of CSS classes designed to crop images while keeping a focal area in view. This is a great solution to simple resizing of images to create smaller thumbnails without losing the important part of the picture.

Take for example my doodle here of some flowers. The basic setup for CSSing a thumbnail would be to wrap the image in a div with a fixed size and overflow set to hidden:

	<div class="post-thumbnail"><img alt="Image for {{ post.title }}" src="{{ post.image }}"></div>

	.post-thumbnail {
	  height: 12em;
	  overflow: hidden;
	}

	.post-thumbnail img {
	  width: 100%;
	}

However, this top-aligns my image with the div, and the flowers below get cut off. Not so pretty.

![Basic Flower Thumbnail](/assets/post-images/focal-point-before.png)

I had come across some online posts about cropping image thumbnails using CSS, and wanted to go back to those and find a more advanced solution. Thus, I came across Focal Point. I'll let you read the details if you wish, but the basic concept is that Focal Point defines classes that apply negative margins to your image based on where you want the focus to be. For each image, simply add one of the Focal Point classes for horizontal offset and another for vertical, and it will not only use negative margins to make that area you define as the focus, but because they are all based on percentages, it's also responsive.

The basic structure for using Focal Point is an image wrapped in two divs. To use the example from [the design shack post][1]:

	<div class="focal-point right-3 up-3">
	  <div><img src="guy.jpg" alt="guy"></div>
	</div>

Here you can see that the container div has three important classes: .focal-point center the image, .right-3 (horizontal), and .up-3 (vertical). Super straightforward. These are all you need for landscape oriented images. For portraits, you also need to add a .portrait class to your image.

## The Challenge

My question was: could I still use Focal Point on my Jekyll-based blog, which generates a static page of blog posts using a loop? Because it's using a loop to generate the post content couched in HTML, I would have to **build** the site after each post, and then go in and add the correct classes by hand to the markup - every time, for every image - and the classes would be different for every image. And nobody got time for that. Here is my loop:


	{% for post in site.posts limit:4 %}
	    <div class="row-fluid featured-post">
	        <h2> <a href="{{ post.url }}" rel="bookmark" title="Permanent link to {{ post.title }}">{{ post.title }}</a> </h2>
	        <div class="row-fluid"><!-- post content -->
	            <div class="post-info row-fluid span5">
	                <span class="meta"> {{ post.date | date: '%B' }} {{ post.date | date: '%e' }}, {{ post.date | date: '%Y' }} </span>
	                <p> {{ post.excerpt }} </p>
	            </div>
	            <div class="row-fluid span6">
	                <div class="post-thumbnail">
	                    <a href="{{ post.url }}" rel="bookmark" title="Permanent link to {{ post.title }}">
	                        <img alt="Image for {{ post.title }}" src="{{ post.image }}">
	                    </a>
	                </div>
	            </div>
	        </div><!-- end content -->
	    </div><!-- end row -->
	{% endfor %}

The basic structure of which is:

    loop through the posts, and for each post
	    div
	        title
	        left column
	        	date
	        	excerpt
	        right column
	        	image
	    /div
	end loop

I wondered if there was a way to define the necessary classes beforehand in the body of the post and then pass those to the loop to be included in the markup.

## The Solution

The answer to the question was actually very simple - using [custom YAML key:value pairs][2] in the head of each post to define the focal point of the image, and then applying Liquid output structure to pass them to the markup. I defined three custom variables (horizontal, vertical, and orientation) in the YAML front matter of each post:

	---
	layout: "post"
	title: "Combining Jekyll With Focal Point CSS Adaptive Images For Smart Thumbnails"
	image: "/assets/post-images/IMG_0746.jpg"
	focal-vert: down-6
	focal-horz: right-3
	orientation: portrait
	---

Then, using our Liquid templating variables, I set the value of each pair as a class in the loop markup:

	<div class="post-thumbnail focal-point {{ post.orientation }} {{ post.focal-horz }} {{ post.focal-vert }}">
	        <div><img alt="Image for {{ post.title }}" src="{{ post.image }}"></div>
	</div>

Which results in markup for this image:

	<div class='post-thumbnail focal-point portrait left-1 down-6'>
	    <div><img alt='Image for Combining Jekyll With Focal Point CSS Adaptive Images For Smart Thumbnails' src='/assets/post-images/IMG_0746.jpg' /></div>
	</div>

And here is the side-by-side image again for comparison:

![Focal Point comparison](/assets/post-images/focal-point-image.png)

I do again highly recommend the design shack post for further reading, because the author Joshua Johnson does a great job of explaining how the whole grid works for selecting focus areas.

[1]: http://designshack.net/articles/css/focal-point-intelligent-cropping-of-responsive-images/ "Focal Point: Intelligent Cropping of Responsive Images"
[2]: http://blog.omgmog.net/post/adding-more-post-metadata-to-jekyll-with-yaml/ "Adding More Post Metadata to Jekyll With YAML"
[3]: http://www.cdnconnect.com/docs/focal-point-css/pure-html-css-responsive-high-resolution-images-solution "Focal Point Documentation"
[4]: https://github.com/adamdbradley/focal-point#readme "Adam Bradley Focal Point"
[5]: http://designshack.net "design shack"