async function showPlaces() {
    let infoDialog = document.querySelector("#infoDialog");
    fetch('https://course-api.com/react-tours-project')
	.then(response => response.json())
	.then(data => {
        data.forEach(element => {
            let place = document.createElement("div");
            place.classList.add("flex", "flex-col", "items-center",
            "w-1/4", "max-h-60", "p-4", "bg-slate-700", "border", "border-2", "rounded-lg");
            
            const placeName = document.createElement("h2")
            placeName.innerText = element.name;
            placeName.classList.add("font-bold");
            const placeImg = document.createElement("img")
            placeImg.src = element.image;
            placeImg.classList.add("w-32", "h-32");
            const placeText = document.createElement("p")
            placeText.innerText = `Price: ${element.price}$`;
            
            place.appendChild(placeName);
            place.appendChild(placeImg);
            place.appendChild(placeText);
            
            place.onclick = () => {
                infoDialog.innerHTML = "";
                const closeButton = document.createElement("button");
                closeButton.classList.add("w-20", "outline-none", "bg-red-600", "rounded", "font-bold", "absolute", "top-0", "right-0")
                closeButton.innerText = "X";
                closeButton.onclick = () => {
                    infoDialog.close();
                }
                infoDialog.appendChild(closeButton);
                infoDialog.showModal();
                infoDialog.appendChild(document.createElement("h3")).innerText = element.name + " | Price:"  + element.price;
                infoDialog.appendChild(document.createElement("p")).innerText = element.info;

            }
            // console.log(element.name, element.info, element.price, element.image);
            document.querySelector("#container").appendChild(place);
        });
    })
	.catch(err => console.error(err));
  }

showPlaces();