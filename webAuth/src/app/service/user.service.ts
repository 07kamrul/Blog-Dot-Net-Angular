import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseURL:string="http://localhost:5000"
  constructor(private httpClient:HttpClient) { }

  public login(email:string, password:string)
  {
    const body={
      Email:email,
      Password:password
    }

    return this.httpClient.post(this.baseURL+"Login", body);
  }

  public register(fullName:string, email:string, password:string)
  {
    const body={
      FullName:fullName,
      Email:email,
      Password:password
    }

    return this.httpClient.post(this.baseURL+"RegisterUser", body);
  }

}
