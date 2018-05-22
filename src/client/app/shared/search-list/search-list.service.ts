import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';
import {Subject} from 'rxjs/Subject';

// import { tap } from 'rxjs/operators/tap'; // for debugging

export interface showerrorpopup {
  errorPopup: any;
}

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SearchListService {
  showmoreinfo:boolean = false;
  rootSet :string = '';
  private postAddToToolbarSubject = new Subject<showerrorpopup>();
 postAddToToolbarToastState = this.postAddToToolbarSubject.asObservable();

  /**
   * Creates a new SearchListService with the injected HttpClient.
   * @param {HttpClient} http - The injected HttpClient.
   * @constructor
   */
  constructor(private http: HttpClient) {}

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return new ErrorObservable(errMsg);
  }
  sumitAds(popupshow:any) {
    this.postAddToToolbarSubject.next(<showerrorpopup>{errorPopup: popupshow});
  }
}

