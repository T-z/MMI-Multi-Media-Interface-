import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-driving-mirror',
  templateUrl: './driving-mirror.component.html',
  styleUrls: ['./driving-mirror.component.scss']
})
export class DrivingMirrorComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'VIDEORÜCKSPIEGEL';
  }

}
