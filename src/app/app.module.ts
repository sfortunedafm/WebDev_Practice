import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { StoreComponent } from './store/store.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';


import {MatInputModule} from "@angular/material/input";
import {ErrorStateMatcher} from '@angular/material/core';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    StoreComponent,
    SubscribeComponent,
    CheckoutComponent,
    VideoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    FlexLayoutModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
