import styled from "styled-components";
import { inputStyle, containerWidth } from "../../utils/mixins/mixins.styles";

export const FormContainer = styled.form`
  ${containerWidth}
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  padding: 1.8rem 1.8rem;
  z-index: 1;
  input {
    ${inputStyle}
    box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const NameSetNumberContainer = styled.div`
  display: flex;
  gap: 5rem;
  input:nth-child(1) {
    width: 60%;
  }
  input:nth-child(2) {
    width: 20%;
    transform: translateX(-1rem);
  }
`;

export const WeightRepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WeightRepsInputDiv = styled.div.attrs((props) => props)`
  display: flex;
  margin-top: 1.8rem;
  width: 14rem;
  gap: 2rem;
  position: relative;
  input {
    width: 100%;
  }
  &::after {
    content: "${(props) => props.measure}";
    font-size: 1.2rem;
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-100%, -50%);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  font-weight: 500;
  position: absolute;
  bottom: 0.2rem;
`;
