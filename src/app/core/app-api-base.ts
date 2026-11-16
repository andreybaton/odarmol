import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, Subject, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AppRequestParams {
	url: string;
	body: any;
	errorInfo: any;
}

export class AppApiBaseService {

	protected http = inject(HttpClient); 

	protected messagesSubj = new Subject<any>(); 
	
	protected getRequest<T>(params: AppRequestParams): Observable<T | null> {
		return this.http.get<T>(params.url).pipe(
			catchError((error) => this.handleError(params, error))
		);
	}

	protected postRequest<T>(params: AppRequestParams, body: any): Observable<T | null> {
		return this.http.post<T>(params.url, body).pipe(
			catchError((error) => this.handleError(params, error))
		);
	}

	private handleError(params: AppRequestParams, error: any): Observable<never | null> {
		if (params.errorInfo) {
		
			this.messagesSubj.next(params.errorInfo); 
		}

		return throwError(() => error);
	}
}
