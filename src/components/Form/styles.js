import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  
  form {
    width: 90%;
    display: flex;
    justify-content: center;
    padding: 100px 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;

    box-shadow: 1px 5px 9px 2px rgba(0, 0, 0, 0.4);
  }

  .finance-image {
      width: 150px;
      margin-right: 50px;
      margin-top: -40px;
      transform: rotate(-5deg);
    }
    
  .dollar-image {
    width: 120px;
    margin-left: 40px;
    margin-top: -20px;
  }

  .convert-image {
    width: 36px;
  }

  input, select {
    height: 30px;
    width: 300px;

    border-radius: 4px;
    border: 1px solid gray;
    padding: 0 8px;

    margin-right: 10px;
  }

  input:focus, select:focus {
    outline: 0;
    border: 1px solid lightblue;
    box-shadow: 1px 0px 2px rgb(41, 167, 69);
  }

  span {
    font-size: 18px;
    margin: 0 25px;
  }

  button {
    height: 30px;
    width: 100px;

    border-radius: 4px;
    border: 1px solid gray;
    background: rgb(41, 167, 69);
    color: white;
    font-weight: 700;
    cursor: pointer;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.9)
  }
`;