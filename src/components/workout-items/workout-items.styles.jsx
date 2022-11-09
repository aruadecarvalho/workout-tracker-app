import styled from "styled-components";
import { contourStyle } from "../../utils/mixins/mixins.styles";

export const WorkoutItem = styled.div`
  ${contourStyle}
  width: 45%;
  font-size: 1.4rem;
  background-color: #fff;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.2rem;
`;

export const WorkoutItemTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;
