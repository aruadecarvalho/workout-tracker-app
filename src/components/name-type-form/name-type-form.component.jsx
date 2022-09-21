import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectWorkoutData } from "../../store/workout-data/workout-data.selector";
import { addNameType } from "../../store/workout-data/workout-data.action";
import {
  WorkoutNameInput,
  SelectTypeTitle,
  SelectTypeContainer,
  TypePreview,
  TypeContainer,
  TypeModalContainer,
} from "./name-type.form.styles";
const defaultFormFields = {
  workoutName: "",
};

const NameTypeForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const workoutData = useSelector(selectWorkoutData);

  const handleChange = (event) => {
    // dispatch(addNameType(workoutData, formFields));
    const { name, value } = event.target;
    if (name === "workoutName") {
      setFormFields({ ...formFields, [name]: value });
    } else {
      setFormFields({
        ...formFields,
        workoutType: { ...formFields.workoutType, [name]: value },
      });
    }
  };

  const typesTest = [
    { name: "test1", color: "#123" },
    { name: "test2", color: "#345" },
    { name: "test3", color: "#678" },
  ];

  const setModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <SelectTypeContainer>
        <SelectTypeTitle>What are you up to?</SelectTypeTitle>
        <TypeContainer onClick={setModal}>
          {typesTest.map((type, key) => {
            return <TypePreview color={type.color} key={key} />;
          })}
          <TypePreview color="#000" />
        </TypeContainer>
        {showModal && (
          <TypeModalContainer>
            {typesTest.map((type, key) => {
              return <div key={key}>{type.name}</div>;
            })}
            {/* criar um preview que sempre aparece 'editar' ai ao clicar abre um menu para escolher o nome e a cor do novo tipo, cria um novo type object no workout data com um nome e uma cor e da o dispatch*/}
            <input type="color" name="typeColor" onChange={handleChange} />
            <button onClick={setModal}>fecha</button>
          </TypeModalContainer>
        )}
      </SelectTypeContainer>

      <WorkoutNameInput
        type="text"
        name="workoutName"
        value={formFields.workoutName}
        onChange={handleChange}
        placeholder="Workout name"
      />
    </div>
  );
};

export default NameTypeForm;
