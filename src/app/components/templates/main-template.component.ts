import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: "eh-main-template",
  templateUrl: "./main-template.component.html",
  styleUrls: ["./main-template.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class MainTemplateComponent {
}
