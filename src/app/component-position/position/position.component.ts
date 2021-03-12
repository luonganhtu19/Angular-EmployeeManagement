import { Component, OnInit } from '@angular/core';
import {Office} from '../../model/office';
import {OfficeService} from '../../service/office.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  offices: Office[] = [];
  status = false;
  dataSource = null;

  constructor(private se: OfficeService,
              private r: Router) { }

  ngOnInit(): void {
  }

}
