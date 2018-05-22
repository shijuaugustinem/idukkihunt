import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './errorpopup/error.component';

import { PostadModule } from './postad/postad.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [BrowserModule, CoreModule,
    HttpClientModule, AppRoutingModule,
    PostadModule, HomeModule, LoginModule, CategoryModule,
    SharedModule.forRoot()],
  exports: [ErrorComponent],
  declarations: [AppComponent, ErrorComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
