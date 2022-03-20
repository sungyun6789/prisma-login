import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1000px;
  height: 100vh;
  margin: 0 auto;

  span {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 50px;

  padding: 0 20px;
  margin-bottom: 50px;

  border: 1px solid #f0f0f0;
  border-radius: 10px;

  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.article`
  display: flex;
  justify-content: center;

  button {
    width: 200px;
    height: 50px;

    color: white;
    background-color: #64b5f6;

    border: none;
    border-radius: 10px;

    font-size: 17px;

    transition: 0.3s;
    :hover {
      background-color: #2196f3;
    }
    cursor: pointer;
  }
`;
