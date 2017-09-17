import {Component} from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {EnvironmentStatus, hasError} from './model/status';
import {Progress} from './model/progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: consider changing this to a Map
  envs: Array<EnvironmentStatus> = [];

  constructor(private svc: WebSocketService) {
    svc.connect('ws://' + location.host + '/statusWs')
      .subscribe(ev => {
        const data = JSON.parse(ev.data);
        switch (data.type) {
          case 'status': {
            const env = <EnvironmentStatus> data;
            const idx = this.envs.findIndex((e) => e.name === env.name);
            if (idx === -1) {
              console.log(`Creating new env ${env.name}`);
              env.error = hasError(env);
              env.progress = <Progress> { ready: 0, total: 0};
              this.envs.push(env);
              this.envs.sort((e1, e2) => e1.ordinal < e2.ordinal ? -1 : 1);
            } else {
              console.log(`Updating env ${env.name}`);
              this.envs[idx].groups = env.groups;
              this.envs[idx].error = hasError(env);
            }
            break;
          }

          case 'progress': {
            const progress = <Progress> data;
            console.log(`Got progress for env ${progress.envName}: ${progress.ready}/${progress.total}`);
            const idx = this.envs.findIndex((e) => e.name === progress.envName);
            if (idx !== -1) {
              const env = this.envs[idx];
              env.progress = progress;
            }
            break;
          }
        }
      });
  }
}
