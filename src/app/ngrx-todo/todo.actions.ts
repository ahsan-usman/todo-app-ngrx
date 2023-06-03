import { createAction, props } from '@ngrx/store';
import { Task } from '../model/todo.model';

export const loadTasks = createAction('[Todo] Load Tasks');
export const loadTasksSuccess = createAction('[Todo] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Todo] Load Tasks Failure', props<{ error: any }>());

export const addTask = createAction('[Todo] Add Task', props<{ task: Task }>());
export const addTaskSuccess = createAction('[Todo] Add Task Success');
export const addTaskFailure = createAction('[Todo] Add Task Failure', props<{ error: any }>());

export const editTask = createAction('[Todo] Edit Task', props<{ task: Task }>());
export const editTaskSuccess = createAction('[Todo] Edit Task Success');
export const editTaskFailure = createAction('[Todo] Edit Task Failure', props<{ error: any }>());

export const deleteTask = createAction('[Todo] Delete Task', props<{ task: Task }>());
export const deleteTaskSuccess = createAction('[Todo] Delete Task Success');
export const deleteTaskFailure = createAction('[Todo] Delete Task Failure', props<{ error: any }>());
