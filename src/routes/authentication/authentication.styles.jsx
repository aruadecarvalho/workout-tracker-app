import styled from "styled-components";
import { inputStyle } from "../../utils/mixins/mixins.styles";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -5rem auto;
  height: 100vh;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      ${inputStyle}
      margin-bottom: 1.6rem;
    }
    button {
      width: 100%;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  transform: translateY(125%);
  p:first-letter {
    text-transform: uppercase;
  }
`;
