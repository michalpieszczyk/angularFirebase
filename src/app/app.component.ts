import {Component, ViewEncapsulation} from '@angular/core';
import { AuthService } from './services/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
   }

   onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: serverData.serverName,
       content: serverData.serverContent
     });
   }
   constructor(public auth: AuthService) {}

}

