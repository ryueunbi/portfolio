// typing text
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    typingTxt=typingTxt.split("");
    if(typingBool==false){
        typingBool=true; 
        var tyInt = setInterval(typing,100);
    } 
        
    function typing(){ 
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    if(typingIdx<typingTxt.length){
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++; 
    } else{ if(liIndex<liLength-1){
        liIndex++
        typingIdx=0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        
        clearInterval(tyInt);
        setTimeout(function(){
            tyInt = setInterval(typing,100);
            },1000);
        } else if(liIndex==liLength-1){
            clearInterval(tyInt);}
        } 
    };

// imgSlider
  document.addEventListener("DOMContentLoaded", function(e) {
    const contents = document.querySelector("section#contents");
  
    const slider = document.querySelector("div.slider");
    const imgSlider = tns({
      container: slider,
      nav: false,
      tems: 1,
      mouseDrag: true,
      // loop: true,
      // autoplay: true,
      // autoplayHoverPause: true,
      // autoplayTimeout: 3000,
      controls: false
    });
  
    const imgSliderPrev = document.querySelectorAll("ul.sliderControl button.prev");
    const imgSliderNext = document.querySelectorAll("ul.sliderControl button.next");
  
    for (let i = 0; i < imgSliderPrev.length; i++) {
      imgSliderPrev[i].onclick = (() => {
        imgSlider.goTo("prev");
      });
    }
  
    for (let i = 0; i < imgSliderNext.length; i++) {
      imgSliderNext[i].onclick = (() => {
        imgSlider.goTo("next");
    });
  }
  
  const slidePageNumCurrent = document.querySelectorAll("p.num > span.current");
  const slidePageNumTotal = document.querySelectorAll("p.num > span.total");
  imgSlider.events.on("transitionEnd", function(){
    slidePageNumCurrent.innerText = imgSlider.getInfo().slideCount;
    slidePageNumTotal.innerText = imgSlider.getInfo().index;
  });

  const ideafestival = scrollMonitor.create(document.querySelectorAll("div.title.ideafestival"));
  const audiotechnica = scrollMonitor.create(document.querySelectorAll("div.title.at"));
  const shopick = scrollMonitor.create(document.querySelectorAll("div.title.shopick"));
  const brothumb = scrollMonitor.create(document.querySelectorAll("div.title.brothumb"));

  ideafestival.enterViewport(function() {
    for(let i = 0; i < 2; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "images/img_ideafestival0" + (i+1) + ".jpg"
      // contents.style.background = "url('./common/images/bg_ideafestival.jpg') fixed no-repeat";
    }
  });

  audiotechnica.enterViewport(function() {
    for(let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "images/img_at0" + (i+1) + ".jpg"
      // contents.style.background = "url('./common/images/bg_at.jpg') fixed no-repeat";
    }
  });

  shopick.enterViewport(function() {
    for(let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "images/img_shopick0" + (i+1) + ".jpg"
      // contents.style.background = "url('./common/images/bg_shopick.jpg') fixed no-repeat";
    }
  });

  brothumb.enterViewport(function() {
    for(let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "images/img_brothumb0" + (i+1) + ".jpg"
      // contents.style.background = "url('./common/images/bg_brothumb.jpg') fixed no-repeat";
    }
  });

  window.addEventListener("scroll", function(e) {
  })
  
// cursor custom
    var mouse = document.querySelector(".cursor");
    var links = document.querySelectorAll("a");
    var bounce = "bounce";
    var inactive = "inactive";

    function moveMouse(e) {
    var x = e.clientX;
    var y = e.clientY;
    mouse.style.transform = "translate("
        .concat(x - 15, "px, ")
        .concat(y - 15, "px)");
    }

    function disableAnimation() {
    var hasBounceClass = mouse.classList.contains(bounce);

    if (hasBounceClass) {
        mouse.classList.add(inactive);
        mouse.classList.remove(bounce);
    } else {
        mouse.classList.add(bounce);
        mouse.classList.remove(inactive);
      }
    }

    document.addEventListener("mousemove", moveMouse);

    for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", disableAnimation);
    links[i].addEventListener("mouseleave", disableAnimation);
    }

// menu
    $(function(){
      $('.open').click(function(){
        $('.close').css('display', 'block')
        $('.open').css('display', 'none')
        $('.page-detail').fadeIn(300)
        $('body').css('overflow', 'hidden')
      })

      $('.close').click(function(){
        $('.close').css('display', 'none')
        $('.open').css('display', 'block')
        $('.page-detail').fadeOut(300)
        $('body').css('overflow', 'scroll')
      })

      $('.page-detail>ul>li>a').click(function(){
        $('body').css('overflow', 'scroll')
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
    $('.work-list-tit p:nth-child(1)').mouseover(function(){
      $('.work-list-tit p:nth-child(2)').css('display', 'block')
      $('.work-list-tit p:nth-child(1)').css('display', 'none')
    })

    $('.work-list-tit p:nth-child(2)').mouseleave(function(){
      $('.work-list-tit p:nth-child(2)').css('display', 'none')
      $('.work-list-tit p:nth-child(1)').css('display', 'block')
    })
  })

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
  }) 

});