import { css } from "styled-components";
import styled from "styled-components";
const componentBoxShadow = css`
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2) !important;
  -webkit-appearance: none !important;
`;

export const hideComponent = css`
  opacity: ${(props) => (props.show ? "1" : "0")};
  display: ${(props) => (props.show ? "block" : "none")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
`;

export const iconStyle = css`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const slideInEliptic = css`
  animation: slideInEliptic 0.3s ease-in-out;
  @keyframes slideInEliptic {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const contourStyle = css`
  ${componentBoxShadow}
  border-radius: 4px;
`;

export const roundContourStyle = css`
  ${componentBoxShadow}
  border-radius: 50%;
`;

export const inputStyle = css`
  ${contourStyle}
  padding-left: 0.8rem;
  font-size: 1.4rem;
  height: 3.2rem;
  border: none;
  &::placeholder {
    font-weight: 600;
    opacity: 0.35;
    font-size: 1.4rem;
  }
  &:focus {
    outline: none;
  }
`;

export const containerWidth = css`
  width: 35rem;
`;
