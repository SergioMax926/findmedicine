import styled from "@emotion/styled";

const Button = styled.button`
  background-color: white;
  border: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 5px 10px;
  transform: scale(1.1);
  transition: transform 1s;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
 
  padding: 1em 1em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover,
  :focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #e74c3c inset;
  }
  margin: 0.2em;
  height: auto;
  max-width: 400px;
  max-height: 300px;
`;
export default Button;
