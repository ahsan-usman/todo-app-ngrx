import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TodoActions from './todo.actions';
import { CrudService } from '../service/crud.service';

@Injectable()
export class TodoEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTasks),
      mergeMap(() =>
        this.todoService.getAllTask().pipe(
          map((tasks) => TodoActions.loadTasksSuccess({ tasks })),
          catchError((error) => of(TodoActions.loadTasksFailure({ error })))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTask),
      mergeMap(({ task }) =>
        this.todoService.addTask(task).pipe(
          map(() => TodoActions.addTaskSuccess()),
          catchError((error) => of(TodoActions.addTaskFailure({ error })))
        )
      )
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.editTask),
      mergeMap(({ task }) =>
        this.todoService.editTask(task).pipe(
          map(() => TodoActions.editTaskSuccess()),
          catchError((error) => of(TodoActions.editTaskFailure({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTask),
      mergeMap(({ task }) =>
        this.todoService.deleteTask(task).pipe(
          map(() => TodoActions.deleteTaskSuccess()),
          catchError((error) => of(TodoActions.deleteTaskFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: CrudService) {}
}
