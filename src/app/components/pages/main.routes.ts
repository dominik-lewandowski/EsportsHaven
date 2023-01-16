import {Routes} from '@angular/router';
import {MainComponent} from './main.component';

export default [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "tournaments",
        pathMatch: "full"
      },
      {
        path: "tournaments",
        loadChildren: () => import("./tournaments/tournaments.routes")
      }
    ]
  }
] as Routes;
