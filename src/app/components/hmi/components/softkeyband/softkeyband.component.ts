import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-softkeyband',
  templateUrl: './softkeyband.component.html',
  styleUrls: ['./softkeyband.component.scss']
})
export class SoftkeybandComponent implements OnInit {
  is_in_init: boolean;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.onInitStandChange().subscribe((init_stand) => {
      this.is_in_init = init_stand;
    });
  }

}
