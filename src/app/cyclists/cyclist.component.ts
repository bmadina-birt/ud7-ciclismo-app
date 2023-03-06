import { Component, OnInit } from '@angular/core';
import {Cyclist} from './cyclist';
import { CyclistService } from './cyclist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cyclists',
  templateUrl: './cyclist.component.html'
})
export class CyclistComponent {
  cyclists: Cyclist[];

  constructor(private cyclistService: CyclistService, private router: Router ){};


  deleteCyclist(id: number) {
    this.cyclistService.deleteCyclist(id)
      .subscribe(() => {
        this.cyclistService.getCyclists().subscribe(
          cyclists => this.cyclists = cyclists
      )});
  }

  ngOnInit() {
    this.cyclistService.getCyclists().subscribe(
      cyclists => this.cyclists = cyclists
    );

  }

}
