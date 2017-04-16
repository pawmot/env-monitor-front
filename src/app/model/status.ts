/**
 * Created by pawmot on 15.04.17.
 */

export interface EnvironmentStatus {
  name: string;
  groups: Array<GroupStatus>;
}

export interface GroupStatus {
  name: string;
  services: Array<FullServiceStatus>;
}

export interface FullServiceStatus {
  name: string;
  status: ServiceStatus;
  additionalInfo: Map<String, String>;
}

export interface ServiceStatus {
  status: String;
  statusCode: number;
}
