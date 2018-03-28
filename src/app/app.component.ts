import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // <-- component property

  constructor() {
    this.articles = [
      new Article('Air Jordan 1', 'https://www.flightclub.com/air-jordan-1-retro-high-og-white-black-varsity-red-012234', 3),
      new Article('Air Jordan 2', 'https://www.flightclub.com/air-jordan-2-retro-bg-gs-white-black-vrsty-red-cmnt-gry-011940', 2),
      new Article('Air Jordan 3', 'https://www.goat.com/sneakers/air-jordan-3-retro-og-true-blue-2016-854262-106?gclid=Cj0KCQjw-uzVBRDkARIsALkZAdk8dDTJMOtujPKULhIs6OmF_SmXEdS-jnXjhi14la8_IRJORrDkEkQaAiOwEALw_wcB', 1),

    ];
  }
}
