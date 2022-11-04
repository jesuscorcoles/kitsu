import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {

  textSubject: BehaviorSubject <any>;
  textObservable: Observable <any>

  constructor() {
    this.textSubject = new BehaviorSubject ('')
    this.textObservable = this.textSubject.asObservable()
  }
  emitText(chars: string) {
    this.textSubject.next(chars)
  }

}
