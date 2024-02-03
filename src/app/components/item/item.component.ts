import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ItemInterface } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: ItemInterface
  @Output() emitindoItemParaEditar = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }

  // 2 - Emitindo a propriedade para o componenten pai
  editItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
}
