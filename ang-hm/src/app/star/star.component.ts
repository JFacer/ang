import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 5;
  cropWidth: number = 75; 

  constructor() { }

  ngOnInit(): void {    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = 75 / 5 * this.rating;
  }

}
