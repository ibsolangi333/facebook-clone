import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/userCccount"

  postApi(data:any){
    return this.http.post(this.url,data)
  }
}
