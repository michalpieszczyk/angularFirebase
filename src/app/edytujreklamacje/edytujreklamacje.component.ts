import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Reklamacja } from '../reklamacja/reklamacja';
import 'rxjs/add/operator/map'
import { identifierModuleUrl } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edytujreklamacje',
  templateUrl: './edytujreklamacje.component.html',
  styleUrls: ['./edytujreklamacje.component.css']
})
export class EdytujreklamacjeComponent implements OnInit {

  wybranezamowienie = '';
  itemsCollection: AngularFirestoreCollection<Reklamacja>;
  public items: Observable<Reklamacja[]>;

  szczegolyReklamacji;

  public wybranareklamacja = new Reklamacja();

  n = 0;

  private sub: any;

  @Input() sortowanie: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, public firestore: AngularFirestore){

    this.itemsCollection = this.firestore.collection('reklamacja', ref => ref.orderBy('numer_zamowienia'));

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


onSubmit(){
  
    this.wybranareklamacja.numer_zamowienia = this.szczegolyReklamacji.value.numer_zamowienia;
    this.wybranareklamacja.data = this.szczegolyReklamacji.value.data;
    this.wybranareklamacja.status = this.szczegolyReklamacji.value.status;
    this.wybranareklamacja.uwagi = this.szczegolyReklamacji.value.uwagi;

    console.log(this.wybranareklamacja);
    this.addItem(this.wybranareklamacja);
  
}

addItem(reklamacja: Reklamacja)
{
  //this.itemsCollection.add(reklamacja);
  this.itemsCollection.add(Object.assign({}, reklamacja));
}

ngOnInit(): void {
  
  this.sub = this.route.params.subscribe(params => 
    {
      this.wybranezamowienie = params['id'];   
    });
    


    this.items.forEach(element => {
      element.forEach(n => {
        if (this.wybranezamowienie == n.id)
          {
            this.wybranareklamacja = n;
            //console.log(this.wybranareklamacja);
          }
        }
        )
    });

    this.szczegolyReklamacji = new FormGroup({
      numer_zamowienia: new FormControl(''),
      data: new FormControl(''),
      status: new FormControl(''),
      uwagi: new FormControl(''),
      zdjecia: new FormControl(''),
    });




}
}
