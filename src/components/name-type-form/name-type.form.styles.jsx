import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import Button from "../button/button.component";

export const NameTypeContainer = styled.div`
  margin-bottom: 2.2rem;
`;

export const SelectTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 1.2rem 0rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
`;

export const TypeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  width: 14.4rem;
  padding: 1.8rem 1.8rem;
  top: -0.4rem;
  right: 0;
  z-index: 99;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: 2.5px 2.5px 0px 0px rgba(0, 0, 0);
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
  background-color: rgba(0, 0, 0, 0.25);
`;

export const TypePreview = styled.div.attrs((props) => props)`
  border: 1.5px solid #272729;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: -1rem;
  position: relative;
`;

export const WorkoutNameInput = styled.input`
  padding-left: 0.8rem;
  border-radius: 6px;
  font-size: 1.4rem;
  border: 1px solid #000;
  box-shadow: 2.5px 2.5px 0px 0px rgba(0, 0, 0);
  height: 3.2rem;
  &::placeholder {
    font-weight: 600;
    opacity: 0.35;
    font-size: 1.4rem;
  }
  &:focus {
    outline: none;
  }
`;

export const SelectTypeTitle = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  color: #272729;
`;

export const CreateTypeButton = styled(FiEdit)`
  font-size: 1.3rem;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
`;

export const CreateTypeContainer = styled.div`
  display: flex;
  position: relative;
  opacity: ${(props) => (props.createNewTypeActive ? "1" : "0")};
  margin-bottom: ${(props) => (props.createNewTypeActive ? "1.8rem" : "0")};
  transition: all 0.3s;
  .color-picker {
    background-color: ${(props) => (props.isActive ? "#fff" : props.color)};
    width: 4.4rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid #000;
    margin-left: 0.1rem;
    margin-right: 0.5rem;
    z-index: 99;
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
`;
