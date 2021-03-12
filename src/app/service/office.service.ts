import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Office} from '../model/office';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Office[]>{
    return this.http.get<Office[]>(API_URL + '/offices');
  }
  createNewOffice(office: Office): Observable<Office>{
    return this.http.post<Office>(API_URL + '/offices', office);
  }
  getById(id: number): Observable<Office>{
    return this.http.get<Office>(API_URL + `/offices/${id}`);
  }
}
