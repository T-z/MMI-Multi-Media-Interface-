import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-statusbox',
  templateUrl: './statusbox.component.html',
  styleUrls: ['./statusbox.component.scss']
})
export class StatusboxComponent implements OnInit {

  currentDate: number = Date.now();
  refreshTimerSubscription: Subscription;
  title: string;

  is_in_init: boolean;

  vehicles = ['Fahrzeug1', 'Fahrzeug2', 'Fahrzeug3' , 'Fahrzeug4' ]

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {

    this.refreshTimerSubscription = interval(1000).subscribe(() => {
      this.currentDate = Date.now();
    });

    this.sharedService.onCurrentSectionInfosChange().subscribe((newInfos) => {
      this.title = newInfos;
    });

    this.sharedService.onInitStandChange().subscribe((init_stand) => {
      this.is_in_init = init_stand;
    });

  }

}
