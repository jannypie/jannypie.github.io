function replaceHeaderImg() {

  var bgLowImage = new Image(),
      bgFullImage = new Image();
  bgFullImage.src = $('#preloader').css('background-image').replace("url(",'').replace(")",'');

  $(bgimage).load(function(){
    $('header').css('background',"url(" + $(bgimage).attr('src') + ") top center / cover no-repeat");
  });
}

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
      alert('you broke it');
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


$(document).ready(function(){
  replaceHeaderImg();
  swapImage();
  $('a.social.pinterest').click(handlePinterestClick);
  // $('.select-style a').click(swapCSS);
});