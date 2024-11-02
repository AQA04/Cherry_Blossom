import loginUsuario from './controllers/LoginControl.js'
import signupUsuario from './controllers/SingupControl.js'
import busquedaProductos from './controllers/productosControl.js'


//signupUsuario("Manuel", "Quintero", "651651", "blabalsbl", "man@gmail.com", "222")


loginUsuario("Manuel", "222")

busquedaProductos('Lienzo')
