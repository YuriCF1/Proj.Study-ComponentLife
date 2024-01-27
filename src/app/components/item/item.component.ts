import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ItemInterface } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: ItemInterface

  constructor() { }

  ngOnInit(): void { }

}
