---
layout: "post"
excerpt: "As my first Jekyll post, I thought I'd share my experience setting up this blog site. At the end of it all, I became comfortable with using the Terminal to preview my Jekyll blog on my local computer and also to build the blog to send online, began learning Liquid templating, and started picking up the Markdown and YAML markup language basics."
title: "GitHub Pages with Jekyll : A Newbie Use Case"
meta-description: "A few notes on my experience setting up a Jekyll blog on GitHub, along with some tips on getting started."
image: "/assets/post-images/jekyll-screenshot.png"
tags:
category:
focal-vert: down-6
---
<span class="meta alert">Note: This post is outdated, and not all of the installation details are the same. The Jekyll documentation has grown along with the software, so check there first!</span>

<div class="toc">
	<strong>Contents:</strong>
	<h2>Introduction</h2>
	<h3>What are GitHub Pages and Jekyll?</h3>
	<h3>Why Jekyll and GitHub Pages?</h3>
	<h3>Why not WordPress?</h3>
	<h2>Newbie Use Case</h2>
	<h3>Background</h3>
	<h3>Flow</h3>
	<h2>Conclusion</h2>
</div>

## Introduction

As my first Jekyll post, I thought I'd share my experience setting up this blog site. I decided to start a blog chronicling my experiences moving into web development, so using web development tools to do so seemed apt. At the end of it all, I became comfortable with using the Terminal to preview my [Jekyll][1] blog on my local computer and also to build the blog to send online, began learning [Liquid][2] templating, and started picking up the [Markdown][3] and [YAML][4] markup language basics.

Here I must tell you: I am NaP. That is, I am Not a Programmer. I am also Not a Number (NaN), which I am referencing to also identify that I am, indeed, NaP. So much of the resources available online for anything GitHub-related is (understandably so) written by programmers for other programmers. This calls in a whole host of assumptions that authors make when communicating to their audiences, such as familiarity with using the Command Terminal to enter information, commands and shortcuts, and so on. This is **without question** the biggest challenge I have faced in learning web development. Yes, some of these things are hard, and learning something new on your own is hard, but deciphering usable instructions from instructions written for someone else has undeniably been the greatest time commitment and mental challenge.

### What are GitHub Pages and Jekyll?

In the effort to not make the mistake myself that I find so frustrating in the development world (namely, assuming everyone has the same level of knowledge I do), let me explain. [GitHub][6] is a company that provides a version control system. Like a much, much better version of track changes, but for all of the files and folders associated with your website or software project. GitHub offers free hosting for web pages for yourself or any of your projects, via [GitHub Pages][5]. If you want to use GitHub Pages for yourself to make a blog, you have to use [Jekyll][1], which basically takes all the files associated with your blog (home page, style page, posts, images, etc etc.) and builds it into a blog site - every time you write a post. So you get your base files together, write a post and save it as a file, tell Jekyll to "build", and then upload the whole package to GitHub. Every time you write a post.

<div class="newbie">
<h3>Newbie Note:</h3>
<p><a href="http://www.ruby-lang.org/en/" title="Ruby">Ruby</a> is a programming language. It does stuff. If you own a Mac, it comes installed already. Ruby takes plugins, called Gems, that can be written to do a bunch of stuff. Jekyll is a Ruby gem that lets your computer build a blog site.</p>
</div>

#### Why Jekyll and GitHub Pages?

Well, along my path to web development, I encountered [GitHub][6] as a place which all my programmer friends use not just for version control, but to also host projects they've built, connect with other developers, and participate in pirate levels of drinking at GitHub drinkups. I decided to learn how to use it, and began to practice creating repos (repositories of files associated with a project; basically, their name for a master file folder), using the GitHub app for Mac to commit changes and sync branches, and using GitHub Pages to publish web pages with the results. For examples, check out my [portfolio][7]. When I learned that you can set up a blog using GitHub Pages (mainly via [Jen's blog][8]), I set about doing just that. But then, I got to the step where you select a template, and the designer in my head went "Well naturally I want my *own* design." So *of course* I had to back up and learn how to publish the blog on my own so that I could have my own template. Aaannd, here we are.

