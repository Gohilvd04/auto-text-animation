const containerEl = document.querySelector(".container");

const careers = ["Web Developer","Student","Learner","Freelancer"]

let careerIndex = 0;
let charIndex = 0;

function updateText() {
    charIndex++;
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "I" ?"an":"a" } ${careers[careerIndex].slice(0,charIndex)}</h1>`;    
    //${careers[careerIndex].slice(0,1) === "" ?"an":"a" } if u were use vowels in your name array
    setTimeout(updateText,200);
        if (charIndex === careers[careerIndex].length) {
            careerIndex++;
            charIndex=0;
        }
    if (careerIndex === careers.length) {
        careerIndex=0;
    }    
}

updateText();
