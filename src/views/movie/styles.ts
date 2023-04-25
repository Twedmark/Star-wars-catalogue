import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  gap: 2rem;

  & > h1 {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    & > h1 {
      grid-column: span 1;
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;

  /* & > p {
    border-top: 1px solid darkgray;
    margin: 0;
    padding: 1rem 0;
  } */
`;

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
