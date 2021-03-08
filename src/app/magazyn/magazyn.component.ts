import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-magazyn',
  templateUrl: './magazyn.component.html',
  styleUrls: ['./magazyn.component.css']
})
export class MagazynComponent implements OnInit {

  public items: Observable<any[]>;


  wybranakategoria = '';
  response = {};

  @Input() sortowanie: any[];

   constructor(private route: ActivatedRoute, private http: HttpClient, private firestore: AngularFirestore,private db: AngularFirestore){
    this.items = db.collection('magazyn').valueChanges();
   }


  private sub: any;
  idParam: string = "";

  ngOnInit(): void {

    //this.db.collection('reklamacja').valueChanges().subscribe(val => console.log(val));
    //this.db.collection('reklamacja').valueChanges().subscribe(data => this.reklamacje);

    //this.items = this.db.collection('reklamacja').valueChanges();


    this.sub = this.route.params.subscribe(params => 
      {
        this.wybranakategoria = params['sortowanie'];   
      });


    



    }
}
