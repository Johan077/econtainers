import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {

  public heroeSend = {
    name : '',
    power: '',
    description: '',
    foto:'',
  }

  public heroes = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.api.getApi().then(res => {
      if(res.docs.length > 0){
        res.docs.forEach(data=>{
        const hero = data.data();
        this.heroes.push(hero);
        });
      }
    }).catch(err =>{
     console.error('error es:', err); 
    });
  }

  selecHero(ind){
    for(let i= 0 ; i<= this.heroes.length ;i++){
      if(i === ind){
        this.api.heroSelec =  this.heroes[i];
      }
    }
  }

}
