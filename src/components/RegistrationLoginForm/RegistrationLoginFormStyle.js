import styled from 'styled-components';

export const RegistrationLoginFormStyle = styled.form`
  border: 1px solid black;
  border-radius: 20px;
  max-height: 300px;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 20px;
  row-gap: 40px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  /* max-width: 95%; */
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(209, 188, 138, 0.7);
  /* label {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  } */
  .label-container {
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: inline-block;
  }

  label {
    position: absolute;
    left: 8px;
    bottom: 50%;
    transition: 250ms linear;
    transform: translate(0, 50%);
    font-size: 14px;
    color: blue;
  }

  input:focus + label {
    transform: translateY(-100%);
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-100%);
  }

  input {
    border-radius: 8px;
    padding-left: 10px;
    height: 20px;
  }

  input::placeholder {
    opacity: 0;
  }

  button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;
    background-color: blue;
    color: white;
    transition: 250ms linear;
    column-gap: 8px;
  }

  button:hover,
  button:focus {
    background-color: orange;
  }

  button[disabled] {
    background-color: gray;
  }
`;