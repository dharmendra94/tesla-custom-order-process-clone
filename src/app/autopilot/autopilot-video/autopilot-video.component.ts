import { Component, OnInit } from '@angular/core';
import { autopilotVideoSource } from '../../state/constants/model3-assets';

@Component({
  selector: 'aut-autopilot-video',
  templateUrl: './autopilot-video.component.html',
  styleUrls: ['./autopilot-video.component.scss']
})
export class AutopilotVideoComponent implements OnInit {

  autopilotVideo = autopilotVideoSource;

  constructor() { }

  ngOnInit(): void {
  }

}
