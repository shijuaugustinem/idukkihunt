import {Component, Input, Output, EventEmitter} from '@angular/core';
import { SearchListService } from '../shared/search-list/search-list.service';

declare var jQuery: any;

/**
 * This class represents the More info component.
 */
@Component({
  moduleId: module.id,
  selector: 'moreinfo-component',
  templateUrl: 'moreinfo.component.html',
  styleUrls: ['moreinfo.component.css'],
})
export class MoreInfoComponent { 
  @Input() moreInfoData: any;

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

   /* Creates an instance of the HomeComponent with the injected
   * SearchListService.
   *
   * @param {SearchListService} searchListService - The injected SearchListService.
   */
  constructor(public searchListService: SearchListService) {}
   /**
   * Get the names OnInit
   */
  ngOnInit() {
     console.log("moreInfoData",this.moreInfoData);
     window.scrollTo(0, 0);
     jQuery('.flexslider').flexslider({
	animation: "slide",
	controlNav: "thumbnails"
     });
  }
  closePopup() {
     this.searchListService.showmoreinfo = false;
  }
}
