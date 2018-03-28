import { Component, OnInit, HostBinding} from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

// @HostBiding: element <app-article> this component is attached to
//This exmaple telling Angular to keep the value of the host elements class to be in sync wiht property cssClass
//by using this @Host.., we set class attribute to have a row. 
//It encapsulates the selector tag within our markup, meaning we dont have to use it the selector tag in the parent component as well
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  votes: number;
  title: string;
  link: string;

  constructor() { 
    this.title = 'Angular 5';
    this.link = 'http://angular.io';
    this.votes = 10;
  }


  // increment vote by 1
  voteUp() {
    this.votes += 1;
  }


  // decrement vote by 1
  voteDown() {
    this.votes -= 1;
  }
  

  ngOnInit() {
  }

}
