import styled from "@emotion/styled";

const Input = styled.input`
  outline: none;
  background-color: #d9d9d9;
  border: 2px solid black;
  border-radius: 17px;
  font-family:'Montserrat', sans-serif;
  padding: 0.8rem;
  font-size: 1.1rem;
  width: 90%;
  
  :focus {
    border-color: red;
  
  }
`;

export default Input;
