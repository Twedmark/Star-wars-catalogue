import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: #d5d5d5;
  padding: 1rem;
  border-radius: 1rem;
  aspect-ratio: 3.5/5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
