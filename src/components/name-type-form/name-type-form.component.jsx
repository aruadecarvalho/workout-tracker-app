import { useEffect, useState } from "react";

import {
  NameTypeContainer,
  WorkoutNameInput,
  SelectTypeTitle,
  SelectTypeContainer,
  TypePreview,
  TypeContainer,
  CreateTypeButton,
} from "./name-type.form.styles";

import TypeModal from "../type-modal/type-modal.component";

import { useSelector, useDispatch } from "react-redux";
import { addNameAndType } from "../../store/workout-data/workout-data.action";
import { selectWorkoutNameAndType } from "../../store/workout-data/workout-data.selector";

const NameTypeForm = () => {
  const dispatch = useDispatch();

  const workoutNameAndType = useSelector(selectWorkoutNameAndType);

  // detach name and type
  // NAME is set in name type form
  // TYPE is set in type modal
  // Create a reducer for type that handle all of the type actions
  // USER REDUCER should only store the fechted data from firebase
  const [nameAndType, setNameAndType] = useState(workoutNameAndType);
  const [workoutName, setWorkoutName] = useState(workoutNameAndType.name);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setNameAndType(workoutNameAndType);
    setWorkoutName(workoutNameAndType.name);
  }, [workoutNameAndType]);

  useEffect(() => {
    dispatch(addNameAndType(nameAndType));
  }, [nameAndType]);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setWorkoutName(value);
    setNameAndType({ ...nameAndType, [name]: value });
  };

  const handleSetModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectType = (type) => {
    setNameAndType({ ...nameAndType, type });
    handleSetModal();
  };

  const typeModalProps = {
    showModal,
    handleSetModal,
    handleSelectType,
  };

  return (
    <NameTypeContainer>
      <SelectTypeContainer>
        <SelectTypeTitle>What are you up to?</SelectTypeTitle>
        <TypeContainer onClick={handleSetModal}>
          {nameAndType.type && (
            <>
              <p>{nameAndType.type.name}</p>
              <TypePreview color={nameAndType.type.color} />
            </>
          )}
          <TypePreview color="#fff">
            <CreateTypeButton />
          </TypePreview>
        </TypeContainer>
        <>
          <TypeModal {...typeModalProps} />
        </>
      </SelectTypeContainer>
      <WorkoutNameInput
        type="text"
        name="name"
        value={workoutName}
        onChange={handleNameChange}
        placeholder="Workout name"
      />
    </NameTypeContainer>
  );
};

export default NameTypeForm;
