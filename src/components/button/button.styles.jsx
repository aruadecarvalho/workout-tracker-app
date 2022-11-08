import styled from "styled-components";

export const BaseButton = styled.button`
  margin-top: 1.8rem;
  font-weight: 600;
  color: #272729;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  padding: 0.8rem 1.6rem;
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
