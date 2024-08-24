const containerElement = document.querySelector(".container");
const names = ["Khushi Dayal", "Web Developer", "Good Coder"];

let namesIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
    characterIndex++;
    containerElement.innerHTML = `<h1>I am ${names[namesIndex].slice(0,1) === "K" ? "" : "a"} ${names[namesIndex].slice(0, characterIndex)}</h1>`;
    
    if(characterIndex === names[namesIndex].length) {
        namesIndex++;
        characterIndex = 0;
    }

    if(namesIndex === names.length) {
        namesIndex =0;
    }
    setTimeout(updateText, 400);

}


