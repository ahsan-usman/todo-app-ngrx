import { createReducer, on } from '@ngrx/store';
import { Task } from '../model/todo.model';
import * as TodoActions from './todo.actions';

export interface TodoState {
  tasks: Task[];
  loading: boolean;
  error: any;
}

const initialState: TodoState = {
  tasks: [],
  loading: false,
  error: null
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTasks, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TodoActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
    error: null
  })),
  on(TodoActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    tasks: [],
    loading: false,
    error
  })),
  on(TodoActions.addTaskSuccess, state => ({
    ...state,
    loading: false,
    error: null
  })),
  on(TodoActions.addTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(TodoActions.editTaskSuccess, state => ({
    ...state,
    loading: false,
    error: null
  })),
  on(TodoActions.editTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(TodoActions.deleteTaskSuccess, state => ({
    ...state,
    loading: false,
    error: null
  })),
  on(TodoActions.deleteTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
