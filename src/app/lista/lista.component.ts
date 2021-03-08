import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ElementListy } from './elementlisty';
import { Component, OnInit, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  adres = '';
  wybranakategoria = '';
  response = {};
  lista = [];
  listagotowa = [];

  @Input() kategoria: any[];

   constructor(private route: ActivatedRoute, private http: HttpClient){ }


  private sub: any;
  idParam: string = "";

  ngOnInit(): void {

    this.adres = "http://localhost:8000/api/businesscardpublic/";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.sub = this.route.params.subscribe(params => 
      {
        this.wybranakategoria = params['kategoria'];
        if (this.wybranakategoria!='wszyscy')
        {
          this.adres = "http://localhost:8000/api/businesscardpublic/?category="+this.wybranakategoria;
        }
        
        this.http.get(this.adres,httpOptions).subscribe((data: ElementListy[]) => {this.lista = data});
      });


    // this.sub = this.route.params.subscribe(params => {this.idParam = params['kategoria']});
  
    // 
    //   console.log(this.wybranakategoria);

    // this.http.get(this.adres,httpOptions).subscribe((data: ElementListy[]) => {this.lista = data});
      // if (this.kategoria != null)
      // {
      //  this.adres = "http://localhost:8000/api/businesscardpublic?category="+this.kategoria+"/";
      // }
    
  };
  }

