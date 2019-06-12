import { KegsComponent } from '../kegs/kegs.component'

export class Keg {
    public selectedKeg: boolean = false;
    
    constructor(public name: string, public brand: string, public style: string, public price: number, public abv: number) {};

    
}