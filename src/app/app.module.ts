import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo-app/todo-app.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './ngrx-todo/todo.reducer';
import { TodoEffects } from './ngrx-todo/todo.effects';
import { UserEffects } from './ngrx-user/user.effects';
import { userReducer } from './ngrx-user/user.reducer';
import { MATERIAL_MODULES } from './material.module';

@NgModule({
  declarations: [AppComponent, TodoComponent, AddUserComponent, UserListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      todo: todoReducer,
      user: userReducer
    }),
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forRoot([UserEffects]),
    EffectsModule.forFeature([TodoEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
    ...MATERIAL_MODULES, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
