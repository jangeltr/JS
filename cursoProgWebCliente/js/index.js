document.addEventListener("DOMContentLoaded", function(event) {
    let element = document.getElementById('btnLogIn')
    element.addEventListener('click',()=>{
        document.getElementById('divLogIn').style.display='none'
        document.getElementById('divDatos').style.display='block'
    })
})

document.addEventListener("DOMContentLoaded", function(event) {
    let element = document.getElementById('btnConsultar')
    element.addEventListener('click',()=>{
        window.fetch('http://localhost:9090/api/data',{method: 'GET',headers:{"Accept": "application/json"}})
        .then((respuesta)=>respuesta.json())
        .then((data)=>{
            console.log(data)
        })
    })
})