
let scrollAbout = () => {
    document.getElementById("aboutMe").scrollIntoView({behavior:"smooth", block:"end"});
}

document.getElementById("about").addEventListener("click", scrollAbout);

let loadGit = () => {
    window.open("https://github.com/akarsho");
}

let loadLinkedin = () => {
    window.open("https://www.linkedin.com/in/akarsh-ojha-53a218217/")
}