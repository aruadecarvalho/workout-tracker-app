import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import {
  roundContourStyle,
  inputStyle,
} from "../../utils/mixins/mixins.styles";

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
  align-items: center;
  position: absolute;
  right: 1rem;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 0.5rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const TypePreview = styled.div.attrs((props) => props)`
  ${roundContourStyle}
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  margin-right: -1rem;
  position: relative;
`;

export const WorkoutNameInput = styled.input`
  ${inputStyle}
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
  &:hover {
    cursor: pointer;
  }
`;
