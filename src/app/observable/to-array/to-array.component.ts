import { Component, OnInit } from '@angular/core';
import { interval, Subscription ,} from 'rxjs';
import { toArray, take } from 'rxjs/operators';


@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSubscription!:Subscription
  constructor() { }

  ngOnInit(): void {
    let source=interval(1000);
    this.sourceSubscription=source.pipe(take(5),toArray()).subscribe((res)=>{
      console.log(res);
    })
  }

}
