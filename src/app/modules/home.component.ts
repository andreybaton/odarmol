import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <h1>XIII Всероссийский конкурс исследовательских проектов</h1>
      <p class="lead">
        Конкурс для школьников и студентов, выполняющих исследовательские
        проекты под научным консультированием учёных Международной
        ассоциации строительных вузов (АСВ).
      </p>
      <div class="hero-actions">
        <a routerLink="/about" class="btn btn-primary btn-lg">Узнать о конкурсе</a>
        <a routerLink="/participants" class="btn btn-outline-secondary btn-lg">Результаты</a>
      </div>
    </section>

    <div class="row g-4 mt-1">
      <div class="col-md-4" *ngFor="let card of cards">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <div class="display-6">{{ card.icon }}</div>
            <h5 class="card-title mt-2">{{ card.title }}</h5>
            <p class="card-text text-muted">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      background: #fff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    }
    .hero h1 {
      font-size: 28px;
      font-weight: 700;
      color: #0d47a1;
    }
    .hero .lead {
      color: #455a64;
      font-size: 16px;
      margin-top: 12px;
    }
    .hero-actions {
      display: flex;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    .card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1) !important;
    }
  `],
})
export class HomeComponent {
  cards = [
    { icon: '🏆', title: 'Престижное жюри', text: 'Работы оценивают учёные ведущих строительных вузов России.' },
    { icon: '🎓', title: 'Для школьников и студентов', text: 'Участвовать могут учащиеся 8–11 классов и студенты младших курсов.' },
    { icon: '📅', title: 'Ежегодный формат', text: 'Конкурс проводится ежегодно с 2012 года.' },
  ];
}