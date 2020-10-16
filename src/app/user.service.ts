import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

/**
 * User service class for rest api client request and
 * inteact with the components
 * @author Min Ku Nam
 * @version 1.0.0
 * created 2020/09/22
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`,user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
