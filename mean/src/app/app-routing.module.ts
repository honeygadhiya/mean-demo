import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from '../app/users/component/user-form/user-form.component';
import { UserListComponent } from '../app/users/component/user-list/user-list.component';
const routes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: '', component: UserListComponent },
  { path: 'back', component: UserListComponent },
  { path: 'form/:id', component: UserFormComponent },
]
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
