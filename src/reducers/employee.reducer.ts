import { Action } from '@ngrx/store';
import { Employee } from 'src/models/employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function addEmployeeReducer(state: Employee[] = [], action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
        return [...state, action.payload];
    default:
        return state;
    }
}