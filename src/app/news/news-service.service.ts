import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  LoggedUser,
  LoginDto,
  News,
  Root,
} from '../components/models/news.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': environment.NEWS_API_KEY,
    }),
  };

  getNews(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.NEWS_API_BASE_URL}/top-headlines/sources`,
      this.httpOptions
    );
  }

  login(model: LoginDto): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${environment.JSON_SERVER_BASE_URL}/login`,
      model
    );
  }

  setLoggedUser(user: LoggedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem('user');

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }

    return null;
  }

  private _userIsLoggedIn = new BehaviorSubject<boolean>(false);
  userIsLoggedIn$ = this._userIsLoggedIn.asObservable();

  setUserIsLoggedIn(value: boolean) {
    this._userIsLoggedIn.next(value);
  }
}
