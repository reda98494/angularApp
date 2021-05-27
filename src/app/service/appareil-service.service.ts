import { Injectable } from '@angular/core';
import { Appareil } from '../model/interface/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {
  appareils : Appareil[]= [
    {
      id: 1,
      name: 'Machien à laver',
      status: 'éteint',
      date: new Date()

    },{
      id: 2,
      name: 'Téléphone fix',
      status: 'allumé',
      date: new Date()

    },{
      id: 3,
      name: 'Frigo',
      status: 'éteint',
      date: new Date()

    },{
      id: 4,
      name: 'Radio K7',
      status: 'allumé',
      date: new Date()

    },{
      id: 5,
      name: 'Four',
      status: 'éteint',
      date: new Date()

    },{
      id: 6,
      name: 'Bouilloire',
      status: 'allumé',
      date: new Date()

    },{
      id: 7,
      name: 'Machine à café',
      status: 'éteint',
      date: new Date()

    }

  ]
  constructor() { }

  switchOnAll(): void{
    this.appareils = this.appareils.map((appareil)=>{
      if(appareil.status=='éteint'){
        appareil.status='allumé'
      }
      return appareil
    })
  }
  switchOffAll(): void{
    this.appareils = this.appareils.map((appareil)=>{
      if(appareil.status=='allumé'){
        appareil.status='éteint'
      }
      return appareil
    })
  }
  
}
