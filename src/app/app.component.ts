import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" [routerLink]="['/']">{{pageTitle}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/welcome']">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/albums']">Album List</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Top 100 Hip-Hop Albums - Angular Project';
}
