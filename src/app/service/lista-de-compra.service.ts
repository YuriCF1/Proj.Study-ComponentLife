import { ItemInterface } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class listservice {

  // private listaDeCompra: ItemInterface[] = [
  //   {
  //     "id": 1,
  //     "nome": "Queijo prato",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": false
  //   },
  //   {
  //     "id": 2,
  //     "nome": "Leite integral",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": false
  //   },
  //   {
  //     "id": 3,
  //     "nome": "Mamão papaia",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": true
  //   },
  // ]

  private listaDeCompra: ItemInterface[]

  constructor() {
    // console.log('Instanciando dependências necessárias para o serviço.');
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');

  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  createItem(itemName: string) {
    const dataAtual = new Date();

    let diaDaSemanaEmPortugues = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'America/Sao_Paulo' });

    diaDaSemanaEmPortugues = diaDaSemanaEmPortugues.charAt(0).toUpperCase() + diaDaSemanaEmPortugues.slice(1);
    const id = this.listaDeCompra.length + 1
    const item: ItemInterface = {
      id: id,
      nome: itemName,
      data: `${diaDaSemanaEmPortugues} ${new Date().toLocaleString('pt-BR')}`,
      comprado: false
    }
    return item
  }

  addItemIntoList(itemName: string) {
    const item = this.createItem(itemName)
    this.listaDeCompra.push(item)
    this.updateLocalStorage()
  }

  editItemInList(oldItem: ItemInterface, newNameEdit: string) {
    const dataAtual = new Date();

    let diaDaSemanaEmPortugues = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'America/Sao_Paulo' });

    diaDaSemanaEmPortugues = diaDaSemanaEmPortugues.charAt(0).toUpperCase() + diaDaSemanaEmPortugues.slice(1);

    const editedItem: ItemInterface = {
      id: oldItem.id,
      nome: newNameEdit,
      data: `${diaDaSemanaEmPortugues} (${new Date().toLocaleString('pt-BR')})`,
      comprado: oldItem.comprado
    }

    const id = oldItem.id
    this.listaDeCompra.splice(Number(id) - 1, 1, editedItem) //Percorrer o array, -1. E remover apenas 1, no caso, ele mesmo. E substituindo pelo item editadoz

    this.updateLocalStorage()
  }

  updateLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }
}
