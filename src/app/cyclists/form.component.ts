import { Component } from '@angular/core';
import {Cyclist} from './cyclist';
import { CyclistService } from './cyclist.service';
import { TeamService } from '../teams/team.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Team } from '../teams/team';

@Component({
  selector: 'cyclist-form',
  templateUrl: './form.component.html'
})
export class CyclistsFormComponent {

  cyclist: Cyclist = new Cyclist();
  teams: Team[] = [];
  titulo: string = 'Crear ciclista';

  constructor(private cyclistService: CyclistService, private teamService: TeamService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarCiclista();
    this.teamService.getTeams().subscribe((teams: any[]) => {
      this.teams = teams;
  });
  }

  cargarCiclista(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.cyclistService.getCyclist(id).subscribe( (cyclist) => this.cyclist = cyclist)
      }
    })
  }


 public create(): void {
    this.cyclistService.createCyclist(this.cyclist).subscribe(
      () => this.router.navigate(['/cyclists'])
    )
  }

  public update(): void {
    this.cyclistService.updateCyclist(this.cyclist).subscribe(
      () => this.router.navigate(['/cyclists'])
    )
  }
}
