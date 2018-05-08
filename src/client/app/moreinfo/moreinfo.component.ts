import {Component, Input, Output, EventEmitter} from '@angular/core';

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
    /**
   * Get the names OnInit
   */
  ngOnInit() {
     console.log("moreInfoData",this.moreInfoData);
     jQuery('.flexslider').flexslider({
	animation: "slide",
	controlNav: "thumbnails"
     });
  }
}
