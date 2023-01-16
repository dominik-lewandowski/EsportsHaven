import {Routes} from '@angular/router';

export default [
  {
    path: "",
    loadComponent: () => import("./tournaments.component"),
    pathMatch: "full"
  }
] as Routes;
