$(document).ready(function(){
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

  function buildPinterest() {
      var $currentImage = $('img.fullsize');
      var bookmarkletURL = 'http://pinterest.com/pin/create/bookmarklet/',
        mediaURL = "http://jannypie.github.io" + $currentImage.attr('src'),
        mediaURLenc = encodeURIComponent(mediaURL),
        shareURL = window.location,
        shareURLenc = encodeURIComponent(shareURL),
        description = $currentImage.attr('alt') + " by Jan Dennison @jannypie",
        descriptionenc = encodeURIComponent(description),
        pinterestURL = bookmarkletURL + '?media=' + mediaURLenc + '&url=' + shareURLenc + '&description=' + descriptionenc + '&is_video=false';
    $('a.social.pinterest').click(function(e){
      e.preventDefault();
      window.open(pinterestURL,'_blank','width=750,height=350,toolbar=0,location=0,directories=0,status=0');
      return false;
    });
  }

  swapImage();
  buildPinterest();
});

