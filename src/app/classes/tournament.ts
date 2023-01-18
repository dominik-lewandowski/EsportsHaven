import {ITournament} from '~models/tournament/tournament.model';

export class Tournament implements ITournament {
  constructor(public readonly name: string) {
  }
}
