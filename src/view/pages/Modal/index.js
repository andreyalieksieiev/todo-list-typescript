import React from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';

import { TodoListItem } from '../TodoList/TodoListItem';
import { Mod, Content, ContentBox } from './styled';

const Modal = ({ completeFilterArry, timeFilterArry, setShowForm }) => {
 
  const filterTimetodos = Array.isArray(timeFilterArry) && 
    timeFilterArry.map(el => 
      <TodoListItem title={el.title}  key={el.id} />); 

  const CompleteFilter = Array.isArray(completeFilterArry) && 
    completeFilterArry.map(el => 
    <TodoListItem title={el.title} key={el.id}/>);
 
  return (
    <Mod onClick={() => setShowForm()}>
      <Content>
        <ContentBox>
          {filterTimetodos}
          {CompleteFilter }
        </ContentBox>
      </Content>
    </Mod>
  );
};

const mapStateToProps = (state) => {
  return{
    timeFilterArry: state.timeFilterArry,
    completeFilterArry: state.completeFilterArry
  };
};

TodoListItem.propsTypes = {
  completeFilterArry: shape({}).isRequired,
  timeFilterArry: shape({}).isRequired,
  setShowForm: func.isRequired
};


export default connect(mapStateToProps, null)(Modal);