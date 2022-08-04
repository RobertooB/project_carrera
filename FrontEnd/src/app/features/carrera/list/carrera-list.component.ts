import { Component, OnInit } from '@angular/core';
import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html'
})
export class CarreraListComponent implements OnInit {

  constructor(
    private carreraService : CarreraService
  ) { }

    carreraList: Carrera[] = [];

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.carreraService.findAll().subscribe(
      (response) => this.carreraList =response
    )
  }

  public findByNombre(term: string):void{
    if(term.length>=2){
      this.carreraService.findByNombre(term).subscribe(
        (response) => this.carreraList =response
      )
    }
    if(term.length===0){
      this.findAll();
    }
  }

}
