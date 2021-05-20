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

// tiny slider
document.addEventListener("DOMContentLoaded", function(e){
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

    for (let i = 0; i < imgSliderPrev.length; i++){
        imgSliderPrev[i].onclick = (() => {
            imgSlider.goTo("prev");
        });
    }

    for (let i = 0; i < imgSliderNext.length; i++){
        imgSliderNext[i].onclick = (() => {
            imgSlider.goTo("next");
        });
    }

});