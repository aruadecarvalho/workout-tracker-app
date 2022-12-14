import styled from "styled-components";
import {
  contourStyle,
  slideInEliptic,
  iconStyle,
} from "../../utils/mixins/mixins.styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const WorkoutItem = styled.div`
  ${contourStyle}
  ${slideInEliptic}
  width: 45%;
  font-size: 1.4rem;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.2rem;
  p {
    color: #fff;
  }
  div {
    display: flex;
    gap: 1rem;
  }
`;

export const WorkoutItemTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const WorkoutItemDelete = styled(FiTrash2)`
  ${iconStyle}
  font-size: 1.6rem;
  color: #fff;
`;

export const WorkoutItemEdit = styled(FiEdit)`
  ${iconStyle};
  font-size: 1.6rem;
  color: #fff;
`;
