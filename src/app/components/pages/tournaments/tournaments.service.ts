import {Injectable} from '@angular/core';
import {RestService} from '~core/services/rest/rest.service';
import {Observable, of} from 'rxjs';
import {Tournament} from '~classes/tournament';

@Injectable()
export class TournamentsService {

  constructor(private readonly rest: RestService) {
  }

  // TODO
  getAll$(): Observable<Tournament[]> {
    return of([
      new Tournament("Paladins Copium League"),
      new Tournament("5v5 Weekly Cup"),
      new Tournament("Paladins Pepega League")
    ])
  }
}
