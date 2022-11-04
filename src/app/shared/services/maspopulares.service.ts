import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaspopularesService {

  constructor(private http: HttpClient) { }

  getMasChulis(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count")

  }
}
