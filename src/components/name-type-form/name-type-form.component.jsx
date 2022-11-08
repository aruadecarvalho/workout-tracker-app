import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
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
  TypeModalContainer,
  BackdropModal,
  TypeModalItem,
  CreateTypeButton,
  CreateTypeContainer,
  AddNewTypeButton,
} from "./name-type.form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
const NameTypeForm = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [nameAndType, setNameAndType] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [createNewTypeActive, setCreateNewTypeActive] = useState(false);
  const [submitNewType, setSubmitNewType] = useState(false);

  const [newType, setNewType] = useState({ name: "", color: "" });

  const dispatch = useDispatch();
  const workoutData = useSelector(selectWorkoutData);
  const workoutNameAndType = useSelector(selectWorkoutNameAndType);
  const types = useSelector(selectTypes);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setWorkoutName(value);
    setNameAndType({ ...nameAndType, [name]: value });
  };

  const handleSelectType = (type) => {
    setNameAndType({ ...nameAndType, type });
    setModal();
  };
  const handleNewType = (event) => {
    const { name, value } = event.target;
    setNewType({ ...newType, [name]: value });
  };

  const handleCreateNewType = () => {
    setCreateNewTypeActive(!createNewTypeActive);
  };

  const handleSubmitNewType = () => setSubmitNewType(true);

  useEffect(() => {
    if (submitNewType) {
      dispatch(addType(newType));
      setSubmitNewType(false);
    }
  }, [submitNewType]);

  useEffect(() => {
    dispatch(addNameAndType(nameAndType));
  }, [nameAndType]);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (event.target.name === "color") {
        setColorPickerActive(true);
      } else {
        setColorPickerActive(false);
      }
    });
  }, []);

  const setModal = () => {
    setShowModal(!showModal);
  };
  // tentar otimizar isso aqui, criando outros components
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
            <TypeModalContainer show={showModal}>
              {types.map((type, key) => {
                return (
                  <TypeModalItem
                    key={key}
                    onClick={() => handleSelectType(type)}
                  >
                    <TypePreview color={type.color} />
                    <p>{type.name}</p>
                  </TypeModalItem>
                );
              })}
              <TypeModalItem onClick={handleCreateNewType}>
                <TypePreview>
                  <CreateTypeButton onClick={handleNewType} />
                </TypePreview>
                <p>New type</p>
              </TypeModalItem>
              <CreateTypeContainer
                color={newType.color}
                isActive={colorPickerActive}
                createNewTypeActive={createNewTypeActive}
              >
                <div className="color-picker">
                  <input type="color" name="color" onChange={handleNewType} />
                </div>
                <input type="text" onChange={handleNewType} name="name" />
                <AddNewTypeButton
                  buttonType={BUTTON_TYPE_CLASSES.base}
                  onClick={handleSubmitNewType}
                >
                  Create Type
                </AddNewTypeButton>
              </CreateTypeContainer>
            </TypeModalContainer>
            <BackdropModal onClick={setModal} show={showModal} />
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
