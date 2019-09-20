import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'SPRECHEN';
  }

}
