//const { default: axios } = require("axios")

//const axios = require('axios');
let button = document.getElementById('button')

// axios.get('https://swapi.dev/api/planets/?search=alderaan')
// .then(res =>{ 
//     console.log('res is', res)
// })

button.addEventListener('click', ()=>{
axios.get('https://swapi.dev/api/planets/2')
.then(res =>{ 
    //console.log('res is', res.data.residents)
    let urls = res.data.residents

    urls.forEach(url =>{
        //console.log('url is', url)
        axios.get(url).then(res =>{
            console.log('res is', res)
         let residentName = document.getElementById('resident-name')
         residentName.textContent += res.data.name + ", "

          document.body.appendChild(residentName)
        })
    })

   

})
}


    
)