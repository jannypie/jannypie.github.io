function swapCSS(e){
  e.preventDefault();
  var style = $(this).attr('class');
  switch(style)
    {
    case 'grunge':
      $("link.style").attr("href",$(this).attr('rel'));
      break;
    case 'modern':
      $("link.style").attr("href",$(this).attr('rel'));
      break;
    default:
      alert('default');
    }
  return false;
}

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

function buildPinterestURL() {
  var $currentImage   = $('img.fullsize');
  var bookmarkletURL  = 'http://pinterest.com/pin/create/bookmarklet/',
      mediaURL        = "http://jannypie.github.io" + $currentImage.attr('src'),
      mediaURLenc     = encodeURIComponent(mediaURL),
      shareURL        = window.location,
      shareURLenc     = encodeURIComponent(shareURL),
      description     = $currentImage.attr('alt') + " by Jan Dennison @jannypie",
      descriptionenc  = encodeURIComponent(description),
      pinterestURL    = bookmarkletURL + '?media=' + mediaURLenc + '&url=' + shareURLenc + '&description=' + descriptionenc;

  return pinterestURL;
}

function handlePinterestClick(e) {
  e.preventDefault();
  var pinterestURL = buildPinterestURL();
  window.open(pinterestURL,'_blank','width=750,height=350,toolbar=0,location=0,directories=0,status=0');
  return false;
}

function squares() {
  // create squares
  var parent = $('.geometric'),
    p_h = parent.height(),
    sq_w = 100,
    sp_w = Math.sqrt(Math.pow(sq_w / 2, 2) * 2),
    l = 0,
    t = 0;
    // how many?
    var qty = p_h / (sq_w / 2);
    console.log(qty);
    var nums = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
    var classNum = '';
  // calculate positioning
  for (var i = 0; i <= qty + 1; i++) {
    classNum = nums[i];
    parent.append('<div class="shape ' + classNum + '"><span></span></div>');
    var square = $('.shape.'+ classNum),
      span = $('.shape.'+ classNum + ' span');
    square.css({'left': l,'top': t});
    span.css('background-position', -l + 'px ' + -t + 'px');
    l += 50; t += 50;
  };
  // populate in rows horizontally
  // calculate background positions
}

/**
    @description: Determine if an element is fully within the viewport
  */
// Animate signature parent to emulate handwriting effect
function changeBackground() {
  $('.featured-post').each(function() {
    var $this = $(this),
      elemTop = $this.offset().top,
      elemBottom = elemTop + $this.height();

    function onScroll() {
      if (waypointMe(elemTop, elemBottom)) {
        $this.addClass('inView');
      }
      if (!waypointMe(elemTop, elemBottom)) {
        $this.removeClass('inView');
      }
    }
    if (window.addEventListener) {
      window.addEventListener('scroll', onScroll, false);
    }
  });
}
function waypointMe(elemTop, elemBottom) {
  var docViewTop = $(window).scrollTop(),
    winHeight = $(window).height(),
    topWaypoint = docViewTop + (winHeight*0.20),
    bottomWaypoint = docViewTop + (winHeight*0.80);
  return ((elemTop >= topWaypoint) && (elemBottom <= bottomWaypoint))
}

function changeBackground2() {
  $('.featured-post').each(function() {
    var $this = $(this),
      elemTop = $this.offset().top,
      elemMid = elemTop + ($this.height())/2;
    function onScroll() {
      if (waypointMe(elemMid)) {
        $this.addClass('inView');
      }
      if (!waypointMe(elemMid)) {
        $this.removeClass('inView');
      }
    }
    if (window.addEventListener) {
      window.addEventListener('scroll', onScroll, false);
    }
  });
}
function waypointMe(elemMid) {
  var docViewTop = $(window).scrollTop(),
    winHeight = $(window).height(),
    winMid = winHeight/2,
    topWaypoint = docViewTop + (winMid - winMid*0.25),
    bottomWaypoint = docViewTop + (winMid + winMid*0.25);
  return ((elemMid >= topWaypoint) && (elemMid <= bottomWaypoint))
}

$(document).ready(function(){
  swapImage();
  $('a.social.pinterest').click(handlePinterestClick);
  $('.select-style a').click(swapCSS);
  // squares();
  // changeBackground();
  changeBackground2();
});