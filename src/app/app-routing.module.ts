import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreAddComponent } from './components/score-add/score-add.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {path: "listStudents", component: StudentListComponent},
  {path: "addScore/:id", component: ScoreAddComponent},
  //{path: "addScore", component: ScoreAddComponent},
  {path: "listScores", component: ScoreListComponent},
  {path: '', redirectTo: "/listStudents", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
