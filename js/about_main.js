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
        if (scroll < 400) {
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

//skill list
    // $(function(){
    //     $('.skill-hov1').click(function(){
    //         $('.hov1').css('display', 'block')
    //         $('.hov2').css('display', 'none')
    //         $('.hov3').css('display', 'none')
    //         $('.hov4').css('display', 'none')
    //         $('.hov5').css('display', 'none')
    //         $('.hov6').css('display', 'none')
    //         return false;
    //     })
    //     $('.skill-hov2').click(function(){
    //         $('.hov2').css('display', 'block')
    //         $('.hov1').css('display', 'none')
    //         $('.hov3').css('display', 'none')
    //         $('.hov4').css('display', 'none')
    //         $('.hov5').css('display', 'none')
    //         $('.hov6').css('display', 'none')
    //         return false;
    //     })
    //     $('.skill-hov3').click(function(){
    //         $('.hov3').css('display', 'block')
    //         $('.hov1').css('display', 'none')
    //         $('.hov2').css('display', 'none')
    //         $('.hov4').css('display', 'none')
    //         $('.hov5').css('display', 'none')
    //         $('.hov6').css('display', 'none')
    //         return false;
    //     })
    //     $('.skill-hov4').click(function(){
    //         $('.hov4').css('display', 'block')
    //         $('.hov1').css('display', 'none')
    //         $('.hov2').css('display', 'none')
    //         $('.hov3').css('display', 'none')
    //         $('.hov5').css('display', 'none')
    //         $('.hov6').css('display', 'none')
    //         return false;
    //     })
    //     $('.skill-hov5').click(function(){
    //         $('.hov5').css('display', 'block')
    //         $('.hov1').css('display', 'none')
    //         $('.hov2').css('display', 'none')
    //         $('.hov3').css('display', 'none')
    //         $('.hov4').css('display', 'none')
    //         $('.hov6').css('display', 'none')
    //         return false;
    //     })
    //     $('.skill-hov6').click(function(){
    //         $('.hov6').css('display', 'block')
    //         $('.hov1').css('display', 'none')
    //         $('.hov2').css('display', 'none')
    //         $('.hov3').css('display', 'none')
    //         $('.hov4').css('display', 'none')
    //         $('.hov5').css('display', 'none')
    //         return false;
    //     })
    // });