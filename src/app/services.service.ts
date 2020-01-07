import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getcolor(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

}



