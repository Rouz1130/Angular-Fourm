import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle (title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article title: ${title.value} add link: ${link.value}`);
    title.value = '';
    link.value = '';
    return false;
  }

}
