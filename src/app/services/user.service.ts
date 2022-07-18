import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { User, UsersResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api'
  constructor(private http:HttpClient) { }
  //fetch users
  getUsers(size:number = 10):Observable<UsersResponse>{
    return this.http.get<UsersResponse>(`${this.apiUrl}/?results=${size}`)
    .pipe(map(response => this.processResponse(response)));
  }

  //fetch one user using the UUID.
  getUser(uuid:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`)
    .pipe(map(response => this.processResponse(response)));
  }

  private processResponse(response:UsersResponse):UsersResponse{
    return {
      info:{...response.info},
      results: response.results.map((user:any) => (<User>{
        uuid:user.login.uuid,
        firstName:user.name.first,
        lastName:user.name.last,
        email:user.email,
        username:user.login.username,
        gender:user.gender,
        address:`${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
        dateOfBirth:user.dob.date,
        phone:user.phone,
        imageUrl:user.picture.medium,
        coordinate: {latitude: +user.location.coordinates.latitude,
                     longitude: +user.location.coordinates.longitude}
      }))
    };
  }
}
