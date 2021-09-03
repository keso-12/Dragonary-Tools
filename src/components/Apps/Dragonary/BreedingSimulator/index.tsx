import React, { useState, ChangeEvent, Fragment } from 'react';
import TextInput from 'components/shared/plainFields/input';
import BreederCard from './partials/BreederCard';

export default function BreedingSimulator() {
  const [cards, setCards] = useState(1);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setCards(Number(value));
  };

  const renderedCards = [];
  for (let i = 0; i < cards; i += 1) {
    renderedCards.push(<BreederCard key={i} />);
  }

  return (
    <Fragment>
      <TextInput
        label="# of Breeding Cards"
        value={cards}
        name="cards"
        type="number"
        onChange={handleChange}
      />
      {renderedCards.map((r) => r)}
    </Fragment>
  );
}
