/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';

import { Input } from '../component/Input';
import { Button } from '../component/Button';
import { TodoListItem } from './TodoListItem';
import Modal from '../Modal';
import { Spinner } from '../component/Spiner';

import { TodoListForm, TodoListComponent, Ul } from './styled';



const TodoList = ({
  inputValue, addItems, 
  deleteTodo, setCheckedTodo, 
  timeFilterhandler,  
  allTodolist, value, 
  completeFilter, showForm, 
  setShowForm, isLoading }) => {

  const todos = Array.isArray(allTodolist) && allTodolist.map(
    el => <TodoListItem 
    title={el.title} 
    key={el.id} 
    complete={el.complete} 
    deleteTodo={deleteTodo} id={el.id} setCheckedTodo={setCheckedTodo} 
    />
  );

  return (
    <TodoListForm>
      <TodoListComponent>
        <Input onChange={inputValue} type="text" value={value} />
        <Button onClick={addItems} name="Submit" />
      </TodoListComponent>
      <Button name="Time filter" onClick={timeFilterhandler} />
      <Button name="Complete" onClick={completeFilter} />
      {showForm ? 
        <Modal setShowForm={setShowForm} /> :
        isLoading ? <Spinner /> :
         <Ul>
          {todos} 
        </Ul>
      }
    </TodoListForm>
  );
};

const mapStateToProps = (state) => {
  return{
    allTodolist: state.allTodolist,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, null)(TodoList);

TodoList.propTypes ={
  inputValue: func.isRequired,
  addItems: func.isRequired,
  deleteTodo: func.isRequired,
  setCheckedTodo: func.isRequired,
  timeFilterhandler: func.isRequired,
  value: string.isRequired,
  completeFilter: func.isRequired,
  setShowForm: func
};

  