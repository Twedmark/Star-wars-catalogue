import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background-color: rgb(34, 35, 36);

  & > a {
    color: rgb(179, 179, 179);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #f5f5f5;
    }
  }
`;
