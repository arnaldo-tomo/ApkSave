import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //API usando api
  private url: string = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.url}getTask`);
  }


}
