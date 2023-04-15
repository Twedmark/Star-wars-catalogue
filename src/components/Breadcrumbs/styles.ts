import styled from "styled-components";

export const LinkContainer = styled.div<{
  props: boolean;
}>`
  & > a {
    pointer-events: ${(prop) => (prop.props ? "none" : "auto")};
  }
`;
