import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// store
import { RetrospectiveContext } from "../../store/retrospective.store";

// constants
import { LIKE_CARD, DELETE_CARD } from "../../store/retrospective.constants";

// styles
import {
  CardBackgroundStyled,
  InputStyled,
  LikesStyled,
  ButtonStyled,
} from "./card.styled";

const Card = ({ type, cardKey, color, message, likes }) => {
  const { dispatch } = useContext(RetrospectiveContext);
  const [text, setText] = useState(message);

  const increaseLike = () =>
    dispatch({
      type: LIKE_CARD,
      data: { type, cardKey },
    });

  const removeCard = () => {
    dispatch({
      type: DELETE_CARD,
      data: { type, cardKey },
    });
  };

  return (
    <CardBackgroundStyled backgroundColor={color}>
      <InputStyled
        autoFocus
        backgroundColor={color}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>
        <LikesStyled onClick={increaseLike} role="button" tabIndex={0}>
          +{likes}
        </LikesStyled>
        <ButtonStyled onClick={removeCard}>x</ButtonStyled>
      </div>
    </CardBackgroundStyled>
  );
};

Card.propTypes = {
  cardKey: PropTypes.string.isRequired,
};

export default Card;
