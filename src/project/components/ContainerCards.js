import { Swiper, SwiperSlide } from 'swiper/react';
import './card.css';
import 'swiper/css';
import { useState, useEffect } from 'react';
import ProductCard from './card';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

// Import Swiper styles

export function ContainerCards() {
  const [products, setProducts] = useState(
    [
    
        {
           "id": "KS1405",
           "sku": "KS1405",
           "imageUrl": "/productsImages/ks1405.png",
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
           "imageUrl": "/productsImages/hbtyemlif3ps.png",
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
           "imageUrl": "/productsImages/glr103.png",
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
           "imageUrl": "/productsImages/glr109.png",
           "name": "Delta Lockback Juniper",
           "brand": "Cudeman",
           "currentPrice": "55.00",
           "originalPrice": "79.00",
           "map": "MAP $79.00",
           "status": "sold-out"
         }
       ]
     
     
  );

  const[slides,setSlides]=useState(0)
  const handleResize = () => {
  
  setSlides(
      window.innerWidth <= 480 ? 1 :
          window.innerWidth <= 768 ? 2 :
            window.innerWidth <= 1024 ? 3 : 4,
    
    
    )    
       
   


   
  }
  useEffect(
    ()=>{  
      setInterval(handleResize,100)
      
      console.log("f")

    }

  

  ,[])
 
  return (
    <div className="container">
      <h1>{slides}</h1>

      <Swiper
            modules={[ Pagination]}

        spaceBetween={50} // Consistent spacing
        slidesPerView={slides}
        onSlideChange={() => console.log('slide change')}
        pagination={{ clickable: true }}


        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              sku={product.sku}
              name={product.name}
              status={product.status}
              id={product.id}
              imageUrl={product.imageUrl}
              brand={product.brand}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              className={i === products.length - 1 ? 'last-card' : ''} // Use CSS class
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};