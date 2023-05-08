import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";
import {StoreComponent} from "./store/store.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";

const routes: Routes =[
  { path: '', redirectTo: '/blog', pathMatch: 'full' }, // TODO not working
  {path: 'blog', component: BlogComponent},
  {path: 'store', component: StoreComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'subscribe', component: SubscribeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
