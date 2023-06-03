import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo-app/todo-app.component';

const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodoComponent },
    { path: '**', redirectTo: 'todos' } // Redirect any unknown paths to the todo list
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
