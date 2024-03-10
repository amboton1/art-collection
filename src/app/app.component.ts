import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art-collection';
  isLoggedIn = this.authService.instance.getActiveAccount() !== null;
  
  constructor(private authService: MsalService) {}
}
