import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TournamentsTemplateComponent} from '~templates/tournaments-template/tournaments-template.component';
import {TournamentComponent} from '~organisms/tournament/tournament.component';
import {Tournament} from '~classes/tournament';
import {TournamentsService} from '~pages/tournaments/tournaments.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'eh-tournaments',
  standalone: true,
  imports: [CommonModule, TournamentsTemplateComponent, TournamentComponent],
  providers: [TournamentsService],
  templateUrl: './tournaments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TournamentsComponent {
  // TODO
  public readonly tournaments$!: Subject<Tournament[]>;
  private readonly tournamentsObs: Observable<Tournament[]> = this.tournamentsService.getAll$();

  constructor(private readonly tournamentsService: TournamentsService) {
  }

  public trackByFn(index: number): number {
    return index;
  }
}
