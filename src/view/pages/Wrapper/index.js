/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { func, shape, array } from 'prop-types';

import { 
  getAllItems, 
  addItemCreator, 
  DeleteItemCreator, 
  setChecked, 
  changeItem,
  filterTimeAction,
  completeFilterAction
// eslint-disable-next-line import/extensions
} from '../../../store/actions';
import  TodoList  from '../TodoList';
import { Wrap } from './styled';

const Wrapper = ({
    changeItem, 
    getAllItems, 
    addItemCreator, 
    DeleteItemCreator, 
    setChecked, 
    post, allTodolist,
    filterTimeAction,
    completeFilterAction
  }) => {

  const [ showForm, setShowForm ] = useState(false);

  const openForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const inputValue = (event) => {
    const itemText = event.target.value;
    const currentItem = { title: itemText, id: uuidv4(), complete: false, date: new Date() };
    changeItem(currentItem);
  };

  const addItems = () => {
    addItemCreator(post);
  };

  const deleteTodo = id => {
    DeleteItemCreator(id);
  };

  const setCheckedTodo = (event) => {
    setChecked(event);
  };

  const timeFilterhandler = () => {
    const time = 10000; 
    const d = new Date().getTime();
    const ddd = allTodolist.filter(el => d - new Date(el.date).getTime() > time && el);
    filterTimeAction(ddd);
    openForm();
  };

  const completeFilter = () => {
    const test = allTodolist.filter(el => el.complete);
    completeFilterAction(test);
    openForm();
  };

  return (
    <Wrap>
      <TodoList 
        inputValue={inputValue} 
        addItems={addItems} 
        deleteTodo={deleteTodo} 
        value={post.title} 
        setCheckedTodo={setCheckedTodo} 
        timeFilterhandler={timeFilterhandler}
        completeFilter={completeFilter} 
        showForm={showForm}
        setShowForm={setShowForm}
      /> 
    </Wrap>
  );
};

const mapStateToProps = (state) => {
  return{
    post: state.post,
    allTodolist: state.allTodolist
  };
};

Wrapper.propTypes = {
  changeItem: func,
  getAllItems: func,
  addItemCreator: func,
  DeleteItemCreator: func,
  setChecked: func,
  post: shape({}),
  allTodolist: array,
  filterTimeAction: func,
  completeFilterAction: func
};

export default connect(mapStateToProps, 
  { 
    changeItem, 
    getAllItems, 
    addItemCreator, 
    DeleteItemCreator, 
    setChecked,
    filterTimeAction,
    completeFilterAction
  }
  )(Wrapper);

  

    
