import styled from "styled-components";

export const FormContainer = styled.form`
  width: 35rem;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;
  padding: 1.8rem 1.8rem;
  border-radius: 10px;
  z-index: 1;
  input {
    border: none;
    padding-left: 0.8rem;
    border-radius: 4px;
    font-size: 1.4rem;
    box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
    height: 3.2rem;
  }
  input::placeholder {
    font-weight: 600;
    opacity: 0.35;
    font-size: 1.4rem;
  }
  input:focus {
    outline: none;
  }
`;

export const NameSetNumberContainer = styled.div`
  display: flex;
  gap: 5rem;
  input:nth-child(1) {
    width: 60%;
  }
  input:nth-child(2) {
    width: 20%;
    transform: translateX(-1rem);
  }
`;

export const WeightRepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WeightRepsInputDiv = styled.div`
  display: flex;
  margin-top: 1.8rem;
  width: 14rem;
  gap: 2rem;
  position: relative;
  input {
    width: 100%;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  font-weight: 500;
  position: absolute;
  bottom: 0.2rem;
`;
