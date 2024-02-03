import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ItemInterface } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemThatWillBeEdit!: ItemInterface

  itemValue!: string;

  constructor(private service: ListaDeCompraService) { }
  ngOnChanges(changes: SimpleChanges): void {
// 6 - CASO ELA MUDE, associa o valor do item a propriedade que veio do componente pai
    if(!changes['itemThatWillBeEdit'].firstChange) { //Após o ponto, há diversos métodos a respeito do valor/situação da propriedade
      this.itemValue = this.itemThatWillBeEdit?.nome;
    }
  }

  ngOnInit(): void { }

  adicionarItem() {
    this.service.addItemIntoList(this.itemValue)
  }

  clearInput() {
    this.itemValue = ''
  }
}
