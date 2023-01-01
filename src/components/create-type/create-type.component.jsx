import { useState, useEffect } from "react";

import { CreateTypeContainer, AddNewTypeButton } from "./create-type.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const CreateType = ({
  createNewTypeActive,
  handleNewType,
  handleSubmitNewType,
  newType,
}) => {
  const [colorPickerActive, setColorPickerActive] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (event.target.name === "color") {
        setColorPickerActive(true);
      } else {
        setColorPickerActive(false);
      }
    });
  }, []);

  return (
    <CreateTypeContainer
      color={newType.color}
      isActive={colorPickerActive}
      createNewTypeActive={createNewTypeActive}
    >
      <div>
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
  );
};

export default CreateType;
