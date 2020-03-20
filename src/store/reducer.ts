import * as actionType from './actionTypes';
import { ITodosState } from '../types/reducerState';

const initialState:ITodosState = {
  allTodolist: [],
  timeFilterArry: [],
  completeFilterArry: [],
  post: {
    title: '',
    id: '', 
    complete: false,
    date: ''
  },
  error: '',
  isLoading: true
};

const ItemReduser = (state = initialState, action: any):ITodosState => { 
  switch (action.type) {
    case actionType.GET_ALL_ITEM_SUCCESS:
      return {
        ...state,
        allTodolist: action.payload,
        isLoading: false 
      };
    case actionType.GET_ALL_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false 
      };
    case actionType.CHANGE_ITEM:
      return {
        ...state,
        post: action.payload,
      };
    case actionType.CLEAR_ITEM:
      return {
        ...state,
        post: {
          title: '',
          id: '', 
          complete: false,
          date: ''
        }
      };  
    case actionType.FILTER_TIME:
      return {
        ...state,
        timeFilterArry: action.payload
      };  
    case actionType.COMPLETE_FILTER:
      return {
        ...state,
        completeFilterArry: action.payload
      };  
    case actionType.SET_CHACKED_SUCCESS:
      return {
        ...state,
      };  
      case actionType.SET_CHACKED_FAIL:
        return {
          ...state,
          error: action.payload
        }; 
    default: 
      return state; 
  }
};

export default ItemReduser;