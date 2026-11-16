import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Participant {
  name: string;
  city: string;
  project: string;
  place: string;
}

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Участники и победители</h1>
      <p class="text-muted">
        Список финалистов XIII Всероссийского конкурса исследовательских проектов.
      </p>
      <table class="table table-striped table-hover mt-3 align-middle">
        <thead class="table-light">
          <tr>
            <th>Участник</th>
            <th>Город</th>
            <th>Проект</th>
            <th>Результат</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of participants">
            <td class="fw-semibold">{{ p.name }}</td>
            <td>{{ p.city }}</td>
            <td>{{ p.project }}</td>
            <td><span class="badge" [ngClass]="badgeClass(p.place)">{{ p.place }}</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [`
    .page {
      background: #fff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    }
    h1 { color: #0d47a1; font-size: 28px; margin-bottom: 12px; }
    .badge { font-size: 13px; padding: 6px 12px; }
  `],
})
export class ParticipantsComponent {
  participants: Participant[] = [
    { name: 'Иванов Иван', city: 'Москва', project: 'Умный дом для школы', place: '1 место' },
    { name: 'Петрова Анна', city: 'Санкт-Петербург', project: 'Экологичные стройматериалы', place: '2 место' },
    { name: 'Сидоров Пётр', city: 'Казань', project: 'Мониторинг качества воздуха', place: '3 место' },
    { name: 'Кузнецова Мария', city: 'Новосибирск', project: 'Солнечные панели нового типа', place: 'Участник' },
    { name: 'Смирнов Алексей', city: 'Екатеринбург', project: '3D-печать бетоном', place: 'Участник' },
  ];

  badgeClass(place: string): string {
    if (place.startsWith('1')) return 'bg-warning text-dark';
    if (place.startsWith('2')) return 'bg-secondary';
    if (place.startsWith('3')) return 'bg-danger';
    return 'bg-success';
  }
}