import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-speaker-inside',
  templateUrl: './speaker-inside.component.html',
  styleUrls: ['./speaker-inside.component.scss']
})
export class SpeakerInsideComponent implements OnInit {
  myRange = 25;

  constructor() {
  }

  ngOnInit() {
  }

  valueChanged(e) {
    console.log(e.target.value);
  }

}
