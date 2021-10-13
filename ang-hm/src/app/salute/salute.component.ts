import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salute',
  templateUrl: './salute.component.html',
  styleUrls: ['./salute.component.css']
})

export class SaluteComponent implements OnInit {

  title : string = 'Salute component';

  constructor() { }

  ngOnInit(): void {

  }

}
