import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from 'src/app/model/interface/appareil';

/**
 * Import des services
 */
import {AppareilServiceService} from '../../service/appareil-service.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: Appareil[] = [];

  constructor(private _AppareilService: AppareilServiceService) { }

   
  ngOnInit(): void {
    this.appareils = this._AppareilService.appareils
  }

  switchOffAll(): void{
    const response : boolean = window.confirm('Etes-vous sûr de vouloir tout éteindre ?');
    if(response){
      this._AppareilService.switchOffAll();
    }
  }
  switchOnAll(): void{
    this._AppareilService.switchOnAll();
  }

}
