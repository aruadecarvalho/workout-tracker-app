import styled from "styled-components";
import { contourStyle } from "../../utils/mixins/mixins.styles";
export const WorkoutPreviewContainer = styled.div`
  ${contourStyle}
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.2rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  span {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
`;
