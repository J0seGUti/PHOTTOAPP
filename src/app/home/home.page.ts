import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarARegistro() {
    this.router.navigate(['/registro']);
  }
  navegarAPhotos() {
    this.router.navigate(['/photos']);
  }
  redirigirALogin() {
    this.router.navigate(['/login']);
  }
  redirectToApiPage() {
    this.router.navigateByUrl('/api');
  }
}
