import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage {
  pokemon1: any;
  pokemon2: any;
  pokemon3: any;
  pokemon4: any;
  pokemon5: any;
  pokemon6: any;
  pokemon7: any;
  pokemon8: any;
  pokemon9: any;
  pokemon10: any;
  mostrarPokemon1: boolean = false;
  mostrarPokemon2: boolean = false;
  mostrarPokemon3: boolean = false;
  mostrarPokemon4: boolean = false;
  mostrarPokemon5: boolean = false;
  mostrarPokemon6: boolean = false;
  mostrarPokemon7: boolean = false;
  mostrarPokemon8: boolean = false;
  mostrarPokemon9: boolean = false;
  mostrarPokemon10: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  redirigirAHome() {
    this.router.navigate(['/home']);
  }

  cargarDatosPokemon(nombrePokemon: string, index: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    this.http.get(url).subscribe((data: any) => {
      const pokemon = {
        nombre: data.name,
        peso: data.weight,
        fuerza: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
        habilidades: data.abilities.map((ability: any) => ability.ability.name),
        imagen: data.sprites.front_default,
      };

      switch (index) {
        case 1:
          this.pokemon1 = pokemon;
          this.mostrarPokemon1 = !this.mostrarPokemon1;
          break;
        case 2:
          this.pokemon2 = pokemon;
          this.mostrarPokemon2 = !this.mostrarPokemon2;
          break;
        case 3:
          this.pokemon3 = pokemon;
          this.mostrarPokemon3 = !this.mostrarPokemon3;
          break;
        case 4:
          this.pokemon4 = pokemon;
          this.mostrarPokemon4 = !this.mostrarPokemon4;
          break;
        case 5:
          this.pokemon5 = pokemon;
          this.mostrarPokemon5 = !this.mostrarPokemon5;
          break;
        case 6:
          this.pokemon6 = pokemon;
          this.mostrarPokemon6 = !this.mostrarPokemon6;
          break;
        case 7:
          this.pokemon7 = pokemon;
          this.mostrarPokemon7 = !this.mostrarPokemon7;
          break;
        case 8:
          this.pokemon8 = pokemon;
          this.mostrarPokemon8 = !this.mostrarPokemon8;
          break;
        case 9:
          this.pokemon9 = pokemon;
          this.mostrarPokemon9 = !this.mostrarPokemon9;
          break;
        case 10:
          this.pokemon10 = pokemon;
          this.mostrarPokemon10 = !this.mostrarPokemon10;
          break;
        default:
          break;
      }
    });
  }
}
