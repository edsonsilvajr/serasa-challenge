import { useState } from 'react';
import { Star } from '../../atoms/star';
import { StarRatingWrapper } from './starRating.styles';

interface StarRatingProps {
  rating: number;
  callback: (i: number) => void;
}

const StarRating = (props: StarRatingProps) => {
  const [hovered, setHovered] = useState(0);

  return (
    <StarRatingWrapper>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Star
            key={index}
            state={index <= (hovered || props.rating) ? 'on' : 'off'}
            onMouseEnter={() => {
              if (index > props.rating) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => setHovered(props.rating)}
            onClick={() => {
              setHovered(index);
              props.callback(index);
            }}
          >
            &#9733;
          </Star>
        );
      })}
    </StarRatingWrapper>
  );
};

export default StarRating;
