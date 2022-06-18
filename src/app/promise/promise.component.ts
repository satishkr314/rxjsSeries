import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let buyLaptop=new Promise((resolve,reject)=>{

      if(this.DellAvalible())
      {
        setTimeout(()=>{
          resolve('Dell is purchased')
        },3000);
        
      }
      else if(this.HpAvalible())
      {
        setTimeout(()=>{
          resolve('hp is purchased')
        },3000)
       
      }
      else
      {
        reject('Laptop is not avalible on store');
      }
      
    });
  
    buyLaptop.then((res)=>{
      console.log('then code =>',res);
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }

  DellAvalible()
  {
    return true;
  }

  HpAvalible()
  {
    return false;
  }




  myFunction()
  {
    console.log("my function called");
  }

   

}
