// Simple ASL dictionary (replace with a more comprehensive one)
const aslDictionary = {
   'a': "vector images/a.svg",
   'b': "vector images/b.svg",
   'c': "vector images/c.svg",
   'd': "vector images/d.svg",
   'e': "vector images/e.svg",
   'f': "vector images/f.svg",
   'g': "vector images/g.svg",
   'h': "vector images/h.svg",
   'i': "vector images/i.svg",
   'j': "vector images/j.svg",
   'k': "vector images/k.svg",
   'l': "vector images/l.svg",
   'm': "vector images/m.svg",
   'n': "vector images/n.svg",
   'o': "vector images/o.svg",
   'p': "vector images/p.svg",
   'q': "vector images/q.svg",
   'r': "vector images/r.svg",
   's': "vector images/s.svg",
   't': "vector images/t.svg",
   'u': "vector images/u.svg",
   'v': "vector images/v.svg",
   'w': "vector images/w.svg",
   'x': "vector images/x.svg",
   'y': "vector images/y.svg",
   'z': "vector images/z.svg",
   // Add more ASL translations as needed
};
translateButton = document.querySelector(".translate-button");
translateButton.addEventListener("click", translate);

function translate() {
   clearImages();
   const inputText = document.getElementById('inputText').value; 
   let regex = /^[a-zA-Z\s]+$/;

   if (inputText.includes('\n')) {
        alert("Invalid input, please enter only letters and spaces!");
        return;
   }

   if (!regex.test(inputText)) {
      alert("Invalid input, please enter only letters and spaces!");
      return;
   }

   const temp = inputText.toLowerCase();
   
   const words = temp.split(" ");
   words.forEach(wordToImage);
}



//


function wordToImage(word) {
   const characters = word.split("");
   const arrayOfImageLinks = [];
  
   for (let i = 0; i < characters.length; i++) {
       arrayOfImageLinks.push(characterToImageLink(characters[i]));
   }


   console.log(arrayOfImageLinks);




   var images = linksToImages(arrayOfImageLinks);
   if (images.size == 0) {return;}

   let card = document.createElement("div");
   card.classList.add("card-wrapper");
   card.classList.add("make-white");


   var wordBox = document.createElement("div");
   wordBox.classList.add("word-wrapper");


   let title = document.createElement("p");
   title.innerHTML = word;
   wordBox.classList.add("translate-word");
   wordBox.classList.add("make-bigger");
   wordBox.appendChild(title);


   card.appendChild(wordBox);


   let imageWrapper = document.createElement("div");
   imageWrapper.classList.add("asl-image");


  
   // Append the div to the body of the document
   for (let i = 0; i < images.length; i++) {
       imageWrapper.appendChild(images[i]);
   }
      
   card.appendChild(imageWrapper);


   const outputASL = document.getElementById("outputASL");
   outputASL.appendChild(card);
}
function linksToImages(links) {
   let arrayOfImages = [];
   for (let i = 0; i < links.length; i++) {
       imgTag = document.createElement("img");
       imgTag.src = links[i];
       imgTag.classList.add("translate-character");
       arrayOfImages.push(imgTag);
   }
   return arrayOfImages;
}
function characterToImageLink(letter) {
   imageLink = aslDictionary[letter.toLowerCase()];
   return imageLink;
};


const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearAll);

function clearAll() {
   clearText();
   clearImages();
}

function clearText() {
   const textArea = document.querySelector("#inputText");
   textArea.value = "";
}

function clearImages() {
   const card = document.querySelector("#outputASL");
   while (card.firstChild) {
      card.removeChild(card.firstChild);
   }
}