---
layout: "post" 
title: "Pinning Dynamic Target Images With Custom Pinterest Buttons" 
excerpt: ""
meta-description: ""
image: "/assets/post-images/pinterest.jpg"
tags: javascript,pinterest
category: 
focal-vert: 
focal-horz: 
orientation: 
---

<div class="toc">
	<strong>Used in this post:</strong>
	<h3>CSS Sprite/Pinterest Icon</h3>
	<h3>jQuery</h3>
	<h3>jQuery UI/Tabs</h3>
	<h3>Written in Markdown</h3>
	<h3>Twitter Responsive Bootstrap</h3>
	<h3>Focal Point Responsive Thumbnails</h3>
</div>

## Introduction

For a current project at work, I needed to build a Pinterest feature that used a custom icon to pin a large image on the page, an image which changed depending on which "swatch" type or sample was selected.
I wanted a "Pin It" button that was:
1. Custom (not the gray/red buttons provided by Pinterest) to fit in with branding
2. Would pin a specific image, not bring up all the images on the page
3. The specific image is dynamic - which is to say: I have an array of image options, such as swatches of fabric for color choices, or other photos, which load into a main view area dynamically based on the option clicked
4. Would prefer not to use any third-party scripts or pinit.js (which forces the default Pin It button styles, and third-party might not be maintainable or necessary)

There seemed to be Google solutions of two basic varieties available online: 

1. Use Pinterest's pinit.js code which will pin a specific image - but forces you to use their Pin button, and often forces you to hardcode each and every image you want to pin
    - [Widget Builder][1] hardcodes each Pinterest button per image, which is not useful for dynamic images
    - [Rich Pins][2] use oEmbed or Semantic Markup to build pins with extra meta-data, which then requires Pinterest-side validation (which is poorly documented. Why does it require validation? What are they looking for?) of a static URL, which is of course not useful in pre-production/draft development or for many pages/sitewide
2. Use the bookmarklet code to pull up all images on a page and have the user select the one they want - allows you to use any button, but doesn't pin a specific image
    - [how to: create custom pinterest "pin-it" button on images][3] is a helpful post that comes with third-party script for showing a "pin it" button on hover-over of an image, which then launches the bookmarklet
    - Two posts on brandaiddesignco.com: [Add a custom Pinterest pin it button to your website][4] and [Part 2][5] provide third-party scripts for applying the bookmarklet script to your page. 

A great example of what I wanted can be seen on Etsy.com listings. [In each listing][6], there is a large main image area with additional small image thumbnails that you can select and view fullsize in the main area. (Amazon.com is another example of this product page style setup). Etsy uses the Pinterest-made "Pin it" button to pin only the first image in a listing. However, sometimes the seller has better or more interesting images that they have not set as first, and I would *like* to pin those instead. Essentially: I want the "Pin it" button to pin whichever image I have loaded as the main view - not the default first image.
 
## Solution

The solution, seemingly simple after I solved it, was to break down the bookmarklet code structure and combine it with jQuery to set variables, which are then used to build the bookmarlet URL. Here is a sample setup of images that we'll be pinning:

<div class="demo row-fluid">
	<div class="span3">
		<div class="swatch focal-point right-6 demo-small float-right clearfix">
			<div><img alt="Green Sparrow Drawing" class="sample" src="/assets/post-images/sparrow-green.png"></div>
		</div>
		<div class="swatch focal-point right-6 demo-small float-right clearfix">
			<div><img alt="Colored Sparrow Drawing" class="sample" src="/assets/post-images/sparrow-colors.png"></div>
		</div>
		<div class="swatch focal-point right-6 demo-small float-right clearfix">
			<div><img alt="Watercolor Sparrow Drawing" class="sample" src="/assets/post-images/sparrow-watercolor.png"></div>
		</div>
		<a class="clearfix social pinterest float-right">Pin it!</a>
	</div>
	<div class="span8">
		<div class="demo-full">
			<div><img src="/assets/post-images/sparrow-green.png" alt="Green Sparrow Drawing" class="fullsize" ></div>
		</div>
	</div>
</div>

The large image inside "demo-full" is changed dynamically whenever a thumbnail to the left is selected. 

<div id="tabs">
  <ul>
    <li><a href="#fragment-1"><span>JS/jQuery</span></a></li>
    <li><a href="#fragment-2"><span>HTML</span></a></li>
  </ul>
  <div id="fragment-1">
    <p>javascript/jquery</p>
    <pre><code>
		function swapImage(){
		    $('.swatch').first().addClass('active');
		    $('.demo-small').click(function(){
		        $('.swatch').removeClass('active');
      	        $(this).addClass('active');

		        var $newImg = $(this).find('img.sample'),
		            newSrc = $newImg.attr('src'),
		    	    newAlt = $newImg.attr('alt');
		    	$('img.fullsize').attr('src',newSrc).attr('alt',newAlt);
	    });
	}
    </code></pre>
  </div>
  <div id="fragment-2">
    <pre><code>
