import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ButtonComponent } from './components/button/button.component';
import { TextinputComponent } from './components/textinput/textinput.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokedataComponent } from './components/pokedata/pokedata.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    ButtonComponent,
    TextinputComponent,
    SecondpageComponent,
    NavigationComponent,
    PokedataComponent,
    ErrormessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({ searchValue: simpleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
