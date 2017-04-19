/**
 * Created by pawmot on 15.04.17.
 */

export interface EnvironmentStatus {
  name: string;
  groups: Array<GroupStatus>;
  ordinal: number;
  // TODO: find a better way to propagate error information!
  error: boolean;
}

export interface GroupStatus {
  name: string;
  services: Array<FullServiceStatus>;
}

export interface FullServiceStatus {
  name: string;
  report: ServiceStatus;
  additionalInfo: Map<String, String>;
}

export interface ServiceStatus {
  status: String;
  statusCode: number;
}

export function hasError(status: GroupStatus|EnvironmentStatus): boolean {
  if ((<GroupStatus>status).services) {
    return (<GroupStatus>status).services.some(s => s.report.status !== 'Healthy');
  } else {
    return (<EnvironmentStatus>status).groups.some(g => hasError(g));
  }
}
