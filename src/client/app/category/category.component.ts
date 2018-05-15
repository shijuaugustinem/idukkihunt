import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { SearchListService } from '../shared/search-list/search-list.service';

declare var jQuery: any;

/**
 * This class represents the lazy loaded CategoryComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
})
export class CategoryComponent implements OnInit {

  /**
   * Creates an instance of the CategoryComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService, public searchListService: SearchListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
   //  setTimeout(()=> {
	jQuery('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event:any) { // Callback function if tab is switched
                var tab = jQuery(this);
                var info = jQuery('#nested-tabInfo2');
                var name = jQuery('span', info);
                name.text(tab.text());
                info.show();
            }
        });
   //}, 800)
 }
}
