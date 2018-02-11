$(document).ready(function(){
    
      $('.next').on('click', function(){
          //alert('clicked');
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length)
        {
             //remove active class and z-index from current image and description
                // -10 puts current image under the other images, hides description
          currentImg.removeClass('active').css('z-index', -10);
            //add active class and z-index to the next image and description
                // +10 puts next image on the top, shows next description
          nextImg.addClass('active').css('z-index', 10);
        }
      });

      $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length)
        {
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }
      });
    
});
