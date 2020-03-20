import React from 'react';
import { string, func, boolean } from 'prop-types';

import { Input } from '../../component/Input';
import { Button } from '../../component/Button';
import { TodoListStyle, P } from './styled';


export const TodoListItem = ({ title, id, deleteTodo, setCheckedTodo, complete }) => (
  <TodoListStyle>
    <Input type="checkbox"  
      onChange={setCheckedTodo} 
      complete={complete} 
      id={id}
    />
    <P complete={complete}>
      {title}
    </P>
    <Button name="remove" onClick={() => deleteTodo(id)} />
  </TodoListStyle>
);

TodoListItem.propsTypes = {
  title: string.isRequired,
  id: string.isRequired,
  deleteTodo: func.isRequired,
  setCheced: func.isRequired,
  complete: boolean
};



