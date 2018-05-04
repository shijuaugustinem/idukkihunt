import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostadComponent } from './postad.component';
import { PostadRoutingModule } from './postad-routing.module';

@NgModule({
  imports: [CommonModule, PostadRoutingModule],
  declarations: [PostadComponent],
  exports: [PostadComponent]
})
export class PostadModule { }
