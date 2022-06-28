import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss']
})
export class DetailHeroComponent implements OnInit {
  public her = {
    name : '',
    power: '',
    description: '',
    foto:'',
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
   this.her = this.api.heroSelec;
  }

}
