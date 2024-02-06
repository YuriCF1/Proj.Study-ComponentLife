import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ItemInterface } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: ItemInterface
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }

  // 2 - Emitindo a propriedade para o componenten pai
  editItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    if (this.item.comprado == true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deleteItem() {
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  ngOnDestroy() { //Chamado momentos antes de algo será retirado da tela
    console.log('ngOnDestroy');
  }

  /*
O método ngOnDestroy é um dos Lifecycle Hooks no Angular e é chamado quando um componente é destruído,
ou seja, quando ele é removido do DOM. Este hook é útil para realizar tarefas de limpeza antes que o componente seja removido,
como cancelar assinaturas de observáveis, desconectar eventos ou executar outras ações para evitar vazamento de memória ou problemas de desempenho.*/
}
