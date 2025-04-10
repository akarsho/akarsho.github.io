let loadGit = () => {
    window.open("https://github.com/akarsho");
}

let loadLinkedin = () => {
    window.open("https://www.linkedin.com/in/akarsh-ojha-53a218217/")
}

let scrollAbout = () => {
    document.getElementById("aboutme").scrollIntoView({"behavior":"smooth"});
    console.log("YOY");
}

let toAlbumsPage = () => {
    
}

document.getElementById("about").addEventListener("click", scrollAbout);