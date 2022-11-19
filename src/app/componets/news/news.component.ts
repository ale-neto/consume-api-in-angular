import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticles } from 'src/app/interfaces/iArticles';
import { INews } from 'src/app/interfaces/iNews';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles: IArticles[] = [];

  constructor(public newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe((resp: any) => {
      const { articles } = resp;
      this.articles = articles;
    });
  }
}
