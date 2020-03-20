import * as actionTypes from '../store/actionTypes';

export type SetGetAllItemsSuccessActionPayloadType = {
  title: number
  id: string
  complete: boolean
  date: string
}

export type GetAllItemsSuccessActionType = {
  type: typeof actionTypes.GET_ALL_ITEM_SUCCESS,
  payload: SetGetAllItemsSuccessActionPayloadType
}

export type GetAllItemsFailActionType = {
  type: typeof actionTypes.GET_ALL_ITEM_FAIL,
  error: string
} 

export type ClearItemActionType = {
  type: typeof actionTypes.CLEAR_ITEM
}

export type SetChangeItemActionPayloadType = {
  title: string
  id: string
  complete: boolean,
  date: string
}

export type ChangeItemActionType = {
  type: typeof actionTypes.CHANGE_ITEM,
  payload: SetChangeItemActionPayloadType
}

export type FilterTimeAction = {
  type: typeof actionTypes.FILTER_TIME,
  payload: []
}

export type CompleteFilterAction = {
  type: typeof actionTypes.COMPLETE_FILTER,
  payload: []
}

export type SetCheckedSuccess = {
  type: typeof actionTypes.SET_CHACKED_SUCCESS,
  payload: string
}

export type SetCheckedFail = {
  type: typeof actionTypes.SET_CHACKED_FAIL,
  payload: string
}