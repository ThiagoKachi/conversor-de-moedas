import styled from 'styled-components';

export const ContainerModal = styled.section`
  .title-button-close {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 30px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  button img {
    width: 24px;
  }

  h2 {
    font-size: 30px;
  }

  .converted-values {
    background: rgb(240, 240, 240);
    padding: 20px 30px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }

  .new-convert-button {
    position: absolute;
    left: 72%;
    bottom: 6%;

    padding: 8px;
    border: none;
    border-radius: 4px;
    background: rgb(41, 167, 69);
    color: white;
    font-weight: 700;
    cursor: pointer;

    transition: filter 0.3s;
  }

  .new-convert-button:hover {
    filter: brightness(0.9);
  }
`;

