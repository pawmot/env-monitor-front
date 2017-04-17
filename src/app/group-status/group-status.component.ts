import {Component, Input, OnInit} from '@angular/core';
import {GroupStatus, hasError} from '../model/status';

@Component({
  selector: 'app-group-status',
  templateUrl: './group-status.component.html',
  styleUrls: ['./group-status.component.scss']
})
export class GroupStatusComponent implements OnInit {
  @Input()
  group: GroupStatus;
  error: boolean;

  constructor() {
  }

  ngOnInit() {
    this.error = hasError(this.group);
  }

}
