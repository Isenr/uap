import { Params } from '@angular/router';

export interface RouterStateUrl<T extends object = Params, U extends object = Params> {
    url: string;
    params: T;
    queryParams: U;
}
