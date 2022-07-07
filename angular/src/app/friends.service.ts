import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ifriends } from "./friends";

@Injectable({
    providedIn: "root"
})
export class FriendsService {
    //private _url:string = "/assets/data/friends.json"
    private _api:string = 'http://localhost:8000/';
    
    constructor(private http: HttpClient){}
    /*List*/
    getFriends() :Observable<Ifriends[]>{
        return this.http.get<Ifriends[]>(this._api);
    }
    /*ADD*/ 
    postData(data: any): Observable<any> {
        return this.http.post(`${this._api}/post`, data)
    }
    /*UPDATE*/
    updateData(data: any, id: string): Observable<any> {
        return this.http.patch(`${this._api}/update/${id}`, data)
    }
    /*delete*/
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this._api}/delete/${id}`)
    }
}