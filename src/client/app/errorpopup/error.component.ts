import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
    moduleId: module.id,
    selector: 'error-component',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css']

})


export class ErrorComponent {

     @Input() errorAlertMessage:any;

     @Input() popUpType:boolean;
     @Input() okText:boolean;
     @Input() cancelText:boolean;


    @Output() notify: EventEmitter<any> = new EventEmitter();
    @Output() notifyTrue: EventEmitter<any> = new EventEmitter();
    @Output() notifyFalse: EventEmitter<any> = new EventEmitter();


   // showerrpopup:boolean=true;

  /**
   * Get the names OnInit
   */
  ngOnInit() {
     window.scrollTo(0, 0);
  }
    closeErrorPopUp(type:boolean){
       /* var el = document.body;
        this.removeClass(el, 'no-scroll');*/
        this.notify.emit();
        if(type){
          this.notifyTrue.emit();
        }else {
          this.notifyFalse.emit();
        }
    }
   removeClass(el: any, className: any) {
    if (el.classList)
      el.classList.remove(className);
    else if (this.hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }
  hasClass(el: any, className: any) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }


}

