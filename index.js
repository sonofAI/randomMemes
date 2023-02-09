const meme = document.querySelector(".meme-container img");
const memeTitle = document.getElementById("title");
const button = document.getElementById("btn");
const subreddit = document.getElementById("subreddit");

let currentMemes = "wholesomememes";

function updateDetails(url, title) {
    meme.setAttribute("src", url);
    memeTitle.innerText = title;
}

function generateMeme() {
    subreddit.innerText = `From subreddit r/${currentMemes}`;
    fetch(`https://meme-api.com/gimme/${currentMemes}`).then((response) => response.json()).then((data) => {
    updateDetails(data.url, data.title);
    });    
}

button.addEventListener("click", generateMeme);

document.getElementById("wholesomememes").addEventListener("click", () => {
    currentMemes = "wholesomememes";
    generateMeme();
});

document.getElementById("ProgrammerHumor").addEventListener("click", () => {
    currentMemes = "ProgrammerHumor";
    generateMeme();
});

document.getElementById("mathmemes").addEventListener("click", () => {
    currentMemes = "mathmemes";
    generateMeme();
});

document.getElementById("footballmemes").addEventListener("click", () => {
    currentMemes = "footballmemes";
    generateMeme();
});

generateMeme();
