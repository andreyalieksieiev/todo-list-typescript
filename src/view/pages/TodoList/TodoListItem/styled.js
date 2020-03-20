import styled from 'styled-components';

export const TodoListStyle = styled.li`
  background: rgb(222, 236, 195);
  max-width: 430px;
  width: 100%;
  height: 70px;
  margin: 30px 0px;
  padding: 10px;
  border-radius: 4px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    background: rgb(240, 191, 28);
    height: 30px;
    border-radius: 4px;
  }
`;

export const P = styled.p`
  text-decoration: ${(props) => props.complete ? 'line-through' : 'none'};
  color: ${(props) => props.complete ? 'red' : 'black'};
  font-weight: ${(props) => props.complete ? 'bold' : null};
`;
