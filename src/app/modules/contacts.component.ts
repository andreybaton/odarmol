import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  template: `
    <section class="page">
      <h1>Контакты</h1>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="contact-card">
            <h3>Оргкомитет конкурса</h3>
            <p><strong>Email:</strong> <a href="mailto:info@odarmol.ru">info@odarmol.ru</a></p>
            <p><strong>Телефон:</strong> +7 (495) 000-00-00</p>
            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1, офис 100</p>
            <p><strong>Часы работы:</strong> пн–пт, 09:00–18:00</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-card">
            <h3>Напишите нам</h3>
            <form (submit)="$event.preventDefault()">
              <div class="mb-2">
                <label class="form-label">Ваше имя</label>
                <input class="form-control" placeholder="Имя">
              </div>
              <div class="mb-2">
                <label class="form-label">Email</label>
                <input class="form-control" type="email" placeholder="email@example.com">
              </div>
              <div class="mb-2">
                <label class="form-label">Сообщение</label>
                <textarea class="form-control" rows="3" placeholder="Ваш вопрос..."></textarea>
              </div>
              <button class="btn btn-primary" type="submit">Отправить</button>
            </form>
          </div>
        </div>
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
    .contact-card {
      background: #f5f7fa;
      padding: 24px;
      border-radius: 10px;
      height: 100%;
    }
    .contact-card h3 {
      font-size: 18px;
      color: #1565c0;
      margin-bottom: 14px;
    }
    .contact-card p { margin-bottom: 8px; }
  `],
})
export class ContactsComponent {}