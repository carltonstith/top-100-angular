import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'am-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  microphoneIcon = faMicrophone;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
  }
}
