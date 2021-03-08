import { Component, HostBinding, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { Wizytowka } from '../wizytowka/wizytowka';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Reklamacja } from '../reklamacja/reklamacja';

@Component({
  selector: 'app-edytujprodukt',
  templateUrl: './edytujprodukt.component.html',
  styleUrls: ['./edytujprodukt.component.css']
})
export class EdytujproduktComponent implements OnInit {

  public items: Observable<any[]>;


 
  constructor(private route: ActivatedRoute, private http: HttpClient, private firestore: AngularFirestore){
    //this.items = db.collection('reklamacja').valueChanges();
   } 

   ngOnInit() {}

        
}


