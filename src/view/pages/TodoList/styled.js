import styled from 'styled-components';

export const TodoListForm = styled.div`
  padding: 50px;
  max-width: 450px;
  width: 100%;
  margin: auto;
`;

export const TodoListComponent = styled.div`
  background: rgb(79, 150, 243);
  max-width: 450px;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & input{
    height: 30px;
    max-width: 300px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
  }
  & button {
    height: 35px;
    max-width: 70px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    background: blue;
    color: white;
  }
`;

export const Ul = styled.div`
  max-width: 450px;
`;