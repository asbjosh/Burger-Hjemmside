var map = L.map('map').setView([55.61366074004232, 12.48611304190668], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([55.61366074004232, 12.486113041906684]).addTo(map)
    .openPopup();