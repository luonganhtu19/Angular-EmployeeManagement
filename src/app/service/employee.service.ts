import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  ELEMENT_DATA: Employee[] = [];
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(API_URL + '/employees');
  }
  createNewEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(API_URL + '/employees', employee);
  }
  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${API_URL}/employees/${id}`, employee);
  }
  delete(id: number): Observable<Employee>{
    return this.http.delete<any>(`${API_URL}/employees/${id}`);
  }
  getById(id: number): Observable<Employee>{
    return this.http.get<Employee>(API_URL + `/employees/${id}`);
  }
}
