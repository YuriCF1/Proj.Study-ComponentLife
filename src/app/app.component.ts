import { Component, OnInit } from '@angular/core';
import { ItemInterface } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<ItemInterface>

  itemToBeEdit!: ItemInterface

  constructor(
    private listaService: ListaDeCompraService
  ) { }

  /*
  O OnInit é o primeiro a ser chamado caso o componente/diretiva não tenha propriedades de entrada de dados,
  pois aí ele passa a ser o segundo gancho a ser chamado depois do OnChanges.
  E é um bom momento para criar lógicas de inicialização, como realizar Observable ou iniciar propriedades.*/
  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra()
    console.log(this.listaDeCompra);
  }

  // 4 - Pegando o evento em itemClicked e alterando o valor da propriedade itemToBeEedit
  editarItem(itemClicked: ItemInterface) {
    this.itemToBeEdit = itemClicked;
  }
}
