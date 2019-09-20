import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'SONDERANZEIGEN/-ANSAGEN';
  }

}
