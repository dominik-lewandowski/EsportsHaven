import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eh-tournaments-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournaments-template.component.html',
  styleUrls: ['./tournaments-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentsTemplateComponent {

}
