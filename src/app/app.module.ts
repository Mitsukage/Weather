import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { CountryComponent } from './country/country.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { ModalComponent } from './modal/modal.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {countryReducer} from './store/reducers/countries.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainBarComponent,
    CountryComponent,
    SearchPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({countryPage: countryReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
