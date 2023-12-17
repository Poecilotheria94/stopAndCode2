import { HttpClient } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import { News } from '../models/news.model';
import { NewsServiceService } from 'src/app/news/news-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  // model: News[] = [];
  userIsLoggedIn: boolean = false;

  constructor(private newsService: NewsServiceService) {}
  ngOnInit() {
    this.newsService.userIsLoggedIn$.subscribe((value) => {
      this.userIsLoggedIn = value;
    });
  }
  cerca() {}
}
