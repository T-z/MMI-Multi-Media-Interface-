import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _currentSectionInfos = new BehaviorSubject<string>(undefined);
  private _is_in_init_stand = new BehaviorSubject<boolean>(true);

  constructor() {
    setTimeout(() => {
      this.initStand = false;
    }, 1000);
  }

  get currentSectionInfos(): string {
    return this._currentSectionInfos.value;
  }

  set currentSectionInfos(data: string) {
    this._currentSectionInfos.next(data);
  }

  onCurrentSectionInfosChange(): Observable<string> {
    return this._currentSectionInfos;
  }

  get initStand(): boolean {
    return this._is_in_init_stand.value;
  }

  set initStand(data: boolean) {
    this._is_in_init_stand.next(data);
  }

  onInitStandChange(): Observable<boolean> {
    return this._is_in_init_stand;
  }

}
