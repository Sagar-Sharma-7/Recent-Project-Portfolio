const img = document.querySelectorAll("img");
const detail = document.querySelectorAll(".detail");

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