import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./modules/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./modules/about.component').then(m => m.AboutComponent) },
      { path: 'participants', loadComponent: () => import('./modules/participants.component').then(m => m.ParticipantsComponent) },
      { path: 'news', loadComponent: () => import('./modules/news.component').then(m => m.NewsComponent) },
      { path: 'contacts', loadComponent: () => import('./modules/contacts.component').then(m => m.ContactsComponent) },
    ]
  }
];