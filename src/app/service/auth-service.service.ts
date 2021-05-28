import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor() { }

  isAuth:boolean = false;

  signIn(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.isAuth = true;
        resolve(true);
      }, 2000);
    })
  }

  signOut(){
    return this.isAuth=false;
  }

}
