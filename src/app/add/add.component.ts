import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: false
})
export class AddComponent  implements OnInit{

  newId :number = 0;
  today = new Date();


  constructor(private fruitService: FruitService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.fruitService.getItemsCount().subscribe(data=>
    {
      this.newId = data + 1;
      this.formData.id = this.newId;
    }
    )
  }


  formData: Fruit = {
    id: 0,
    price: 0,
    quantity: 0,
    name: '',
    expiryDate:new Date()
  }

  addItem() {
    this.fruitService.create(this.formData).subscribe({
      next: (data) => {
          this.router.navigate(['/home']);
      },
      error: (er) => {
        console.log(er);
      }
    })
  }

  getMessage(message: string) {
    alert(`New Fruit: ${message} received `);
  }

}
