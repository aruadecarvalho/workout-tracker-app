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
import { selectUserTypes } from "../../store/user/user.selector";
import { addNameAndType } from "../../store/workout-data/workout-data.action";
import { addUserType } from "../../store/user/user.action";
import { selectWorkoutNameAndType } from "../../store/workout-data/workout-data.selector";

const NameTypeForm = () => {
  const dispatch = useDispatch();

  const workoutNameAndType = useSelector(selectWorkoutNameAndType);
  const types = useSelector(selectUserTypes);

  const [nameAndType, setNameAndType] = useState(workoutNameAndType);
  const [workoutName, setWorkoutName] = useState(workoutNameAndType.name);
  const [newType, setNewType] = useState({ name: "", color: "" });

  const [showModal, setShowModal] = useState(false);
  const [submitNewType, setSubmitNewType] = useState(false);
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [createNewTypeActive, setCreateNewTypeActive] = useState(false);

  useEffect(() => {
    setNameAndType(workoutNameAndType);
    setWorkoutName(workoutNameAndType.name);
  }, [workoutNameAndType]);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (event.target.name === "color") {
        setColorPickerActive(true);
      } else {
        setColorPickerActive(false);
      }
    });
  }, []);

  useEffect(() => {
    if (submitNewType) {
      dispatch(addUserType(newType));
      setSubmitNewType(false);
    }
  }, [submitNewType]);

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

  const handleNewType = (event) => {
    if (event.target.name) {
      const { name, value } = event.target;
      setNewType({ ...newType, [name]: value });
    }
    return;
  };

  const handleCreateNewType = () => {
    setCreateNewTypeActive(!createNewTypeActive);
  };

  const handleSubmitNewType = () => setSubmitNewType(true);

  const typeModalProps = {
    types,
    showModal,
    handleSetModal,
    handleSelectType,
    handleCreateNewType,
    newType,
    colorPickerActive,
    createNewTypeActive,
    handleNewType,
    handleSubmitNewType,
  };

  return (
    <NameTypeContainer>
      <SelectTypeContainer>
        <SelectTypeTitle>What are you up to?</SelectTypeTitle>
        <TypeContainer onClick={handleSetModal}>
          {types &&
            types.map((type, key) => {
              return <TypePreview color={type.color} key={key} />;
            })}
          <TypePreview color="#fff">
            <CreateTypeButton onClick={handleNewType} />
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
