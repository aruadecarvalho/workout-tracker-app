import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectWorkoutData,
  selectWorkoutNameAndType,
} from "../../store/workout-data/workout-data.selector";
import { selectTypes } from "../../store/types/types.selector";
import { addType } from "../../store/types/types.actions";
import { addNameAndType } from "../../store/workout-data/workout-data.action";
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

const NameTypeForm = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [nameAndType, setNameAndType] = useState({});
  const [submitNewType, setSubmitNewType] = useState(false);

  const types = useSelector(selectTypes);
  const [showModal, setShowModal] = useState(false);
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [createNewTypeActive, setCreateNewTypeActive] = useState(false);
  const [newType, setNewType] = useState({ name: "", color: "" });

  const dispatch = useDispatch();
  const workoutData = useSelector(selectWorkoutData);
  const workoutNameAndType = useSelector(selectWorkoutNameAndType);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setWorkoutName(value);
    setNameAndType({ ...nameAndType, [name]: value });
  };

  const setModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectType = (type) => {
    setNameAndType({ ...nameAndType, type });
    setModal();
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
    setModal,
    handleSelectType,
    handleNewType,
    handleCreateNewType,
    handleSubmitNewType,
    createNewTypeActive,
    colorPickerActive,
    newType,
  };

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
      dispatch(addType(newType));
      setSubmitNewType(false);
    }
  }, [submitNewType]);

  useEffect(() => {
    dispatch(addNameAndType(nameAndType));
  }, [nameAndType]);

  return (
    <NameTypeContainer>
      <SelectTypeContainer>
        <SelectTypeTitle>What are you up to?</SelectTypeTitle>
        <TypeContainer onClick={setModal}>
          {types &&
            types.map((type, key) => {
              return <TypePreview color={type.color} key={key} />;
            })}
          <TypePreview color="#fff">
            <CreateTypeButton onClick={handleNewType} />
          </TypePreview>
        </TypeContainer>
        {types && (
          <>
            <TypeModal {...typeModalProps} />
          </>
        )}
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
