import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'user-satistics', component: UsersListComponent
      },
      {
        path: 'user/:id', component: UserPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
