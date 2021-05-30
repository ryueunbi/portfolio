// cursor custom
    var mouse = document.querySelector(".cursor");
    var links = document.querySelectorAll("a");
    var bounce = "bounce";
    var inactive = "inactive"; // function that make the circle follows the mouse pointer

    function moveMouse(e) {
    var x = e.clientX;
    var y = e.clientY;
    mouse.style.transform = "translate("
        .concat(x - 15, "px, ")
        .concat(y - 15, "px)");
    } // function that turn on/off the animation

    function disableAnimation() {
    var hasBounceClass = mouse.classList.contains(bounce);

    if (hasBounceClass) {
        mouse.classList.add(inactive);
        mouse.classList.remove(bounce);
    } else {
        mouse.classList.add(bounce);
        mouse.classList.remove(inactive);
    }
    } // check for when the mouse is being moving

    document.addEventListener("mousemove", moveMouse); // check wether the user hover/leave a link

    for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", disableAnimation);
    links[i].addEventListener("mouseleave", disableAnimation);
    }

// menu
    $(function(){
      $('.open').click(function(){
        $('.close').css('display', 'block')
        $('.open').css('display', 'none')
        $('.page-detail').css('display', 'block')
        $('body').css('overflow', 'hidden')
      })

      $('.close').click(function(){
        $('.close').css('display', 'none')
        $('.open').css('display', 'block')
        $('.page-detail').css('display', 'none')
        $('body').css('overflow', 'scroll')
      })

      $('.page-detail>ul>li>a').click(function(){
        $('body').css('overflow', 'scroll')
      })
    });

// scroll up
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

    $('#back-top a').on("click",function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    $('#back-top a').on({
        'click': function(){
            $('#back-top a img').attr('src','images/topbtn_hover.png');
        }
    });

    
// work list
  $(function(){
    $('.work-list-tit p:nth-child(1)').mouseover(function(){
      $('.work-list-tit p:nth-child(2)').css('display', 'block')
      $('.work-list-tit p:nth-child(1)').css('display', 'none')
    })

    $('.work-list-tit p:nth-child(2)').mouseleave(function(){
      $('.work-list-tit p:nth-child(2)').css('display', 'none')
      $('.work-list-tit p:nth-child(1)').css('display', 'block')
    })

  })

// menu text hover effect
  $(function(){
    // 01
    $('.menu-text-01').mouseover(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-01').css('color', '#ababa9')
    })
    $('.menu-text-01').mouseleave(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-01').css('color', '#333')
    })

    // 02
    $('.menu-text-02').mouseover(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-02').css('color', '#ababa9')
    })
    $('.menu-text-02').mouseleave(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-02').css('color', '#333')
    })

    // 03
    $('.menu-text-03').mouseover(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-03').css('color', '#ababa9')
    })
    $('.menu-text-03').mouseleave(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-03').css('color', '#333')
    })

    // 04
    $('.menu-text-04').mouseover(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-04').css('color', '#ababa9')
    })
    $('.menu-text-04').mouseleave(function(){
      $('.page-detail>div>ul>li>a').not('.menu-text-04').css('color', '#333')
    })
  })

// scroll up
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if(scroll < 30) {
      $('#back-top a img').attr('src','images/topbtn.png');
    }
    else if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }
  });

  $('#back-top a').on("click",function(){
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

    $('#back-top a').on({
    'click': function(){
      $('#back-top a img').attr('src','images/topbtn_hover.png');
    }
  })

// work list
  $(function(){
    $('.pf01').click(function(){
      $('.pf01-img').css('display', 'block')
      $('.work-img>li').not('.pf01-img').css('display', 'none')
    })

    $('.pf02').click(function(){
      $('.pf02-img').css('display', 'block')
      $('.work-img>li').not('.pf02-img').css('display', 'none')
    })

    $('.pf03').click(function(){
      $('.pf03-img').css('display', 'block')
      $('.work-img>li').not('.pf03-img').css('display', 'none')
    })

    $('.pf04').click(function(){
      $('.pf04-img').css('display', 'block')
      $('.work-img>li').not('.pf04-img').css('display', 'none')
    })

    $('.pf05').click(function(){
      $('.pf05-img').css('display', 'block')
      $('.work-img>li').not('.pf05-img').css('display', 'none')
    })

    $('.pf06').click(function(){
      $('.pf06-img').css('display', 'block')
      $('.work-img>li').not('.pf06-img').css('display', 'none')
    })

    $('.pf07').click(function(){
      $('.pf07-img').css('display', 'block')
      $('.work-img>li').not('.pf07-img').css('display', 'none')
    })

    $('.pf08').click(function(){
      $('.pf08-img').css('display', 'block')
      $('.work-img>li').not('.pf08-img').css('display', 'none')
    })
  })
  
// portfolio menu
  $(function(){
    $('#go-work').click(function(){
      $('#work-list').fadeIn(300)
      $('.page-detail').css('display', 'none')
      $('.back').css('display', 'block')
      $('.close').css('display', 'none')
      $('body').css('overflow', 'hidden')
    })

    $('.back').click(function(){
      $('.page-detail').fadeIn(300)
      $('#work-list').css('display', 'none')
      $('.close').css('display', 'block')
      $('.back').css('display', 'none')
      $('body').css('overflow', 'hidden')
    })
  });