import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val:any,elementId:string)
  {
    let el=document.createElement('li');
    el.innerText=val;
    document.getElementById(elementId)?.appendChild(el);
  }
}
