import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]> | undefined;
  singleModel = 'On';
  startDate: Date | undefined;
  startTime: Date | undefined;
  userRating = 0;
  maxRating = 10;
  isReadonly = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionType();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Result: ', form.valid);
      // bên dưới trả về 1 observable và để cho Observable được thực thi ta dùng subscribe()
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result) => console.log('success', result),
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Your form is not correct';
    }
  }
  onHttpError(errorResponse: any): void {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onBlur(field: NgModel) {
    console.log('Result-onBlur: ', field.valid);
  }
}
