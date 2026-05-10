import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 800px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FormRow = styled.div`
  grid-column: span 2;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #333;
  }

  &:nth-child(2) {
    background: #fff;
    color: #000;
  }
`;
