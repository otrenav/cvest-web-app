
import 'rxjs/add/operator/map';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable()
export class UserService {

    // private user: User = new User(
    //     'otrenav@gmail.com',
    //     'Omar',
    //     '59e682f52f1cbc1d64b71ea7'
    // );

    // private user: User = new User(
    //     'rjtr30@gmail.com',
    //     'Rubén',
    //     '59e682f52f1cbc1d64b71ea9'
    // );

    private user: User = new User(
        'yuli.godinez@gmail.com',
        'Yuli',
        '59e682f52f1cbc1d64b71eab'
    );

    // private user: User = new User(
    //     'ricargom2000@hotmail.com',
    //     'Gómez',
    //     '59e682f52f1cbc1d64b71ead'
    // );

    // private user: User = new User(
    //     'nestor.sag@gmail.com',
    //     'Néstor',
    //     '59e682f52f1cbc1d64b71eaf'
    // );

    // private user: User = new User(
    //     'rod.cristina28@gmail.com',
    //     'Cristy',
    //     '59e682f52f1cbc1d64b71eb1'
    // );

    // private user: User = new User(
    //     'ja.morales.alfaro@gmail.com',
    //     'Jama',
    //     '59e682f52f1cbc1d64b71eb3'
    // );

    private url = '';

    constructor(private http: HttpClient) { }

    //
    // TODO: Implement auth functions
    //
    // signIn(email): Observable<User> {
    //     const params = new HttpParams().set('email', email);
    //     return this.http.get<User>(this.url, { params })
    //         .map(resp => {
    //             return <User>resp['data'];
    //         }, (err: HttpErrorResponse) => {
    //             ExternalErrorProcessor.handleError(err);
    //             if (err.error instanceof Error) {
    //                 console.log('CVEST: Client-side or network error');
    //                 console.log(err.error.message);
    //             } else {
    //                 console.log('CVEST: Backend error');
    //                 console.log('Code: ', err.status);
    //                 console.log('Body: ', err.error);
    //             }
    //         });
    // }

    id() {
        return this.user.id;
    }
}
