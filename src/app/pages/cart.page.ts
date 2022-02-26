import { Component, OnInit } from '@angular/core';
import { Articolo } from '../models/product';
import * as Servizi from '../products.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  template: `
    <!--{{articoliCarrello[0].id}}{{articoliCarrello[1].id}}-->
   <main>
      <div class=" card mb-4" *ngFor="let articolo of articoliCarrello">
        <h5 class="card-header">{{ articolo.id }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ articolo.name }}</h5>
          <p class="card-text">
            {{ articolo.description }} <br />
            <b>{{ articolo.price | currency: 'EUR' }}</b>
          </p>
        </div>
      </div>
      <div class="container">
        <h2>Completa l'ordine</h2>
        <form (ngSubmit)="submit()" #f="ngForm">
          <div ngModelGroup="userInfo">
            <div class="form-group">
              <label for="name">Nome</label>
              <input
                class="form-control"
                ngModel
                name="nome"
                type="text"
                required
                #name="ngModel"
              />
              <p *ngIf="name.invalid">* Campo richiesto! *</p>
              <label for="indirizzo">Indirizzo</label>
              <input
                class="form-control"
                ngModel
                name="indirizzo"
                type="text"
                required
                #indirizzo="ngModel"
              />
              <p *ngIf="indirizzo.invalid">* Campo richiesto! *</p>
              <input
                type="submit"
                [disabled]="f.invalid"
                value="invia"
                class="btn-dark mt-2"
              />
            </div>
          </div>
        </form>
      </div>
   </main>
  `,
  styles: [ `
  main{
    margin-bottom:200px;

  }

.card{
  background: rgb(131,69,230);
        background: linear-gradient(0deg, rgba(131,69,230,1) 30%, rgba(175,150,221,0.975249474789916) 87%);
        border-radius:10px;
        box-shadow: 3px 3px 3px black;
        margin: 30px;
        color:white;
}
  `],
})
export class CartPage implements OnInit {
  articoliCarrello: Articolo[] = Servizi.carrello;

  @ViewChild('f', { static: true }) form!: NgForm;

  user: any = {};

  submit() {
    console.log('form inviato', this.form);
    this.user.nome = this.form.value.userInfo.nome;
    this.user.indirizzo = this.form.value.userInfo.indirizzo;

    let riepilogo = [];

    for (let i of this.articoliCarrello) {
      riepilogo.push(i.name);
    }

    alert(
      "La tua ricevuta d'acquisto \n" +
        'Numero Ordine: ' +
        Math.floor(Math.random() * 1000) +
        '\n' +
        'Nome: ' +
        this.user.nome +
        '\n' +
        'Indirizzo: ' +
        this.user.indirizzo +
        '\n' +
        riepilogo
    );

    Servizi.carrello.length = 0;
    this.form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
