import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-rbl',
  templateUrl: './rbl.component.html',
  styleUrls: ['./rbl.component.scss']
})
export class RblComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'RBL';
  }

}
