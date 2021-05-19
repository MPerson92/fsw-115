let button = document.getElementById("button");
    
    // let data = retrieve();
    button.addEventListener("click", (event) => {
    event.preventDefault();
    axios.get('http://api.bryanuniversity.edu/mikey1/list')
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
        }
    }).catch(error => console.log(error));
})



