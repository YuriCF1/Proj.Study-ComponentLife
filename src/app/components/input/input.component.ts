import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ItemInterface } from 'src/app/interfaces/iItem';
import { listservice } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  itemValue!: string;
  @Input() itemThatWillBeEdit!: ItemInterface

  editando: boolean = false;
  textoBtn: string = 'Salvar item'

  constructor(private listservice: listservice) { }
  ngOnChanges(changes: SimpleChanges): void {
    // 6 - CASO ELA MUDE, associa o valor do item a propriedade que veio do componente pai
    if (!changes['itemThatWillBeEdit'].firstChange) { //Após o ponto, há diversos métodos a respeito do valor/situação da propriedade
      this.editando = true
      this.textoBtn = 'Editar item'
      this.itemValue = this.itemThatWillBeEdit?.nome;
    }
  }

  ngOnInit(): void { }

  adicionarItem() {
    this.listservice.addItemIntoList(this.itemValue)
  }

  clearInput() {
    this.itemValue = ''
  }

  editarItem() {
    this.listservice.editItemInList(this.itemThatWillBeEdit, this.itemValue)
    this.clearInput()
    this.editando = false;
    this.textoBtn = 'Salvar item'
  }
}
