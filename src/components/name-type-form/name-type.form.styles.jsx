import styled from "styled-components";

export const SelectTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TypeContainer = styled.div`
  display: flex;
`;

export const TypeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const TypePreview = styled.div.attrs((props) => props)`
  border: 1.5px solid #000;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: -1rem;
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
  font-size: 1.6rem;
  font-weight: 600;
`;
