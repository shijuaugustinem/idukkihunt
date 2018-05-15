import { Component } from '@angular/core';
import { SearchListService } from '../shared/search-list/search-list.service';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded PostadComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-postad',
  templateUrl: 'postad.component.html',
  styleUrls: ['postad.component.css']
})
export class PostadComponent { 
  
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public searchListService: SearchListService,  private router: Router) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }
  addSubmit() {
     this.searchListService.sumitAds(true);
     //this.router.navigate(['/']);  
  }
}
