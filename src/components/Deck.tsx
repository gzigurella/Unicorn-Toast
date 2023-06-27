'use client';

import React from 'react';
import {Card} from './Card';
import { CardProps as CardType } from './Card';

interface SwipeableDeckProps {
  cards: CardType[];
}

const Deck: React.FC<SwipeableDeckProps> = ({ cards }) => {

  return (
    <div className="w-[90vw] pt-10 h-[400px] max-w-[260px]">
      {cards.map((content, index) => (
        <Card key={index}
            image={content.image}
            title={content.title}
            description={content.description}
        />
      ))}
    </div>
  );
};

export default Deck;
