import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-ela',
  templateUrl: './ela.component.html',
  styleUrls: ['./ela.component.scss']
})
export class ElaComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'ELA';
  }

}
