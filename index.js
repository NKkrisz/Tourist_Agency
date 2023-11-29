let places = [];

async function getPlaces() {
    fetch('http://course-api.com/react-tours-project')
	.then(response => response.json())
	.then(data => {places = data; console.log(places);})
	.catch(err => console.error(err));
  }

getPlaces();