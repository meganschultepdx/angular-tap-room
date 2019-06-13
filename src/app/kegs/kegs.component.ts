// See what happends when you delete OnInit and ngOnInit

import { Component, Input } from '@angular/core';
import { Keg } from '../models/keg.model';
// import { $ } from 'protractor';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent {
  @Input() childKegs: Keg[];
  
  selectedKeg: null;
  anotherKeg = {};
  
  selectKeg(keg){
    if (this.selectedKeg === keg) {
      this.selectedKeg = null;
    } else {
      this.selectedKeg = keg;
    }
  }

  

}
