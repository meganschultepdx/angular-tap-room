// See what happends when you delete OnInit and ngOnInit

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }

}
