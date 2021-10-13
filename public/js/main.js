const span = document.querySelector("span");
const btn_github = document.querySelector(".github");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const img = document.querySelectorAll("img");
const detail = document.querySelectorAll(".detail");

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
        const num = pic.title;
        const info = detail[num];
        detail.forEach((d) => {
            $(d).css("display", "none")
            $(info).css("display", "flex");
        })
    });
});



console.log("Under Development!");