
// NUMERO RANDOM
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PARI O DISPARI
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }

}

// NOTIFICA DI ERRORE
function notificationError(msgError){
    const alerta = document.createElement('div');
    alerta.className = ('alert alert-danger');
    alerta.innerHTML = msgError;
    return alerta;
}

function removeFirstNotification(){
    const alerToRemove =  document.querySelector('.alert')
    if(alerToRemove) alerToRemove.remove();
}

// INVERTI PAROLA

function invertiParola(parola){
    let parolaInversa = parola.split('').reverse().join('');
    return parolaInversa;
}



function addElementClassHTML(tagElement, className, fatherElement){
    const tag = document.createElement(tagElement);
    tag.className = className;
    fatherElement.append(tag);
    return tag;
}


function stampaImg(){
    for(let value of images){
        const col=document.createElement('div');
        col.classList.add('col-12');
        for(let key in value){
            console.log(key);
           col.innerHTML=`
           <img src="${value.url}" alt="${value.title}">
           `
           document.querySelector('.row').append(col);
        }
     }
   
}
