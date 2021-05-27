import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/interface/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post!: Post;


  constructor() { }

  ngOnInit(): void {
  }
  loveIt():void {
    this.post.lovesIts+=1;
  }

  hateIt():void {
    this.post.lovesIts-=1;
  }

  color(): string {
    if (this.post.lovesIts < 0 ) return '#ff5252';
    else if (this.post.lovesIts > 0 ) return '#26de81';
    return '#dfe6e9';
  }

}
