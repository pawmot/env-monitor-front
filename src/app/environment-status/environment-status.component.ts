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

  constructor() {
  }

  ngOnInit() {
  }

}
