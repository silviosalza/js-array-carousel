//creo array delle immagini (stringate) da inserire
const imagesArray = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");
console.log(itemsContainer);

//creo ciclo che crea un div per ogni immagine dell'array
let itemsDivs = ""

for (let i = 0; i < imagesArray.length; i++){
    const currentImage = imagesArray[i];
    itemsDivs +=  `<div class="item"><img src="${currentImage}" alt=""></div>`;
       
}
itemsContainer.innerHTML += itemsDivs;


const itemsArray = document.getElementsByClassName("item");
const nextBtn = document.querySelector(".down");
const prevBtn = document.querySelector(".up");

//fisso la prima immagine
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");


//gestisco bottone down
nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");

    itemsArray[activeItemIndex].classList.remove("active");

    if (activeItemIndex < itemsArray.length - 1) {
        activeItemIndex++;
        
    } else {
        activeItemIndex= 0

    }
    itemsArray[activeItemIndex].classList.add("active");   
})

//gestisco bottone up
prevBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden");

    itemsArray[activeItemIndex].classList.remove("active");

     if (activeItemIndex > 0) {
        activeItemIndex--;
        
    } else {
        activeItemIndex = itemsArray.length - 1
    }

    
    itemsArray[activeItemIndex].classList.add("active");
})