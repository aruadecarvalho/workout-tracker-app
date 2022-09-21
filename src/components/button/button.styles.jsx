import styled from "styled-components";

export const BaseButton = styled.button`
  margin-top: 1.8rem;
  font-weight: 600;
  color: #272729;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  box-shadow: 2.5px 2.5px 0px 0px rgba(0, 0, 0);
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #272729;
    color: #eff1f5;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #272729;
  color: #eff1f5;
  &:hover,
  &:active,
  &:focus {
    background-color: #fff;
    color: #272729;
  }
`;
