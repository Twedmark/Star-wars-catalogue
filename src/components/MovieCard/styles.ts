import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  background: #f0f0f5;
  padding: 1rem;
  border-radius: 1rem;
  aspect-ratio: 3.2/5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
