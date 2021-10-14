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

// json data
const data = {
    "info": [
        {
            "title": "Title1",
            "content": "Information about project1"
        },
        {
            "title": "Title2",
            "content": "Information about project2"
        },
        {
            "title": "Title3",
            "content": "Information about project3"
        },
        {
            "title": "Title4",
            "content": "Information about project4"
        },
        {
            "title": "Title5",
            "content": "Information about project5"
        },
        {
            "title": "Title6",
            "content": "Information about project6"
        }
    ]
}

// console.log(data.info[0]);
// fetching data from json

let i;
for(i = 0; i <6; i++ ){
    title[i].innerHTML = data.info[i].title;
    info[i].innerHTML = data.info[i].content;
}

console.log("Under Development!");