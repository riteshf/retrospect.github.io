import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// store
import { RetrospectiveContext } from "../../store/retrospective.store";

// constants
import { LIKE_CARD } from "../../store/retrospective.constants";

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

  return (
    <CardBackgroundStyled backgroundColor={color}>
      <InputStyled
        backgroundColor={color}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>
        <LikesStyled onClick={increaseLike} role="button" tabIndex={0}>
          +{likes}
        </LikesStyled>
        <ButtonStyled>x</ButtonStyled>
      </div>
    </CardBackgroundStyled>
  );
};

Card.propTypes = {
  cardKey: PropTypes.string.isRequired,
};

export default Card;
