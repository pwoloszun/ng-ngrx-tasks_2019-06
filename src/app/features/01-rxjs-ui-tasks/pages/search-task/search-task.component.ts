import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'nts-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {

  private searchForm = this.formBuilder.group({
    searchField: [''],
  });
  private searchFieldControl = this.searchForm.get('searchField');

  // searchResults$ // TODO

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
