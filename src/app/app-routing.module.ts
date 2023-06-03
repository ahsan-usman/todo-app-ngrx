import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo-app/todo-app.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodoComponent },
    { path: 'userList', component: UserListComponent},
    { path: '**', redirectTo: 'todos' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