#### Why not WordPress?

I'll be honest. I asked this very same question myself to a GitHubber, in person. The reasons are numbered, and valid. WordPress is clunky, WordPress is going the route of Facebook and other corporations that decide to capitalize on their users and integrate everything together. WordPress doesn't let you have the *control*, man! For the average person, however, who doesn't feel the need to LEARN ALL THE THINGS, I would still recommend WordPress, simply for the ease of use, the fraction of the time it takes to get started, and the ROI of "my precious time". That may hurt my web dev street cred, but there it is. I am glad that I picked up GH+Jekyll, and I will continue to use it for this web dev experience blog, but honestly, it's not easy, and blogging should be easy.

## Newbie Use Case

### Background

- Mac OSX 10.8 - New, factory install of Ruby
- **Command Terminal** : Beginner. I know how to change directories (cd) and what sudo means, and that's it.
- **GitHub Repos/Committing Changes** : Novice. I had help installing the [GitHub for Mac][9] app, and I use that rather than the command line to interact in any way between my computer and GitHub.
- **Ruby Gems** : Beginner. I encountered this while setting up GitHub for my computer, but only in a minor tangential way, and ended up getting help.
- **Jekyll/YAML/Liquid/Markdown** : Total Beginner. No previous knowledge.

### Flow

1. Google searched "jekyll github blog"
2. First hit: [Jekyll Bootstrap][10] (JB)
3. JB Step 1 says to:
>Create a New Repository
>Go to your https://github.com and create a new repository named USERNAME.github.com

    (This is where things start to go wrong. Only three steps in.) I promptly named my GitHub repo "jannypie" and it took several /headdesks to figure out it had to be "jannypie.github.io" It *clearly* says to name it "USERNAME.*github.com*" in the JB instructions. User error.

4. JB Step 2: Install Jekyll Bootstrap

    I tried entering these in the command line, and nothing was working. This was probably due to my having the wrong repo name, or other such user error.
    I tried to go around it and simply navigate to the folders... I don't really know.

    I did clone my repo to my desktop at this point, again using the GitHub app and not the command line.

