export interface ITodosState {
  allTodolist: never[],
  timeFilterArry: never[],
  completeFilterArry: never[],
  post: {
    title: string
    id: string 
    complete: boolean
    date: string
  },
  error: string
  isLoading: boolean
}