&lt;div class=&quot;demo row-fluid&quot;&gt;
    &lt;div class=&quot;span3&quot;&gt;
        &lt;div class=&quot;swatch focal-point right-6 demo-small float-right clearfix&quot;&gt;
            &lt;div&gt;&lt;img alt=&quot;Green Sparrow Drawing&quot; class=&quot;sample&quot; src=&quot;/assets/post-images/sparrow-green.png&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;swatch focal-point right-6 demo-small float-right clearfix&quot;&gt;
            &lt;div&gt;&lt;img alt=&quot;Colored Sparrow Drawing&quot; class=&quot;sample&quot; src=&quot;/assets/post-images/sparrow-colors.png&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;swatch focal-point right-6 demo-small float-right clearfix&quot;&gt;
            &lt;div&gt;&lt;img alt=&quot;Watercolor Sparrow Drawing&quot; class=&quot;sample&quot; src=&quot;/assets/post-images/sparrow-watercolor.png&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;a class=&quot;clearfix social pinterest float-right&quot;&gt;Pin it!&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class=&quot;span8&quot;&gt;
        &lt;div class=&quot;demo-full&quot;&gt;
            &lt;div&gt;&lt;img src=&quot;/assets/post-images/sparrow-green.png&quot; alt=&quot;Green Sparrow Drawing&quot; class=&quot;fullsize&quot; &gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</div>

The next step is to deconstruct the Pinterest pin URL. Let's take a look:

    http://pinterest.com/pin/create/bookmarklet/?media=localhost%2Fassets%2Fpost-images%2Fsparrow-green.png&url=http%3A%2F%2Flocalhost%3A4000%2Fpinning-dynamic-target-images-with-custom-pinterest-buttons%2F&description=Green%20Sparrow%20Drawing%20by%20Jan%20Dennison%20%40jannypie

And break it down: 

    http://pinterest.com/pin/create/bookmarklet/

    ?media=localhost%2Fassets%2Fpost-images%2Fsparrow-green.png

    &url=http%3A%2F%2Flocalhost%3A4000%2Fpinning-dynamic-target-images-with-custom-pinterest-buttons%2F
    
    &description=Green%20Sparrow%20Drawing%20by%20Jan%20Dennison%20%40jannypie

The start is 

    http://pinterest.com/pin/create/bookmarklet/

which can also be

    http://pinterest.com/pin/create/button/

The URL has to have either /bookmarklet/ or /button/ (I tested). 

Then you can build your string: **?media=** , **&url=** , **&description=** , etc. I would assume that all of the variables listed in [Rich Pins][2] can be included, although I then also assume they require you to do the validation process. Perhaps as my next project, I'll test which variables show up without being "validated."

Once you have the string broken down, you can use jQuery to build a URL based on the variables of the main image showing: 

	function buildPinterest() {
	    var $currentImage = $('img.fullsize');
	    var bookmarkletURL = 'http://pinterest.com/pin/create/bookmarklet/',
	        mediaURL = $currentImage.attr('src'),
	        mediaURLenc = encodeURIComponent(mediaURL),
	        shareURL = window.location,
	        shareURLenc = encodeURIComponent(shareURL),
	        description = $currentImage.attr('alt') + " by Jan Dennison @jannypie",
	        descriptionenc = encodeURIComponent(description),
	        pinterestURL = bookmarkletURL + '?media=' + mediaURLenc + '&url=' + shareURLenc + '&description=' + descriptionenc;
	    $('a.social.pinterest').click(function(e){
	        window.open(pinterestURL,'_blank','width=750,height=350,toolbar=0,location=0,directories=0,status=0');
	        e.preventDefault();
	    });
	}

You can see that I've encoded each variable to use in building the URL. I then use the URL to launch a new window when my custom Pinterest icon is clicked. 

The final step is to call our new function buildPinterest(); whenever a thumbnail image is clicked:

	function swapImage(){
	    $('.swatch').first().addClass('active');
	    $('.demo-small').click(function(){
	        $('.swatch').removeClass('active');
            $(this).addClass('active');

	        var $newImg = $(this).find('img.sample'),
	            newSrc = $newImg.attr('src'),
	            newAlt = $newImg.attr('alt');
	        $('img.fullsize').attr('src',newSrc).attr('alt',newAlt);
	        buildPinterest();
	    });
	}

And there you have it: the structure to build your own Pinterest button that pins whichever active image you have loaded. 

[1]: http://business.pinterest.com/widget-builder/#do_pin_it_button "Pinterest.com Widget Builder"
[2]: http://developers.pinterest.com/rich_pins/ "Pinterest.com Rich Pins"
[3]: http://ryleeblake.blogspot.com/2013/07/how-to-create-custom-pinterest-pin-it.html "how to: create custom pinterest "pin-it" button on images"
[4]: http://www.brandaiddesignco.com/blog/add-a-custom-pinterest-pin-it-button-to-your-website/375/ "Add a custom Pinterest pin it button to your website"
[5]: http://www.brandaiddesignco.com/blog/add-a-custom-pinterest-button-to-your-website-part-2/770/ "Part 2"
[6]: http://www.etsy.com/listing/122792616/passionate-woman-original-painting-on?ref=shop_home_active "Etsy listing: Original Painting"

<script type="text/javascript">$( "#tabs" ).tabs();</script>