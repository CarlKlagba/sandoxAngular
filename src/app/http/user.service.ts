import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rows } from '../table/row.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {}

    fetchRows(): Observable<Rows> {
        return this.httpClient
        .get<{ data: {first_name: string, last_name: string}[]}>('https://reqres.in/api/users?page=2')
        .pipe(
            map(response => response.data),
            map(users => users.map(user => {
                return {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    age: Math.ceil(Math.random() * 10)
                };
            }))
        );
    }
}
