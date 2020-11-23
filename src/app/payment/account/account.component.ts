import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountDetails } from '../../state/models/account-details';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateAccountDetails } from '../../state/actions/payment.actions';
import { SubSink } from 'subsink';
import { togglePlaceOrderActivation } from '../../state/actions/place-order.actions';
import { getAccountDetails } from '../../state/selectors/payment.selectors';

@Component({
  selector: 'pay-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, OnDestroy {
  accountForm: FormGroup;

  get firstName(): FormControl {
    return this.accountForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.accountForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.accountForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.accountForm.get('phone') as FormControl;
  }

  private subSink = new SubSink();

  constructor(private store: Store<any>, private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeAccountForm();
    this.subscribeToFormChanges();
    this.subscribeToStore();
  }

  private initializeAccountForm(): void {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  private subscribeToFormChanges(): void {
    this.subSink.sink = this.accountForm.valueChanges.subscribe((formValue) => {
      this.updateAccountDetails(formValue as AccountDetails);
      if (this.accountForm.valid) {
        this.togglePlaceOrderActivation(true);
      } else {
        this.togglePlaceOrderActivation(false);
      }
    });
  }

  private subscribeToStore(): void {
    this.subSink.sink = this.store
      .select(getAccountDetails)
      .subscribe((accountDetails) => {
        if (accountDetails) {
          this.accountForm.patchValue(accountDetails, {emitEvent: false});
        }
      });
  }

  private togglePlaceOrderActivation(orderActive: boolean): void {
    this.store.dispatch(
      togglePlaceOrderActivation({ isPlaceOrderActive: orderActive })
    );
  }

  private updateAccountDetails(accountDetails: AccountDetails): void {
    this.store.dispatch(updateAccountDetails({ accountDetails }));
  }
}
