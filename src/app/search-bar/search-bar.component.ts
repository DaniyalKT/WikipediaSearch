import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term: string = ''
  @Output() onSearch = new EventEmitter<string>() 

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault()
    this.onSearch.emit(this.term)
  }
}
