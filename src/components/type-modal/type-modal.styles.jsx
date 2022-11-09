import styled from "styled-components";

export const TypeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  width: 14.4rem;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  padding: 1.8rem 1.8rem;
  top: -0.4rem;
  right: 0;
  transition: all 0.3s;
  z-index: 999;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  input {
    width: 100%;
  }
`;

export const TypeModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 0.4rem;
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.25);
`;
