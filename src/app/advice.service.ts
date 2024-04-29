import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  public getRandomAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    return this.http.get(url);
  }

}
