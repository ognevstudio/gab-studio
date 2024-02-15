function initMap() {
	var uluru = {lat: 39.724737049268725, lng: -104.8122987507314};

	let map = new google. maps. Map (document. getElementById ('map'), {
		mapId: "d2e5d72082875b71",
		zoom: 16, 
		disableDefaultUI: true,
		center: uluru
	});

	let marker = new google. maps .Marker({
		position: uluru, map: map
	});
}