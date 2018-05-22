import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { SearchListService } from '../shared/search-list/search-list.service';
import { Router } from '@angular/router';

declare var jQuery: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  trendingAdsData: any[] = [];
  viewOfferDetailsData:any ={};

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService, public searchListService: SearchListService,  private router: Router) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
     this.searchListService.rootSet = 'login';
     jQuery("#card").flip({
	  trigger: 'manual'
     });
  }
  signUpClick() {
	jQuery(".signin_form").css('opacity', '0');
	jQuery(".signup_form").css('opacity', '100');	
	jQuery("#card").flip(true);
	return false;
  }
  loginClick() {
	jQuery(".signin_form").css('opacity', '100');
	jQuery(".signup_form").css('opacity', '0');
	
  	jQuery("#card").flip(false);
	
	return false;
  }
}
