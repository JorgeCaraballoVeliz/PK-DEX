import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { DexGetService } from '../services/dex-get.service';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrl: './dex.component.scss'
})
export class DexComponent /*implements OnInit*/ {
  private dexService: DexGetService = inject(DexGetService);
/* //peticion en el propio componente, no recomendado
  private httpClient = inject(HttpClient);
  ngOnInit(): void {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  */

  dexData(): void {
    this.dexService.getDexInfo('xerneas').subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
