import React, { useState, useContext } from "react";

// store
import { store } from "../../store/retrospective.store";

// constants
import { LIKE_CARD } from "../../store/retrospective.constants";

// styles
import { CardBackgroundStyled, InputStyled, LikesStyled } from "./card.styled";

const Card = ({ type, key, color, message, likes }) => {
  const { dispatch } = useContext(store);
  const [text, setText] = useState(message);

  const increaseLike = () =>
    dispatch({
      type: LIKE_CARD,
      data: { type, key },
    });

  return (
    <CardBackgroundStyled backgroundColor={color}>
      <InputStyled
        backgroundColor={color}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <LikesStyled onClick={increaseLike}>+{likes}</LikesStyled>
    </CardBackgroundStyled>
  );
};

export default Card;
