import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserTodoService {

    constructor(private http: Http) { }

    getUserDetails(id) {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/todos?userId=" + id;
            this.http.get(url).toPromise().then(
                res => {

                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }
    addUserDetails(data) {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/todos";
            this.http.post(url, data).toPromise().then(
                res => {

                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }

    updateUserDetails(data) {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/todos";
            this.http.put(url, data).toPromise().then(
                res => {

                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }
    deleteUserDetails(id) {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/todos/" + id;
            this.http.delete(url, id).toPromise().then(
                res => {
                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }
}