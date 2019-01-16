import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, merge } from 'rxjs';
import {
  concatMap,
  debounceTime, exhaustMap,
  mergeMap,
  switchMap,
} from 'rxjs/operators';

import { RegistrationService } from '../../services/registration.service';
import { fullObserver } from '../../../../utils';

@Component({
  selector: 'nts-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  permissionTypes = ['user', 'admin', 'su', 'root'];

  registrationForm: FormGroup;
  firstNameControl: AbstractControl;
  lastNameControl: AbstractControl;
  selectedPermisionControl: AbstractControl;
  monthlyIncomeControl: AbstractControl;
  monthsCountControl: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.initForm();

    // TODO
    this.search();
    // this.calculateTax();
    // this.validateMonthlyIncome();
    // this.validateLastNamePermision();
  }

  // TODO: search()
  // simultaneously get values from both: firstNameControl & lastNameControl ->
  // debounce received values pair due to 0.3sec ->
  // for every received value send search(query) request AND
  //    listen to all responses
  search() {
  }

  // TODO: calculateTax()
  // get latest pair of values from: monthlyIncomeControl & monthsCountControl ->
  // debounce received values pair due to 0.3sec ->
  // for each received pair of values send calculateTax request BUT
  //    listen to only latest request (ignore all previously send requests)
  calculateTax() {
  }

  // TODO: validateMonthlyIncome()
  // for each received value of: monthlyIncomeControl ->
  // debounce each value due to 0.3sec ->
  // for each value send validation request BUT
  //    each subsequent validation request shuld be queued and wait for previous until completed
  validateMonthlyIncome() {
  }

  // TODO: validateLastNamePermision()
  // get latest pair of values from: lastNameControl & selectedPermisionControl ->
  // debounce each value due to 0.3sec ->
  // for each pair of values send validation request BUT
  //    for each subsequent validation request: start new only if previous has finished
  validateLastNamePermision() {
  }

  private initForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      monthlyIncome: [500, Validators.required],
      monthsCount: [3, Validators.required],
      selectedPermision: this.permissionTypes[0],
    });

    this.firstNameControl = this.registrationForm.get('firstName');
    this.lastNameControl = this.registrationForm.get('lastName');
    this.selectedPermisionControl = this.registrationForm.get('selectedPermision');
    // this.selectedPermisionControl.valueChanges
    //   .subscribe(fullObserver('perm'));
    this.monthlyIncomeControl = this.registrationForm.get('monthlyIncome');
    this.monthsCountControl = this.registrationForm.get('monthsCount');
  }

  submitForm() {
    console.log('submit');
  }

}
