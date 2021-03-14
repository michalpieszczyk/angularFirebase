import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


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
  

  constructor() { }

  ngOnInit(): void {
  }

}
