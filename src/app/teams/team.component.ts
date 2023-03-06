import { Component } from '@angular/core';
import {Team} from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './team.component.html',
})
export class TeamsComponent {

    teams: Team[];

    constructor(private teamService: TeamService){};

    deleteTeam(id: number) {
      this.teamService.deleteTeam(id)
        .subscribe(() => {
          this.teamService.getTeams().subscribe(
            teams => this.teams = teams
        )});
    }


    ngOnInit()  {
      this.teamService.getTeams().subscribe(
        teams => this.teams = teams
      );
    }
  }





