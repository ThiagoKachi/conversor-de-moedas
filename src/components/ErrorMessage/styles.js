import styled from 'styled-components';

export const ErrorMessageReq = styled.div`
  .error-message {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-top: 20px;
    font-size: 30px;
    color: #f24220;
    letter-spacing: 1px;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2)
  }

  img {
    margin-left: 16px;
    margin-top: 18px;
    width: 30px;
    color: red;
  }
`;