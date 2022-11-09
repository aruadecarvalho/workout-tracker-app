import styled from "styled-components";
import { FiEdit } from "react-icons/fi";

export const NameTypeContainer = styled.div`
  margin-bottom: 2.2rem;
  input {
    border: none;
  }
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

export const TypePreview = styled.div.attrs((props) => props)`
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);

  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: -1rem;
  position: relative;
`;

export const WorkoutNameInput = styled.input`
  padding-left: 0.8rem;
  border-radius: 4px;
  font-size: 1.4rem;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
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
