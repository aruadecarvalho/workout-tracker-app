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

export const SlideLeftAnimation = css`
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-60%);
      opacity: 0.3;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  animation: slideInFromLeft 0.3s cubic-bezier(0.48, 0.32, 0.6, 0.83);
`;
