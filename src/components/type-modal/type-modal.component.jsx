import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  TypeModalContainer,
  BackdropModal,
  TypeModalItem,
  CreateTypeContainer,
  AddNewTypeButton,
} from "./type-modal.styles";

import {
  TypePreview,
  CreateTypeButton,
} from "../name-type-form/name-type.form.styles";
const TypeModal = ({
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
}) => {
  return (
    <>
      <TypeModalContainer show={showModal}>
        {types.map((type, key) => {
          return (
            <TypeModalItem key={key} onClick={() => handleSelectType(type)}>
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
  );
};

export default TypeModal;
