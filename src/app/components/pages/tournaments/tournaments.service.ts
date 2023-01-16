import {Injectable} from '@angular/core';
import {RestService} from '../../../_core/services/rest/rest.service';
import {Observable} from 'rxjs';
import {Tournament} from '../../../classes/tournament';

@Injectable()
export class TournamentsService {

  constructor(private readonly rest: RestService) {
  }

  getAll$(): Observable<Tournament[]> {

  }
}
