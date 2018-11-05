import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topping } from '@uap/products/models';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ToppingsService {
    private readonly apiUrl = '/api/toppings';

    constructor(private http: HttpClient) {}

    public getToppings() {
        return this.http
            .get<Topping[]>(this.apiUrl)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}
