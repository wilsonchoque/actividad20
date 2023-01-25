import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:any = [];
  constructor(private traerLista : DataService ){}
  ngOnInit(){
    this.traerLista.getMostrar().subscribe( 
      res => {
        console.log(res)
        this.lista = res;
      }, err => {

      }
    )
  };

}
