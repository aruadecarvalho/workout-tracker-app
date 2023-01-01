import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addUserType } from "../../store/user/user.action";
import { selectUserTypes } from "../../store/user/user.selector";

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

const TypeModal = ({ showModal, handleSetModal, handleSelectType }) => {
  const dispatch = useDispatch();
  const types = useSelector(selectUserTypes);

  const [newType, setNewType] = useState({ name: "", color: "" });
  const [createNewTypeActive, setCreateNewTypeActive] = useState(false);
  const [submitNewType, setSubmitNewType] = useState(false);

  useEffect(() => {
    if (submitNewType) {
      dispatch(addUserType(newType, types));
      setSubmitNewType(false);
    }
  }, [submitNewType]);

  const handleCreateNewType = () => {
    setCreateNewTypeActive(!createNewTypeActive);
  };

  const handleNewType = (event) => {
    if (event.target.name) {
      const { name, value } = event.target;
      setNewType({ ...newType, [name]: value });
    }
    return;
  };

  const handleSubmitNewType = () => setSubmitNewType(true);

  const createTypeProps = {
    createNewTypeActive,
    handleNewType,
    handleSubmitNewType,
    newType,
  };

  return (
    <>
      <TypeModalContainer show={showModal}>
        {/* maybee create a component for this and do the conditional render inside it */}
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
