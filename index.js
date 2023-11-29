async function showPlaces() {
    let infoDialog = document.querySelector("#infoDialog");
    fetch('http://course-api.com/react-tours-project')
	.then(response => response.json())
	.then(data => {
        data.forEach(element => {
            let place = document.createElement("div");
            place.classList.add("flex", "flex-col", "max-w-60", "max-h-60", "p-4", "bg-slate-700", "border", "border-2", "rounded-lg");
            place.appendChild(document.createElement("h2")).innerText = element.name;
            place.appendChild(document.createElement("img")).src = element.image;
            place.appendChild(document.createElement("p")).innerText = `Price: ${element.price}$`;
            place.onclick = () => {
                infoDialog.showModal();
                infoDialog.appendChild(document.createElement("h3")).innerText = element.name;
                infoDialog.appendChild(document.createElement("p")).innerText = element.info;

            }
            console.log(element.name, element.info, element.price, element.image);
            document.querySelector("#container").appendChild(place);
        });
    })
	.catch(err => console.error(err));
  }

showPlaces();