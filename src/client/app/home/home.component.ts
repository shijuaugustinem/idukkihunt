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
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName = '';
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
     this.getTrendingAds();
  }

  /**
   * Handle the nameListService observable
   */
  getTrendingAds() {
    this.nameListService.gettrendingads()
      .subscribe(
        response => this.showtrendingads(response),
        error => this.errorMessage = <any>error
      );
  }
 showtrendingads(data: any) {
   console.log("data",data);
   const datalen = data.length-1;
   if(datalen <= 3) {
     this.trendingAdsData.push(data);
   } else {
      let index = 0;
      for(let i = 0; i < datalen; i++) {
         const adsData = [];
         for(let j = 0; j < 4; j++) {
	    if(index <= datalen) { 
               adsData.push(data[index]);
	       index++;
	    }
	 }
	i = index;
	this.trendingAdsData.push(adsData);
      }
   }
   console.log("trendingAdsData",this.trendingAdsData)
   setTimeout(()=> {
	 jQuery("#flexiselDemo3").flexisel({
	    visibleItems: 1,
	    itemsToScroll: 1,
	    animationSpeed: 400,
	    infinite: true,
	    navigationTargetSelector: null,
	    autoPlay: {
	      enable: false,
	      interval: 5000,
	      pauseOnHover: true
	    },
	    responsiveBreakpoints: { 
	      portrait: { 
		changePoint:480,
		visibleItems: 1,
		itemsToScroll: 1
	      }, 
		landscape: { 
		changePoint:640,
		visibleItems: 2,
		itemsToScroll: 2
	      },
		tablet: { 
		changePoint:768,
		visibleItems: 3,
		itemsToScroll: 3
	      }
	    }
	  });
   }, 800)
 }
 categoryClick(data:any) {
    this.router.navigate(['category']);  
 }
 ShowMoreInformation(data:any) {
    console.log("Dataaaa",data);
    this.searchListService.showmoreinfo = true;
    this.viewOfferDetailsData = data;
 }
}
