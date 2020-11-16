import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  
})
export class SearchComponent implements OnInit {
  heroes:Heroe[]=[];
  termino:string;


  constructor(private activatedRoute:ActivatedRoute,private _router:Router,private _heroesService:HeroesService) 
  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=>{
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      this.termino=params['termino']
    })

  }


}
