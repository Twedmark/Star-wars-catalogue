import styled from "styled-components";

export const BreadcrumbContainer = styled.div<{
  props: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  width: 100%;

  & > a {
    margin-left: 0.2rem;
    text-decoration: none;
  }
`;
