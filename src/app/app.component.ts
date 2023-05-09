import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'FightMilk';
  show = true;
  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  handleRouteChange = () => {
    // console.log(this.router.url.includes('store'));
    // if (this.router.url.includes('store')) {
    //  console.log('on store');
    // }
    this.show = (this.router.url.includes('store') || this.router.url.includes('checkout'));
  }

  expandNavMenu = () => {
    return this.router.url.includes('store');

  }
  constructor(private router: Router) {
    // router.events.subscribe((val) => console.log(val));
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }
}
