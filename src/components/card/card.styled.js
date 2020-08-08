// vendor
import styled from "styled-components";

export const CardBackgroundStyled = styled.span`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15%;
  background-color: ${(props) => props.backgroundColor};
`;
CardBackgroundStyled.displayName = "CardBackgroundStyled";

export const InputStyled = styled.textarea`
  background-color: ${(props) => props.backgroundColor};
  padding: 3px 5px
  width: 90%;
  border: none;
`;
InputStyled.displayName = "InputStyled";

export const LikesStyled = styled.div`
  font-size: 1rem;
  padding-left: 5px;
`;
LikesStyled.displayName = "LikesStyled";
