import { Employee } from 'src/models/employee.model';

export interface AppState {
  readonly employee: Employee[];
}