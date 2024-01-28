import { useEffect, useState } from 'react';
import "./App.css"
import React from 'react';
import { ContainerCards } from './project/components/ContainerCards';




function App() {
  

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
      

  return (
    <div className="ContainerCards ">

<ContainerCards/>
 


    </div>
  );
}

export default App;
