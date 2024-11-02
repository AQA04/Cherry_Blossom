import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner1 from '/src/components/banner1.png';
import banner2 from '/src/components/banner2.png';
import banner3 from '/src/components/banner3.png';
import banner4 from '/src/components/banner4.png';

import './Carrusel.css'

const imagen =[
  { id: 1, src: banner1 },
  { id: 2, src: banner2 },
  { id: 3, src: banner3 },
  { id: 4, src: banner4 },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 5000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 3,
  },
};

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
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container"
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
    >
      {imagen.map((imagen) => (
        <div key={imagen.id}>
          <img src={imagen.src} alt={imagen.id} className="imagen" />
        </div>
      ))}
    </Carousel>
);
};

export default Carrusel;

