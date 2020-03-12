import { Component, OnChanges, Input } from '@angular/core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'am-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  microphoneIcon = faMicrophone;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
