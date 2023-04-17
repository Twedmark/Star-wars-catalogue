import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(179, 179, 179);
  max-width: 8rem;
  padding: 0.5rem;
  border: 1px solid #f5f5f5;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgb(117, 117, 117);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
