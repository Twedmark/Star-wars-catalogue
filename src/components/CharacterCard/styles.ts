import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(34, 35, 36);
  color: white;
  &:hover {
    transform: scale(1.05);
    background-color: rgb(59 80 95);
  }
`;
