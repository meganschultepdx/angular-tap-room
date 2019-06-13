import { Component, Output, EventEmitter  } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() sendKeg = new EventEmitter();


  newKeg(name: string, brand: string, style: string, price: number, abv: number) {
    let anotherKeg = new Keg(name, brand, style, price, abv)
    this.sendKeg.emit(anotherKeg);
  }
}
