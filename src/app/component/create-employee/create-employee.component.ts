import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Position} from '../../model/position';
import {Office} from '../../model/office';
import {PositionService} from '../../service/position.service';
import {OfficeService} from '../../service/office.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  positions: Position[] = [];
  offices: Office[] = [];
  office: Office = {};
  position: Position = {};
  employeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl(18, [Validators.min(1), Validators.max(200)]),
    position: new FormControl(),
    office: new FormControl()
  });

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private officeService: OfficeService,
              private router: Router) {
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

  submit(): void {
    const employee = {
      name: this.employeForm.get('name')?.value,
      age: this.employeForm.get('age')?.value,
      office: this.setOffice(this.employeForm.get('office')?.value),
      position: this.setPosition(this.employeForm.get('position')?.value)
    };
    console.log(employee);
    this.employeeService.createNewEmployee(employee).subscribe(() => {
      alert('Success');
      this.router.navigate(['../list']);
    }, () => {
      alert('err');
    });
  }
  // @ts-ignore
  setOffice(id: number): Office{
    for (const office of this.offices) {
      if ( office.id === +id ){
        return this.office = office;
      }
    }
    return this.office;
  }
  // @ts-ignore
  setPosition(id: number): Position{
    for (const position of this.positions) {
      if (position.id === +id){
        return this.position = position;
      }
    }
    return this.position;
  }
}
