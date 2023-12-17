import { LocalizedString } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginDto } from '../models/news.model';
import { NewsServiceService } from 'src/app/news/news-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model = new LoginDto();
  @Output() userIsLoggedInChange = new EventEmitter<boolean>();
  constructor(
    private newsService: NewsServiceService,
    private router: Router
  ) {}

  login(userIsLoggedIn: boolean) {
    this.newsService
      .login(this.model)
      .pipe()
      .subscribe((loggedUser) => {
        this.newsService.setLoggedUser(loggedUser);
        this.router.navigate(['/news']);
        this.newsService.setUserIsLoggedIn(true);
      });
  }
}
