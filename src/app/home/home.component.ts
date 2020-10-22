import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Employee[] = [
  { empId: 1, empName: 'Hydrogen', bankName: 'Hydrogen', branchName: 'H', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 2, empName: 'Helium', bankName: 'Hydrogen', branchName: 'He', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 3, empName: 'Lithium', bankName: 'Hydrogen', branchName: 'Li', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 4, empName: 'Beryllium', bankName: 'Hydrogen', branchName: 'Be', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 5, empName: 'Boron', bankName: 'Hydrogen', branchName: 'B', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 6, empName: 'Carbon', bankName: 'Hydrogen', branchName: 'C', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 7, empName: 'Nitrogen', bankName: 'Hydrogen', branchName: 'N', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 8, empName: 'Oxygen', bankName: 'Hydrogen', branchName: 'O', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 9, empName: 'Fluorine', bankName: 'Hydrogen', branchName: 'F', empEmail: 'testemail', empPhoto: 'tst' },
  { empId: 10, empName: 'Neon', bankName: 'Hydrogen', branchName: 'Ne', empEmail: 'testemail', empPhoto: 'tst' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['empName', 'empPhoto', 'empEmail', 'branchName', 'bankName',];
  //employees : Observable<Employee[]>;
  employees = new MatTableDataSource<Employee>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {

  }
}
