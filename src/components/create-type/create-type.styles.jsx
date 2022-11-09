import styled from "styled-components";
import Button from "../button/button.component";

export const CreateTypeContainer = styled.div`
  display: flex;
  position: relative;
  opacity: ${(props) => (props.createNewTypeActive ? "1" : "0")};
  visibility: ${(props) => (props.createNewTypeActive ? "visible" : "hidden")};
  margin-bottom: ${(props) => (props.createNewTypeActive ? "2.4rem" : "0")};
  transition: all 0.3s;
  div {
    background-color: ${(props) => (props.isActive ? "#fff" : props.color)};
    width: 4.4rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);

    margin-left: 0.1rem;
    margin-right: 0.5rem;
    z-index: 99;
    @media (max-width: 500px) {
      width: 6rem;
      height: 3.4rem;
      margin-left: 0.16rem;
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
  bottom: -115%;
  right: -30%;
  @media (max-width: 500px) {
    transform: scale(0.6);
  }
`;
