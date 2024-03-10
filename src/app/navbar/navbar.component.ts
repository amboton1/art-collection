import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { ToastrService } from 'ngx-toastr';
import { ArtworksService } from '../art/artworks.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authService: MsalService, private artService: ArtworksService, private toastr: ToastrService, private router: Router) { }

  isLoggedIn(): boolean {    
    return this.authService.instance.getActiveAccount() !== null
  }

  login() {
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
        this.router.navigate(['/arts']);
        this.toastr.success('Logged in!');
      });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.toastr.success('Logged out!');
    });
  }
}
