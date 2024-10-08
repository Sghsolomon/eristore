import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";
const StarRating = ({ review }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { averageRating, arrayLength } = review;

  useEffect(() => {
    setRating(averageRating);
  }, [averageRating]);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            // onClick={() => setRating(index)}
            // onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <span className="h4 ms-2"></span>
    </>
  );

  //   return (
  //     <div>
  //       {[...Array(5)].map((star, index) => {
  //         index += 1;
  //         return (
  //           <button
  //             type="button"
  //             key={index}
  //             className={index <= (hover || rating) ? "on" : "off"}
  //             onClick={() => setRating(index)}
  //             onMouseEnter={() => setHover(index)}
  //             onMouseLeave={() => setHover(rating)}
  //           >
  //             <span className="star">&#9733;</span>
  //           </button>
  //         );
  //       })}
  //     </div>
  //   );
};

export default StarRating;
