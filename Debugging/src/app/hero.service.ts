import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './models/hero';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {
  }

  getHeroes(): Hero[] {
    const h1 = new Hero();
    h1.name = 'Wonder Woman';
    h1.power = 'Strength';
    return [h1];
  }
}
