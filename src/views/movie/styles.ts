import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 6%;
  gap: 2rem;

  & > h1 {
    grid-column: span 2;
    justify-self: center;
    text-decoration: underline;
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
