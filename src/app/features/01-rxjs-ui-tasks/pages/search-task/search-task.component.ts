import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'nts-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {

  private registrationForm = this.formBuilder.group({
    searchField: [''],
  });
  private searchFieldControl = this.registrationForm.get('searchField');

  searchResults$ = this.searchFieldControl.valueChanges.pipe(
    tap((s) => console.log('qq', s)),
    distinctUntilChanged(),
    debounceTime(300),
    switchMap((query: string) => this.searchService.search$(query)),
    tap((s) => console.log('res', s)),
  );

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
