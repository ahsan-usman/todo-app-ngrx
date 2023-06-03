import { UserState } from "../ngrx-user/user.reducer";
import { TodoState } from "./todo.reducer";

export interface AppState {
  todo: TodoState;
  user: UserState
}
