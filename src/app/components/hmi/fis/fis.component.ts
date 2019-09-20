import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-fis',
  templateUrl: './fis.component.html',
  styleUrls: ['./fis.component.scss']
})
export class FisComponent implements OnInit {

  is_muted: boolean;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {

    this.sharedService.currentSectionInfos = 'FIS';
  }

  mute(bool: boolean) {
    this.is_muted = bool;
  }

  repeat_anouncement() {

  }
}
