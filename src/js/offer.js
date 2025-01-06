const btnOffer = document.querySelector('.button-offer')
const restCard = document.querySelector('.rest-card')
const btnOfferLess = document.querySelector('.button-offer-less')

btnOffer.addEventListener('click', () =>{

    btnOffer.style.display = 'none'
    restCard.style.display = 'block'
    btnOfferLess.style.display = 'block'
})

btnOfferLess.addEventListener('click', () =>{

    btnOffer.style.display = 'block'
    restCard.style.display = 'none'
    btnOfferLess.style.display = 'none'
})