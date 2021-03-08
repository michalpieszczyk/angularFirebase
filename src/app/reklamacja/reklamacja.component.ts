import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Reklamacja } from './reklamacja';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { Observable } from 'rxjs';
import { EdytujreklamacjeComponent } from '../edytujreklamacje/edytujreklamacje.component';

@Component({
  selector: 'app-reklamacja',
  templateUrl: './reklamacja.component.html',
  styleUrls: ['./reklamacja.component.css']
})
export class ReklamacjaComponent implements OnInit {

  public items: Observable<any[]>;

 
  wybranakategoria = '';
  reklamacje: Observable<Reklamacja[]>;
 
  @Input() sortowanie: any[];

   constructor(private route: ActivatedRoute, private http: HttpClient, private firestore: AngularFirestore,private db: AngularFirestore){
    this.items = db.collection('reklamacja').valueChanges();
   }


  private sub: any;

  ngOnInit(): void {

    //this.db.collection('reklamacja').valueChanges().subscribe(val => console.log(val));
    //this.db.collection('reklamacja').valueChanges().subscribe(data => this.reklamacje);

    //this.items = this.db.collection('reklamacja').valueChanges();
   

    this.sub = this.route.params.subscribe(params => 
      {
        this.wybranakategoria = params['sortowanie'];   
      });



    
};
}