5. Moved on to [JB Quick Start][11], where we install Jekyll

    I had several errors showing up in my command line trying to follow these directions. I didn't record all of them, but Google searches of them led me to various solutions.

    - [This StackOverflow](http://stackoverflow.com/questions/2619695/gem-install-permission-problem) reminded me to use "$ sudo gem install jekyll" to do my installation, because I was getting the error that permission was denied

    - I tried some version of "$ gem update --system" again based on a post on StackOverflow to see if that helped. Nope.

    - At some point during my Google searching for help, I came across the official [Jekyll home page][1] which I have linked a few times now already. I started going through their instructions, but just wasn't having any luck.

    - About this point, I figured out the repo name issue from Step 3, and I also came across a helpful [StackOverflow][12] post on the same issue as mine, installing the Jekyll gem. Installing the Command Line tools in Xcode did *finally* allow the jekyll gem to install on my computer. WHEW.

    - I did contact the GitHub Jekyll team about the Xcode issue, and they were extremely responsive and even suggested I submit the solution to the online documentation, which I did by creating my first forked repo and pull request, which was approved and you can see it on [Jekyll Troubleshooting][13].

6. Hey! Now I have the jekyll gem installed! At this step, I moved away from following the JBootstrap guide and went with the official Jekyll guide. I worked step by step through the *configurations*, *index*, and *post* pages - I did reference the Bootstrap files to see how theirs were set up, and combined that with bits of snippets from the official documentation. I was still having trouble understanding the config options, the YAML variables, and other bits.

7. I decided to Google search a bit more, and came across this [very helpful guide][14] on vittobotta.com about migrating from [WordPress to Jekyll][14]. Yes, I did just link it twice. Perhaps because it's written for people used to working with WordPress, or perhaps it's because he writes at a general level I can understand, or perhaps it's because he includes more detailed explanations and real-life examples - I truly don't know - but I found this guide to be really helpful in finally putting together the pieces that make my blog actually *work*.

    Even this guide, however, includes instructions for creating folders only using the command line. My programmer friends say it's just natural for them because they are so used to it, and I imagine that is true for them. However, to make it more approachable for those of us who aren't programmers, but are used to using the folders and files on our desktops, you CAN do it that way. Just navigate to whatever folder you cloned your repo to, and start creating folders and files, following the structure outlined in the Jekyll guides. JBootstrap did come in handy for this part of it, and for copying some files over as a starting base. My files no longer have any of the remaining Bootstrap content in them, but it was very helpful as a start.

8. The final part of the puzzle, for me, was understanding how to use jekyll to make the blog. The [instructions are there][15], really, but it still took a mental leap from seeing that and interpreting it into actual steps. For anyone like me, it actually goes something like:

    - Type up a sample post and save the file in your _posts_ folder. Don't forget your YAML Front Matter and to declare a template type, and save it as either Markdown or Textile (which I didn't even try getting into)
    - Launch Terminal
    - Navigate to where your repo is. In my case:
        > $ cd /Users/jannypie/jannypie.github.io
    - Tell jekyll to create a local version that you can preview before publishing
        > $ jekyll serve --watch
    - The --watch part of that means it will update on it's own (for a while). If you close out of it the Terminal, you'll have to type it in again. If you forget the --watch part, you'll have to type it in again each time you want to check your work.
    - Then you can open your browser to localhost:4000 to see it live
    - When you're ready to push it live, type in
       > $ jekyll build --watch
    - This will create your site (each time, it builds the whole site over again) in the _site_ folder
    - Then go to your GitHub app (or however you do it) and commit those changes and sync them to the server
    - If you (like I) followed the "quick start" guides at the start of either JBootstrap or official Jekyll sites, and did an instant creation of a blog, your localhost server will be running that and will ignore your attempts at serving your actual blog. You'll have to close out of that terminal window and start anew.

## Conclusion

I am now at the point where I am able to write a post and have it show up, and have some sort of design to the site as well, by using the Liquid template tags that were laid out on [vittobotta.com][14].  I have written this entire post in Markdown in order to learn and practice that language. Technically there is some YAML Front Matter around here, so I think that counts as using it.

There are still things I need to work out:
- How to use images
- Setting up stand-alone pages (about, contact)
- Robots and sitemap, and the behind-the-scenes part of the site
- Learning more fully the languages and capabilities
- Work out some of the features that I copied from vittobotta.com, such as the related posts with thumbnails, previous/next post navigation, etc.

I am surprised to find that I really enjoy using Markdown. I happen to like HTML (it satisfies some part of my brain that craves organization by putting things in neat little tags) and while I do feel somewhat limited with Markdown, I have to admit that it is quicker and easier to get the the actual content part of writing.

[1]: http://jekyllrb.com/ "Jekyll Static Blogging"
[2]: http://wiki.shopify.com/Liquid "Liquid Templating for Designers"
[3]: http://daringfireball.net/projects/markdown/ "Markdown"
[4]: http://jekyllrb.com/docs/frontmatter/ "YAML Front End Matter"
[5]: http://pages.github.com/ "GitHub Pages"
[6]: http://github.com "GitHub"
[7]: http://jandennison.com/ "Jan Dennison Portfolio"
[8]: http://jenmyers.net/ "Jen Myers Web Developer"
[9]: http://mac.github.com/ "GitHub for Mac App"
[10]: http://jekyllbootstrap.com/ "Jekyll Bootstrap"
[11]: http://jekyllbootstrap.com/usage/jekyll-quick-start.html "Jekyll Bootstrap Quick Start"
[12]: http://www.zlu.me/blog/2012/02/21/install-native-ruby-gem-in-mountain-lion-preview/ "Native Ruby Gem StackOverflow"
[13]: http://jekyllrb.com/docs/troubleshooting/ "Jekyll Troubleshooting"
[14]: http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/  "Migrating from WordPress to Jekyll"
[15]: http://jekyllrb.com/docs/usage/ "Using Jekyll"
