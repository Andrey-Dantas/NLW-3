// pegando a localização atual do usuario
function getPosition(position, latAtual, lngAtual) {
  latAtual = position.coords.latitude;
  lngAtual = position.coords.longitude;

  // create map
  const map = L.map("mapid").setView([latAtual, lngAtual], 16);

  // create and add tileLayer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  //create ico
  const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  const iconUser = L.icon({
    iconUrl: "/images/user-icon.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  function addMarker({ id, name, lat, lng }) {
    // create popup overlay
    const popup = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 240,
      minHeigth: 240,
    }).setContent(
      `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"</a>`
    );

    const popupUser = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 140,
      minHeigth: 240,
    }).setContent("Aqui está você");

    // create and add marker
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
    L.marker([latAtual, lngAtual], { iconUser })
      .addTo(map)
      .bindPopup(popupUser);
  }

  const orphanagesSpan = document.querySelectorAll(".orphanage span");
  orphanagesSpan.forEach((span) => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng,
    };

    addMarker(orphanage);
  });
}

navigator.geolocation.getCurrentPosition(getPosition);
