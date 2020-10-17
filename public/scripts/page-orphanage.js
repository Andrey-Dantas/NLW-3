const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}
const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map("mapid", options).setView([spanLat, spanLng], 16)

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create ico
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

// create and add marker
L.marker([spanLat, spanLng], { icon }).addTo(map)

/* image galery */

function selectImage(event) {
  const button = event.currentTarget

  //remover todas as classes ACTIVE
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => button.classList.remove("active"))

  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //adcionar a classe .active para este botao
  button.classList.add("active")
}
