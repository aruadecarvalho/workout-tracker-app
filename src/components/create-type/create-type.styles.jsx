import styled from "styled-components";
import Button from "../button/button.component";
import { roundContourStyle } from "../../utils/mixins/mixins.styles";

export const CreateTypeContainer = styled.div`
  display: flex;
  position: relative;
  opacity: ${(props) => (props.createNewTypeActive ? "1" : "0")};
  visibility: ${(props) => (props.createNewTypeActive ? "visible" : "hidden")};
  margin-bottom: ${(props) => (props.createNewTypeActive ? "2.4rem" : "0")};
  transition: all 0.3s;
  div {
    ${roundContourStyle}
    background-color: ${(props) => (props.isActive ? "#fff" : props.color)};
    width: 4.4rem;
    height: 3rem;
    margin-left: 0.1rem;
    margin-right: 0.5rem;
    z-index: 99;
    @media (max-width: 500px) {
      width: 6rem;
      height: 3.4rem;
      margin-left: 0.16rem;
    }
    @media (min-width: 700px) {
      width: 3.6rem;
      height: 2.4rem;
      margin-left: 0.08rem;
    }
  }
  input[type="color"] {
    opacity: 0;
  }
  input[type="text"] {
    width: 100%;
    height: 2.5rem;
    font-size: 1.4rem;
    border: none;
    border-bottom: 1px solid #00000090;
    &:focus {
      outline: none;
    }
  }
`;

export const AddNewTypeButton = styled(Button)`
  position: absolute;
  width: 15rem;
  transform: scale(0.7);
  bottom: -225%;
  right: -30%;
  @media (max-width: 700px) {
    bottom: -200%;
  }
  @media (max-width: 500px) {
    bottom: -180%;
  }
`;
