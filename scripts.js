let movies =[
{
    name : "spider man",
    des : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore exercitationem quia, distinctio maiores laborum",
    image : "./img/slider3.jpg",
},
{
    name : "Loki",
    des : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore exercitationem quia, distinctio maiores laborum",
    image: "./img/slider1.jpg",
},
{
    name : "Loki",
    des : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore exercitationem quia, distinctio maiores laborum",
    image: "./img/slider 2.jpg",
},
{
    name : "Loki",
    des : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore exercitationem quia, distinctio maiores laborum",
    image: "https://www.indiantvinfo.com/media/2023/05/Avatar-2-on-OTT.jpg",
},
{
    name : "Loki",
    des : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore exercitationem quia, distinctio maiores laborum",
    image: "./img/slider1.jpg",
},]

import cardsvalues from "./recommended.json" assert { type: "json" };
import cardsPopularShow from "./popular_Show.json" assert { type: "json" };
import newRelease from "./newRelease.json" assert { type: "json" };
let cardContainer = document.querySelector(".card-container")
let card_container = document.querySelector(".card_container")
let newRelease_card_container = document.querySelector("#newRelease_card_container")


const carousel= document.querySelector(".carousel")
let sliders = [];

let sliderIndex = 0; //track the current slide



const createSlide= ()=>{
    if (sliderIndex>=movies.length){
        sliderIndex= 0;
    }

    //createing dom Element
    let slide = document.createElement('div')
    let imgElement = document.createElement('img');
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des))
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content)
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[sliderIndex].image;
    sliderIndex++

    //setting element classname 
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movies-des";
    sliders.push(slide);


    if(sliders.length){
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
};
// createSlide();

for (let i=0; i< movies.length; i++){
    createSlide();
}

setInterval(() => {
    createSlide()
}, 3000);


//video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play()
    })

    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause()
    })
})

//slider card

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})



cardsvalues.forEach(function(card){
    let listOfCard= `<div class="card">
                     <img src="${card.image}" class="card-img" alt="">
                        <div class="card-body">
                            <h2 class="name"> ${card.name} </h2>
                            <h6 class="des">${card.des}</h6>
                            <button class="watchlist-btn"> ${card.button}</button>
                         </div>
                    </div>` 
    cardContainer.innerHTML+=listOfCard
})


cardsPopularShow.forEach(function(cards){
    let listOfCardPopularShow= `<div class="card">
                     <img src="${cards.image}" class="card-img" alt="">
                        <div class="card-body">
                            <h2 class="name"> ${cards.name}</h2>
                            <h6 class="des">${cards.des}</h6>
                            <button class="watchlist-btn">${cards.button}</button>
                         </div>
                    </div>` 
    card_container.innerHTML+=listOfCardPopularShow
})


newRelease.forEach(function(card){
    console.log(card)
    let listOfCardnewRelease= `<div class="card">
                     <img src="${card.image}" class="card-img" alt="">
                        <div class="card-body">
                            <h2 class="name"> ${card.name}</h2>
                            <h6 class="des">${card.des}</h6>
                            <button class="watchlist-btn"> ${card.button}</button>
                         </div>
                    </div>` 
    newRelease_card_container.innerHTML+=listOfCardnewRelease
})


