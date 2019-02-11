function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        backgroundColor	: "#123",
        clickableIcons: false,
        controlSize: 1,
        disableDefaultUI: true,
        fullscreenControl: true,
		styles: [
			{
				elementType: 'geometry',
				stylers: [{color: '#f5f5f5'}]
			  },
			  {
				elementType: 'labels.icon',
				stylers: [{visibility: 'off'}]
			  },
			  {
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			  },
			  {
				elementType: 'labels.text.stroke',
				stylers: [{color: '#f5f5f5'}]
			  },
			  {
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [{color: '#bdbdbd'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			  },
			  {
				  featureType: 'landscape.man_made',
				  elementType: 'geometry',
				  stylers: [{color: '#F2F2F2'}]
			  },
			  {
				  featureType: 'landscape.natural.terrain',
				  stylers: [{color: '#F9F4DB'}]
			  },
			  {
				  featureType: 'landscape.natural.landcover',
				  elementType: 'geometry',
				  stylers:[{color: '#D3EEBD'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#D3EEBD'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			  },
			  {
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#5e4848'}]
			  },
			  {
				featureType: 'road.arterial',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#5e4848'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			  },
			  {
				featureType: 'road.local',
				elementType: 'geometry',
				stylers: [{color: '#786565'}]
			  },
			  {
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			  },
			  {
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [{color: '#e5e5e5'}]
			  },
			  {
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			  },
			  {
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#1ca3ec'}]
			  },
			  {
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			  }
		],
        center: { lat: 27.9917823, lng: 84.0509675 },
        zoom: 10,
    });
}