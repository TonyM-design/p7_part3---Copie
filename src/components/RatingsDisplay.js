import React from 'react';
import Advice from './Advice';


const RatingsDisplay = (ratings) => { 
    return (
      <div className='advicesBox'>
        {ratings && ratings.map((rating, i) => (
          <Advice 
            stars={rating.stars}
            comment={rating.comment}
            key={i}
          ></Advice>
        ))
        }
      </div>
    );
  };

  export default RatingsDisplay

