import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/usuario";

  public findById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.url+"/"+id, this.httpOptions);
  }

  //findAll
  public findAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"/findAll", this.httpOptions);
  }

  //findByNombre
  public findByNombre(term:string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"/findByNombre/"+term, this.httpOptions);
  }

}
