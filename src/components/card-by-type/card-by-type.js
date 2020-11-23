// vendor
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import Card from '../card/card';

// store
import { RetrospectiveContext } from '../../store/retrospective.store';

// constants
import { ADD_CARD } from '../../store/retrospective.constants';

// styles
import {
  TitleStyled,
  ButtonStyled,
  CardsWrapperStyled,
} from './card-by-type.styled';

const CardByType = ({ type, title, color }) => {
  const { state, dispatch } = useContext(RetrospectiveContext);

  const cards = state[type];
  const addCard = async () => {
    try {
      const response = await fetch('/placeholder');
      const { placeholder } = await response.json();

      dispatch({
        type: ADD_CARD,
        data: { type, placeholder, likes: 0 },
      });
    } catch (e) {
      dispatch({
        type: ADD_CARD,
        data: { type, placeholder: 'Placeholder', likes: 0 },
      });
    }
  };

  return (
    <>
      <TitleStyled>
        {title}
        <ButtonStyled onClick={addCard}> +</ButtonStyled>
      </TitleStyled>
      <CardsWrapperStyled>
        {cards.map((card) => (
          <Card
            key={card.cardKey}
            {...card}
            type={type}
            color={color}
          />
        ))}
      </CardsWrapperStyled>
    </>
  );
};

CardByType.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
};

export default CardByType;
