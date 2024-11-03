import loginUsuario from './controllers/LoginControl.js'
import signupUsuario from './controllers/SingupControl.js'
import busquedaProductos from './controllers/ProductosControl.js'
import busquedaHistorial from './controllers/historialControl.js'
import agregarAlCarrito from './controllers/carritoControl.js'


//signupUsuario("Manuel", "Quintero", "651651", "blabalsbl", "man@gmail.com", "222")


loginUsuario("Manuel", "222")

busquedaProductos('Lienzo')

busquedaHistorial('1')  

agregarAlCarrito(1, 1, 2) // Juan Pérez agrega 2 Lienzos 20 x 30