import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostadComponent } from './postad.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'postad', component: PostadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PostadRoutingModule { }
