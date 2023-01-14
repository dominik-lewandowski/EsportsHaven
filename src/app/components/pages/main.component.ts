import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainTemplateComponent} from '../templates/main-template.component';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: "eh-main",
  templateUrl: "./main.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MainTemplateComponent,
    RouterOutlet
  ]
})
export class MainComponent {
}
