import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogTestComponent } from './log-test/log-test.component';
import { LogService } from './shared/log.service';
import { LogPublishersService } from "./shared/log-publishers.service";
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login/login-page.component';
import { SignupPageComponent } from './signup/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    LogTestComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array
    HttpClientModule,
  ],
  providers: [LogService, LogPublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
