import React from 'react'
import RatingWidget from './RatingWidget'

const ProductCard = ({name,image,description,avgRating,totalRatings,rating,productId,handleRatingChange}) => {
  return (
    <div>
        <h3>{name}</h3>
        <img src={image} alt="image" />
        <p>{description}</p>
        <p>Average Rating: {avgRating}</p>
        <p>Total Ratings: {totalRatings}</p>
        <RatingWidget rating={rating} productId={productId} handleRatingChange={handleRatingChange}/>
    </div>
  )
}

export default ProductCard