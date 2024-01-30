import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  itemValue!: string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.service.addItemIntoList(this.itemValue)
  }

  clearInput() {
    this.itemValue = ''
  }
}
