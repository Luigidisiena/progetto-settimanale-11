import { Component, OnInit } from '@angular/core';

import * as Servizi from '../products.service';
import { Articolo } from '../models/product';
import { HttpClient } from '@angular/common/http';
@Component({
  template: `
    <p *ngIf ='isLoading'>loading</p>
    <div class="row">
    <div class="col-sm-4" *ngFor="let articolo of articoliNegozio">
      <h5 class="card-header">{{articolo.id}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{articolo.name}}</h5>
        <p class="card-text">{{articolo.description}} <br> <b>{{articolo.price | currency : 'EUR'}}</b></p>
        <button type="button" class="btn btn-dark" [routerLink]="['./product-card', articolo]">Dettagli</button>
      </div>
</div>
  `,
  styles: [
    `
      .col-sm-4{
        background: rgb(131,69,230);
        background: linear-gradient(0deg, rgba(131,69,230,1) 30%, rgba(175,150,221,0.975249474789916) 87%);
        border-radius:10px;
        box-shadow: 3px 3px 3px black;
        max-width:400px;
        margin: 30px;
        color:white;
      
      };
    `
  ],
})
export class ProductListPage implements OnInit {
  articoliNegozio: Articolo[]=[];

  isLoading = false;



  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    setInterval(()=>{
      if(this.articoliNegozio!=[]){
        this.isLoading=false;
      }
      this.articoliNegozio=Servizi.articoli;
    },20)
  }

}
