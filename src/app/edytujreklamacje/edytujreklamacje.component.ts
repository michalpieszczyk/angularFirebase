import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Reklamacja } from '../reklamacja/reklamacja';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-edytujreklamacje',
  templateUrl: './edytujreklamacje.component.html',
  styleUrls: ['./edytujreklamacje.component.css']
})
export class EdytujreklamacjeComponent implements OnInit {

  wybranezamowienie = '';
  public items: Observable<Reklamacja[]>;

  private sub: any;

  @Input() sortowanie: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, public firestore: AngularFirestore){
  //  this.items = firestore.collection('reklamacja').valueChanges();
   this.items = this.firestore.collection('reklamacja').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Reklamacja;
        data.id = a.payload.doc.id;
        return data;

  })
    })

   }

getItems(){
  return this.items;
}


ngOnInit(): void {
  
  
  this.sub = this.route.params.subscribe(params => 
    {
      this.wybranezamowienie = params['id'];   
    });
}


}
