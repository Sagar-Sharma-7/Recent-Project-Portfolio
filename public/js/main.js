const span = document.querySelector("span");
const btn_github = document.querySelector(".github");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const img = document.querySelectorAll("img");

span.addEventListener("click", ()=>{
    window.open("https://github.com/Sagar-Sharma-7")
});
btn_github.addEventListener("click", () => {
    window.open("https://github.com/Sagar-Sharma-7")
});

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


// project click
img.forEach((pic) => {
    pic.addEventListener("click", ()=>{
        $(pic).slideToggle()
    })
})




console.log("Under Development!");