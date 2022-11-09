import styled from "styled-components";
import Button from "../button/button.component";

export const TypeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  width: 14.4rem;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  padding: 1.8rem 1.8rem;
  top: -0.4rem;
  right: 0;
  transition: all 0.3s;
  z-index: 999;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  input {
    width: 100%;
  }
`;

export const TypeModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 0.4rem;
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.25);
`;

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
