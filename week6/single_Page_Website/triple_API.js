let aliens = document.getElementById("aliens");
let description = document.getElementById("description");
let submit = document.getElementById("submit");
let list = document.getElementById("list");
function deleteAll(){
    while(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
}
function rendor(){
    deleteAll()
    axios.get('http://api.bryanuniversity.edu/first_Site/list')
    .then(response => {
        if(response.status == 200){
            for(let i = 0; i < response.data.length; i++){
                const h1 = document.createElement('h1');
                h1.textContent = response.data[i].name;
                if(response.data[i].isComplete == true){
                    h1.style.textDecoration = "line-through";
                }
                list.appendChild(h1)
                console.log(response.data[i].name);

                const h11 = document.createElement('h1');
                h11.textContent = response.data[i].description;
                list.appendChild(h11);
                console.log(response.data[i].description);

                let button = document.createElement('input')
                button.type = "submit";
                button.value = "Delete This";
                button.addEventListener("click", (event) => {
                axios.delete('http://api.bryanuniversity.edu/mikeCapstone/list/' + response.data[i]._id)
                    .then(response => {
                        rendor();
                        console.log(response);
                    })
                })
                list.appendChild(button);
                let button1 = document.createElement('input')
                button1.type = "submit";
                button1.value = "Put This";
                button1.addEventListener("click", (event) => {
                    axios.put('http://api.bryanuniversity.edu/mikeCapstone/list/' + response.data[i]._id, {isComplete: true})
                    .then(response => {
                        rendor();
                        console.log(response)
                    })
                })
                list.appendChild(button1);
                let h22 = document.createElement('h1');
                axios.get('http://quotes.stormconsultancy.co.uk/random.json')
                .then(response => {
                    h22.textContent = response.data.quote;
                    list.appendChild(h22);
                })
            }
        }
        
    }).catch(error => console.log(error));
}

submit.addEventListener("click", (event) => {
    axios.post('http://api.bryanuniversity.edu/mikeCapstone/list', { 
name: document.getElementById("chores").value, 
description: document.getElementById("description").value, 
price: 0, 
isComplete: false})

    .then(response => {
        rendor();
    }).catch(error => console.log(error));
});


rendor();