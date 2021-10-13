// scrolling effect
window.onscroll = function(){
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
      } else {
        nav.classList.remove("sticky");
      }
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        $("nav").css("text-align", "right")
    }else if(document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
        $("nav").css("text-align", "left")
    };
};