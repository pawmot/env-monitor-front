import {Component, Input, OnInit} from '@angular/core';
import {EnvironmentStatus} from '../model/status';

@Component({
  selector: 'app-environment-status',
  templateUrl: './environment-status.component.html',
  styleUrls: ['./environment-status.component.scss']
})
export class EnvironmentStatusComponent implements OnInit {
  @Input()
  env: EnvironmentStatus;
  shown = false;
  iconName: string;

  constructor() {
    this.setArrow();
  }

  ngOnInit() {
  }

  toggleContent() {
    this.shown = !this.shown;
    this.setArrow();
  }

  private setArrow() {
    this.iconName = this.shown ? 'keyboard_arrow_down' : 'keyboard_arrow_right';
  }
}
