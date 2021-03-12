import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../model/position';
import {Office} from '../model/office';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Position[]>{
    return this.http.get<Position[]>(API_URL + '/positions');
  }
  createNewPosition(position: Position): Observable<Position>{
    return this.http.post<Position>(API_URL + '/positions', position);
  }
  getById(id: number): Observable<Position>{
    return this.http.get<Position>(API_URL + `/positions/${id}`);
  }
}
