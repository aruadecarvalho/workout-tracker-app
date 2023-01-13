import {
  WorkoutPreviewContainer,
  TypeContainer,
} from "./workout-preview.styles";
import { TypePreview } from "../name-type-form/name-type.form.styles";
import { useNavigate } from "react-router-dom";
const WorkoutPreview = ({ workoutInfo }) => {
  const navigate = useNavigate();
  const {
    nameAndType: { name, type },
    time,
    id,
  } = workoutInfo;

  const handleNavigateToWorkout = () => {
    navigate(`/workouts/${id}`);
  };
  return (
    <WorkoutPreviewContainer onClick={handleNavigateToWorkout}>
      <h2>{name}</h2>
      <TypeContainer>
        <p>{type.name}</p>
        <TypePreview color={type.color} />
        <span>{time}</span>
      </TypeContainer>
    </WorkoutPreviewContainer>
  );
};

export default WorkoutPreview;
