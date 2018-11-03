import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '@uap/products/models';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PizzasService {
    private readonly apiUrl = '/api/pizzas';

    constructor(private http: HttpClient) {}

    public getPizzas() {
        return this.http
            .get<Array<Pizza>>(this.apiUrl)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    public createPizza(payload: Pizza) {
        return this.http
            .post<Pizza>(this.apiUrl, payload)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    public updatePizza(payload: Pizza) {
        return this.http
            .put<Pizza>(`${this.apiUrl}/${payload.id}`, payload)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    public removePizza(payload: Pizza) {
        return this.http
            .delete<Pizza>(`${this.apiUrl}/${payload.id}`)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}
