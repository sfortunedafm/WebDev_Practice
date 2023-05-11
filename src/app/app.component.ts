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
  showStoreNav = false;
  showCart = false;
  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  displayStoreNav = () => {
    // console.log(this.router.url.includes('store'));
    // if (this.router.url.includes('store')) {
    //  console.log('on store');
    // }
    this.showStoreNav = (this.router.url.includes('store') || this.router.url.includes('checkout'));
    this.showCart = this.router.url.includes('checkout');
  }

  checkoutContinue = () => {
    this.showCart = this.router.url.includes('checkout');
  }

  constructor(private router: Router) {
    // router.events.subscribe((val) => console.log(val));
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.displayStoreNav() )
  }
}
