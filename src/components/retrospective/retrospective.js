// vendor
import React from "react";

// components
import CardByType from "../card-by-type/card-by-type";

// store
import { RetrospectiveProvider } from "../../store/retrospective.store";

// constants
import { CARD_BY_TYPE_INFO } from "../../store/retrospective.constants";

// styles
import {
  RetrospectiveStyled,
  HeaderStyled,
  CardByTypeStyled,
} from "./retrospective.styled";

const Retrospective = () => {
  return (
    <RetrospectiveProvider>
      <RetrospectiveStyled>
        <HeaderStyled>Retrospective</HeaderStyled>
        <CardByTypeStyled>
          {CARD_BY_TYPE_INFO.map((cardByType) => (
            <div key={cardByType.key} className={cardByType.type}>
              <CardByType {...cardByType} />
            </div>
          ))}
        </CardByTypeStyled>
      </RetrospectiveStyled>
    </RetrospectiveProvider>
  );
};

export default Retrospective;
