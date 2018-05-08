import { NgModule, Directive } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { MoreInfoComponent } from '../moreinfo/moreinfo.component';

@Directive({
  selector:'[MoreInfoComponent]'
})

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, MoreInfoComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
