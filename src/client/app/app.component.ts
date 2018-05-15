import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import {Subscription} from 'rxjs/Subscription';
import { SearchListService } from './shared/search-list/search-list.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  showLoading: boolean = true;
  okText: string = 'YES';
  cancelText: string = 'NO';
  showPopup:boolean = false;
  errorMessage:string ='';
  errorPopupType:boolean = false;

  private postAddToToolbarToastSubscription: Subscription;

  constructor(public searchListService: SearchListService) {
    console.log('Environment config', Config);
    this.postAddToToolbarToastSubscription = this.searchListService.postAddToToolbarToastState.subscribe((showerrorpopup) => {
      if (showerrorpopup) {
        console.log("showerrorpopup.errorPopup",showerrorpopup.errorPopup);
        this.showPopup = showerrorpopup.errorPopup;
	this.errorMessage = 'Posting Ads Failed !';
        this.errorPopupType = false;
      }
    });
  }
  
  onNotify() {
    this.showPopup = false;
  }

  onNotifyTrue() {
    //do something click Yes button
  }

  onNotifyFalse() {
    //do something click No button
  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    setTimeout(() => {
       this.showLoading = false;
    }, 1000);
  }
    
}
