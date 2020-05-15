import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SWAPIURL = environment.swapiURL;

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getSwapi(path) {
    return this.http.get(`${SWAPIURL}${path}`);
  }
}
