import { createCard } from "./createcard.js"
let arreglo = []
fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
)
  .then((response) => response.json())
  .then((data) => {
arreglo = data
  })
  .catch((error) => {
    // Handle any errors here
  });
const allProducts = document.getElementById("boton1")
const availableNow = document.getElementById("boton2")
    document.getElementById("boton2").addEventListener("click" , () => { availableNow.style.backgroundColor = "#6F757C"
allProducts.style.backgroundColor = "#1B1D1F"
document.getElementById("cafes").textContent = ""
arreglo.filter(item => item.available == true).forEach((cafe) => {
        createCard(cafe)
    })
  })
  document.getElementById("boton1").addEventListener("click" , () => { allProducts.style.backgroundColor = "#6F757C"
availableNow.style.backgroundColor = "#1B1D1F"
document.getElementById("cafes").textContent = ""
    arreglo.forEach((cafe) => {
        createCard(cafe)
    })
  })