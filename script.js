var mymap = L.map('mapid').setView([27.9788, 84.0793], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap',
	// tileSize: 512,
	// zoomOffset: -1
}).addTo(mymap);