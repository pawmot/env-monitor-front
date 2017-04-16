import {Component, Input, OnInit} from '@angular/core';
import {EnvironmentStatus} from '../model/status';

@Component({
  selector: 'app-environment-status',
  templateUrl: './environment-status.component.html',
  styleUrls: ['./environment-status.component.css']
})
export class EnvironmentStatusComponent implements OnInit {
  @Input()
  private env: EnvironmentStatus;

  constructor() {
  }

  ngOnInit() {
  }

}
