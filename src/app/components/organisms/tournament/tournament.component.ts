import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tournament} from '../../../classes/tournament';

@Component({
  selector: 'eh-tournament',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentComponent {
  @Input() tournament!: Tournament;
}
