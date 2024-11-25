import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: false
})
export class EditComponent implements OnInit {

  today = new Date();
  formData: Fruit = {
    id: 0,
    price: 0,
    quantity: 0,
    name: '',
    expiryDate:new Date()
  }
  constructor(private fruitService: FruitService, private route: ActivatedRoute, private navigator:Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      let id = Number(data.get('id'));
      this.getdataByID(id);
    })
  }

  getdataByID(id: number) {
    this.fruitService.getById(id).subscribe(data=>{
      this.formData= data;
    });
  }
  editData() {
    this.fruitService.update(this.formData).subscribe({
      next:(data)=>{
        this.navigator.navigate(['/home']);
      },
      error:(er)=>{
        console.log(er);
      }
    })
  }
}
