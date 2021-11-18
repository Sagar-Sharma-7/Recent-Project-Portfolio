const span = document.querySelector("span");
const btn_github = document.querySelector(".github");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const title = document.querySelectorAll(".title");
const info = document.querySelectorAll(".about_proj");
const details = document.querySelectorAll(".detail");
const visit_btn = document.querySelectorAll(".Proj_link");

span.addEventListener("click", ()=>{
    window.open("https://github.com/Sagar-Sharma-7")
});
btn_github.addEventListener("click", () => {
    window.open("https://github.com/Sagar-Sharma-7")
});


const data = {
    "info": [
        {
            "title": "Movies In Theater",
            "content": "IMDB API In theater project. Get information about upcoming movies.",
            "link": "https://github.com/Sagar-Sharma-7/imbd-In_Theater"
        },
        {
            "title": "Fibonacci Series",
            "content": "Fibonacci Series is series that start with 0, followed by 1 and the next number is found by adding up the two numbers before it.",
            "link": "https://github.com/Sagar-Sharma-7/Fibonacci_series"
        },
        {
            "title": "Astronomy picture of the day",
            "content": "Astronomy Picture of the Day, explore the space and cosmos. Get different images of space each day. Using NASA APOD API.",
            "link": "https://github.com/Sagar-Sharma-7/Astronomy-picture-of-the-day"
        },
        {
            "title": "key codes",
            "content": "JavaScript keyboard events help you capture user interactions with the keyboard. Click on the link below to get the key code of the pressed key.",
            "link": "https://github.com/Sagar-Sharma-7/key-codes"
        },
        {
            "title": "Binary Octal Hexadecimal",
            "content": "A simple Command-Line Interface (CLI) converts decimal numbers into binary, octal, and hexadecimal.",
            "link": "https://github.com/Sagar-Sharma-7/binary-octal-hexadecimal"
        },
        {
            "title": "Age Calculator",
            "content": "Enter your Date of Birth and this project will return your age in seconds, minutes, hours, days, weeks and months",
            "link": "https://sagar-sharma-7.github.io/Age-Calc/"
        }
    ]
};
let i;
for(i = 0; i <6; i++ ){
    title[i].innerHTML = data.info[i].title;
    info[i].innerHTML = data.info[i].content;
    visit_btn[i].setAttribute("target", "_blank");
    visit_btn[i].href = data.info[i].link;
    visit_btn.forEach(element => {
        element.innerHTML = "Visit";
    });

}

console.log("Under Development!");