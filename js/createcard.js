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

    const stars = document.createElement("p")
    stars.textContent = "⭐" + cafe.rating
    if (cafe.rating == null) {
        stars.textContent = "⭐" + "No ratings";
        stars.style.filter = "grayscale()"
    }

    const votes = document.createElement("p")
    votes.textContent = "(" + cafe.votes + " votes)"
    if (cafe.votes == 0) {
        votes.textContent = ""
    }

    const header = document.createElement("div")
    header.appendChild(image)

    const details = document.createElement("div")
    details.appendChild(nombre)
    details.appendChild(price)

    const rating = document.createElement("div")
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

    console.log(cafe.name)
}