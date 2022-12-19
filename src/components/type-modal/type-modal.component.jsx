import {
  TypeModalContainer,
  BackdropModal,
  TypeModalItem,
  TypeModalItemContainer,
} from "./type-modal.styles";
import {
  TypePreview,
  CreateTypeButton,
} from "../name-type-form/name-type.form.styles";

import CreateType from "../create-type/create-type.component";

const TypeModal = ({
  types,
  showModal,
  handleSetModal,
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
        {types && (
          <TypeModalItemContainer>
            {types.map((type, index) => {
              return (
                <TypeModalItem
                  key={index}
                  onClick={() => handleSelectType(type)}
                >
                  <TypePreview color={type.color} />
                  <p>
                    {type && type.name.length > 8
                      ? `${type.name.slice(0, 8)}...`
                      : type.name}
                  </p>
                </TypeModalItem>
              );
            })}
          </TypeModalItemContainer>
        )}
        <TypeModalItem onClick={handleCreateNewType}>
          <TypePreview>
            <CreateTypeButton onClick={handleNewType} />
          </TypePreview>
          <p>New type</p>
        </TypeModalItem>
        <CreateType {...createTypeProps} />
      </TypeModalContainer>
      <BackdropModal onClick={handleSetModal} show={showModal} />
    </>
  );
};

export default TypeModal;
