import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin: 3px;
  background-color: rgb(34, 35, 36);
  color: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 4px 2px #fade4b;
    margin: 0px;
  }
`;
