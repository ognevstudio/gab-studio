function initMap() {
	var uluru = {lat: 39.6668716, lng: -104.8602724};

	let map = new google. maps. Map (document. getElementById ('map'), {
		mapId: "e31bdd6c7d81467e",
		zoom: 17.5, 
		disableDefaultUI: true,
		center: uluru
	});

	let marker = new google. maps .Marker({
		position: uluru, map: map
	});
}