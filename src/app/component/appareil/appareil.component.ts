import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from 'src/app/model/interface/appareil';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor() { }

  @Input()
  appareil?: Appareil ;

  
  ngOnInit(): void {
  }

  getStatus(): string{
    if (this.appareil){
      return this.appareil.status
    }
    return ''
  }

}
