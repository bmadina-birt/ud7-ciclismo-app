import { Injectable } from '@angular/core';
import { Team } from './team';
import {of,Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private urlEndPoint:string = 'http://localhost:8090/api/teams'

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(this.urlEndPoint);
  }
  updateTeam(team: Team): Observable<Team>{
    return this.http.put<Team>(`${this.urlEndPoint}/${team.id}`, team);
  }
  createTeam(team: Team): Observable<Team>{
    return this.http.post<Team>(this.urlEndPoint, team);
  }
  getTeam(id:number): Observable<Team>{
    return this.http.get<Team>(`${this.urlEndPoint}/${id}`);
  }
  deleteTeam(id: number): Observable<Team>{
    return this.http.delete<Team>(`${this.urlEndPoint}/${id}`);
  }


}
