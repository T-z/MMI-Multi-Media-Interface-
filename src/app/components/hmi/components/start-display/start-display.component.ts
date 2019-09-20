import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-start-display',
  templateUrl: './start-display.component.html',
  styleUrls: ['./start-display.component.scss']
})
export class StartDisplayComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'Einschalten';
  }

}
