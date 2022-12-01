import { CreateTypeContainer, AddNewTypeButton } from "./create-type.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const createType = ({
  newType,
  colorPickerActive,
  createNewTypeActive,
  handleNewType,
  handleSubmitNewType,
}) => {
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

export default createType;
