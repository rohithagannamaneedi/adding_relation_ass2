import React from 'react'

const RatingWidget = ({rating,productId,handleRatingChange}) => {

  return (
    
        <>
            {
                [0,0,0,0,0].map((_,index)=>(
                    <button
                        onClick={()=>handleRatingChange(productId,index+1)}
                        style={{
                            backgroundColor:rating>index?"yellow":"white",
                        }}
                    >{index+1}</button>
                ))
            }
        </>
    
  )
}

export default RatingWidget