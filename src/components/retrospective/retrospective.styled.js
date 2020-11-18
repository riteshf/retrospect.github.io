import styled from "styled-components";

export const RetrospectiveStyled = styled.article`
  font-family: cursive;
  font-size: 10px;
  padding: 1%;
`;
RetrospectiveStyled.displayName = "RetrospectiveStyled";

export const HeaderStyled = styled.header`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10vh;
`;
HeaderStyled.displayName = "HeaderStyled";

export const BodyStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`;
BodyStyled.displayName = "BodyStyled";
