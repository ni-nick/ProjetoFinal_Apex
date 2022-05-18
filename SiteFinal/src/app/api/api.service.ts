import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  listar(): Observable <Contato[]>{
    return this.http.get<Contato[]>(this.url);
  };

  adicionar(post:Contato) : Observable<Contato>{
    return this.http.post<Contato>(this.url + "/add", post);
  };

  remover(id:Number): Observable<Contato>{
    return this.http.get<Contato>(this.url + "/deletar/" + id);
  };
}
