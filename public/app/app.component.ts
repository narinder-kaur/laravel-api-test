import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<ul>
<li><a routerLink="/">home</a></li>
<li><a routerLink="/about">about</a></li>
</ul>
<hr>
<router-outlet></router-outlet>`,
})
export class AppComponent  { email='narinder@gmail.com';name = 'Angular'; }
