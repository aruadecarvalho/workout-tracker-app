import { FiHome, FiLogOut, FiTag } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";

import { containerWidth } from "../../utils/mixins/mixins.styles";

import styled, { css } from "styled-components";

export const NavBarContiner = styled.div`
  ${containerWidth}
  padding: 2rem 0rem;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const buttonStyle = css`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const SignOutButton = styled(FiLogOut)`
  ${buttonStyle}
`;

export const HomeButton = styled(FiHome)`
  ${buttonStyle}
`;
export const TypesButton = styled(FiTag)`
  ${buttonStyle}
`;

export const WorkoutsButton = styled(BiDumbbell)`
  font-size: 2.2rem;
  &:hover {
    cursor: pointer;
  }
`;
