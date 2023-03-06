import { Injectable } from '@angular/core';
import { Cyclist } from './cyclist';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CyclistService {

  private urlEndPoint:string = 'http://localhost:8090/api/cyclists'

  constructor(private http: HttpClient) { }

  getCyclists(): Observable<Cyclist[]>{
    return this.http.get<Cyclist[]>(this.urlEndPoint);
  }

  createCyclist(cyclist: Cyclist): Observable<Cyclist>{
    return this.http.post<Cyclist>(this.urlEndPoint, cyclist);
  }

  deleteCyclist(id: number): Observable<Cyclist>{
    return this.http.delete<Cyclist>(`${this.urlEndPoint}/${id}`);
  }
  updateCyclist(cyclist: Cyclist): Observable<Cyclist>{
    return this.http.put<Cyclist>(`${this.urlEndPoint}/${cyclist.id}`, cyclist);
  }
  getCyclist(id: number): Observable<Cyclist>{
    return this.http.get<Cyclist>(`${this.urlEndPoint}/${id}`);
  }
}
