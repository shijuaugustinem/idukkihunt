import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchListService } from '../../shared/search-list/search-list.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  /**
   * Creates an instance of the ToolbarComponent with the injected
   * router.
   *
   */
  constructor(public searchListService: SearchListService, private router: Router) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    if (window.location.pathname == '/') {
      this.searchListService.rootSet = 'home';
    } else if (window.location.pathname == '/login'){
      this.searchListService.rootSet = 'login'
    }
  }
  logoClick() {
     if(this.searchListService.showmoreinfo) {
        this.searchListService.showmoreinfo = false;
     } else {
        this.router.navigate(['/']); 
     }
  }
  loginClick() {
     this.router.navigate(['login']);  
  }
}

