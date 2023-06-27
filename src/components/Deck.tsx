import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';
import {Card} from './Card';
import { CardProps as CardType } from './Card';

interface DeckProps {
  cards: CardType[];
}

const Deck: React.FC<DeckProps> = ({ cards }) => {
  const [index, setIndex] = useState(0);

  // Define animation springs for each card
  const springs = useSprings(
    cards.length,
    cards.map((_, i) => ({
      transform: `translateX(${(i - index) * 10}%)`, // Adjust the translation amount as needed
      zIndex: cards.length - i,
    }))
  );

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    } else if (direction === 'right') {
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div>
      {springs.map((props, i) => (
        <animated.div
          key={i}
          style={{
            ...props,
            position: 'absolute',
          }}
        >
          {/* Render your Card component here */}
          <Card title={cards[i].title} image={cards[i].image} description={cards[i].description}/>
        </animated.div>
      ))}
    </div>
  );
};

export default Deck;
