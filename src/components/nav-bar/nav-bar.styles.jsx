import { FiLogOut, FiTag } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";

import styled from "styled-components";

export const NavBarContiner = styled.div`
  padding: 2rem 0rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const SignOutButton = styled(FiLogOut)`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const TypesButton = styled(FiTag)`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const WorkoutsButton = styled(BiDumbbell)`
  font-size: 2.2rem;
  &:hover {
    cursor: pointer;
  }
`;
