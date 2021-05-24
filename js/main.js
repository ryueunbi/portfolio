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
      // autoplayTimeout: 2500,
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
    $('#toggle').click(function(){
        $('#toggle>ul').toggleClass('animate');
        $('#page').toggleClass('overlay');
    })
    
    $('.aboutbtn').click(function(){
        $('.aboutbtn').css('display', 'none')
        $('.closebtn').css('display', 'block')
        $('body').css('overflow', 'hidden')
    })
    
    $('.closebtn').click(function(){
        $('.aboutbtn').css('display', 'block')
        $('.closebtn').css('display', 'none')
        $('body').css('overflow', 'scroll')
    })
    
    $('#overlay>nav>ul>li>a').click(function(){
        $('body').css('overflow', 'scroll')
    })

});