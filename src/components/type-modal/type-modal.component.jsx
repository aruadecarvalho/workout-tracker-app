import {
  TypeModalContainer,
  BackdropModal,
  TypeModalItem,
} from "./type-modal.styles";
import {
  TypePreview,
  CreateTypeButton,
} from "../name-type-form/name-type.form.styles";

import CreateType from "../create-type/create-type.component";

const TypeModal = ({
  types,
  showModal,
  setModal,
  handleSelectType,
  handleNewType,
  handleCreateNewType,
  newType,
  colorPickerActive,
  createNewTypeActive,
  handleSubmitNewType,
}) => {
  const createTypeProps = {
    newType,
    colorPickerActive,
    createNewTypeActive,
    handleNewType,
    handleSubmitNewType,
  };

  return (
    <>
      <TypeModalContainer show={showModal}>
        {types.map((type, key) => {
          return (
            <TypeModalItem key={key} onClick={() => handleSelectType(type)}>
              <TypePreview color={type.color} />
              <p>
                {type.name.length > 8
                  ? `${type.name.slice(0, 8)}...`
                  : type.name}
              </p>
            </TypeModalItem>
          );
        })}
        <TypeModalItem onClick={handleCreateNewType}>
          <TypePreview>
            <CreateTypeButton onClick={handleNewType} />
          </TypePreview>
          <p>New type</p>
        </TypeModalItem>
        <CreateType {...createTypeProps} />
      </TypeModalContainer>
      <BackdropModal onClick={setModal} show={showModal} />
    </>
  );
};

export default TypeModal;
