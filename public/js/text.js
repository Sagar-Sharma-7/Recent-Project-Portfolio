const my_name = document.querySelector(".orange");
const developer = document.querySelector(".developer");
const github = document.querySelector(".github");
const click_info = document.querySelector(".click_info"); 
const visit_btn = document.querySelectorAll(".Proj_link");

// text content
my_name.innerHTML = "Sagar Sharma";
developer.innerHTML = "I'm a front end web developer.";
github.innerHTML = "Visit my Github →";
click_info.innerHTML = "Here are my few projects I've worked on recently. Click on the images to get detail about projects.";

visit_btn.forEach((btn) => {
    btn.innerHTML = "Visit";
});

