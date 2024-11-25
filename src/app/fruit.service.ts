import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  baseURL = 'http://localhost:8000/fruits'
  public itemsCount = new BehaviorSubject<number>(0);

  setItemsCount(value:number){
    this.itemsCount.next(value)
  }
  getItemsCount(){
    return this.itemsCount.asObservable()
  }

  constructor(private http: HttpClient) { }

  fetchAll(){
    let newURL = this.baseURL;
    return this.http.get<Fruit[]>(newURL);
  }

  create(data:Fruit){
   let newURL = this.baseURL;
    return this.http.post(newURL,data);
  }

  getById(id:number){
    let newURL = this.baseURL+"/"+id;
    return this.http.get<Fruit>(newURL);
  }

  update(data:Fruit){
    let newURL = `${this.baseURL}/${data.id}`;
    return this.http.put<Fruit>(newURL,data);
  }

  delete(id:number){
    let newURL = this.baseURL+"/"+id;
    return this.http.delete(newURL);
  }
}
