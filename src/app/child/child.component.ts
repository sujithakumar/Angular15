import { Component, Input, output, Output } from '@angular/core';
import { Fruit } from '../fruit';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() addItem : Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    expiryDate:new Date()
  };

  newItemEmit = output<string>(); 

  addNewItem(value: string) {
    this.newItemEmit.emit(value);
  }

}

