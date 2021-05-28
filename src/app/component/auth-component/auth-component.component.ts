import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit {
  authStatus:boolean=false;
  
  constructor(private _AuthService: AuthServiceService, private router:Router) { }
   

  ngOnInit(): void {
  }
  onSignIn(){
    this._AuthService.signIn().then(
      ()=>{
      console.log("Vous êtes bien connecté!");
      this.authStatus= this._AuthService.isAuth
      this.router.navigate(['appareil'])

    });
  }

  onSignOut(){
    this._AuthService.signOut();
    this.authStatus = this._AuthService.isAuth;
  }


}
