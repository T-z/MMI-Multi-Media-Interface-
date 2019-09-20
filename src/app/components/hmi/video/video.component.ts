import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentSectionInfos = 'VIDEO INNEN';
  }

}
