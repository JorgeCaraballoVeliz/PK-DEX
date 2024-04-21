import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

const PATH_URL = 'https://pokeapi.co';

@Injectable({
  providedIn: 'root'
})
export class DexGetService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getDexInfo(name: string): Observable<string> {
   return this.httpClient
   .get<UserInfoResponse>(PATH_URL + '/api/v2/pokemon/' + name)
   .pipe(
    map((res: UserInfoResponse) => res.name)
   )
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
  name: string;
  types: string;
  type: string;
}

/*
getDexInfo(name: string): Observable<UserInfoResponse> {
   return this.httpClient.get<UserInfoResponse>(PATH_URL + '/api/v2/pokemon/' + name).pipe(tap({
    next:(response) => {
      console.log('CAPTURED IN SERVICE', response)
    }
   }))
    // return of();
  }
*/