import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/todo.model';
import * as TodoActions from 'src/app/ngrx-todo/todo.actions';
import { selectTasks } from 'src/app/ngrx-todo/todo.selectors';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoComponent {
  
  taskObj : Task = new Task();
  taskArr$?: Observable<Task[]>;
  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private store: Store, private dialog: MatDialog) { }

  openAddUserDialog(): void {
    this.dialog.open(AddUserComponent, {
      width: '400px',
      disableClose: true
    });
  }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr$ = this.store.pipe(select(selectTasks));
    this.store.dispatch(TodoActions.loadTasks());
  }

  addTask() {
    const task: Task = {
      task_name: this.addTaskValue
    };
    this.store.dispatch(TodoActions.addTask({ task }));
    this.addTaskValue = '';
  }
  
  editTask() {
    const task: Task = {
      ...this.taskObj,
      task_name: this.editTaskValue
    };
    this.store.dispatch(TodoActions.editTask({ task }));
  }
  
  deleteTask(task: Task) {
    this.store.dispatch(TodoActions.deleteTask({ task }));
  }
  
  call(task: Task) {
    this.taskObj = { ...task };
    this.editTaskValue = task.task_name;
    this.taskArr$ = this.store.pipe(select(selectTasks));
  }  
}
