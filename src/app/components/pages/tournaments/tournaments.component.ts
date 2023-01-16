import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TournamentsTemplateComponent} from '../../templates/tournaments-template/tournaments-template.component';

@Component({
  selector: 'eh-tournaments',
  standalone: true,
  imports: [CommonModule, TournamentsTemplateComponent],
  templateUrl: './tournaments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TournamentsComponent {
}
