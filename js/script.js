"use strict";
// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const images  = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const NUM_IMAGES = 5;
const CHANGE_IMAGE_DELAY = 3;

let activeIndex = 0;
buildCarousel(images, activeIndex);
buildCarouselThumbs(images, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

leftArrowButton.addEventListener('click', moveCarouselPrevious);


rightArrowButton.addEventListener('click', moveCarouselForward);


let btnAvvia = document.getElementById('avvia');
let btnStop = document.getElementById('stop');


btnAvvia.addEventListener('click', moveCarouselForward);
btnStop.addEventListener('click', () => clearInterval(idInterval));






function moveCarouselForward(){
    clearInterval(idInterval)
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < images.length -1 ? activeIndex +1 : 0 ;
    buildCarousel(images, activeIndex);
    buildCarouselThumbs(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

function moveCarouselPrevious(){
     clearInterval(idInterval)
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex -1 : images.length -1 ;
    buildCarousel(images, activeIndex);
    buildCarouselThumbs(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

// funzione per la creazione del carosello grande
function buildCarousel(images, activeIndex){
    const carouselImages = document.querySelector('.carousel-images');
    // const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';
    for(let i = 0; i < images.length; i++){
        const elementObject = images[i];
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img ' 
        const dispalyTitle = i === activeIndex ? 'title-image active' : 'title-image ' 
        const dispalydescription = i === activeIndex ? 'description-image active' : 'description-image '
        content += `<img class="${imageClass}" src="${elementObject.url}" alt="${elementObject.title}" />

        <div class="${dispalyTitle} ">

        <h1 class="my_text_shadow">${elementObject.title}</h1>

        <span class="${dispalydescription} my_text_shadow">${elementObject.description}</span>
        </div>
        `;
    }
    
    carouselImages.innerHTML = content;
}

// funzione per la creazione del carosello piccolo
function buildCarouselThumbs(images, activeIndex){
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let contentThumbs = '';
    for(let i = 0; i < images.length; i++){
        const elementObject = images[i];
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img ' 
        contentThumbs += `
        <img class="${imageClass}" src="${elementObject.url}" alt="${elementObject.title}" />
        `;
    }
    
    carouselThumbs.innerHTML = contentThumbs;
}

