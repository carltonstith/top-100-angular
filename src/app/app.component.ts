import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>
  <am-albums></am-albums>
</div>
  `
})
export class AppComponent {
  pageTitle: string = 'Top 100 Angular';
}
