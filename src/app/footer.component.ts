import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `


  <footer class=" bg-dark py-3  fixed-bottom">
    <div class="container">
      <p class="text-center text-white"> SolaShop.srl<span>&reg;</span> Roma (RM)  via vattela a pesca 666 cap: 00198</p>
    </div>
  </footer>
  `,
  styles: [ `
footer{
  font-size:0.8em;
}
span{
  font-size: 2em;
}
` ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
