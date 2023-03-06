import { Component } from '@angular/core';
import {Team} from './team';
import { TeamService } from './team.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'team-form',
  templateUrl: './form.component.html'
})
export class TeamsFormComponent {

  team: Team = new Team();
  titulo: string = 'Crear equipo';

  constructor(private teamService: TeamService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarEquipo()
  }
  cargarEquipo(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.teamService.getTeam(id).subscribe( (team) => this.team = team)
      }
    })
  }


  public create(): void {
    this.teamService.createTeam(this.team).subscribe(
      response => this.router.navigate(['/teams'])
    )
  }

  public update(): void {
    this.teamService.updateTeam(this.team).subscribe(
      response => this.router.navigate(['/teams'])
    )
  }
}
