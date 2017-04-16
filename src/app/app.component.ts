import {Component} from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {EnvironmentStatus} from './model/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // TODO: consider changing this to a Map
  envs: Array<EnvironmentStatus> = [];
  title = 'Environment monitor works!';

  constructor(private svc: WebSocketService) {
    svc.connect('ws://localhost:8080/statusWs')
      .subscribe(ev => {
        const env = <EnvironmentStatus> JSON.parse(ev.data);
        const idx = this.envs.findIndex((e) => e.name === env.name);
        if (idx === -1) {
          this.envs.push(env);
          this.envs.sort((e1, e2) => e1.name < e2.name ? -1 : 1);
        } else {
          this.envs[idx] = env;
        }
      });
  }
}
