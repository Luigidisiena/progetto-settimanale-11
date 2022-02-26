import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Articolo } from '../models/product';
import * as Servizi from '../products.service';
@Component({
  template: `
    <div class="card">
      <div *ngIf="articolo" class="card-body rounded text-center">
        <h5 class="card-title">{{ articolo.name }}</h5>
        <p class="card-text">
          {{ articolo.description }} <br />
          {{ articolo.price | currency: 'EUR' }}
        </p>
        <div class="card-footer mt-5">
          <button type="button" class="btn btn-dark m-1" (click)="aggiungi()">
            Aggiungi al carrello
          </button>
          <button type="button" class="btn btn-dark m-1" [routerLink]="['/']">
            Torna al negozio
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        text-shadow: 5px 5px 10px black;
        font-size: 1.1em;
      }

      .card {
        max-width: 800px;
        height: auto;
        background: rgb(131, 69, 230);
        background: linear-gradient(
          0deg,
          rgba(131, 69, 230, 1) 30%,
          rgba(175, 150, 221, 0.975249474789916) 87%
        );
        border-radius: 50px;
        color: white;
        margin: auto;
        margin-top: 50px;
      }
    `,
  ],
})
export class ProductCardPage implements OnInit {
  articolo!: Articolo;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.articolo = <Articolo>params;
      console.log(this.articolo);
      console.log(params);
    });
  }

  aggiungi() {
    Servizi.aggiungiAlCarrello(this.articolo);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
