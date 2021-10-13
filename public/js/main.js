const span = document.querySelector("span");
const btn_github = document.querySelector(".github");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const img = document.querySelectorAll("img");
const detail = document.querySelectorAll(".detail")

span.addEventListener("click", ()=>{
    window.open("https://github.com/Sagar-Sharma-7")
});
btn_github.addEventListener("click", () => {
    window.open("https://github.com/Sagar-Sharma-7")
});


// project click
img.forEach((pic) => {
    pic.addEventListener("click", ()=>{
        $("img").slideDown();
        $(pic).slideUp();
    });
});



console.log("Under Development!");