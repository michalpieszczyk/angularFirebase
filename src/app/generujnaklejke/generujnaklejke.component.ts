import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, VERSION } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { from, Observable } from 'rxjs';
import { Produkt } from '../magazyn/produkt';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';

// 
@Component({
  selector: 'app-generujnaklejke',
  templateUrl: './generujnaklejke.component.html',
  styleUrls: ['./generujnaklejke.component.css']
})
export class GenerujnaklejkeComponent implements OnInit {

  pdfMake: any;
  wybranezamowienie = ''; 

  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://localhost:4200/generujnaklejke/' + this.wybranezamowienie;

  
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
      this.value = 'http://localhost:4200/generujnaklejke/' + this.wybranezamowienie;
    });
    


    this.items.forEach(element => {
      element.forEach(n => {
        if (this.wybranezamowienie == n.id)
          {
            this.wybranyprodukt = n; 
          }
        })
    });
}

public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('naklejka.pdf'); // Generated PDF   
    });  
  }  

}

