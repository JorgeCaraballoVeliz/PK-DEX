import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

const PATH_URL = 'https://pokeapi.co';

@Injectable({
  providedIn: 'root'
})
export class DexGetService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getDexInfo(name: string): Observable<UserInfoResponse> {
   return this.httpClient.get<UserInfoResponse>(PATH_URL + '/api/v2/pokemon/' + name)
    // return of();
  }
}

/*
this.httpClient.get(PATH_URL + '/api/v2/pokemon/luxray').subscribe({
      next: (response) => {
        console.log(response);
      }
    });
*/
//recomendable en otro archivo
export interface UserInfoResponse {
  body: string;
  id: number;
  title: string;
  userid: number;
}