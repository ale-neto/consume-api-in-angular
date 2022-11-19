import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { INews } from '../interfaces/iNews';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  endpoint =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1605aea89a1b4765940fbd69bc46326e';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu algum erro:', error.error.message);
    } else {
      console.error(
        `Codigo retorno backend ${error.status}, ` + `Corpo: ${error.error}`
      );
    }
    return throwError('Algo de errado; desculpe tente mais tarde.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  getNews(): Observable<any> {
    const { endpoint, extractData } = this;
    return this.http
      .get<INews>(endpoint)
      .pipe(map(extractData as any), catchError(this.handleError));
  }
}
