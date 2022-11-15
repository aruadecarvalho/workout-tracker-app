import styled from "styled-components";
import { inputStyle } from "../../utils/mixins/mixins.styles";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
