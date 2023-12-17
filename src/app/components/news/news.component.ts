import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news/news-service.service';
import { News, NuovoNewsDto } from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  model?: NuovoNewsDto;
  notizie: News[] = [];

  constructor(public newsService: NewsServiceService) {}
  ngOnInit(): void {
    if (this.newsService.getLoggedUser() != null) {
      this.model = new NuovoNewsDto(this.newsService.getLoggedUser()!.user.id);

      this.newsService
        .getNews()
        .subscribe((dati) => (this.notizie = dati.sources));
    }
  }
  apriSito(url: string) {
    window.open(url, '_blank');
  }
}
