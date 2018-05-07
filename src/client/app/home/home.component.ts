import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

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

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

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
         animationSpeed: 1000,
         autoPlay: true,
         autoPlaySpeed: 5000,
         pauseOnHover: true,
         enableResponsiveBreakpoints: true,
         responsiveBreakpoints: {
             portrait: {
                 changePoint: 480,
                 visibleItems: 1
             },
             landscape: {
                 changePoint: 640,
                 visibleItems: 1
             },
             tablet: {
                 changePoint: 768,
                 visibleItems: 1
             }
         }
     }); 
   }, 500)
 }
}
