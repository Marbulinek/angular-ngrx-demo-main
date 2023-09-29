import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/users.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    
    constructor(private http: HttpClient){
        
    }

    getUsersList(): Observable<User[]>{
        return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
    }
}