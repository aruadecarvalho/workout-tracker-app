import styled from "styled-components";
import { containerWidth } from "../../utils/mixins/mixins.styles";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  ${containerWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
