import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Reklamacja } from '../reklamacja/reklamacja';
import { Klient } from '../reklamacja/klient';
import { Kontakt } from '../kontakt/kontakt';
import { Umowapoczta } from '../kontakt/umowapoczta';
import 'rxjs/add/operator/map'
import { identifierModuleUrl } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { textChangeRangeIsUnchanged } from 'typescript';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-edytujreklamacje',
  templateUrl: './edytujreklamacje.component.html',
  styleUrls: ['./edytujreklamacje.component.css']
})
export class EdytujreklamacjeComponent implements OnInit {

  wybranezamowienie = '';
  parametr_numer_zamowienia = '';
  itemsCollection: AngularFirestoreCollection<Reklamacja>;
  public items: Observable<Reklamacja[]>;

  itemDoc;
  szczegolyReklamacji;

  public wybranareklamacja = new Reklamacja();
  public nowareklamacja = new Reklamacja();
  n = 0;

  adres = "";
  parameters = '';
  parameters1 = '{"order_id": ';
  parameters2 = '}';
  public body_string = '';
  public body0 = 'token=3000609-3002875-6D6OG2CR1IKZ06X5W64E4120NQ4MU2CHJ98GL78T8KBXXSJ5VKBD91LO8ICZ9QPM&method=getOrders&parameters=';

  public klient = new Klient();

  public kontakt = new Kontakt();

  public umowapoczta = new Umowapoczta();

  private sub: any;

  @Input() sortowanie: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, public firestore: AngularFirestore){

    this.itemsCollection = this.firestore.collection('reklamacja');

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
  
  if (this.wybranezamowienie === '' || !this.wybranezamowienie)
  {
    this.nowareklamacja.numer_zamowienia = this.szczegolyReklamacji.value.numer_zamowienia;
    this.nowareklamacja.data  = new Date(this.szczegolyReklamacji.value.data);
    //this.nowareklamacja.data  = this.szczegolyReklamacji.value.data;
    this.nowareklamacja.status = this.szczegolyReklamacji.value.status;
    this.nowareklamacja.uwagi = this.szczegolyReklamacji.value.uwagi;
    this.nowareklamacja.id = '';

    this.addItem(this.nowareklamacja);
  }
  else {
    this.nowareklamacja.numer_zamowienia = this.szczegolyReklamacji.value.numer_zamowienia;
    this.nowareklamacja.data  = new Date(this.szczegolyReklamacji.value.data);
    this.nowareklamacja.status = this.szczegolyReklamacji.value.status;
    this.nowareklamacja.uwagi = this.szczegolyReklamacji.value.uwagi;
    this.nowareklamacja.id = '';

    this.updateItem(this.nowareklamacja);
  }
  window.location.href = 'http://localhost:4200/reklamacja';
}

addItem(reklamacja: Reklamacja)
{
  //this.itemsCollection.add(reklamacja);
  this.itemsCollection.add(Object.assign({}, reklamacja));
}

updateItem(reklamacja: Reklamacja)
{
  this.itemDoc = this.firestore.doc(`reklamacja/${this.wybranezamowienie}`);
  this.itemDoc.update(Object.assign({}, reklamacja));
}

variable2 = true;
variable = false;

showContent() 
{
  this.variable = true;
}


public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 800;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('etykieta.pdf'); // Generated PDF   
    });  
  }  


ngOnInit(): void {

  this.sub = this.route.params.subscribe(params => 
    {
      this.wybranezamowienie = params['id'];   
    });

    if (this.wybranezamowienie === '' || !this.wybranezamowienie)
    {
      this.variable2 = false;
    }
    
    this.items.forEach(element => {
      element.forEach(n => {
        if (this.wybranezamowienie == n.id)
          {
            this.wybranareklamacja = n;
            this.wybranareklamacja.data =  this.wybranareklamacja.data.toDate();
            if (this.wybranareklamacja.numer_zamowienia)
            {
              this.parameters = this.parameters1 + this.wybranareklamacja.numer_zamowienia + this.parameters2;
              this.body_string = this.body0 + this.parameters;
            }
           
            var body = this.body_string;
            this.adres = "https://api.baselinker.com/connector.php";
    
            const httpOptions = {
              headers: new HttpHeaders({  
              'Content-Type': 'application/x-www-form-urlencoded',
              })
            };

            this.http.post(this.adres,body,httpOptions).subscribe((data: any ) => {
              this.klient.nazwa = data.orders[0].delivery_fullname;
              this.klient.kod_pocztowy = data.orders[0].delivery_postcode;
              this.klient.miejscowosc = data.orders[0].delivery_city;
              this.klient.adres = data.orders[0].delivery_address;
              this.klient.email = data.orders[0].email;
              this.klient.telefon = data.orders[0].phone;
            })
          }
        })
    });

    this.szczegolyReklamacji = new FormGroup({
      numer_zamowienia: new FormControl(''),
      data: new FormControl(''),
      status: new FormControl(''),
      uwagi: new FormControl(''),
      zdjecia: new FormControl(''),
      id: new FormControl(''),
    });


}
}
