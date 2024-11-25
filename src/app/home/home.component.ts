import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:false
})
export class HomeComponent implements OnInit {
 
  selectedIndex :number | undefined;
  allFruits : Fruit[] = [];
  constructor(private fruitService:FruitService){
  }

  ngOnInit(): void{
    this.fruitService.fetchAll().subscribe((data) =>{
      this.allFruits = data;
      this.fruitService.setItemsCount(data.length);
    })
  }

  deleteItem(id:any){
    this.fruitService.delete(id).subscribe({
      next:(data)=>{
        this.allFruits = this.allFruits.filter(x=>x.id != id);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  highlight(i:number){
    this.selectedIndex = i;
  }
}
