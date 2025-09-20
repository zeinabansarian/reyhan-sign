let mapDiv = document.querySelector(".mapIn"),
  xLatcontact = mapDiv.getAttribute("data-x"),
  yLatContact = mapDiv.getAttribute("data-y");
var map = L.map("map", { center: [yLatContact, xLatcontact], zoom: 15 }),
  Contact = new L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { minZoom: "10" }
  ).addTo(map);
(greenIconContact = L.icon({
  iconUrl: "../assets/images/location.png",
  iconSize: [56, 67],
})),
  (markerContact = L.marker([yLatContact, xLatcontact], {
    icon: greenIconContact,
  })),
  markerContact.addTo(map);
