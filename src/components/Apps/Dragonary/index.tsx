import React, {
  useContext, useEffect, useState, ChangeEvent,
} from 'react';
import { Container } from '@material-ui/core';
import { StoreContext } from 'globalStore';
import TextInput from 'components/shared/plainFields/input';
import Banner from 'assets/Dragonary/dragonary-banner.png';
import BreederCard from './partials/BreederCard';

export default function SignUp() {
  const [cards, setCards] = useState(1);
  const { setBanner } = useContext(StoreContext);

  useEffect(() => {
    setBanner(Banner);
  }, []);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setCards(Number(value));
  };

  const renderedCards = [];
  for (let i = 0; i < cards; i += 1) {
    renderedCards.push(<BreederCard />);
  }

  return (
    <Container component="main">
      <TextInput
        label="# of Breeding Cards"
        value={cards}
        name="cards"
        type="number"
        onChange={handleChange}
      />
      {renderedCards.map((r) => r)}
    </Container>
  );
}
