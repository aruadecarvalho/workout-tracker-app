import { css } from "styled-components";

export const hideComponent = css`
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const componentBoxShadow = css`
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
`;

export const contourStyle = css`
  ${componentBoxShadow}
  border-radius: 4px;
`;

export const roundContourStyle = css`
  ${componentBoxShadow}
  border-radius: 50%;
`;
