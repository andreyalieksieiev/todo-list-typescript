import axios from 'axios';
import * as actionTypes from './actionTypes';
import { 
  GetAllItemsSuccessActionType, 
  GetAllItemsFailActionType,
  ChangeItemActionType,
  ClearItemActionType,
  FilterTimeAction,
  CompleteFilterAction,
  SetCheckedSuccess,
  SetCheckedFail
} from '../types/types';

export const getAllItemsSuccess = (data: any):GetAllItemsSuccessActionType => ({ type: actionTypes.GET_ALL_ITEM_SUCCESS, payload: data });
export const getAllItemsFail = (error: string):GetAllItemsFailActionType => ({ type: actionTypes.GET_ALL_ITEM_FAIL, error});

export const changeItem = (payload: any):ChangeItemActionType => ({ type: actionTypes.CHANGE_ITEM, payload });
export const clearItem = ():ClearItemActionType => ({ type: actionTypes.CLEAR_ITEM });

export const filterTimeAction = (payload: []):FilterTimeAction => ({ type: actionTypes.FILTER_TIME, payload });
export const completeFilterAction = (payload: []):CompleteFilterAction => ({ type: actionTypes.COMPLETE_FILTER, payload });

export const setCheckedSuccess = (payload: string):SetCheckedSuccess => ({type: actionTypes.SET_CHACKED_SUCCESS, payload });
export const setCheckedFail = (payload: string):SetCheckedFail => ({ type: actionTypes.SET_CHACKED_FAIL, payload });

export const getAllItems = () => (dispatch:any) => 
 axios.get('http://localhost:3000/posts/')
      .then(({data}) => {
        dispatch(getAllItemsSuccess(data)); 
      })
      .catch(error => {
        dispatch(getAllItemsFail(error)); 
      });

export const addItemCreator = (post: {title:string}) => {
  return (dispatch: any) => {
    const newPost = post;
    if (newPost.title !== '') {
        axios.post('http://localhost:3000/posts/', newPost)
      .then(() => {
        dispatch(clearItem());
        dispatch(getAllItems()); 
      })
      .catch(err => console.log('catch', err));
      }
  };
};

export const DeleteItemCreator = (id: string) => {
  return (dispatch: any) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(response => {
        console.log('response: ', response);
        dispatch(getAllItems());
      })
      .catch(err => console.log('catch', err));
  };
};

export const setChecked = (event: any) => {
  return (dispatch: any) => {
       const {id, checked} = event.target;
    axios.patch(`http://localhost:3000/posts/${id}`, { 
      complete: checked
    })
      .then(() => {
        dispatch(setCheckedSuccess(id));
        dispatch(getAllItems());
      })
      .catch(error => dispatch(setCheckedFail(error)));
  };
};