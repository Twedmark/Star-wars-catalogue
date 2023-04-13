import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f0f0f5;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  aspect-ratio: 3/5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }
`;
