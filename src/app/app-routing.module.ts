import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
const routes: Routes = [
  {path:'',redirectTo:'tasks',pathMatch:'full'},
  {path:'tasks',component:TaskListComponent},
  {path:'tasks/:id',component:TaskDetailsComponent},
  {path:'create',component:TaskCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
