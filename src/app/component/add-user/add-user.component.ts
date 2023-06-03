import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { addUser } from 'src/app/ngrx-user/user.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.addUserForm.valid) {
      const timestamp = new Date().getTime();
      const user: User = {
        id: timestamp.toString(),
        name: this.addUserForm.value.name,
        email: this.addUserForm.value.email,
      };
      this.store.dispatch(addUser({ user }));
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
