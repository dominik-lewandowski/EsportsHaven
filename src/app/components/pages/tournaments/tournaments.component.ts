import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TournamentsTemplateComponent} from '../../templates/tournaments-template/tournaments-template.component';
import {TournamentComponent} from '../../organisms/tournament/tournament.component';
import {Tournament} from '../../../classes/tournament';

@Component({
  selector: 'eh-tournaments',
  standalone: true,
  imports: [CommonModule, TournamentsTemplateComponent, TournamentComponent],
  templateUrl: './tournaments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TournamentsComponent {
  tournaments: Tournament[] = [];

  public trackByFn(index: number): number {
    return index;
  }
}
