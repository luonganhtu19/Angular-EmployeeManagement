import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../model/employee';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})

export class ListAllComponent implements OnInit{
  employees: Employee[] = [];
  status = false;
  dataSource = null;
  constructor(private serviceEmployee: EmployeeService,
              private router: Router) {
  }

  displayedColumns: string[] = ['id', 'name', 'age', 'office', 'position' , 'action'];

  ngOnInit(): void {
    this.getAll();
  }
  onClick(): void{
    this.status = !this.status;
  }
  getAll(): void {
    this.serviceEmployee.getAll().subscribe(value => {
      this.employees = value;
    }, error => {
      console.log(error);
    });
  }
  updateEmployee(id: number): void{
    this.router.navigate(['../update', id ]);
  }
  deleteEmployee(id: number): void{
    this.serviceEmployee.delete(id).subscribe(() => {
      alert('success delete');
      this.getAll();
      this.router.navigate(['../list']);
    }, () => {
      alert(' Error');
    });
  }
}

