import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UsersComponent } from './components/users/users.component';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  {
    path:"users", component:UsersComponent
  },
  {
    path:"user/:uuid", component:UserdetailComponent, resolve: {resolvedResponse: UserResolver}
  },  
  {
    path:"**", redirectTo:'users'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
