import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner1 from '/src/components/banner1.png';
import banner2 from '/src/components/banner2.png';
import banner3 from '/src/components/banner3.png';
import banner4 from '/src/components/banner4.png';

import './Carrusel.css';

const imagenes = [
  { id: 1, src: banner1, alt: 'Banner 1' },
  { id: 2, src: banner2, alt: 'Banner 2' },
  { id: 3, src: banner3, alt: 'Banner 3' },
  { id: 4, src: banner4, alt: 'Banner 4' },
];
//configuraciones de tamaño
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};

//componentes
const Carrusel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container" 
      dotListClass="custom-dot-list-style" 
    >
      {imagenes.map((imagen) => (
        <div key={imagen.id}>
          <img src={imagen.src} alt={imagen.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;