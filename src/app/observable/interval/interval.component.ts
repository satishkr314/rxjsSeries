import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg = '';
  videoSubscription!: Subscription;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    this.videoSubscription = interval(2000).subscribe((res) => {
      console.log(res);
      this.obsMsg = `video ${res}`;
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
  sortArray() {
    let numbers = [2,3,5,1,7,10,21,5,0,17];
    numbers.sort();
    console.log(numbers);
  }
}
