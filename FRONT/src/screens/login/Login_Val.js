    
const validacionLogin = () =>{
    fetch('http://localhost:3000/api/Login')
    .then(function(response){return response.json(); })
    .then(function(loginAutentication) {console.log(loginAutentication)})

    console.log("El boton si botonea")
}


export default validacionLogin;