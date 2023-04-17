import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  width: 100%;
`;

export const LinkContainer = styled.div<{
  props: boolean;
}>`
  & > ul > span {
    margin: 0.1rem;
  }
  & > ul {
    margin: 0;
    padding: 0;
  }
  & > ul > a {
    pointer-events: ${(prop) => (prop.props ? "none" : "auto")};
  }
`;
