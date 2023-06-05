import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites.component';
import { ErrorsInterceptor } from './errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorsInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
