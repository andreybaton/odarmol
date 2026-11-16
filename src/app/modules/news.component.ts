import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  date: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Новости</h1>
      <div class="news-list">
        <article class="news-item" *ngFor="let n of news">
          <div class="news-date">{{ n.date }}</div>
          <div class="news-body">
            <h3>{{ n.title }}</h3>
            <p>{{ n.text }}</p>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .page {
      background: #fff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    }
    h1 { color: #0d47a1; font-size: 28px; margin-bottom: 24px; }
    .news-item {
      display: flex;
      gap: 20px;
      padding: 18px 0;
      border-bottom: 1px solid #eceff1;
    }
    .news-item:last-child { border-bottom: none; }
    .news-date {
      min-width: 120px;
      color: #1565c0;
      font-weight: 600;
      font-size: 14px;
    }
    .news-body h3 {
      font-size: 18px;
      color: #263238;
      margin: 0 0 6px;
    }
    .news-body p {
      margin: 0;
      color: #546e7a;
      line-height: 1.6;
    }
    @media (max-width: 576px) {
      .news-item { flex-direction: column; gap: 6px; }
      .page { padding: 24px; }
    }
  `],
})
export class NewsComponent {
  news: NewsItem[] = [
    {
      date: '01.10.2024',
      title: 'Открыта регистрация на конкурс',
      text: 'Приглашаем школьников и студентов принять участие в XIII Всероссийском конкурсе исследовательских проектов.',
    },
    {
      date: '15.11.2024',
      title: 'Завершён отборочный этап',
      text: 'Более 300 проектов прошли в финальную стадию конкурса.',
    },
    {
      date: '20.12.2024',
      title: 'Финальная конференция',
      text: 'Финальная защита проектов пройдёт в Москве в смешанном формате.',
    },
    {
      date: '15.01.2025',
      title: 'Объявлены победители',
      text: 'Поздравляем лауреатов XIII конкурса исследовательских проектов!',
    },
  ];
}