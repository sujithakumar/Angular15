import { HttpClient } from '@angular/common/http';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { concatMap, distinctUntilChanged, filter, forkJoin, from, interval, map, mergeMap, of, switchMap, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  mySerchResults: any;
  showForks = false;
  showMe = false;
  fork : any;
  fork1 : any;
  fork2 : any;
  distinctvalues =0;

  constructor(private http: HttpClient) {

  }
  // these items are to be subscribed - otherwise use ASYNC in html
  myOfObservable = of([1, 2, 3, 4, 5]);
  myFromObservable = from(["Hello"]);
  myFromObservable2 = from("Hello");

  mapData: any;
  concatMapData: any;
  mergeMapData: any;
  SwitchMapData: any;
  url1 = `http://localhost:8000/fruits/`;
  url = 'https://jsonplaceholder.typicode.com/posts/';

  //using subscription
  subs: number = 0;
  //observable1 = interval(100); //idefinetly run for every 100 milli sec 

  observable1 = interval(200).pipe(
    // tap(x => {
    //   console.log("I am all good");
    // }),
    filter(x => x > 0),
    //map(x => x * 2),
    take(5)
  );

  ngOnInit(): void {
    this.observable1.subscribe((x: number) => {
      this.subs = x;
    });

    //Map
    this.observable1.pipe(
      map((id) => {
        return this.http.get(`${this.url}${id}`);
      })
    ).subscribe((data) => {
      data.subscribe({
        next: (data) => {
          //console.log('mapData', data);
          this.mapData = data;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    );

    //Concat Map
    this.observable1.pipe(
      concatMap((id) => {
        return this.http.get(`${this.url}${id}`);
      })
    ).subscribe({
      next: (data) => {
        //console.log('concatMapData', data);
        this.concatMapData = data;
      },
      error: (err) => {
        console.log(err);
      }
    });


    //merge map
    this.observable1.pipe(
      mergeMap((id) => {
        return this.http.get(`${this.url}${id}`);
      })
    ).subscribe({
      next: (data) => {
        //console.log('mergeMapData', data);
        this.mergeMapData = data;
      },
      error: (err) => {
        console.log(err);
      }
    });


    //Switch map
    this.observable1.pipe(
      switchMap((id) => {
        return this.http.get(`${this.url}${id}`);
      })
    ).subscribe({
      next: (data) => {
        //console.log('SwitchMapData', data);
        this.SwitchMapData = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  search() {
    //using map
    of(this.searchTerm).pipe(
      switchMap((id) => {
        return this.http.get(`${this.url}${id}`);
      })
    ).subscribe(data => {
      this.mySerchResults = data;
    })

    //using debouncetime

  }

  //forkjoin ex
  forkjoin() {
    this.showForks = false;

    let result = forkJoin({
      request1: this.http.get(`${this.url1}1`),
      request2: this.http.get(`${this.url1}2`),
      request3: this.http.get(`${this.url1}3`)
    });

    // result.subscribe({
    //   next: (value) => {
      //this.showForks = true;
    //     this.fork  = value;
    //   },
    //   complete: () => console.log('This is how it ends!'),
    //   error:(er)=>console.log("err",er.message)
    // }
    // )

    result.subscribe(({request1,request2,request3})=>{
      this.showForks = true;
      this.fork1 = request1;
      this.fork2 = request2;
    })

  }

  combineLatest(){

  }

  DistinctUntilChanged(){
    let src = from([1,1,1,1,1,10,2,1,1,10]);
    src.pipe(
      distinctUntilChanged()
    ).subscribe(data=>{
       console.log(data);
    })
  }

}
