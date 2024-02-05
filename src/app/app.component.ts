import { Component, DoCheck, OnInit } from '@angular/core';
import { ItemInterface } from './interfaces/iItem';
import { listservice } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<ItemInterface>

  itemToBeEdit!: ItemInterface

  constructor(
    private listaService: listservice
  ) { }

  /*
  O OnInit é o primeiro a ser chamado caso o componente/diretiva não tenha propriedades de entrada de dados,
  pois aí ele passa a ser o segundo gancho a ser chamado depois do OnChanges.
  E é um bom momento para criar lógicas de inicialização, como realizar Observable ou iniciar propriedades.*/
  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra()
    // console.log(this.listaDeCompra);
  }

  // 4 - Pegando o evento em itemClicked e alterando o valor da propriedade itemToBeEedit
  editarItem(itemClicked: ItemInterface) {
    this.itemToBeEdit = itemClicked;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompra.findIndex((item) => item.id === id) //Caso o item.id for igual ao id, ele será quardado dentro da variável
    this.listaDeCompra.splice(index, 1)

  }

  ngDoCheck(): void {
    console.log('DoCheck chamado. Atualizou LocalStorage');
    this.listaService.updateLocalStorage()
  }
}


/*ANOTAÇÃO IMPORTANTE!
- ngOnChanges é usado para reagir a mudanças em dados de entrada (bindings) e é chamado quando há mudanças nesses dados.
- ngDoCheck é usado para detectar mudanças que não são tratadas por outros ganchos de ciclo de vida e é chamado frequentemente durante cada detecção de mudança no Angular.
  Ele também detecta mudanças no componente filho!
*/
