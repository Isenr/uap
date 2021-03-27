import { Params } from '@angular/router';

export interface RouterStateUrl<
    T extends Record<string, unknown> = Params,
    U extends Record<string, unknown> = Params
> {
    url: string;
    params: T;
    queryParams: U;
}
