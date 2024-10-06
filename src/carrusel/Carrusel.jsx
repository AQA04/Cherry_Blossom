import Carousel from 'react-bootstrap/Carousel';
import img1 from '../components/banner1.png'
import img2 from '../components/car2.jpg'
import './Carrusel.css'



function Carrusel() {


  return (
    <>
    <div id='carrusel'>
     

      <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
      id = "fotosCarrusel"
      />

    </div>
    </>
  );
}

export default Carrusel;

