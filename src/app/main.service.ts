import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Comment } from './Comment';

@Injectable()
export class MainService {

    private url = 'https://jsonplaceholder.typicode.com/comments'

    constructor(private httpClient: HttpClient) { }

    PerformGet(): Observable<Comment[]> {
        return this.httpClient.get(this.url).pipe(map((r: any[]) => {
            if (r) {
                return r.map((i: any) => new Comment(i.name, i.email, i.body));
            } else {
                return [];
            }
        }));
    }

    // PerformPut(): Observable<any[]> { }

    // PerformPost(): Observable<any[]> { }

    // PerformDelete(): Observable<any[]> { }
}