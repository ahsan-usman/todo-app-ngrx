import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoComponent } from './component/todo-app/todo-app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx-todo/todo.reducer';
import { TodoEffects } from './ngrx-todo/todo.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
