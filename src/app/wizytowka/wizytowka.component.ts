import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Wizytowka } from './wizytowka';
import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-wizytowka',
  templateUrl: './wizytowka.component.html',
  styleUrls: ['./wizytowka.component.css']
})
export class WizytowkaComponent implements OnInit {


  response = {};
  wizytowka = new Wizytowka();

  constructor(private route: ActivatedRoute, private http: HttpClient) { 

  }

  private sub: any;
  idParam: string = "";
  ngOnInit() {

    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.sub = this.route.params.subscribe(params => {
      this.idParam = params['id'];
      this.http.get("http://localhost:8000/api/businesscardpublic/"+this.idParam+"/",httpOptions).subscribe((data: Wizytowka) => {
        this.response = data;
        this.wizytowka = data;


      });
    
      console.log(this.response);

    })
    
  }
}


