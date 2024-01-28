import { Swiper, SwiperSlide } from 'swiper/react';
import "./card.css"; // Import custom card styles
import 'swiper/css';
import { useState, useEffect } from 'react';
import ProductCard from './card';

export function ContainerCards() {
  const[products,setProducts]=useState(
    [  
     {
    "id": "KS1405",
    "sku": "KS1405",
    "imageUrl": "images/ks1405.jpg",
    "name": "Fermi Linerlock Black/Green",
    "brand": "Glow Rhino",
    "currentPrice": "35.00",
    "originalPrice": "99.00",
    "map": "MAP $99.00",
    "status": "in-stock"
  },
  {
    "id": "HBTYEMLIF3PS",
    "sku": "HBTYEMLIF3PS",
    "imageUrl": "images/hbtyemlif3ps.jpg",
    "name": "125th Annv Dog Fixed Blade",
    "brand": "Ka-Bar",
    "currentPrice": "55.00",
    "originalPrice": "99.00",
    "map": "MAP $99.00",
    "status": "in-stock"
  },
  {
    "id": "GLR103",
    "sku": "GLR103",
    "imageUrl": "images/glr103.jpg",
    "name": "Fermi Linerlock Black/Green",
    "brand": "Glow Rhino",
    "currentPrice": "35.00",
    "originalPrice": "45.00",
    "map": "MAP $55.00",
    "status": "closeout"
  },
  {
    "id": "GLR109",
    "sku": "GLR109",
    "imageUrl": "images/glr109.jpg",
    "name": "Delta Lockback Juniper",
    "brand": "Cudeman",
    "currentPrice": "55.00",
    "originalPrice": "79.00",
    "map": "MAP $79.00",
    "status": "sold-out"
  }
]
)
      
  const [swiperOptions, setSwiperOptions] = useState({
    spaceBetween: 50,
    slidesPerView: 4, // default number of cards in larger screen
  });

  //handle number of slides per view in case of labtop ,tablet and mobile phone
  useEffect(() => {
    const handleResize = () => {
      setSwiperOptions({
    
        slidesPerView: window.innerWidth <= 768 ? 2 :
                       window.innerWidth <= 1024 ? 3 : 4,

      });
    };

    window.addEventListener('resize', handleResize); // Update on resize

  
  }, []); 

  return (
    <div className="container"> 
    {/*Title */}
      <h1>Featured products</h1>

      <Swiper
        spaceBetween={swiperOptions.spaceBetween}
        slidesPerView={swiperOptions.slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

        style={{display:"flex",flex:"1 0"}}
      >

    {/* mapping function for products */}

        {products.map((product,i) => (
          <SwiperSlide key={product.id}            
          >
    {/* card component and passing parameters*/}

            <ProductCard
              sku={product.sku}
              name={product.name}
              status={product.status}
              id={product.id}
              imageUrl={product.imageUrl}
              brand={product.brand}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
             style={{ flexBasis: i===products.length-1?"50%":"25%"}}
              
              
              
            />
          </SwiperSlide>
          
        

        ))}

      </Swiper>
    </div>
  );
};

