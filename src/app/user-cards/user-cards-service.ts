import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserCardsService {

    constructor(private http: Http) { }

    getUserList(query = '') {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/users";
            this.http.get(url).toPromise().then(
                res => {

                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }

}