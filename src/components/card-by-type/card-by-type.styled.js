import styled from "styled-components";

export const TitleStyled = styled.div`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10vh;
`;
TitleStyled.displayName = "TitleStyled";

export const ButtonStyled = styled.button`
  background: #8bd61e;
  border-radius: 50%;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
`;
ButtonStyled.displayName = "ButtonStyled";

export const CardsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;
CardsWrapperStyled.displayName = "CardsWrapperStyled";
