import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  // @Input giống props bên reactjs
  @Input() rating: number = 4;
  cropWidth: number = 75;
  
  // @Output chuyền function từ con sang cha
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}

