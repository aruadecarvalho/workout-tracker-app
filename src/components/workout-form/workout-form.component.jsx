import { useState } from "react";
import {
  FormContainer,
  NameSetNumberContainer,
  WeightRepsContainer,
  WeightRepsInputDiv,
  ErrorMessage,
} from "./workout-form.styles.jsx";
import Button from "../button/button.component";
import {
  addData,
  addFormFieldsSetAndName,
  addFormFieldsWeightAndRep,
  clearFormFields,
  setEditing,
  setEditedData,
} from "../../store/workout-data/workout-data.action";
import { useSelector, useDispatch } from "react-redux";
import {
  selectEditing,
  selectFormFields,
  selectWorkoutData,
} from "../../store/workout-data/workout-data.selector";

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formFields = useSelector(selectFormFields);
  const workoutData = useSelector(selectWorkoutData);
  const editing = useSelector(selectEditing);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    if (!formFields.exerciseName || !formFields.setsNumber) {
      return "Please add an exercise name and number of sets";
    }
    for (let i = 0; i < formFields.setsNumber; i++) {
      const sets = formFields.sets;
      const keyValue = `set${i}`;
      if (!sets[keyValue]) {
        return "Please add a weight and reps for each set";
      }
      const { weight, reps } = sets[keyValue];
      if (!weight || !reps) {
        return "Please add a weight and reps for each set";
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "setsNumber") {
      if (isNaN(value) || value > 9) return;
      dispatch(addFormFieldsSetAndName(name, value));
    } else if (name === "exerciseName") {
      dispatch(addFormFieldsSetAndName(name, value));
    } else {
      const { id } = event.target;
      dispatch(addFormFieldsWeightAndRep(name, value, id));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }
    setError("");
    if (editing.isEditing) {
      dispatch(setEditedData(workoutData, formFields, editing.id));
      dispatch(setEditing(false));
      dispatch(clearFormFields());
      setIsSubmitted(false);
      return;
    }
    dispatch(addData(workoutData, formFields));
    dispatch(clearFormFields());
    setIsSubmitted(false);
  };

  const handleNumberInput = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <NameSetNumberContainer>
          <input
            type="text"
            name="exerciseName"
            value={formFields.exerciseName}
            onChange={handleChange}
            placeholder="Exercise name"
          />
          <input
            type="text"
            name="setsNumber"
            onChange={handleChange}
            value={formFields.setsNumber}
            onKeyPress={handleNumberInput}
            placeholder="Sets"
          />
        </NameSetNumberContainer>
        <WeightRepsContainer>
          {formFields.setsNumber &&
            [...Array(parseInt(formFields.setsNumber))].map((x, key) => (
              <WeightRepsInputDiv
                key={key}
                measure={formFields.sets[`set${key}`]?.weight ? "kg" : ""}
              >
                <input
                  onChange={handleChange}
                  name="weight"
                  id={`set${key}`}
                  value={formFields.sets[`set${key}`]?.weight || ""}
                  onKeyPress={handleNumberInput}
                  placeholder={`${key + 1}° kg`}
                />
                <input
                  onChange={handleChange}
                  name="reps"
                  id={`set${key}`}
                  value={formFields.sets[`set${key}`]?.reps || ""}
                  onKeyPress={handleNumberInput}
                  placeholder="Reps"
                />
              </WeightRepsInputDiv>
            ))}
          {error && isSubmitted && <ErrorMessage>{error}</ErrorMessage>}
        </WeightRepsContainer>
        <Button type="submit">Save</Button>
      </FormContainer>
    </div>
  );
};

export default WorkoutForm;
