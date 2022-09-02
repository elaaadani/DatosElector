import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { environment } from 'src/environments/environment';
import { Elector } from '../models/api-model/elector.model';

@Injectable({
  providedIn: 'root'
})
export class ElectorService {

  private BaseAPIUri = 'https://lbde.azurewebsites.net';

  constructor(private httpClient: HttpClient) { }

  getElectores(): Observable<any>
  {
    return this.httpClient.get<any>(this.BaseAPIUri + '/DatosElectorales')
  }

  getElector(electorrut:string): Observable<Elector>
  {
   return this.httpClient.get<Elector>(this.BaseAPIUri+'/Electores/' +electorrut)
  }
}
