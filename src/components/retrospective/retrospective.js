// vendor
import React from "react";

// components
import CardByType from "../card-by-type/card-by-type";

// constants
import { CARD_BY_TYPE_INFO } from "../../store/retrospective.constants";

// styles
import {
  RetrospectiveStyled,
  HeaderStyled,
  CardByTypeStyled,
} from "./retrospective.styled";

const Retrospective = () => (
  <RetrospectiveStyled>
    <HeaderStyled>Retrospective</HeaderStyled>
    <CardByTypeStyled>
      {CARD_BY_TYPE_INFO.map((cardByType) => (
        <div key={cardByType.key}>
          <CardByType {...cardByType} />
        </div>
      ))}
    </CardByTypeStyled>
  </RetrospectiveStyled>
);

export default Retrospective;
