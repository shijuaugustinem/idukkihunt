import { NgModule, Directive } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@Directive({
  selector:'[CategoryComponent]'
})

@NgModule({
  imports: [CategoryRoutingModule, SharedModule],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  providers: [NameListService]
})
export class CategoryModule { }
