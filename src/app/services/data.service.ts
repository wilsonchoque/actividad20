import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements  OnInit{

  urlBase = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getMostrar(){
    return this.http.get<any>(this.urlBase);
  }
  
}
