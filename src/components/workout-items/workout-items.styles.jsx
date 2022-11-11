import styled, { css } from "styled-components";
import { contourStyle, slideInEliptic } from "../../utils/mixins/mixins.styles";

export const WorkoutItem = styled.div`
  ${contourStyle}
  ${slideInEliptic}
  width: 45%;
  font-size: 1.4rem;
  background-color: #1e1e1e;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.2rem;
  p {
    color: #fff;
  }
`;

export const WorkoutItemTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;
