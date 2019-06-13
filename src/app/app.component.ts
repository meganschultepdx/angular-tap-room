// home page 'view'
import { Keg } from './models/keg.model'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterKegs: Keg[] = [
    new Keg('Black Butte', 'Deschutes', 'Porter', 6, 5.2),
    new Keg('Gimme Mo', 'Crux', 'IPA', 6, 6.2),
    new Keg('Sacrilege Sour Cherry',
      'Reverend Nat\'s', 'Cider', 12, 6.0),
    new Keg('Ice', 'Milwaukee\'s Best', 'Lager', 2, 3)
  ]

  addKeg(anotherKeg: Keg) {
    this.masterKegs.push(anotherKeg);

  }
}
