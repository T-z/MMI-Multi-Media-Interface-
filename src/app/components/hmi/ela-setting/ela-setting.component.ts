import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-ela-setting',
  templateUrl: './ela-setting.component.html',
  styleUrls: ['./ela-setting.component.scss']
})
export class ElaSettingComponent implements OnInit {
  offTime: string;
  startTime: string;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'ELA-Einstellungen';
    this.startTime = '6:00';
    this.offTime = '22:00';
  }

 changeTime(e, indice?) {
    if (indice || indice === 0) {
      this.offTime = e.target.value;
    } else {
      this.startTime = e.target.value;
    }

    // console.log( ' OFF ' +  this.offTime);
    // console.log( 'START ' + this.startTime );
  }



}
