import { Injectable } from '@angular/core';
import { Carrera } from './carrera';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/carrera";

  public save(carrera: Carrera): Observable<Carrera>{
    return this.http.post<Carrera>(this.url+"/save", carrera, this.httpOptions);
  }

  public findById(id: number): Observable<Carrera>{
    return this.http.get<Carrera>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Carrera>{
    return this.http.delete<Carrera>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByNombre(term: string): Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.url+"/findByNombre/"+term, this.httpOptions);
  }

}
