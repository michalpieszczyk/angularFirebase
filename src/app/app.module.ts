import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularzComponent } from './formularz/formularz.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';
import { UserRegistrationPanelComponent } from './user-registration-panel/user-registration-panel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { OnasComponent } from './onas/onas.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { WizytowkaComponent } from './wizytowka/wizytowka.component';
import { ListaComponent } from './lista/lista.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { ReklamacjaComponent } from './reklamacja/reklamacja.component';
import { MagazynComponent } from './magazyn/magazyn.component';
import { EdytujproduktComponent } from './edytujprodukt/edytujprodukt.component';
import { EdytujreklamacjeComponent } from './edytujreklamacje/edytujreklamacje.component';

const config = {
  apiKey: "AIzaSyCcw_pQ616fVM2efYdtM4iwlHKKcoft6x4",
  authDomain: "angularfirebase-ac250.firebaseapp.com",
  databaseURL: "https://angularfirebase-ac250.firebaseio.com",
  projectId: "angularfirebase-ac250",
  storageBucket: "angularfirebase-ac250.appspot.com",
  messagingSenderId: "108651915360",
  appId: "1:108651915360:web:6ef82ff49ad3e50c43bb05"}

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    UserRegistrationPanelComponent,
    FormularzComponent,
    FooterComponent,
    HeaderComponent,
    RegulaminComponent,
    OnasComponent,
    KontaktComponent,
    FrontPageComponent,
    WizytowkaComponent,
    ListaComponent,
    SuperSecretComponent,
    ReklamacjaComponent,
    MagazynComponent,
    EdytujproduktComponent,
    EdytujreklamacjeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
   ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
