import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Position} from '../../model/position';
import {Office} from '../../model/office';
import {EmployeeService} from '../../service/employee.service';
import {OfficeService} from '../../service/office.service';
import {PositionService} from '../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  // @ts-ignore
  employeeUpdateForm: FormGroup;
  employee: Employee = {};
  positions: Position[] = [];
  offices: Office[] = [];
  position: Position = {};
  office: Office = {};
  id = -1;
  constructor(private employeeService: EmployeeService,
              private officeService: OfficeService,
              private positionService: PositionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // @ts-ignore
      this.employee = this.findEmployeeById(this.id);
    }) ;
  }

  ngOnInit(): void {
    this.positionService.getAll().subscribe(value => {
      this.positions = value;
    }, error => {
      console.log(error);
    });
    this.officeService.getAll().subscribe(value => {
      this.offices = value;
    }, error => {
      console.log(error);
    });
  }

  findEmployeeById(): void{
    this.employeeService.getById(this.id).subscribe(employee => {
      this.employee = employee;
      this.employeeUpdateForm = new FormGroup({
        name: new FormControl(employee.name),
        age: new FormControl(employee.age),
        office: new FormControl(employee.office?.id),
        position: new FormControl(employee.position?.id)
      });
    }, error => {
      console.log('not found employee');
    });
  }

  setOffice(): void{
    const office: Office = {};
    for (const item of this.offices){
      if (item.id === +this.employeeUpdateForm.get('office')?.value){
        this.office = item;
      }
    }
  }

  setPosition(): void{
    const position: Position = {};
    for (const itemPosition of this.positions){
      if (itemPosition.id === +this.employeeUpdateForm.get('position')?.value){
        this.position = itemPosition;
      }
    }
  }
  update(): void{
    this.setPosition();
    this.setOffice();
    const employee = {
      name: this.employeeUpdateForm.get('name')?.value,
      age: this.employeeUpdateForm.get('age')?.value,
      office: this.office,
      position: this.position
    };
    this.employeeService.updateEmployee(this.id , employee).subscribe(() => {
      alert('success');
      this.router.navigate(['/list']);
    }, () => alert('err'));
  }
}
