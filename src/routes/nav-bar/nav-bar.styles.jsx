import { FiHome, FiLogOut, FiTag } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";

import { containerWidth, iconStyle } from "../../utils/mixins/mixins.styles";

import styled from "styled-components";

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

export const SignOutButton = styled(FiLogOut)`
  ${iconStyle}
`;

export const HomeButton = styled(FiHome)`
  ${iconStyle}
`;
export const TypesButton = styled(FiTag)`
  ${iconStyle}
`;

export const WorkoutsButton = styled(BiDumbbell)`
  font-size: 2.2rem;
  &:hover {
    cursor: pointer;
  }
`;
