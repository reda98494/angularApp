import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Appareil } from '../model/interface/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {
  private appareils : Appareil[]= [
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

  ];

  /**
   * Créer un observable pour mieux gérer le changement de data dans le Array appareils déclaré juste en
   */
  appareilSubject = new Subject<Appareil[]>();


  constructor() { }


  enitAppreilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll(): void{
    this.appareils = this.appareils.map((appareil)=>{
      if(appareil.status=='éteint'){
        appareil.status='allumé'
      }
      return appareil
    })
  }

  
   
  // switchOnAllBis(): void{
  //   let appareils;
  //   for(let appareil in this.appareilSubject){
  //     if(appareil.status=='éteint'){
  //       appareil.status='allumé'
  //     }
  //   }
  // }

  switchOffAll(): void{
    this.appareils = this.appareils.map((appareil)=>{
      if(appareil.status=='allumé'){
        appareil.status='éteint'
      }
      return appareil
    })
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s)=>{
        return s.id === id;
      }
    );
    return appareil;
  }
  
}
