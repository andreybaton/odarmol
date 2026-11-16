import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { filter, Subscription } from 'rxjs';

interface NavTab {
  title: string;
  link: string;
}

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [RouterOutlet, RouterLink, CommonModule, NzTabsModule],
  standalone: true,
})
export class LayoutComponent implements OnInit, OnDestroy {
  tabs: NavTab[] = [
    { title: 'Главная', link: '/home' },
    { title: 'О конкурсе', link: '/about' },
    { title: 'Результаты', link: '/participants' },
    { title: 'Новости', link: '/news' },
    { title: 'Контакты', link: '/contacts' },
  ];

  selectedIndex = 0;
  currentYear = new Date().getFullYear();

  private sub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateIndex(this.router.url);
    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.updateIndex(e.urlAfterRedirects));
  }

  onTabChange(index: number): void {
    const tab = this.tabs[index];
    if (tab) {
      this.router.navigateByUrl(tab.link);
    }
  }

  private updateIndex(url: string): void {
    const idx = this.tabs.findIndex(t => url.startsWith(t.link));
    this.selectedIndex = idx >= 0 ? idx : 0;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}