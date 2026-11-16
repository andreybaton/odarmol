import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
	{
		path: '',
        component: LayoutComponent,
		children: [
			{ path: 'risk-category', loadComponent: () => import('./modules/risk-category.component').then(m=>m.RiskCategoryComponent)},

		]	
	}
];
