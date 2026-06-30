export function createCard(cafe) {
    const image = document.createElement("img")
    image.src = cafe.image

    const nombre = document.createElement("p")
    nombre.textContent = cafe.name

    const popular = document.createElement("div")
    popular.textContent = "Popular"

    const soldOut = document.createElement("div")
    soldOut.textContent = "Sold Out"

    const price = document.createElement("p")
    price.textContent = cafe.price

    // for (let i = 1; i <= 6; i++) {
    //     const estrella = document.createElement("img");
    //     if (i === 6) {
    //         estrella.src = "./resources/Star_fill.svg"
    //     } else {
    //         estrella.src = "./resources/Star.svg"
    //     }
    // }
    const estrella = document.createElement("img")
    estrella.src = "./resources/Star_fill.svg"

    const stars = document.createElement("p")
    stars.textContent = cafe.rating
    if (cafe.rating == null) {
        stars.textContent = "No ratings";
        stars.style.color = "#4D5562"
    }

    const votes = document.createElement("p")
    votes.textContent = "(" + cafe.votes + " votes)"
    votes.style.color = "#4D5562"
    if (cafe.votes == 0) {
        votes.textContent = ""
    }

    const header = document.createElement("div")
    header.appendChild(image)

    const details = document.createElement("div")
    details.appendChild(nombre)
    details.appendChild(price)

    const rating = document.createElement("div")
    rating.appendChild(estrella)
    rating.appendChild(stars)
    rating.appendChild(votes)

    const cardCafe = document.createElement("div")
    cardCafe.appendChild(header)
    cardCafe.appendChild(details)
    cardCafe.appendChild(rating)

    if (cafe.popular == true) {
        header.appendChild(popular)
    }

    if (cafe.votes == 122) {
        rating.appendChild(soldOut)
    }

    document.querySelector("#cafes").appendChild(cardCafe)

    cardCafe.classList.add("cardCafe")
    header.classList.add("header")
    popular.classList.add("popular")
    details.classList.add("details")
    rating.classList.add("rating")
    price.classList.add("price")
    soldOut.classList.add("soldOut")
    nombre.classList.add("nombre")
    estrella.classList.add("estrella")

    console.log(cafe.name)
}