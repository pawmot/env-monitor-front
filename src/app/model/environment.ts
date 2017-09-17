import {EnvironmentStatus} from './status';
import {Progress} from './progress';

export interface Environment {
  status: EnvironmentStatus;
  progress: Progress;
}
