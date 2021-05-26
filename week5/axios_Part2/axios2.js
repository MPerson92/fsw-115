// It will be...kind of. The axios.put requires an argument for what needs to be updated. So for example
// axios.put("URL"+idInfo, infoYouWantToUpdate)
// .then(response => console.log(whatever you needhere))
// .catch(err => console.log(err))
// So the infoYouWantToUpdate in this case is going to be an object. So for example:
// var infoYouWantToUpdate = {
// name: "newName"
// }
// This will pass to the axios.put the information that you want to update the name at whatever id is chosen. You can also update multiple things at once:
// var infoYouWantToUpdate = {
// name: "newName",
// price: 0,
// description: "new Description"
// }
// Keep in mind that these values are actually being updated via your inputs.
// Anyways, for the axios.delete it's the same logic, but you don't have to pass it a 2nd argument:
// axios.delete("URL"+idInfo)
// .then(response => console.log(whatever you needhere))
// .catch(err => console.log(err))
axios.get('http://api.bryanuniversity.edu/michael/list')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1');
        h1.textContent = response.data[i].name;
        document.body.appendChild(h1);
        console.log(response.data[i].name);

        const h11 = document.createElement('h1');
        h11.textContent = response.data[i].description;
        document.body.appendChild(h1);
        console.log(response.data[i].description);

        const h22 = document.createElement('h1');
        h22.textContent = response.data[i].price;
        document.body.appendChild(h1);
        console.log(response.data[i].price);

        const h33 = document.createElement('h1');
        h33.textContent = response.data[i].isComplete;
        document.body.appendChild(h1);
        console.log(response.data[i].isComplete);

        if(response.data[i].isComplete == true){
            h1.style.textDecoration = "line-through";
        };
    };
})
.catch(error => console.log(error));
document.getElementById("sub").addEventListener("click", event => {
    axios.post('http://api.bryanuniversity.edu/michael/list', {name: document.getElementById("box1").value, description:document.getElementById("box2").value, 
    price: document.getElementById("box3").value, isComplete: document.getElementById("box4").value})
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1');
        h1.textContent = response.data[i].name;
        document.body.appendChild(h1);
        console.log(response.data[i].name);

        const h11 = document.createElement('h1');
        h11.textContent = response.data[i].description;
        document.body.appendChild(h1);
        console.log(response.data[i].description);

        const h22 = document.createElement('h1');
        h22.textContent = response.data[i].price;
        document.body.appendChild(h1);
        console.log(response.data[i].price);

        const h33 = document.createElement('h1');
        h33.textContent = response.data[i].isComplete;
        document.body.appendChild(h1);
        console.log(response.data[i].isComplete);

            if(response.data[i].isComplete == true){
                h1.style.textDecoration = "line-through";
            };
        }
    })
})
.catch(error => console.log(error));
document.getElementById("sub1").addEventListener("click", event => {
    axios.put('http://api.bryanuniversity.edu/michael/list', { name: document.getElementById("box5").value, description:document.getElementById("box6").value, 
    price: document.getElementById("box7").value, isComplete: document.getElementById("box8").value})
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1');
            h1.textContent = response.data[i].name;
            document.body.appendChild(h1);
            console.log(response.data[i].name);

            const h11 = document.createElement('h1');
            h11.textContent = response.data[i].description;
            document.body.appendChild(h1);
            console.log(response.data[i].description);

            const h22 = document.createElement('h1');
            h22.textContent = response.data[i].price;
            document.body.appendChild(h1);
            console.log(response.data[i].price);

            const h33 = document.createElement('h1');
            h33.textContent = response.data[i].isComplete;
            document.body.appendChild(h1);
            console.log(response.data[i].isComplete);

            if(response.data[i].isComplete == true){
                h1.style.textDecoration = "line-through";
            };
        }
    })
})
.catch(error => console.log(error));


