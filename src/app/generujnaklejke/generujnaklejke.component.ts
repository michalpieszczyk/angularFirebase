import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, VERSION } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { from, Observable } from 'rxjs';
import { Produkt } from '../magazyn/produkt';
// 
@Component({
  selector: 'app-generujnaklejke',
  templateUrl: './generujnaklejke.component.html',
  styleUrls: ['./generujnaklejke.component.css']
})
export class GenerujnaklejkeComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
 
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

  constructor(private route: ActivatedRoute, private http: HttpClient, public firestore3: AngularFirestore){

    this.itemsCollection = this.firestore3.collection('magazyn');

  //  this.items = firestore.collection('reklamacja').valueChanges();
   this.items = this.firestore3.collection('magazyn').snapshotChanges().map(changes => {
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


}
}

