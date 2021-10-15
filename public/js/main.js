const span = document.querySelector("span");
const btn_github = document.querySelector(".github");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const title = document.querySelectorAll(".title");
const info = document.querySelectorAll(".about_proj");
const details = document.querySelectorAll(".detail");

span.addEventListener("click", ()=>{
    window.open("https://github.com/Sagar-Sharma-7")
});
btn_github.addEventListener("click", () => {
    window.open("https://github.com/Sagar-Sharma-7")
});


const data = {
    "info": [
        {
            "title": "Title1",
            "content": "Information about project1",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        },
        {
            "title": "Title2",
            "content": "Information about project2",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        },
        {
            "title": "Title3",
            "content": "Information about project3",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        },
        {
            "title": "Title4",
            "content": "Information about project4",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        },
        {
            "title": "Title5",
            "content": "Information about project5",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        },
        {
            "title": "Title6",
            "content": "Information about project6",
            "link": "https://github.com/Sagar-Sharma-7/Recent-Project-Portfolio"
        }
    ]
};
let i;
for(i = 0; i <6; i++ ){
    title[i].innerHTML = data.info[i].title;
    info[i].innerHTML = data.info[i].content;
}

console.log("Under Development!");