import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
const [products,setProducts] = useState(initialProducts);

const[rating,setRatings] = useState(new Array(products.length).fill(0));

const handleRatingChange = (productId,newRating) => {
  const updatedRatings = rating.map((ele,index)=>{
        if(index===productId-1){
          return newRating;
        }else{
          return ele;
        }
  })
  localStorage.setItem("ratings-assignment-application",JSON.stringify(updatedRatings));
  setRatings(updatedRatings);
}

useState(() => {
  const storedRatings =JSON.parse(localStorage.getItem("ratings-assignment-application"));
  if(!storedRatings){
    localStorage.setItem("ratings-assignment-application",JSON.stringify(rating));
  }
  else{
    setRatings(storedRatings);
  }
},[])
 

  return (
    <div>
     <h1>All Products</h1>
     {
      products.map((product,index)=>(
        <ProductCard
          key={product.id}
          productId={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          avgRating={product.avgRating}
          totalRatings={product.totalRatings}
          rating={rating[index]}
          handleRatingChange={handleRatingChange}
        />
      ))
     }
    </div>
  );
}

export default App;