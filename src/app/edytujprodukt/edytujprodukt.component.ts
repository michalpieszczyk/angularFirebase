import { Component, HostBinding, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Produkt } from '../magazyn/produkt';


@Component({
  selector: 'app-edytujprodukt',
  templateUrl: './edytujprodukt.component.html',
  styleUrls: ['./edytujprodukt.component.css']
})
export class EdytujproduktComponent implements OnInit {

  wybranezamowienie = '';
  itemsCollection: AngularFirestoreCollection<Produkt>;
  public items: Observable<Produkt[]>;

  itemDoc;
  szczegolyProduktu;

  public wybranyprodukt = new Produkt();
  public nowyprodukt = new Produkt();
  n = 0;

  private sub: any;

  @Input() sortowanie: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, public firestore2: AngularFirestore){

    this.itemsCollection = this.firestore2.collection('magazyn');

  //  this.items = firestore.collection('reklamacja').valueChanges();
   this.items = this.firestore2.collection('magazyn').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Produkt;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }


getItems(){
  return this.items;
}


onSubmit2(){
  console.log('Wybrane zamowienie' + this.wybranezamowienie);
  if (this.wybranezamowienie === '' || !this.wybranezamowienie)
  {
    this.nowyprodukt.nazwa = this.szczegolyProduktu.value.nazwa;
    this.nowyprodukt.sztuk  = this.szczegolyProduktu.value.sztuk
    this.nowyprodukt.stan = this.szczegolyProduktu.value.stan;
    this.nowyprodukt.cena_zakupu = this.szczegolyProduktu.value.cena_zakupu;
    this.nowyprodukt.notatka = this.szczegolyProduktu.value.notatka;
    this.nowyprodukt.id = '';

    console.log('Dodaje nowy produkt');
    this.addItem(this.nowyprodukt);
    console.log(this.nowyprodukt);
  }
  else {
    this.nowyprodukt.nazwa = this.szczegolyProduktu.value.nazwa;
    this.nowyprodukt.sztuk  = this.szczegolyProduktu.value.sztuk
    this.nowyprodukt.stan = this.szczegolyProduktu.value.stan;
    this.nowyprodukt.cena_zakupu = this.szczegolyProduktu.value.cena_zakupu;
    this.nowyprodukt.notatka = this.szczegolyProduktu.value.notatka;
    this.nowyprodukt.id = '';

    console.log('Aktualizuje produkt');
    this.updateItem(this.nowyprodukt);
    console.log(this.nowyprodukt);
  }
    

  
}

addItem(produkt: Produkt)
{
  this.itemsCollection.add(Object.assign({}, produkt));
}

updateItem(produkt: Produkt)
{
  this.itemDoc = this.firestore2.doc(`magazyn/${this.wybranezamowienie}`);
  this.itemDoc.update(Object.assign({}, produkt));
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
            this.wybranyprodukt = n; 
          }
        }
        )
    });

    this.szczegolyProduktu = new FormGroup({
      nazwa: new FormControl(''),
      sztuk: new FormControl(''),
      cena_zakupu: new FormControl(''),
      notatka: new FormControl(''),
      stan: new FormControl(''),
      id: new FormControl(''),
    });




}
}


