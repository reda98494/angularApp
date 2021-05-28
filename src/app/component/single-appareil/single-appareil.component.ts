import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilServiceService } from 'src/app/service/appareil-service.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name?:string
  status?:string
  date?:Date
  constructor(private _AppareilService :AppareilServiceService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params['id'];
    this.name = this._AppareilService.getAppareilById(+id)?.name;
    this.status = this._AppareilService.getAppareilById(+id)?.status;
    this.date = this._AppareilService.getAppareilById(+id)?.date;

  }

}
