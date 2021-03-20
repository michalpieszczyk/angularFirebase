import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { StartPageComponent } from './start-page/start-page.component';
import { UserRegistrationPanelComponent } from './user-registration-panel/user-registration-panel.component';
import { OnasComponent } from './onas/onas.component';
import { RegulaminComponent} from './regulamin/regulamin.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { WizytowkaComponent } from './wizytowka/wizytowka.component';
import { ListaComponent } from './lista/lista.component';
import { ReklamacjaComponent } from './reklamacja/reklamacja.component';
import { EdytujreklamacjeComponent } from './edytujreklamacje/edytujreklamacje.component';
import { EdytujproduktComponent } from './edytujprodukt/edytujprodukt.component';
import { MagazynComponent } from './magazyn/magazyn.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';
import { GenerujnaklejkeComponent } from './generujnaklejke/generujnaklejke.component'

const routes: Routes = [
  { path:'home', component: StartPageComponent  },
  { path:'formularz', component: FormularzComponent},
  { path:'register', component: UserRegistrationPanelComponent,  },
  { path:'onas', component: OnasComponent,  },
  { path:'regulamin', component: RegulaminComponent,  },
  { path:'kontakt', component: KontaktComponent,  }, 
  { path:'wizytowka', component: WizytowkaComponent, },
  { path:'reklamacja', component: ReklamacjaComponent, }, 
  { path:'reklamacja/:sortowanie', component: ReklamacjaComponent, }, 
  { path:'magazyn', component: MagazynComponent, },
  { path:'magazyn/:sortowanie', component: MagazynComponent, },
  { path:'lista', component: ListaComponent, },
  { path:'lista/:kategoria', component: ListaComponent, },
  { path: 'wizytowka/:id', component: WizytowkaComponent},
  { path: 'edytujreklamacje', component: EdytujreklamacjeComponent},
  { path: 'edytujreklamacje/:id', component: EdytujreklamacjeComponent},
  { path: 'edytujprodukt', component: EdytujproduktComponent},
  { path: 'edytujprodukt/:id', component: EdytujproduktComponent},
  { path: 'generujnaklejke', component: GenerujnaklejkeComponent},
  { path: 'generujnaklejke/:id', component: GenerujnaklejkeComponent},
  { path:'**', component: FrontPageComponent,  },

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
      
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
