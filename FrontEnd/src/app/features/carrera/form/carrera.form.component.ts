import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera.form.component.html'
})
export class CarreraFormComponent implements OnInit {

  constructor(
    private carreraService: CarreraService,
    private activatedRoute: ActivatedRoute,
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  currentEntity: Carrera =
  {
          id: 0,
          nombre: "",
          tipoCarrera: "",
          updated: new Date(),
          deleted:new Date(),
          archived:true,
          enabled: true,
          usuarioId:0,
          usuarios:[]
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.carreraService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          id: 0,
          nombre: "",
          tipoCarrera: "",
          updated: new Date(),
          deleted:new Date(),
          archived:true,
          enabled: true,
          usuarioId:0,
          usuarios:[]
        };
        this.router.navigate(['/layout/carrera-list']);
      }
    )
  }

  findById(id: number):void {
    this.carreraService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.usuarios.forEach(
          (user) => {
            this.usuarioService.findById(user.id).subscribe(
              (item) => user.nombre = item.nombre
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.carreraService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeUsuario(id: number){
    this.currentEntity.usuarios =
    this.currentEntity.usuarios.filter(
      (item) => item.id != id
    );
  }

}
