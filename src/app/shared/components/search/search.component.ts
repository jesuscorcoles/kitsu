import { SearchboxService } from './../../services/searchbox.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { distinctUntilChanged, fromEvent, map } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @ViewChild('searchInput')

  inputSearch?: ElementRef

  constructor( private searchboxService: SearchboxService) {

  }

  ngAfterViewInit() {
    fromEvent<any>(this.inputSearch?.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        distinctUntilChanged()
  ).subscribe(text => this.searchboxService.emitText)
}

  ngOnInit(): void {
    this.searchboxService.textObservable.subscribe()
  }

}
