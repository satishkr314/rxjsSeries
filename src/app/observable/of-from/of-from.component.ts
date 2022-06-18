import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { }
  obsMsg={a:'',b:'',c:''}
  ngOnInit(): void {
    let obs1=of('Satish','Rohit','Arvind');
    obs1.subscribe((res)=>{
      this._designUtilityService.print(res,'elContainer')
    })

    const obs2=of({a:'Satish',b:'Rohit',c:'Arvind'});
    obs2.subscribe((res:any)=>{
      this.obsMsg=res;
    });


    const obs3=from(['Satish','Rohit','Arvind']);
    obs3.subscribe((res)=>{
      this._designUtilityService.print(res,'elContainer3')
    })
    let promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Promise resolve')
      },3000)
    })
    const obs4=from(promise);
    obs4.subscribe((res)=>{
      this._designUtilityService.print(res,'elContainer4')
    });

    const obs5=from('Satish');
    obs5.subscribe((res)=>{
      this._designUtilityService.print(res,'elContainer5');
    })
  }

}
